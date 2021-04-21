import {useState} from "react";
import Greeting from "../greeting";
import {Button} from "../ui/";

const Welcome =()=>{
    const [value,setValue]=useState(0);
    const [theme,setTheme]=useState("");
    const [color,setColor]=useState("");
    const styles = {
        color:"seagreen",
        textAlign:"center",
    };
    const onCLickHandler = (event) => {
        console.log("sad");
   
      };
    const onCLickHandler1 = (event) => {
    console.log("sad");
    setValue(value+1);
    setTheme('#e1ab07')
    setColor("red")
    };
    const onCLickHandler5 = (event) => {
        console.log("sad");
        setValue(value+5);
        setTheme('#37e107')
        setColor("9e10de")
      };
      const onCLickHandler100 = (event) => {
        console.log("sad");
        setValue(value+100);
        setTheme('#9e10de')
        setColor("48e798")
      };
      const onCLickHandlerm100 = (event) => {
        console.log("sad");
        setValue(value-100);
        setTheme('#48e798')
        setColor("e1ab07")
      };
      const onCLickHandlerm5 = (event) => {
        console.log("sad");
        setValue(value-5);
        setTheme("black")
        setColor("white")
      };
      const onCLickHandlerm1 = (event) => {
        console.log("sad");
        setValue(value-1);
        setTheme("red")
        setColor("black")
        
      };
 
    return(
        <div>
           <div style={{backgroundColor: theme, color:color}}>
               some empty div
           </div>
            <Greeting message="Hello" description={`some description is ${value}`}
             count={value} />
            <h1 title = "welcome " styles = {styles}> {value}</h1>
            <Button onClick={onCLickHandler1} text="+1" type="default" />
            <Button onClick={onCLickHandler5} text="+5" type="danger" />
            <Button onClick={onCLickHandler100} text="+100" type="warning" />
            <Button onClick={onCLickHandlerm5} text="-5" type="danger" />
            <Button onClick={onCLickHandlerm100} text="-100" type="warning" />
            <Button onClick={onCLickHandlerm1} text="-1" type="danger" />

        </div>
    );


}
export default Welcome;