import React,{useEffect} from 'react'
import { Link , useLocation, useNavigate} from 'react-router-dom';

export const NavBar = (props) => {
  const navigate= useNavigate();
    let location = useLocation();
    useEffect(() => {
    
    }, [location])
    
    const handleLogout =()=>{
localStorage.clear('token')
navigate('/login')
props.showAllert(`Logged out successfully`,"success")
    }
  return (
    <div>
        <nav className=" navbar navbar-dark navbar-expand-lg bg-dark">
  <div className="container-fluid">
   <Link className='nav-link' to={"/notebook"}> <h1 className="navbar-brand" >Notebook</h1></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`}  to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">about</Link>
        </li>
      </ul>
     { !localStorage.getItem('token')? <form className="d-flex" role="search">
      <Link className="btn btn-primary mx-1" to="/login" role="button">Login</Link>
      <Link className="btn btn-primary mx-1" to="/signup" role="button">Signup</Link>
      </form>:<button onClick={handleLogout} className='btn btn-primary mx-1'>Logout</button>
}
    </div>
  </div>
</nav>
    </div>
  )
}
export default NavBar