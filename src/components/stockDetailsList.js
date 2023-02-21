import  React from 'react';

const StockDetailsList = ({currentSymbol ={}}) => {
    const dailyRecords = currentSymbol.records || null;
    return dailyRecords ? (
        <div style={{margin:'25px'}}>
             <table>
            <caption>
                Daily records for the selected Symbol for a time window
            </caption>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Price</td>
                    <td>Social Media Count</td>
                </tr>
            </thead>
            <tbody>
              {dailyRecords.map((record) => (
                <tr key={record.day.format()}>
                    <td >{record.day.format('MMMM Do YYYY')}</td>
                    <td >{record.price}</td>
                    <td >{record.socialMediaCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ): <div>No Records for the current Symbol</div>;
       
}

export default StockDetailsList;