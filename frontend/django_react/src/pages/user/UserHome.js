import React from 'react'
import image1 from '../../images/2.jpg'

import { useSelector } from 'react-redux'
import { Link ,useNavigate} from 'react-router-dom'



function UserHome() {

  const navigate = useNavigate()
  const authentication_user = useSelector(state => state.authentication_user)
 
  return (
    // <div className="card">
    //   <div className="card-body">
    //     <h4>
    //       {authentication_user.isAuthenticated?<>Welcome Back {authentication_user.name} ! </>:<>Login to edit profile</>}
    //     </h4>
    //   </div>
    // </div>
<div className="row my-4 mx-4">
  <div className="col-md-6 mb-4">
    <div className="bg-image hover-overlay ripple shadow-2-strong rounded-5" data-mdb-ripple-color="light">
      <img src={image1} className="img-fluid" alt='cosmos' />
      <a href="#!">
        <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.15)'}}></div>
      </a>
    </div>
  </div>

  <div className="col-md-6 mb-4">
    <span className="badge bg-dark px-2 py-1 shadow-1-strong mb-3">{authentication_user.isAuthenticated?<>Heyy,{authentication_user.name} ! </>:<>Heyyy</>}</span>
    <h4><strong>WELCOME TO THE WORLD OF COSMOS </strong></h4>
    <p className="text-muted">
    Embark on a cosmic adventure of wonders and mysteries, exploring the universe through captivating visuals and thought-provoking articles.Unlock the mysteries of the cosmos with our captivating online platform. Welcome to a limitless journey into the cosmos.
    </p>
    {authentication_user.isAuthenticated?<>
      <Link type="button" className="btn btn-primary" to='/profile'>Go To Profile  ! </Link></>
      :<><Link type="button" className="btn btn-primary" to='/login'> Login To Read More </Link></>}
    
   
  </div>
</div>

  )
}

export default UserHome