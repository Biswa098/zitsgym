import React from 'react';
import { Typography, Box, Stack } from '@mui/material';

import HorizontalScrollbarexercise from './HorizontalScrollbarexercise.js';
import Loader from './Loader';

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: '100px', xs: '0px' } }}>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px' }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
    </Typography>
    <Box sx={{ position: "relative",  p: "10px" }}>
      {targetMuscleExercises.length !== 0 ? <HorizontalScrollbarexercise data={targetMuscleExercises} /> : <Loader />}
    </Box>
    <Typography sx={{ fontSize: { lg: '44px', xs: '25px' }, ml: '20px', mt: { lg: '100px', xs: '60px' } }} fontWeight={700} color="#000" mb="33px">
      Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
    </Typography>
    <Stack  sx={{ p: 2, position: 'relative' }}>
      {equipmentExercises.length !== 0 ? <HorizontalScrollbarexercise data={equipmentExercises} /> : <Loader />}
    </Stack> 
  </Box>
);

export default SimilarExercises;