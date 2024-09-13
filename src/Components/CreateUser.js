import { useState } from "react";

const CreateUser=(props)=>{
    const initialformstate={id:null,name:"",username:"",password:""};
    const [cuser,setCuser]=useState(initialformstate);
    const oninputchange=(event)=>{
    const {name,value}=event.target
    setCuser({...cuser,[name]:value})
    }
    
    return(
    <>
        <form onSubmit={
            event=> {
                event.preventDefault();
                if (!cuser.name||!cuser.username||!cuser.password) return;
                props.adduser(cuser);
                setCuser(initialformstate);
            }
        } className="text-light">
            <label for="name" className="form-label">Name:</label>
            <input type="text" className="form-control" name="name" onChange={oninputchange} value={cuser.name}/>
            <label for="username" className="form-label">Username:</label>
            <input type="text" className="form-control" name="username" onChange={oninputchange} value={cuser.username}/>
            <label for="password" className="form-label">Password:</label>
            <input type="password" className="form-control" name="password" onChange={oninputchange} value={cuser.password}/>
            <div className="pt-3 text-center">
            <button className="btn btn-primary" type="submit">Create</button>
            </div>
        </form></>
    )
    }
export default CreateUser;
