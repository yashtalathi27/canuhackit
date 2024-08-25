import {useEffect, useState} from 'react'
import './App.css'
import Header from '../src/components/header/header';
import Home from './components/Home';
import {useAppStore} from "./store/index.js";
import MyAllGames from './components/MyAllGames.jsx';
import Signup from './components/signup.jsx';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Review from './components/Review.jsx';

import axios from "axios";

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
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/allgames" element={<MyAllGames />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/:name" element={<Review />} />
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
