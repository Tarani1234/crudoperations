import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
const App = () => {
  const[name, setName] = useState("")
  const[email, setEmail] = useState("")
  const[contact, setContact] = useState("")
  const[users, setUsers] = useState([]);
 const[edit, setEdit]=useState(false);
 const[active, setActive] = useState(null);
  const addUser = (e)=>{
      e.preventDefault();

  const user ={
    name,
    email,
    contact
  };
  if(edit){
  //update user
  if (active !== null && active >= 0 && active < users.length) {
    let copy = [...users];
    Object.assign(copy[active], user); // Merges the new user data into the existing one
    setUsers(copy);
  } else {
    console.error("Active index is invalid.");
  }
//   let copy = [users];
//  Object.assign(copy[active], user);
//  setUsers([...copy]);
  }
  else{
  //add user
  setUsers([...users, user]);
  }
 
   setName("");
   setEmail("");
   setContact("");
   
};
const onEditClick = (index) =>{
      const user = users[index];
      setName(user.name);
      setEmail(user.email);
      setContact(user.contact);
      setEdit(true);
      setActive(index);
} 
const deleteUser = (user) =>{
   if(window.confirm(`Are you sure want to delete?`)){
    let copy = users.filter((item) =>item  !== user);
    setUsers([...copy]);
   }
}
  return (
    <div>
      <h1>CRUD OPERATIONS</h1>
      <div className='container'>
      <div className="row justify-content-center">
        <div className="col-xs-12 col-sm-10 col-md-8 col-lg-5">
          <form onSubmit={addUser}>
            <div className="form-group">
              <label htmlFor=''>Name</label>
              <input type='text' className='form-control' value={name} onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor=''>Email</label>
              <input type='text' className='form-control' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group">
              <label htmlFor=''>Contact</label>
              <input type='text' className='form-control' value={contact} onChange={(e)=>setContact(e.target.value)}/>
            </div>
             <button className='btn btn-success form-control mt-3'>{edit ? "update" :"Add"}</button>
          </form>
        </div>
      </div>
      </div>
     <table className='table table-bordered mt-5'>
       <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Conatct</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
       </thead>
       <tbody>
         {
          users.map((user,index) =>{
            return(
              <tr>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.contact}</td>
                <td>
                  <button className='btn btn-info' onClick={()=>onEditClick(index)}>Edit</button>
                </td>
                <td>
                  <button className='btn btn-info' onClick={()=>deleteUser(user)}>Delete</button>
                </td>
              </tr>
            )
          })
         }
       </tbody>
     </table>
    </div>
  )
}

export default App
