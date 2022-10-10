import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
const Login = (props) => {
  const [isVisible, setVisible] = useState(false);
  const showHidePass=()=>{
    let checkBox = document.getElementById("exampleCheck1");

 if (checkBox.checked === true) {
   setVisible(!isVisible);
  } else{
    setVisible(false);
  }
  }
  const [creditionals, setcreditionals] = useState({email:"",password:""})
  let  navigate = useNavigate();
 const handleSubmit= async (e)=>{
  e.preventDefault();
  // const Creditionals= {email:"",password:""}
  const response = await fetch(`https://notebook-app-niloy.herokuapp.com/api/auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      
    },
    body:  JSON.stringify({email:creditionals.email,password:creditionals.password}) 
  });
  const json = await response.json();
 
  if(json.success){
    //redirect
    localStorage.setItem('token', json.authtoken)
    navigate('/');
    props.showAllert(`Logged in successfully`,"success")

  }else{
    props.showAllert("Invalid Email or passsword. Please try again.","danger")

  }
 }
 const onChange=(e)=>{
setcreditionals({...creditionals,[e.target.name]:e.target.value})
 }
  
 
  return (
    <div>
      <h3 className='my-2'>Login to Notebook</h3>
        <form onSubmit={handleSubmit}>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" name='email' onChange={onChange} id="email" aria-describedby="emailHelp" required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type={!isVisible ? "password" : "text"} className="form-control" name='password' onChange={onChange} id="password" required/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" onChange={showHidePass}/>
    <label className="form-check-label" htmlFor="exampleCheck1">Show Password</label>
  </div>
  <button type="submit" className="btn btn-primary">Login</button>
</form>
<p className='my-2'>Don't have an account? <Link to={'/signup'}> Signup</Link></p>
    </div>
  )
}

export default Login