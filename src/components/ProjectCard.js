import React,{useState,useEffect} from 'react'
import Card from '@mui/material/Card';
import './ProjectCard.css'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import "react-datepicker/dist/react-datepicker.css";
import {connect} from 'react-redux'
import moment from 'moment'
import {COPY,EDIT,DELETE} from '../redux/Actions'

import DatePicker from "react-datepicker";




function ProjectCard({id,name,price,date,deleteProject,EditProject,edited,CopyProject}) {

  const [edit ,setEdit] = useState(false)
   const [remove ,setRemove] = useState(false)
   const [startDate, setStartDate] = useState(new Date());
  const [Name ,setName] = useState(name)
  const [Price ,setPrice] = useState(price)

  useEffect(()=>{

    setName(name);
    setPrice(price)

  },[name,price,date])

   
   const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

 const handleClose = () => setEdit(false);

 const handleDelete = () =>{
  deleteProject(id)
 }

 const handleCopy =() =>{
  CopyProject(id,Name,Price,moment(startDate).format('MM/DD/YYYY').toString())
 }

 const handleSave = () =>{
   EditProject(id,Name,Price,moment(startDate).format('MM/DD/YYYY').toString())
   handleClose()
   edited(true)
 }

  return (
    <div className ='Main'>
      <Modal
        open={edit}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style ={{display:'flex',flexDirection:"column", alignItems:"flex-start"}}>
            <div style ={{width:'100%'}} >
              <div style ={{fontWeight:"bold"}}>
                Project Name:
              </div>
              <TextField onChange ={(event) =>setName(event.target.value)} id="standard-basic" label="Name" variant="standard" />
            </div>
             <div style ={{marginTop:'1vh'}}>
              <div style ={{fontWeight:"bold"}}>
                Project Budget:
              </div>
              <TextField onChange ={(event) =>setPrice(event.target.value)} id="standard-basic" label="Price" variant="standard" />
            </div>
             <div style ={{marginTop:'1vh'}}>
              <div style ={{fontWeight:"bold"}}>
                Project Date:
              </div>
              <DatePicker selected={startDate}  onChange={(date) => setStartDate(date)} />
            </div>
          </div>
          <div style={{marginTop:"1vh",display:'flex',justifyContent:'flex-end'}}>
            <Button onClick ={()=>{handleSave()}} style={{color:'red'}}>Save</Button>
            <Button onClick ={()=>{
              handleClose()
            }}>Close</Button>
          </div>
        </Box>
      </Modal>
      <Card>
        <div className ='Card'>
          <div className ='Info'>
            <div style={{fontWeight:'bold'}}>Project Name</div>
            <div style={{fontWeight:'bold'}}>{name}</div>
          </div>

          <div className ='Info'>
            <div style={{fontWeight:'bold'}}>Project Budget</div>
            <div style={{fontWeight:'bold'}}>{price}</div>
          </div>

          <div className ='Date'>
            <div style={{fontWeight:'bold'}}>Project End Date</div>
            <div style={{fontWeight:'bold'}}>{date}</div>
          </div>

          <div className ='Border'></div>

          <div className ="Buttons">
            <div onClick={() =>setEdit(!edit)} style={{fontWeight:'bold',cursor:"pointer"}}>Edit Card</div>
            <div onClick ={handleDelete} style={{fontWeight:'bold',cursor:"pointer"}}>Delete Card</div>
            <div onClick ={handleCopy}style={{fontWeight:'bold',cursor:"pointer"}}>Copy Card</div>
          </div>
        </div>    
      </Card>
    </div>
  )
}
 const mapDispatchToProps = (dispatch)=>{
  return{
    deleteProject:(id) =>{ 
      dispatch(DELETE(id))},

     EditProject:(id,name,price,date) =>{    
      dispatch(EDIT(id,name,price,date))} ,

      CopyProject:(id,name,price,date) =>{    
      dispatch(COPY(id,name,price,date))} 

    
  }
 };
export default connect(null,mapDispatchToProps)(ProjectCard) 