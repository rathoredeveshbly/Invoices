import { createStore } from "redux";

const initialState={
    invoices:[]
}

 const reducer=(state=initialState, action)=>{

    switch (action.type) {
        case "SAVE_INVOICE":
            return {
                ...state,
                invoices:state.invoices.concat(action.payload)
            }
    
        default:
            return state
    }
}

export const store=createStore(reducer)
