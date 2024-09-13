import { useState } from 'react';
import './App.css';
import CreateUser from './Components/CreateUser';
import Header from './Components/Header';
import Viewtable from './tables/Viewtable';
import EditUser from './Components/EditUser';

function App() {
const userData=[
  {id:1,name:"Pranav",username:"pspranavram2005",password:"ram2005*"},
  {id:2,name:"Deepti",username:"deeptisree2008",password:"sree2008*"},
  {id:3,name:"Suriya",username:"saisuriya2012",password:"suriya2012*"}
];
const[users,setUsers]=useState(userData);
//add user
const adduser=(user)=>{
  user.id=users.length+1;
  setUsers([...users,user]);
} 
const deleteuser=(id)=>{
  setUsers(users.filter((user)=>user.id!==id));
  setEdit(false);
}
const [Edit,setEdit] = useState(false);
const initialeditstate={id:null,name:"",username:"",password:""};
const [currentuser,setCurrentuser]=useState(initialeditstate);
const editrow=(user)=>{
  setEdit(true);
  setCurrentuser({id:user.id,name:user.name,username:user.username,password:user.password})}

  const updateuser=(id,updateduser)=>{
  setEdit(false);
  setUsers(users.map((user)=>(user.id===id?updateduser:user)))
}



  return (<>
    <Header />
    <div className='row m-3 mt-5'>
    <div className='col-lg-6 col-md-6 col-12'>
    <div className='bg-secondary p-4'>
      {Edit?(<>
        <h3>Edit User</h3>
        <EditUser setEdit={setEdit}
         currentuser={currentuser} 
         updateuser={updateuser}
         /></>
      ):(<><h3>Insert User</h3>
      <CreateUser adduser={adduser}/></>  )}
        
      </div></div>
    <div className='col-lg-6 col-md-6 col-12'>
      <div className="bg-secondary p-4">
        <h3>View User</h3>
        <Viewtable users={users} deleteuser={deleteuser} editrow={editrow}/>
</div></div>
      </div>
    </>
  );
}

export default App;
