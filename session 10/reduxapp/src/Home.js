import { useDispatch, useSelector } from "react-redux";
import Header from "./Header";

const counterVal = useSelector((state) => state.counter);
const dispatch = useDispatch();
function Home(){
    return(
        <div>
            <Header/>
            <h1>This is Home page</h1>
            <input type = "button" value="Add"/>
            <input type = "button" value="sub"/>
        </div>
    )
}

export default Home;