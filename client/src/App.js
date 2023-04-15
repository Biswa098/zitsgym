import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero.js";
import Join from "./components/join/Join";
import Diets from "./components/pages/Diets";
import ExerciseDetail from "./components/pages/ExerciseDetail";
import Exercises from "./components/pages/Exercises";
import Profile from "./components/pages/Profile";
import Program from "./components/programs/Program.jsx";
import Reason from "./components/Reasons/Reason";
import Testimonial from "./components/Testimonials/Testimonial";
import Login from './components/pages/Login';
import Resister from './components/pages/Resister';
import Otp from './components/pages/Otp'
import Error from './components/pages/Error';
import Edit from './components/pages/Edit';
import Reset from "./components/pages/Reset";
import Otpreset from "./components/pages/Otpreset";
import 'react-toastify/dist/ReactToastify.css';
function App() {
  const [ apidata1, setApidata1 ] = useState([]);
  const [ apidata2, setApidata2 ] = useState([]);
  useEffect(() => {
    async function fetchExercises() {
      const res = await fetch("https://zitsgym.onrender.com/api/v2/exercises");
      var data = await res.json();
      setApidata1(data);
    }
    async function fetchDiets() {
      const res = await fetch("https://zitsgym.onrender.com/api/v1/diets");
      var data = await res.json();
      setApidata2(data);
    }
    fetchExercises();
    fetchDiets();
  }, []);
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/resister" element={<Resister />} />
          <Route path="/otp" element={<Otp />} />
          <Route path="/otpreset" element={<Otpreset />} />
          <Route path="/error" element={<Error />} />
          <Route path="/edit" element={<><Hero /><Edit /></>} />
          <Route
            path="/home"
            element={
              <>
                <Hero />
                <Program />
                <Reason />
                <Testimonial />
                <Join />
              </>
            }
          />
          <Route path="/exercises" element={<><Hero /><Exercises apidata={apidata1} /></>} />
          <Route path="/exercise/:id" element={<><Hero /><ExerciseDetail /></>} />
          <Route path="/diets" element={<><Hero /><Diets apidata={apidata2} /></>} />
          <Route path="/profile" element={<><Hero /><Profile  /></>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
