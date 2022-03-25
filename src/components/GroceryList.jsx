export const GroceryList = ({prod,deleteFun})=> {

    
       return (

           <div> 
                <h2>{prod.title}</h2>
                <button onClick={()=> deleteFun(prod.id)}>Delete</button>
           </div>
               
       )

}





    

    



