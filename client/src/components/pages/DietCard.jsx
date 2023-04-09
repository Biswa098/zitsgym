import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const DietCard = ({ diet }) => (
    <Card  raised
  sx={{
    maxWidth: 280,
    margin: "0 auto",
    padding: "0.1em",
  }}>
      <CardMedia
    component="img"
    height="200"
    image={diet.img}
    alt={"alt"}
    title={diet.name}
    sx={{ padding: 0, objectFit: "contain" }}
  />
      <CardContent style={{backgroundColor:'#111'}}>
        <Typography gutterBottom variant="h5" component="div" color='white'>
        {diet.name.toUpperCase()}
        </Typography>
        <Typography variant="body2"  fontWeight={700} color='var(--orange)'>
         {diet.serving_size_g}gm of {diet.name} have <br/>
         <Button size="small" className='btn shake' style={{color:'#FFA500'}}>Protien:<span style={{color:'white'}}>&nbsp;{diet.protein_g}</span></Button> 
         <Button size="small" className='btn shake' style={{color:'#FFA500'}}>Calories:<span style={{color:'white'}}>&nbsp;{diet.calories}</span></Button> 
         <Button size="small" className='btn shake' style={{color:'var(--orange)'}}>Fat:<span style={{color:'white'}}>&nbsp;{diet.fat_total_g}</span></Button> 
         <Button size="small" className='btn shake' style={{color:'#FFA500'}}>Sodium:<span style={{color:'white'}}>&nbsp;{diet.sodium_mg}</span></Button> 
         <Button size="small" className='btn shake' style={{color:'var(--orange)'}}>Potassium:<span style={{color:'white'}}>&nbsp;{diet.potassium_mg}</span></Button> 
         <Button size="small" className='btn shake' style={{color:'#FFA500'}}>Cholesterol:<span style={{color:'white'}}>&nbsp;{diet.cholesterol_mg}</span></Button> 
         <Button size="small" className='btn shake' style={{color:'var(--orange)'}}>Carbohydrates:<span style={{color:'white'}}>&nbsp;{diet.carbohydrates_total_g}</span></Button> 
         <Button size="small" className='btn shake' style={{color:'#FFA500'}}>Fiber:<span style={{color:'white'}}>&nbsp;{diet.fiber_g}</span></Button> 
         <Button size="small" className='btn shake' style={{color:'var(--orange)'}}>Sugar:<span style={{color:'white'}}>&nbsp;{diet.sugar_g}</span></Button> 
        </Typography>
      </CardContent>
    </Card>
);
export default DietCard;
