 const initState ={
  projects:[{
    id:'1',
    project:'project1',
    price:'300000',
    date:'10/6/2020'
  },
{
    id:'2',
    project:'project2',
    price:'200000',
    date:'12/23/2020'
  },
{
    id:'3',
    project:'project3',
    price:'500000',
    date:'11/29/2020'
  },
{
    id:'4',
    project:'project4',
    price:'600000',
    date:'6/19/2020'
  },
  {
    id:'5',
    project:'project5',
    price:'600000',
    date:'6/19/2020'
  },
  {
    id:'6',
    project:'project6',
    price:'600000',
    date:'6/19/2020'
  }
]
 }
 
 const Reducer =(state=initState,action) =>{
  if(action.type ==='DELETE_POST'){
     let newProj = state.projects.filter((pro) => {return pro.id !== action.id})
     return{
      ...state,
      projects:newProj
     }
  }
   if(action.type ==='EDIT_POST'){
    let projs = state.projects
    let objIndex = projs.findIndex((obj => obj.id == action.payload.id));
    projs[objIndex].project = action.payload.name
    projs[objIndex].price = action.payload.price
    projs[objIndex].date = action.payload.date
    return{
      ...state,
      projects:projs   
    }
   }

   if(action.type === 'COPY_POST'){
    let projs =[...state.projects,action.payload]
     return{
      ...state,
      projects:projs  
    }
   }
  return state;
 }

 export default Reducer