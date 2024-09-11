import './App.css';
function App() {
  const getData=async()=>{
   let res = await fetch("http://localhost:3001/getemployee",{method:"GET"});
   let json = await res.json();
   console.log(json);
  }
  
const createjob = async () =>{
  let data = {
    "name":nameRef.current.value,
    "company": cnameRef.current.value,
  }

  let res = await fetch("your create job url",{method:"POST"})
  let json = await res.json()
  console.log(json)

}
  return (
    <div className="App">
      <button onclick = {getData}>Get job List</button> 
      <div>
        <h1>
          Create Form
        </h1>
        <div><input type = "name" ref = {nameRef}/></div>
        <div><input type = "name" ref = {cnameRef}/></div>
        <div><input type = "button" onclick = {createjob}/></div>
      </div>
    </div>
  );
}

export default App;
