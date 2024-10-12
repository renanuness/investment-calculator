

export default function Table({annualData}) {
    let totalInterest = 0;
    return (
        <table id="result">
            <thead>
                <tr>
                    <th>Year</th>
                    <th>Investment value</th>
                    <th>Interest (Year)</th>
                    <th>Total Interest</th>
                    <th>Invested Capital</th>
                </tr>
            </thead>
            <tbody>
                {
                    annualData.map((data, index)=>{
                        totalInterest += data.interest;
                        return (
                        <tr>
                            <td>${Math.ceil(data.year)}</td>
                            <td>${Math.ceil(data.valueEndOfYear)}</td>
                            <td>${Math.ceil(data.interest)}</td>
                            <td>${Math.ceil(totalInterest)}</td>
                            <td>${Math.ceil(data.valueEndOfYear - data.interest)}</td>
                        </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}