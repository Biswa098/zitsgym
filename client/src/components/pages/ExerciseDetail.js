import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';

import { fetchData, youtubeOptions } from '../utils/fetchData.js';
import Detail from './Detail.js';
import ExerciseVideos from './ExerciseVideos.js';
import SimilarExercises from './SimilarExercises.js';

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const fetchExercisesData = () => {

      const youtubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const request = async () => {
          const response = await fetch(`https://zitsgym.onrender.com/api/v2/exercises/exercise/${id}`);
          const json = await response.json();
          setExerciseDetail(json[0]);
          
          const exerciseVideosData = await fetchData(`${youtubeSearchUrl}/search?query=${json[0].name} exercise`, youtubeOptions);
          setExerciseVideos(exerciseVideosData.contents);
          console.log(exerciseVideosData.contents)

          fetch(`https://zitsgym.onrender.com/api/v2/exercises/target/${json[0].target}`)
          .then((response) => response.json())
          .then((data) => setTargetMuscleExercises(data));
   
         fetch(`https://zitsgym.onrender.com/api/v2/exercises/equipment/${json[0].equipment}`)
          .then((response) => response.json())
          .then((data) => setEquipmentExercises(data));
      }
      
      request();
  
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail) return <div>No Data</div>;

  return (
    <Box sx={{ mt: { lg: '96px', xs: '60px' } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
    </Box>
  );
};

export default ExerciseDetail;