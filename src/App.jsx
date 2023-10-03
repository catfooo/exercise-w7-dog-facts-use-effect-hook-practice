import { useState, useEffect } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
  // Hint: Initialize state for storing the dog fact
  const [storeDogFact, setStoreDogFact] = useState()
  // Hint: Define the API endpoint
  const API = "https://dogapi.dog/api/v2/facts"
  // Hint: Create a function to fetch the dog fact
  const dataDogFact = async () => {
    try {
      const fact = await fetch(API)
      const factData = await fact.json()
      console.log(factData)
      setStoreDogFact(factData)
    } catch (error) {
      console.error("fail", error)
    }
  }
  // Hint: Use the useEffect hook to fetch the dog fact when the component mounts
  useEffect(() => {
    dataDogFact()
  }, [])


  return (
    <div className="App">
      <DogFact fact={storeDogFact} />
    </div>
  );
};
