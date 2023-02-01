import React from "react";

// import { useContext } from "react";
import { Button, Container, Nav, Navbar,NavLink } from "react-bootstrap";
import { Link, Routes,Route ,BrowserRouter} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import ForgotPassword from "../pages/ForgotPasseord";
import Main from "../pages/main";
import UserProfile from "../pages/UserProfile";


// import AuthContext from "../Store/Auth-Context";

const Header=(props)=>{
  
   
    // const authCtx= useContext(AuthContext);
    // const isLoggedIn=authCtx.isLoggedIn;
  
    return(
        <BrowserRouter>
            <Navbar fixed="top" bg="dark" variant="dark">
                <Container>
                    <Nav>
                        <NavLink as={Link} to="/login">login</NavLink>
                        {/* <NavLink as={Link} to='/main'>main</NavLink> */}
                    </Nav>
                    <Button as={Link} to="/login">LogOut</Button>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/login" element={<AuthPage/>}/>
               
                <Route path='/main' element={<Main/>}/>
                {/* <Route path='/resetpassword' element={<LoginMessage/>}/> */}
                <Route path="/resetpassword" element={<ForgotPassword/>}/>

                <Route path="/complete" element={<UserProfile/>}/>

                
               
            </Routes>
           
        </BrowserRouter>
    )
}
export default Header;