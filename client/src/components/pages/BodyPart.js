import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart, exercises, setExercises}) => {
  const handelclik = () =>{
    if(item==='all'){
      setExercises(exercises)
    }
    else{
      const selectedExercises = exercises.filter((itx)=>itx.bodyPart===item);
      setExercises(selectedExercises);
    }
    setBodyPart(item);
    window.scrollTo({ top: 1700, left: 100, behavior: 'smooth' });
  }
return (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={bodyPart === item ? { borderTop: '7px solid #56fc6f', background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' } : { background: '#fff', borderBottomLeftRadius: '20px', width: '270px', height: '282px', cursor: 'pointer', gap: '47px' }}
    onClick={handelclik}
  >
    <img src={Icon} alt="dumbbell" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" fontFamily="Alegreya" color="#3A1212" textTransform="capitalize"> {item}</Typography>
  </Stack>
)};
export default BodyPart;
