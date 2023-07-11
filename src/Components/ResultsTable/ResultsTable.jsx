const ResultsTable = (props) => {
    return (
        <div>
            <table className="result">
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
                    {!props.data && <p className="no-data">NO DATA FOUND</p>}
                    {props.data && 
                        props.data.map(data => (
                            <tr key={data.year}>
                                <td>{data.year}</td>
                                <td>{data.savingsEndOfYear}</td>
                                <td>{data.yearlyInterest}</td>
                                <td>{data.savingsEndOfYear - 
                                    props.initialInvestment - 
                                    (data.yearlyInterest * data.year)}</td>
                                <td>{props.initialInvestment + 
                                (data.yearlyContribution * data.year)}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default ResultsTable