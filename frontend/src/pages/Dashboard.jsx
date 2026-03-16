import { useEffect, useState } from "react";
import API from "../services/api";
import AddUser from "../components/AddUser";
import UserList from "../components/UserList";

function Dashboard(){

const [users,setUsers] = useState([]);

const loadUsers = async ()=>{

const res = await API.get("/users/all");

setUsers(res.data);

};

useEffect(()=>{
loadUsers();
},[]);

return(

<div className="container">

<h1>Admin Dashboard</h1>

<AddUser refresh={loadUsers}/>

<UserList users={users}/>

</div>

);

}

export default Dashboard;