import React, {useEffect} from "react"; 
import { useNavigate } from "react-router";
import LoginForm from "../components/LoginForm";
import Header from "../components/Header";

function LoginPage({isLoggedIn, setLoggedIn, setUserInformation}) {
    const navigate = useNavigate();
    
    useEffect(()=> {
        if(isLoggedIn) navigate("/");
    }, [isLoggedIn]); 

    return(
        <>
    <Header setLoggedIn={setLoggedIn} setUserInformation= {setUserInformation}/> 
            <div className="PageWrapper">
              <h1> Login</h1>
              <LoginForm /> 
            </div>
        </>
    );
}

export default LoginPage; 