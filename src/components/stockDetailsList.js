import  React from 'react';

const StockDetailsList = ({currentSymbolRecords =[]}) => {
    return currentSymbolRecords.length ? (
        <div>
             <table className="fixed_header">
            <caption>
                Daily records for the selected Symbol for a time window
            </caption>
            <thead>
                <tr>
                    <td>Date</td>
                    <td>Price (CAD)</td>
                    <td>Social Media Count (visibility)</td>
                    <td>Action</td>
                </tr>
            </thead>
            <tbody>
              {currentSymbolRecords.map((record) => (
                <tr key={record.day.format()}>
                    <td>{record.day.format('MMMM Do YYYY')}</td>
                    <td>{record.price}</td>
                    <td>{record.socialMediaCount}</td>
                    <td>{record.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ): <div>No Records for the current Symbol</div>;
       
}


export default StockDetailsList;