import React, { useState,useEffect } from 'react'
import ExerciseCard from './ExerciseCard'
import { Box, Stack, Typography } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import Loader from "./Loader.js";
import SearchExercises from "./SearchExercises";
import { useNavigate } from "react-router-dom";

const Exercises = ({apidata}) => {
  const navigate = useNavigate();
  const userValid = ()=>{
    let token = localStorage.getItem("userdbtoken");
    if(token){
      console.log(token)
    }else{
      navigate("/error")
    }
  }
  useEffect(()=>{
    userValid();
  },[]);
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);
  const [exercises,setExercises] = useState(apidata);
  const [bodyPart, setBodyPart] = useState('all');
  // Pagination
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );
  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 800, behavior: "smooth" });
  };

  if (!currentExercises.length) return <Loader />;
  return (
    <>
    <SearchExercises exercises={apidata} setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart}/>
    <Box
      id="exercises"
      sx={{ mt: { lg: "109px" } }}
      mt="50px"
      p="20px"
      bgcolor="transparent"
    >
      <Typography
        fontWeight="bold"
        sx={{ fontSize: { lg: "50px", xs: "30px" } }}
        mb="46px"
        color={'white'}
        className="stroke-text"
      >
        Showing Results
      </Typography> 
      <Stack
        direction="row"
        sx={{ gap: { lg: "107px", xs: "50px" } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise, idx) => (
          <ExerciseCard key={idx} exercise={exercise} />
        ))}
      </Stack>
      <Stack sx={{ mt: { lg: "114px", xs: "70px" } }} alignItems="center">
        {exercises.length > 9 && (
          <Pagination
            color="primary"
            shape="rounded"
            defaultPage={1}
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
    </>
  );
}

export default Exercises