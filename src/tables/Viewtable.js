const Viewtable=(props)=>(
        <>
            <table className="table bg-light table-bordered">
                <tr className="text-center"><th>NAME</th><th>USERNAME</th><th>PASSWORD</th><th>EDIT</th><th>DELETE</th></tr>
                <tbody>
                    {props.users.length>0?(
                        props.users.map((user)=>(
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td><button className="btn btn-info" onClick={()=>props.editrow(user)}>Edit</button></td>
                                <td><button className="btn btn-danger" onClick={()=>props.deleteuser(user.id)}>Delete</button></td>
                                </tr>
                        ))
                    ):(
                        <tr>no data</tr>
                    )}</tbody>
            </table>
        </>
    
)
export default Viewtable;