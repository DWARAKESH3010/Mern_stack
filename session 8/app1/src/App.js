import logo from './logo.svg';
import Home from './Home';
import { useState } from 'react';


function App() {
  let firstname = "Anuj";
const[email,setEmail]= useState('');
const[address,setAdress] = useState('')
const[phoneno,setPhoneNo] = useState('')
const validate = () =>{
  if (email == ""){
    alert ("First fill email before clicking")
  }else if(phoneno == ""){
    alert ("First fill phone number before clicking")
  }else if(address == ""){
    alert("First fill  addres before clicking")
  }else{
    alert("all fine")
  }
}

  return (
    <div className="container">
      <h1>this is react App</h1>{
        firstname
      }<div>{email}</div>
      <div>{address}</div>
      <div>{phoneno}</div>
      <Home/>
      <input type='text' onChange={(e)=> setEmail(e.target.value)} placeholder='Email'/> <button onClick={()=> validate()}>Click</button>
      <input type='text' onChange={(p)=> setPhoneNo(p.target.value)} placeholder='Phone number'/> <button onClick={()=> validate()}>Click</button>
      <input type='text' onChange={(a)=> setAdress(a.target.value)} placeholder='Adress'/> <button onClick={()=> validate()}>Click</button>
      </div>
  );
}
export default App;