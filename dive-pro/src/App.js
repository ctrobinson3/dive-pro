import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home'
import Hub from './pages/Hub'
import Profile from './pages/Profile'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import ForgotPassword from './pages/ForgotPassword'
import SelectEvent from './pages/SelectEvent'
import SixDiveCreate from './pages/SixDiveCreate/SixDiveCreate'
// import ElevenDiveCreate from './pages/ElevenDiveCreate/ElevenDiveCreate'
import ElevenDiveCreate from './pages/newElevenDiveCreate/ElevenDiveCreate'

function App() {
  return (
    <>
      <Router>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/create' element={<SelectEvent />} />
          <Route path='/hub' element={<Hub />} />
          {/* Wraping an element in "PrivateRoute" makes it so you can only access that page if logged in */}
          <Route path='/profile' element={<PrivateRoute />} >
            <Route path='/profile' element={<Profile />} /> </Route>
          {/*  */}
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgotpassword' element={<ForgotPassword />} />
          <Route path='/create-six-dive' element={<SixDiveCreate />} />
          <Route path='/create-eleven-dive' element={<ElevenDiveCreate />} />
        </Routes>
        <Navbar />
      </Router>

      <ToastContainer />
    </>
  );
}

export default App;