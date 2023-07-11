import { useState } from "react";
import Header from "./Components/Header/Header";
import ResultsTable from "./Components/ResultsTable/ResultsTable";
import Form from "./Components/UserInput/Form";


function App() {
  const [results,setResults] = useState(null)
  const [initialInvestment,setInitialInvestment] = useState(null)
  const calculateHandler = (userInput) => {
    const yearlyData = []; // per-year results
    // Should be triggered when form is submitted
    // You might not directly want to bind it to the submit event on the form though...

    let currentSavings = userInput['current-savings']; // feel free to change the shape of this input object!
    const yearlyContribution = userInput['yearly-contribution'] // as mentioned: feel free to change the shape...
    const expectedReturn = userInput['expected-return'] / 100
    const duration = userInput['duration'];
    setInitialInvestment(currentSavings)
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
    setResults(yearlyData)
    // do something with yearlyData ...
  };
  console.log(results)
  return (
    <div>
      <Header></Header>
      <Form addData={calculateHandler}></Form>

      {/* Todo: Show below table conditionally (only once result data is available) */}
      {/* Show fallback text if no data is available */}

      <ResultsTable data={results} initialInvestment={initialInvestment}></ResultsTable>
    </div>
  );
}

export default App;
