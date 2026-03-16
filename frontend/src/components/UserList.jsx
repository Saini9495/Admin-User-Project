function UserList({users}) {

return (

<div className="card">

<h2>Users</h2>

<ul>

{users.map((user)=>(

<li key={user._id}>

<strong>{user.name}</strong>

<p>{user.email}</p>

<span>{user.role}</span>

</li>

))}

</ul>

</div>

);

}

export default UserList;