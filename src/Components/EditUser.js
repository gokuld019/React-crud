import { useEffect, useState } from "react";

const EditUser=(props)=>{
    const [euser,setEuser]=useState(props.currentuser);
    const oninputchange=(event)=>{
    const {name,value}=event.target
    setEuser({...euser,[name]:value}
        )
    }
    useEffect(()=>{
        setEuser(props.currentuser)},[props])
return(
        <>
            <form onSubmit={
                event=>{
                    event.preventDefault();
                    if (!euser.name||!euser.username||!euser.password) return;
                    props.updateuser(euser.id,euser);
                }
            } className="text-light">
                <label for="name" className="form-label">Name:</label>
                <input type="text" className="form-control" name="name" onChange={oninputchange} value={euser.name}/>
                <label for="username" className="form-label">Username:</label>
                <input type="text" className="form-control" name="username" onChange={oninputchange} value={euser.username}/>
                <label for="password" className="form-label">Password:</label>
                <input type="text" className="form-control" name="password" onChange={oninputchange} value={euser.password}/>
                <div className="pt-3 text-center">
                <button className="btn btn-primary" type="submit">Edit</button>
                <button className="btn btn-primary" type="submit" onClick={()=>{props.editrow(false)}}>Clear</button>
                </div>
            </form></>
        )

}
export default EditUser;