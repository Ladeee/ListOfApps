import { useState } from "react"
import { evaluate } from "mathjs"
import "./calculator.css"

export default function Calculator() {
  const [value, setValue] = useState('0')

  const handleValues = (e) => {
    let input = e.target.value;

    // Map certain button labels to mathjs syntax
    const mappings = {
      "xʸ": "^",
      "√": "√(",
      "Sin": "Sin(",
      "Cos": "Cos(",
      "tan": "tan(",
      "log": "log("
    };
  
    if (mappings[input]) {
      input = mappings[input];
    }
    setValue((value === '0' ? input : value + input))
  }

  const handleDE = () => {
    setValue((prev) => prev.length>1 ? prev.slice(0, -1) : '0')
  }

  const handleAC = () => {
    setValue('0')
  }

  const handleEqual = () => {
    try {
      // Replace symbols with mathjs-friendly terms
      let expr = value
        .replace(/π/g, "pi")       // π → pi
        .replace(/√/g, "sqrt")     // √ → sqrt
        .replace(/xʸ/g, "^")       // xʸ → ^
        .replace(/Sin/g, "sin")    // Sin → sin
        .replace(/Cos/g, "cos")    // Cos → cos
        .replace(/tan/g, "tan")    // tan → tan
        .replace(/log/g, "log")    // log → log
        .replace(/EXP/g, "exp");   // EXP → exp
  
      const result = evaluate(expr);
      setValue(result.toString());
    } catch {
      setValue("Error");
    }
  };
  
  return (
    <div className="calculator-container">
      <div className='calculator-wrapper'>
        <input type="text" className="cal-input" value={value} />

        <div className="cal-rows-display">
          <div className="cal-grid">
            <div className="rad-deg">
              <input type="button" value="Rad" className="cal-rows" onClick={handleValues} />
              <input type="button" value="Deg" className="cal-rows" onClick={handleValues} />
            </div>

            <input type="button" value="x!" className="cal-rows" onClick={handleValues} />
            <input type="button" value="(" className="cal-rows" onClick={handleValues} />
            <input type="button" value=")" className="cal-rows" onClick={handleValues} />
            <input type="button" value="%" className="cal-rows" onClick={handleValues} />

            <input type="button" value="inv" className="cal-rows" onClick={handleValues} />
            <input type="button" value="sin" className="cal-rows" onClick={handleValues} />
            <input type="button" value="cos" className="cal-rows" onClick={handleValues} />
            <input type="button" value="in" className="cal-rows" onClick={handleValues} />
            <input type="button" value="π" className="cal-rows" onClick={handleValues} />
            <input type="button" value="7" className="cal-rows" onClick={handleValues} />

            <input type="button" value="8" className="cal-rows" onClick={handleValues} />
            <input type="button" value="9" className="cal-rows" onClick={handleValues} />
            <input type="button" value="log" className="cal-rows" onClick={handleValues} />
            <input type="button" value="e" className="cal-rows" onClick={handleValues} />
            <input type="button" value="4" className="cal-rows" onClick={handleValues} />
            <input type="button" value="5" className="cal-rows" onClick={handleValues} />

            <input type="button" value="6" className="cal-rows" onClick={handleValues} />
            <input type="button" value="tan" className="cal-rows" onClick={handleValues} />
            <input type="button" value="√" className="cal-rows" onClick={handleValues} />
            <input type="button" value="1" className="cal-rows" onClick={handleValues} />
            <input type="button" value="2" className="cal-rows" onClick={handleValues} />
            <input type="button" value="3" className="cal-rows" onClick={handleValues} />

            <input type="button" value="EXP" className="cal-rows" onClick={handleValues} />
            <input type="button" value="xʸ" className="cal-rows" onClick={handleValues} />
            <input type="button" value="0" className="cal-rows" onClick={handleValues} />
            <input type="button" value="." className="cal-rows" onClick={handleValues} />
            <input type="button" value="=" className="cal-equals" onClick={handleEqual}/>
            <input type="button" value="Ans" className="cal-rows" onClick={handleValues} />
          </div>

          <div className="cal-operators">
            <input type="button" value="AC" className="cal-rows-operator" onClick={handleAC} />
            <input type="button" value="DE" className="cal-rows" onClick={handleDE} />
            <input type="button" value="/" className="cal-rows-operator" onClick={handleValues} />
            <input type="button" value="*" className="cal-rows-operator" onClick={handleValues} />
            <input type="button" value="-" className="cal-rows-operator" onClick={handleValues} />
            <input type="button" value="+" className="cal-rows-operator" onClick={handleValues} />
          </div>
        </div>

      </div>
    </div>
  )
}
