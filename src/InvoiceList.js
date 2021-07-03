import { useSelector } from "react-redux";
import Invoice from "./Invoice";
const InvoiceList = () => {
  const invoices = useSelector((state) => state.invoices);

  console.log(invoices);

  return (
    <div>
      
      <h2>INVOICES</h2>
      {invoices.map((inv) => (
        <Invoice invoice={inv} />
      ))}
    </div>
  );
};

export default InvoiceList;
