import React from "react";

// import { useContext } from "react";
import { Button, Container, Nav, Navbar,NavLink } from "react-bootstrap";
import { Link, Routes,Route ,BrowserRouter} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Main from "../pages/main";
import LoginMessage from "../UserProfile/LoginMessage";

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
                <Route path='/resetpassword' element={<LoginMessage/>}/>

                
               
            </Routes>
           
        </BrowserRouter>
    )
}
export default Header;