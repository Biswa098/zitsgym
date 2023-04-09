import React, {useState} from 'react';
import { TextField, Button, Container, Stack } from '@mui/material';
import { Link } from "react-router-dom"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import axios from 'axios';
 
const RegisterForm = ({email}) => {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [emaill, setEmaill] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [height, setHeight] = useState('')
    const [bw, setBw] = useState('')
 
    async function  handleSubmit (event) {
        event.preventDefault();
        console.log(firstName, lastName, emaill, dateOfBirth, bw, height);
        await axios({
            method: "POST",
            url: `https://zitsgym.onrender.com/api/v2/users/edit/${email}`,
            headers: {},
            data: {
              name: firstName,
              phone: lastName,
              age: dateOfBirth,
              bw: bw,
              height: height,
              sex: emaill,
            },
          })
            .then((res) => {
              window.alert('Succesfully updated,Go back')
            })
            .catch((err) => {
              console.log("error in request", err);
            });
            setFirstName('');
            setLastName('');
            setEmaill('');
            setDateOfBirth('');
            setHeight('');
            setBw('');
    }
 
    return (
        <div style={{display:'flex',justifyContent:'center'}}>
            <div style={{display:'flex',justifyContent:'center',backgroundColor:'white',padding:'1rem'}}>
            <React.Fragment>
            <form onSubmit={handleSubmit} action={<Link to="/profile" />}>
                <Stack spacing={2} direction="row" sx={{marginBottom: 4}}>
                    <TextField
                        type="text"
                        variant='outlined'
                        color='secondary'
                        label="Name"
                        onChange={e => setFirstName(e.target.value)}
                        value={firstName}
                        fullWidth
                        required
                    />
                    <TextField
                        type="number"
                        variant='outlined'
                        color='secondary'
                        label="Phone"
                        onChange={e => setLastName(e.target.value)}
                        value={lastName}
                        fullWidth
                        required
                    />
                </Stack>
                <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        onChange={e => setEmaill(e.target.value)}
        required
      >
        <FormControlLabel value="female" control={<Radio required={true}/>} label="Female" />
        <FormControlLabel value="male" control={<Radio required={true}/>} label="Male" />
        <FormControlLabel value="other" control={<Radio required={true}/>} label="Other" />
      </RadioGroup>
    </FormControl>
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Height"
                    onChange={e => setHeight(e.target.value)}
                    value={height}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Body Wieght"
                    onChange={e => setBw(e.target.value)}
                    value={bw}
                    required
                    fullWidth
                    sx={{mb: 4}}
                />
                <TextField
                    type="number"
                    variant='outlined'
                    color='secondary'
                    label="Age"
                    onChange={e => setDateOfBirth(e.target.value)}
                    value={dateOfBirth}
                    fullWidth
                    required
                    sx={{mb: 4}}
                />
                <Button variant="outlined" color="secondary" type="submit">Register</Button>
                <Link to="/profile" ><Button variant="outlined" color="secondary" style={{marginLeft:'1rem',textDecoration:'none'}}>Go back</Button></Link>
            </form>
     
        </React.Fragment>
            </div>
        </div>
    )
}
 
export default RegisterForm;