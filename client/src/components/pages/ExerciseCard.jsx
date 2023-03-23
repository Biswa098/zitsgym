import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { Box } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Box 
  backgroundColor= 'grey'
  color= 'white'
  borderRadius={"5%"}
 >
  <Link className="exercise-card" to={`/exercise/${exercise.id}`} style={{textDecoration: 'inherit'}}>
    <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
    <Stack direction="row">
      <Button sx={{ ml: '21px', color: '#fff', background: '#FFA9A9', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.bodyPart}
      </Button>
      <Button sx={{ ml: '21px', color: '#fff', background: '#FCC757', fontSize: '14px', borderRadius: '20px', textTransform: 'capitalize' }}>
        {exercise.target}
      </Button>
    </Stack>
    <Typography ml="22px" width='90%' color="var(--orange)" fontWeight="bold" sx={{ fontSize: { lg: '12px', xs: '20px' } }} mt="11px" pb="10px" textTransform="capitalize" alignItems='center'>
      {exercise.name}
    </Typography>
  </Link>
  </Box>
);
export default ExerciseCard;
