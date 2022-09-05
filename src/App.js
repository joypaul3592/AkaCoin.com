import logo from './logo.svg';
import './App.css';
import "@fontsource/lato";
import { Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Akacoin from './Components/Home/Akacoin/Akacoin';
import Wallet from './Components/Home/Wallet/Wallet';
import Guide from './Components/Home/Guide/Guide';
import Login from './Components/SocialLogin/Login/Login';
import SignUp from './Components/SocialLogin/SignUp/SignUp';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashbord from './Components/Dashbord/Dashbord';
import Admin from './Components/Dashbord/Admin';
import AddWalet from './Components/Dashbord/AddWalet';
import MakeAdmin from './Components/Dashbord/MakeAdmin';
import ManageWallet from './Components/Dashbord/ManageWallet';

function App() {
  AOS.init();
  return (
    <div className="App overflow-hidden">

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ako" element={<Akacoin />} />
        <Route path="/buy" element={<Wallet />} />
        <Route path="/buy2" element={<Wallet />} />
        <Route path="/community" element={<Guide />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashbord" element={<Dashbord />} >
          <Route path="admin" element={<Admin />} />
          <Route path="addwallet" element={<AddWalet />} />
          <Route path="makeadmin" element={<MakeAdmin />} />
          <Route path="managewallet" element={<ManageWallet />} />
        </Route>
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
