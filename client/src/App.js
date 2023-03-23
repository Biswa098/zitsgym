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
function App() {
  const [ apidata1, setApidata1 ] = useState([]);
  const [ apidata2, setApidata2 ] = useState([]);
  useEffect(() => {
    async function fetchExercises() {
      const res = await fetch("https://zitsgym.onrender.com/api/v2/exercises");
      var data = await res.json();
      setApidata1(data);
      console.log(data);
    }
    async function fetchDiets() {
      const res = await fetch("https://zitsgym.onrender.com/api/v1/diets");
      var data = await res.json();
      setApidata2(data);
      console.log(data);
    }
    fetchExercises();
    fetchDiets();
  }, []);
  return (
    <div className="App">
      <Hero />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Program />
                <Reason />
                <Testimonial />
                <Join />
              </>
            }
          />
          <Route path="/exercises" element={<Exercises apidata={apidata1} />} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/diets" element={<Diets apidata={apidata2} />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
