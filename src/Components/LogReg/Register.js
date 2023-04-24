import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { createUserWithEmailAndPassword } from "firebase/auth"
import { auth } from "../Firebase"
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AssignmentTurnedInOutlinedIcon from '@mui/icons-material/AssignmentTurnedInOutlined';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import InputLabel from '@mui/material/InputLabel';




const Register = () => {
  const [ambutype, setambutype] = React.useState('');

  const handleChange = (event) => {
    setambutype(event.target.value);
  };


  const [regemail, setregemail] = useState("")
  const [regpassword, setregpassword] = useState("")

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth, regemail, regpassword)
      console.log(alert(" Succesfully Registered !! "))
      console.log(user)
    } catch (error) {
      console.log(error.message);
      console.log(alert("Some Error Occured "))
    }
  }


  return (
    <>
      <div className='Reg-main'>
        <div className='Reg-inputs'>
          <h1> Personel data</h1>
          <div className='reg-inp-1'>
            <TextField className='input' sx={{ m: 1 }} fullWidth id="outlined-basic" label="Name" variant="outlined" />
          </div>
          <div className='reg-inp-2'>
            <TextField className='input' sx={{ width: 350, m: 1 }} wi id="outlined-basic" label="Phone Number" variant="outlined" />
            <TextField className='input' sx={{ width: 350, m: 1 }} id="outlined-basic" label="Email" type='email' variant="outlined" />
          </div>
          <div className='reg-inp-3'>
            <TextField className='input' sx={{ width: 705, m: 1 }} fullWidth id="outlined-basic" label="Address" variant="outlined" />
          </div>
          <br />
          <h1> Vehicle data</h1>
          <br />
          <h4> General Info </h4>
          <div className='reg-veh'>
            <TextField className='input' sx={{ width: 300, m: 1 }} wi id="outlined-basic" label="Vehicle Number" variant="outlined" />
            <FormControl sx={{ width: 300, height: 100 }}>
              <InputLabel id="demo-simple-select-helper-label">Type of Ambulance</InputLabel>
              <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={ambutype}
                label="Type of Ambulance"
                onChange={handleChange}
              >
                <MenuItem value={"Basic Ambulance"}>Basic Ambulance </MenuItem>
                <MenuItem value={"ICU Ambulance"}>ICU Ambulance </MenuItem>
                <MenuItem value={"Dead Body Ambulance"}>Dead Body Ambulance </MenuItem>
              </Select>
            </FormControl>
          </div>

          <h4> 1.  Documents </h4>
          <div className='reg-veh'>

            <Button variant="outlined" sx={{ width: 220, m: 1 }} component="label" > <AssignmentTurnedInOutlinedIcon /> Vehicle RC <input type="file" hidden /> </Button>
            <Button variant="outlined" sx={{ width: 220, m: 1 }} component="label" > <AssignmentTurnedInOutlinedIcon /> Licience <input type="file" hidden /> </Button>
            <Button variant="outlined" sx={{ width: 220, m: 1 }} component="label" > <AssignmentTurnedInOutlinedIcon /> Address Proof <input type="file" hidden /> </Button>
          </div>
          <div>
            <h4> 2.  Ambulance Photos </h4>
            <br />
            <Button variant="outlined" sx={{ width: 220, m: 1 }} component="label" > <AddAPhotoIcon /> Image 1 <input type="file" hidden /> </Button>
            <Button variant="outlined" sx={{ width: 220, m: 1 }} component="label" > <AddAPhotoIcon /> Image 2 <input type="file" hidden /> </Button>
            <Button variant="outlined" sx={{ width: 220, m: 1 }} component="label" > <AddAPhotoIcon /> Image 3 <input type="file" hidden /> </Button>
          </div>
          <div className='reg-btn'>
            <br/>
            <br/>
            <br/>
            <Button variant="contained" sx={{ width: 200, m: 1 }} color="success"> Submit </Button>
          </div>
        </div>

      </div>

    </>

  )
}

export default Register