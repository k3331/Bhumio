import React,{useState,useEffect} from 'react'
import './Main.css'
import RevenueChart from '../components/RevenueChart';
import ProjectCard from '../components/ProjectCard';
import {connect} from 'react-redux'
import Header from '../components/Header'

function Main(props) {

  const [Projects,setProjects] = useState(props.Posts)
  const [edited,setEdited] = useState(false)

  useEffect(()=>{
    setProjects(props.Posts)

  },[props.Posts,edited])
  
  return (
    <>
    <Header projects ={props.Posts}/>
    <div className ="Container">
      <RevenueChart  projects ={props.Posts}/>
      <div className ='Projects'>

      {
        Projects.slice(0,4).map((pro) =>{
          return(
            <ProjectCard id ={pro.id} name={pro.project} price ={pro.price} date ={pro.date} edited={setEdited}/>
          )
        })
      }
      </div>
    </div>
    </>
  )
}

const mapStateToProps = (state) =>{
  return{
    Posts:state.projects
  }
}

export default connect(mapStateToProps)(Main)