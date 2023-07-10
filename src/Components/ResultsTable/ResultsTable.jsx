const ResultsTable = (props) => {
    let display
    if (props.data.length === 0) {
        display = <p>No Data Found</p>
    }
    else {
        display = <table className="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Total Savings</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>YEAR NUMBER</td>
                    <td>TOTAL SAVINGS END OF YEAR</td>
                    <td>INTEREST GAINED IN YEAR</td>
                    <td>TOTAL INTEREST GAINED</td>
                    <td>TOTAL INVESTED CAPITAL</td>
                </tr>
                {props.data.map(item => (
                    <tr>
                        <td>{item['year']}</td>
                        <td>{item['yearlyInterest']}</td>
                        <td>{item['savingsEndOfYear']}</td>
                        <td>{item['yearlyContribution']}</td>
                        <td>{item['year']}</td> 
                    </tr>
                ))}
            </tbody>
        </table>
    }
    return (
        <div>
            <p className="no-data">{display}</p>
        </div>
    )
}

export default ResultsTable