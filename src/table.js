import "./App.css";
import { useDispatch } from "react-redux";
import Invoice from "./Invoice";
import InvoiceList from "./InvoiceList";
const Table = (props) => {
  const dispatch = useDispatch();

  console.log(props.tableData);

  const basicCost = (val) => {
    return val.rate * val.quantity;
  };

  const discountAmt = (val) => {
    return (val.rate * val.quantity * val.discount) / 100;
  };
  const finalBasicCost = (val) => {
    return (
      val.rate * val.quantity - (val.rate * val.quantity * val.discount) / 100
    );
  };
  const taxAmt = (val) => {
    let tax1 =
      val.rate * val.quantity - (val.rate * val.quantity * val.discount) / 100;
    return (tax1 * val.tax) / 100;
  };
  const totalCost = (val) => {
    let basicAmt =
      val.rate * val.quantity - (val.rate * val.quantity * val.discount) / 100;
    let tax1 = (basicAmt * val.tax) / 100;
    return basicAmt + tax1;
  };

  ////////////////////////

  let invoice = {
    tBCost: props.tableData.reduce((a, c) => a + basicCost(c), 0),
    tDisc: props.tableData.reduce((a, c) => a + discountAmt(c), 0),
    tFCost: props.tableData.reduce((a, c) => a + finalBasicCost(c), 0),
    tTax: props.tableData.reduce((a, c) => a + taxAmt(c), 0),
    fPrice: props.tableData.reduce((a, c) => a + totalCost(c), 0),
  };

  /////////////////

  return (
    <div>
      <button className="btn btn-primary" onClick={() => props.setToggle(true)}>
        Add New Item
      </button>
      <table>
        <tr className="formula">
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td>rate*quantity</td>
          <td></td>
          <td>(basiccost*discount)/100</td>
          <td>basiccost-discount</td>
          <td></td>
          <td>(finalcost*10)/100</td>
          <td>FinalBasicCost+TaxAmount</td>
        </tr>
        <tr className="header">
          <td>#</td>
          <td>Name</td>
          <td>Rate</td>
          <td>Quantity</td>
          <td>Basic Cost</td>
          <td>Discount(%)</td>
          <td>Discount Amt</td>
          <td>Final Basic Cost</td>
          <td>Tax(%)</td>
          <td>Tax Amt</td>
          <td>Total Cost</td>
          <td>Tools</td>
        </tr>
        {props.tableData.map((val, index) => (
          <tr className="data">
            <td className="custom-cell">{index + 1}</td>
            <td className="static-cell">{val.name}</td>
            <td className="static-cell">{val.rate}</td>
            <td className="static-cell">{val.quantity}</td>
            <td className="static-cell">{basicCost(val)}</td>
            <td className="static-cell">{val.discount}</td>
            <td className="custom-cell">{discountAmt(val)}</td>
            <td className="custom-cell">{finalBasicCost(val)}</td>
            <td className="static-cell">{val.tax}</td>
            <td className="custom-cell">{taxAmt(val)}</td>
            <td className="custom-cell">{totalCost(val)}</td>
            <td>
              <button
                onClick={() => props.handleDelete(index)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </table>
      <div className="table-2">
        <Invoice invoice={invoice} />
      </div>
      <button
        onClick={() => {
          dispatch({ type: "SAVE_INVOICE", payload: invoice });
        }}
        className="btn btn-primary table-2"
      >
        Save
      </button>

      <div style={{display:"flex",width:"100%",flexWrap:"wrap",justifyContent:"center"}}>
        <InvoiceList />
      </div>
    </div>
  );
};

export default Table;
