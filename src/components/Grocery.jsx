import { useState } from "react"
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";

export const Grocery = () => {

    const [grocerries,setGrocerries] = useState([]);

    const grocerryFun = (data)=>{
     const item = {
        id:Math.random(100), 
        title:data,
     }
     setGrocerries([...grocerries,item]);
    };


    const deleteItem = (index) => {
        console.log(index);
        grocerries.splice(index,1);
     
        setGrocerries([...grocerries]);
    }


    return (
        <div>
            <GroceryInput handleAdd={grocerryFun} />
            
            
            <GroceryList prod={grocerries} deleteFun={deleteItem}/>
        
        </div>
    );


};











