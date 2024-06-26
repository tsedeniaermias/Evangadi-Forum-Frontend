import React, { useEffect, useState, createContext } from "react";
import Home from "./pages/Home/Home";
import { Route, Routes, useNavigate } from "react-router-dom";
import axios from "./Api/axiosConfig";
import Askquestion from "./pages/AskquestionsPage/Askquestion";
import QuestionDetail from "./pages/QuestiondescPage/QuestionDetail";
import Auth from "./pages/Auth/Auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LayOut from "./Components/Layout/Layout";

export const AppState = createContext();

function App() {
  const [user, setUser] = useState({});

  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  async function checkUser() {
    try {
      const { data } = await axios.get("/users/check", {
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      setUser(data);
    } catch (error) {
      console.log(error.message);
      setUser(error.response.data);
      navigate("/");
    }
  }

  useEffect(() => {
    checkUser();
  }, []);

  return (
    <AppState.Provider value={{ user, setUser }}>
      <ToastContainer />
      <LayOut>
        <Routes>
          
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} />        
          <Route path="/askquestions" element={<Askquestion />} />
          <Route
            path="/answerquestions/:questionid"
            element={<QuestionDetail />}
          />
        </Routes>
      </LayOut>
    </AppState.Provider>
  );
}

export default App;
