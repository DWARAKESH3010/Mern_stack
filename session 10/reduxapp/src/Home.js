import { useDispatch, useSelector } from "react-redux"
import Header from "./Header";
import { useState } from "react";

export default function Home(){
    const counterval = useSelector((state)=>state.counter);
    const dispatch = useDispatch();
    const [status,setStatus] = useState(true)

    const add=()=>{
        dispatch({
            type:"add"
        })
    }
    const sub=()=>{
        dispatch({
            type:"sub"
        })
    }
    const storeMyDetails =()=>{
        dispatch({
            "type":"saveDetails",
            "data" : {"name":"Dwara","email":"dwaraa@gmail.com"}
        })
    }
    return(
        <div >
            <Header/>
            <h1>WELCOME TO HOME PAGE</h1> <br/>
            <h1>My name is:  {counterval}</h1><br/>
            <input type="button" value="add" onClick={add}/><br/>
            <input type="button" value ="sub" onClick={sub}/><br/>
            <input type="button" value="store" onClick= {storeMyDetails}/>
            {(status)?<p className="red">This is paragraph</p>:null}
        </div>
    )
}