import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";

function App() {
  const [userInput,setUserInput]=useState({
    initialInvestment:10000,
    annualInvestment:1200,
    expectedReturn:6,
    duration:10
});

const validUserInput=userInput.duration>=1;

function handleChange(e){
setUserInput((prevUserInput)=>{
    return{...prevUserInput,[e.target.id]:+(e.target.value)}
})
}
  return (<>
    <Header />
    <UserInput userInput={userInput} handleInputChange={handleChange} />
    {validUserInput?<Results input={userInput} />:<p className="center">Please enter a duration greater than zero.</p>}
    </>
  )
}

export default App
