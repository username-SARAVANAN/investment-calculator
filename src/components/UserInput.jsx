export default function UserInput({userInput,handleInputChange}) {

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initialInvestment">Initial Investment</label>
          <input onChange={handleInputChange} type="number" id="initialInvestment" value={userInput.initialInvestment>=1?userInput.initialInvestment:null} required />
        </p>
        <p>
          <label htmlFor="annualInvestment">Annual Investment</label>
          <input onChange={handleInputChange} type="number" id="annualInvestment" value={userInput.annualInvestment>=1?userInput.annualInvestment:null} required />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label htmlFor="expectedReturn">Expected Return</label>
          <input onChange={(e)=>handleInputChange(e)} type="number" id="expectedReturn" value={userInput.expectedReturn>=1?userInput.expectedReturn:null} required />
        </p>
        <p>
          <label htmlFor="duration">Duration</label>
          <input onChange={handleInputChange} type="number" id="duration" value={userInput.duration>=1?userInput.duration:null} required />
        </p>
      </div>
    </section>
  );
}
