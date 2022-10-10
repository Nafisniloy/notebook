import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Signup = (props) => {
  const [isVisible, setVisible] = useState(false);
  const showHidePass=()=>{
    let checkBox = document.getElementById("exampleCheck1");

 if (checkBox.checked === true) {
   setVisible(!isVisible);
  } else{
    setVisible(false);
  }
  }

  const [creditionals, setcreditionals] = useState({email:"",password:"",name:""})
  let  navigate = useNavigate();
 const handleSubmit= async (e)=>{
  e.preventDefault();
  // const Creditionals= {email:"",password:""}
  const response = await fetch(`https://notebook-app-niloy.herokuapp.com/api/auth/createuser/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body:  JSON.stringify({email:creditionals.email,password:creditionals.password,name:creditionals.name}) 
  });
  const json = await response.json();
  console.log(json);
  if(json.success){
    //redirect
    localStorage.setItem('token', json.authtoken)
    navigate('/');
    // alert(json.message)
    props.showAllert(`${json.message}`,"success")
  }else{
    props.showAllert("Sorry! An account with this email already exist. Please login.","danger")
// alert('An account with this email already exist. Please login.')
  }
 }
 const onChange=(e)=>{
setcreditionals({...creditionals,[e.target.name]:e.target.value})
 }

  return (
    <div>
       <h3 className='my-2'>Create an account</h3>
       <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Username</label>
    <input type="name" className="form-control" name='name' onChange={onChange} id="name" aria-describedby="emailHelp" minLength={1} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' onChange={onChange} id="email" aria-describedby="emailHelp"/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type={!isVisible ? "password" : "text"}  className="form-control" name='password' onChange={onChange} id="password" minLength={5} required/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={showHidePass}/>
    <label className="form-check-label" htmlFor="exampleCheck1">Show password</label>
  </div>
  <button type="submit" className="btn btn-primary">Signup</button>
</form>
<p className='my-2'>Already have an account? <Link to={'/login'}> Login here</Link></p>
    </div>
  )
}

export default Signup