const jwt = require('jsonwebtoken');
const express = require('express');
const { MongoClient, ObjectId } = require('mongodb');
const cors = require("cors");
const fileUpload = require('express-fileupload');

const app = express();
app.use(express.json());
app.use(cors());
app.use(fileUpload({
    limits: { fileSize: 50 * 1024 * 1024 }, // Limit file size to 50 MB
}));

// MongoDB connection settings
const dbName = "job_portal";
const url = 'mongodb+srv://Dwarakesh2002:dwarakesh2002@cluster0.sastj.mongodb.net/';
const client = new MongoClient(url);

// Middleware for token validation for all /api/ routes
app.use('/api/', (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return res.status(401).json({ "msg": "Please send the token" });
    }

    try {
        jwt.verify(token, 'SECRET'); // Ensure the secret key is stored securely
        next();
    } catch (err) {
        return res.status(403).json({ "msg": "Invalid token" });
    }
});

// Route to create a job
app.post("/createjob", async (req, res) => {
    const { email, password } = req.body;
    const data = { email, password };  // Consider using a stronger password hashing mechanism

    try {
        await client.connect();
        const db = client.db(dbName);
        await db.collection('jobs').insertOne(data);
        res.status(200).json({ "message": "Job Created" });
    } catch (err) {
        res.status(500).json({ "message": "Failed to create job", "error": err.message });
    } finally {
        await client.close();
    }
});

// Route to list all jobs
app.get("/getjob", async (req, res) => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const list = await db.collection('jobs').find({}).toArray();
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json({ "message": "Failed to retrieve jobs", "error": err.message });
    } finally {
        await client.close();
    }
});

// Route to get job by email
app.get("/api/list_job", async (req, res) => {
    const { email } = req.query;

    try {
        await client.connect();
        const db = client.db(dbName);
        const list = await db.collection('jobs').find({ email }).toArray();
        res.status(200).json(list);
    } catch (err) {
        res.status(500).json({ "message": "Failed to retrieve job by email", "error": err.message });
    } finally {
        await client.close();
    }
});

// Route for job login
app.post("/joblogin", async (req, res) => {
    const { email, password } = req.body;

    try {
        await client.connect();
        const db = client.db(dbName);
        const list = await db.collection('jobs').find({ email, password }).toArray();

        if (list.length > 0) {
            const token = jwt.sign({ "name": list[0]['email'] }, 'SECRET'); // Ensure the secret key is stored securely
            res.json({ "msg": "Login successful", "token": token });
        } else {
            res.status(401).json({ "msg": "Email or password is incorrect" });
        }
    } catch (err) {
        res.status(500).json({ "message": "Login failed", "error": err.message });
    } finally {
        await client.close();
    }
});

// Route to delete a job by ID
app.delete("/deletejobbyname", async (req, res) => {
    const { id } = req.query;

    try {
        await client.connect();
        const db = client.db(dbName);
        await db.collection("jobs").deleteOne({ "_id": new ObjectId(id) });
        res.json({ "msg": "Job deleted successfully" });
    } catch (err) {
        res.status(500).json({ "msg": "Failed to delete job", "error": err.message });
    } finally {
        await client.close();
    }
});

// Route to update a job by email
app.put("/updatejobbyname", async (req, res) => {
    const { email, password } = req.query;

    try {
        await client.connect();
        const db = client.db(dbName);
        await db.collection("jobs").updateOne({ email }, {
            $set: { password }
        });
        res.json({ "message": "Data updated successfully" });
    } catch (err) {
        res.status(500).json({ "msg": "Failed to update job", "error": err.message });
    } finally {
        await client.close();
    }
});

// Route to update a job by ID
app.post('/updatejob', async (req, res) => {
    const { id, email } = req.body;

    try {
        await client.connect();
        const db = client.db(dbName);
        await db.collection("jobs").updateOne({ "_id": new ObjectId(id) }, {
            $set: { email }
        });
        res.json({ "message": "Updated successfully" });
    } catch (err) {
        res.status(500).json({ "msg": "Failed to update job", "error": err.message });
    } finally {
        await client.close();
    }
});

// Route to get job by ID
app.get('/updatejobusingget', async (req, res) => {
    const { id } = req.query;

    try {
        await client.connect();
        const db = client.db(dbName);
        const data = await db.collection("jobs").find({ "_id": new ObjectId(id) }).toArray();
        res.json(data);
    } catch (err) {
        res.status(500).json({ "msg": "Failed to retrieve job", "error": err.message });
    } finally {
        await client.close();
    }
});

// Route for file upload
app.post('/upload', function (req, res) {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    const file = req.files.img;
    const uploadPath = __dirname + '/uploads/' + file.name;

    file.mv(uploadPath, function (err) {
        if (err)
            return res.status(500).send(err);

        res.send('File uploaded successfully.');
    });
});

// Start the Express server 
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
