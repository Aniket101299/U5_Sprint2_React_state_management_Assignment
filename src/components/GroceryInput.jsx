import { useState } from "react"

export const GroceryInput = ({handleAdd})=> {

const [grocerry, setGrocerry] = useState("");

    return(
        
        <div>
            <input type="text" onChange={(e)=>{
              setGrocerry(e.target.value);
            }} />
            <button onClick={()=>{
                handleAdd(grocerry);
            }}>Add Item</button>
        </div>
    );

};