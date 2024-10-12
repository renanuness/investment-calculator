import { useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import {calculateInvestmentResults} from './util/investment';
import Table from "./components/Table";

function App() {
  const [investmentInfo, setInvestmentInfo] = useState({ initialInvestment: 0, annualInvestment: 0, expectedReturn: 0, duration: 0 });
  let annualData = calculateInvestmentResults({...investmentInfo});

  function handleInputChange(value, field) {
    setInvestmentInfo((prevValues) => {
        let d = {
            ...prevValues,
            [field]: parseFloat(value)
        }

        // annualData = calculateInvestmentResults({...investmentInfo}); 
        return d;
    })
}

  return (
    <main>
      <Header/>
      <Form investmentInfo={investmentInfo} onChangeInput={(v, f)=>handleInputChange(v, f)}/>
      <Table annualData={annualData} />
    </main>
  )
}

export default App
