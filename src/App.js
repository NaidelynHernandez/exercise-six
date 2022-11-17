import {useEffect, useState} from "react"
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import {initializeApp} from "firebase/app";
import {getAuth,onAuthStateChanged} from "firebase/auth";

//styles and components 
import './App.css';
import CreateUserPage from "./pages/CreateUser";
import LoginPage from "./pages/Login";
import UserProfilePage from "./pages/UserProfile";
import Header from "./components/Header"; 

const firebaseConfig = {
  apiKey: "AIzaSyCdH4pEa1ytR_MgbIO_cYSwf1uyW2sNVSU",
  authDomain: "exercise-six-57111.firebaseapp.com",
  projectId: "exercise-six-57111",
  storageBucket: "exercise-six-57111.appspot.com",
  messagingSenderId: "207757414629",
  appId: "1:207757414629:web:3f8b9f0e5a650682be040c"
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <UserProfilePage/>,  // retrieving from home.js 
  },
  {
    path: "/login",
    element: <LoginPage/>,  // retrieving from home.js 
  },
  {
    path: "/create",
    element: <CreateUserPage />,  // retrieving from home.js 
  },
]);

function App() {
  const [appInitialized,setAppInitialized]= useState(false);
  const[isLoading,setIsLoading]= useState(true);
  const[isLoggedIn,setIsLoggedIn]= useState(false);
  const [userInformation, setUserInformation]= useState({});
  

  useEffect(()=> {
    if (appInitialized) {
      const auth =getAuth();
      onAuthStateChanged(auth,(user)=>{
        if (user) {
          setUserInformation(user);
          setIsLoggedIn(true);
        } else{
          setUserInformation ({});
          setIsLoggedIn (false); 
        }
        setIsLoading(false);
      });
    }
  }, [appInitialized]);


  return (
    <div className="App">
    <Header/> 
    <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
