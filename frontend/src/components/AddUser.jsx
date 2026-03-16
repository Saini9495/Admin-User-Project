import { useState } from "react";
import API from "../services/api";

function AddUser({ refresh }) {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [role,setRole] = useState("");

const submitUser = async () => {

await API.post("/users/add",{
name,
email,
role
});

setName("");
setEmail("");
setRole("");

refresh();

};

return (

<div className="card">

<h2>Add User</h2>

<input
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<input
placeholder="Role"
value={role}
onChange={(e)=>setRole(e.target.value)}
/>

<button onClick={submitUser}>Add User</button>

</div>

);

}

export default AddUser;