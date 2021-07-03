import { useState } from 'react';
import Form from './Form';
import Table from './table';


function App(props) {
const [invoices,setInvoices]=useState([])
const [data,setData]=useState([])
const [toggle, setToggle] = useState(false)

const handleSubmit=(obj)=>{
  console.log(obj)
  setData(data.concat(obj))
}

const handleDelete=(i)=>{
  let array=[...data]
  array.splice(i,1)
  console.log(array)
  setData(array)

}

  return (
    <div >

    {toggle==true ?  <Form setToggle={setToggle} handleSubmit={handleSubmit} /> :  <Table setToggle={setToggle} handleDelete={handleDelete} tableData={data} /> }
     
    
    </div>
  );
}

export default App;