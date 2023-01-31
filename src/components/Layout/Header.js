import React from "react";
import { useSelector } from "react-redux";
// import { useContext } from "react";
import { Container, Nav, Navbar,NavLink } from "react-bootstrap";
import { Link, Routes,Route ,BrowserRouter} from "react-router-dom";
import AuthPage from "../pages/AuthPage";
import Main from "../pages/main";

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
                </Container>
            </Navbar>

            <Routes>
                <Route path="/login" element={<AuthPage/>}/>
               
                <Route path='/main' element={<Main/>}/>
                
               
            </Routes>
           
        </BrowserRouter>
    )
}
export default Header;