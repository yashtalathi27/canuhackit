import {useEffect, useState} from 'react'
import './App.css'
import Header from '../src/components/header/header';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';
import {useAppStore} from "./store/store/index.js";
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
      <Header />
        <Outlet/>
    </>
  )
}

export default App
