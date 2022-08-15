import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Signin from './components/Signin/Signin';
import SignUp from './components/Signup/SignUp';
import AuthProvider from './contexts/AuthProvider';
import CloudRequest from './components/CloudRequest/CloudRequest';
import Navbar from './components/Navbar/Navbar';
import PrivateRoute from './components/Signin/PrivateRoute/PrivateRoute';
import FilterManagement from './components/FilterManagement/FilterManagement';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<PrivateRoute><CloudRequest/></PrivateRoute>}></Route>
        <Route path='/filtermanagement' element={<PrivateRoute><FilterManagement/></PrivateRoute>}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
      </Routes>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
