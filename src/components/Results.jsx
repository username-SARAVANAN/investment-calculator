import { calculateInvestmentResults,formatter } from "../util/investment";

export default function Results({ input }) {
  const resultsData = calculateInvestmentResults(input);
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Invested Capital</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Investment Value</th>
        </tr>
      </thead>
      <tbody>
        {resultsData.map((yearData) => {
            const totalInterest=yearData.valueEndOfYear-(input.initialInvestment+(yearData.year*yearData.annualInvestment));
            return (
                <tr key={yearData.year}>
                    <td>{yearData.year}</td>
                    <td>{formatter.format(yearData.valueEndOfYear-totalInterest)}</td>
                    <td>{formatter.format(yearData.interest)}</td>
                    <td>{formatter.format(totalInterest)}</td>
                    <td>{formatter.format(yearData.valueEndOfYear)}</td>
                </tr>
            )
        })}
      </tbody>
    </table>
  );
}
