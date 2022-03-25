import { useState } from "react"
import { GroceryInput } from "./GroceryInput";
import { GroceryList } from "./GroceryList";
import { nanoid } from 'nanoid'

export const Grocery = () => {

    const [grocerries,setGrocerries] = useState([]);

    const grocerryFun = (data)=>{
     const item = {
        id:nanoid(), 
        title:data,
     }
     setGrocerries([...grocerries,item]);
    };


    const deleteItem = (did) => {
       
        let new_grocerries = grocerries.filter((e)=> e.id!=did );
     
        setGrocerries([...new_grocerries]);
    }


    return (
        <div>
            <GroceryInput handleAdd={grocerryFun} />
            
            {grocerries.map((item)=> (
               <GroceryList prod={item} deleteFun={deleteItem} key={item.id}/>
            ))}
           
        
        </div>
    );


};











