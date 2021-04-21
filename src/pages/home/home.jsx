import {useEffect, useState} from "react";
function HomePage(props){

const[value,setvalue]=useState("");
const[message,setMessage]=useState("");

useEffect(()=>{
    console.log("only one");
},[])
useEffect(()=>{
    console.log("always");
})
useEffect(()=>{
    console.log("value ");
},[value]);

    return (
        <div className="row">
            <button className= "btn btn-primary" 
            onClick={() => setvalue(Math.random().toString())}
            >
                change value
            </button>
            <button className= "btn btn-info mt-2" 
            onClick={() => setMessage(Math.random().toString())}
            >
                change message
            </button>
            <h2>Home Page</h2>
            <h4>value : {value}</h4>
            <h4>message : {message}</h4>
        </div>
    );
}
export default HomePage;