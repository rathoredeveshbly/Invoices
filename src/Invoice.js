import './App.css'


const Invoice=({invoice})=>{
    return ( <table>
    <tr>
      <td className="header">Total Basic Cost</td>
      <td className="header">{invoice.tBCost}</td>
    </tr>
    <tr>
      <td className="static-cell">Total Discount</td>
      <td className="static-cell">{invoice.tDisc}</td>
    </tr>
    <tr>
      <td className="static-cell">Total Final Cost</td>
      <td className="static-cell">{invoice.tFCost}</td>
    </tr>
    <tr>
      <td className="static-cell">Total Tax</td>
      <td className="static-cell">{invoice.tTax}</td>
    </tr>
    <tr>
      <td className="static-cell">Final Price</td>
      <td className="static-cell">{invoice.fPrice}</td>
    </tr>
  </table>)
}

export default Invoice