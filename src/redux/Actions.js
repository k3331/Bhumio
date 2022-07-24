 export const DELETE = (id) =>{
  return{
    type:'DELETE_POST',id:id
  }
 }

 export const EDIT = (id,name,price,date) =>{
    return{type:'EDIT_POST',payload:{id,name,price, date}}
    
 }

 export const COPY = (id,name,price,date) =>{
    return{type:'COPY_POST',payload:{id,name,price, date}}
    
 }


 