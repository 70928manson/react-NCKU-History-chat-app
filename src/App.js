import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";  //createContext

function App() {
  const { currentUser } = useContext(AuthContext);  //拿到值不用<Consumer>包

  // console.log('current user: ', currentUser);
  
  //若未登入，導航至登入頁面
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/react-NCKU-History-chat-app/login" />;
    }

    return children
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/react-NCKU-History-chat-app">
          <Route index 
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            } />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
