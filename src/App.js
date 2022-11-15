import { createBrowserRouter,RouterProvider} from "react-router-dom";
import './App.css';
import CreateUserPage from "./pages/CreateUser";
import Login from "./pages/Login";
import UserProfile from "./pages/UserProfile";
import Header from "./components/Header"; 

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
    path: "/",
    element: < />,  // retrieving from home.js 
  },
]);

function App() {
  return (
    <div className="App">
  
    </div>
  );
}

export default App;
