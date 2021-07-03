import { useState } from "react"


const Form =(props)=>{

    const [entry,setEntry]=useState({name:"",rate:"",quantity:"",discount:"",tax:""})

const handleChange=(e)=>{
    const value = e.target.value;
    setEntry({
      ...entry,
      [e.target.name]: value
    });
}
console.log(entry)

const handleSubmit=(e)=>{
    e.preventDefault();
    const obj = entry
    props.handleSubmit(obj)
    setEntry({name:"",rate:"",quantity:"",discount:"",tax:""})
    props.setToggle(false);
}

    return(<form >
        <label>
          Name
          <input
            type="text"
            name="name"
            value={entry.name}
            onChange={handleChange}
          />
        </label>
        <label>
          Rate
          <input
            type="number"
            name="rate"
            value={entry.rate}
            onChange={handleChange}
          />
        </label>
        <label>
          Quantity
          <input
            type="number"
            name="quantity"
            value={entry.quantity}
            onChange={handleChange}
          />
        </label>
        <label>
          Discount %
          <input
            type="number"
            name="discount"
            value={entry.discount}
            onChange={handleChange}
          />
        </label>
        <label>
          Tax %
          <input
            type="number"
            name="tax"
            value={entry.tax}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Add Item</button>
        </label>
      </form>)

}

export default Form
