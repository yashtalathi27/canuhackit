import {useEffect, useState} from 'react'
import './App.css'
import Header from '../src/components/header/header';

import {useAppStore} from "./store/index.js";
import MyAllGames from './components/MyAllGames.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import axios from "axios";
import Reviews from './components/Reviews.jsx';
import Start from './components/Start.jsx';
import Home from './components/Home.jsx';
import Footer from './components/footer.jsx';
import {ChatPage} from "./components/ChatPage.jsx";
import Profile from './components/Profile.jsx';

function App() {
  const [count, setCount] = useState(0)

  const {userInfo, setUserInfo} = useAppStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUserData = async () => {

      try {
        const response = await axios.get('http://localhost:6005/login/sucess', {withCredentials: true});
        console.log("response", response);
        if (response.status === 200) {
          setUserInfo(response.data.user);
        } else {
          setUserInfo(undefined);
        }
      } catch (err) {
        setUserInfo(undefined);
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    if (!userInfo) {

      getUserData();
    } else {
      setLoading(false);
    }
  }, [userInfo, setUserInfo]);

  if (loading) {
    return <div>Loading.....</div>;
  }

  

  return (
   
    <>
    
      <BrowserRouter>
      <Header />
      <div > {/* Add margin to avoid overlap with the fixed header */}
        <Routes>
          <Route path="/" element={<Start/>} />
          <Route path="/allgames" element={<MyAllGames />} />
          <Route path="/allgames/Review" element={<Reviews />} />
          <Route path="/home" element={<Home/>} />
          <Route path={"/chat"} element={<ChatPage/>}/>
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </>
  )
}
export default App
