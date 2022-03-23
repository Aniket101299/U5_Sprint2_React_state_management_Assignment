export const GroceryList = ({prod,deleteFun})=> {
console.log(prod);

       return (

           <div>
               
               {prod.map((e,index)=> 
               (
                <>
                <h2>{e.title}</h2>
                <button onClick={()=> deleteFun(index)}>Delete</button>
               </>
              )     
              )}
               
  
           </div>
               
           

       )
   

}





    

    



