import { useDispatch, useSelector } from "react-redux"
import Header from "./Header";
export default function Home(){
    const counterval = useSelector((state)=>state.counter);
    const myDetails = useSelector((state)=>state.myDetails);
    const dispatch = useDispatch();
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
    return(
        <div >
            <Header/>
            <h1>WELCOME TO ABOUT PAGE</h1> <br/>
            <h1>from Redux  {counterval}</h1><br/>
            <input type="button" value="add" onClick={add}/><br/>
            <input type="button" value ="sub" onClick={sub}/>
            <h1>My name is:  {myDetails.name}</h1><br/>
            <h1> my email is: {myDetails.email}</h1>
        </div>
    )
}