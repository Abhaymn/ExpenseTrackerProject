import React, { Suspense } from "react";
import {  useSelector,useDispatch } from 'react-redux';
// import { useContext } from "react";
import { Button, Container, Nav, Navbar,NavLink } from "react-bootstrap";
import { Link, Routes,Route ,BrowserRouter} from "react-router-dom";
// import AuthPage from "../pages/AuthPage";
// import ForgotPassword from "../pages/ForgotPasseord";
// import Main from "../pages/main";
// import UserProfile from "../pages/UserProfile";

// import Expenses from "../pages/Expenses";
// import About from "../pages/About";

import { loginActions } from "../Store/loginSlice";
import LoadingSpinner from "../UI/LoadingSpinner";

const About=React.lazy(()=>import('../pages/About'));
const Expenses=React.lazy(()=>import('../pages/Expenses'));
const UserProfile=React.lazy(()=>import('../pages/UserProfile'));
const Main=React.lazy(()=>import('../pages/main'));
const AuthPage=React.lazy(()=>import('../pages/AuthPage'));
const ForgotPassword=React.lazy(()=>import('../pages/ForgotPasseord'));


const Header=(props)=>{
   
   const dispatch=useDispatch();

 
   
    const isLoggedIn=useSelector(state=>state.login.isLoggedIn);


  const logoutHandler=()=>{
    
    dispatch(loginActions.logout());
   
  }
   
    // const authCtx= useContext(AuthContext);
    // const isLoggedIn=authCtx.isLoggedIn;
  

    return(
        
        <BrowserRouter>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Nav>
                        {isLoggedIn&&<NavLink as={Link} to='/expenses' >Expenses</NavLink>} 
                        {isLoggedIn&&<NavLink as={Link} to='/about' className="ms-4">About</NavLink> }    
                    </Nav>

                    <Nav>
                        <NavLink as={Link} to="/login">login</NavLink>
                        {isLoggedIn&&<Button onClick={logoutHandler} as={Link} to='/login' className="ms-4">LogOut</Button>}
                       
                    </Nav>
                    
                </Container>
            </Navbar>

            <Suspense fallback={
                <div className="centered">
                    <LoadingSpinner/>
                </div>}>

            <Routes>
                {!isLoggedIn&&<Route path="/login" element={<AuthPage/>}/>}
               
              {isLoggedIn&&<Route path='/main' element={<Main/>}/>}
                {/* <Route path='/resetpassword' element={<LoginMessage/>}/> */}
                <Route path="/resetpassword" element={<ForgotPassword/>}/>

                {isLoggedIn&&<Route path="/complete" element={<UserProfile/>}/>}
                {isLoggedIn&&<Route path="/expenses" element={<Expenses/> } />}
                
                <Route path="/about" element={ <About/>}/>
            </Routes>
            </Suspense>
        </BrowserRouter>
        
    )
}
export default Header;