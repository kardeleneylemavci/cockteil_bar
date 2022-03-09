import React, { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';
import { Box, TextField, FormHelperText, MenuItem, Select, InputLabel, FormControl, TableCell, TableBody, Paper, TableContainer, Table, TableHead, TableRow } from '@mui/material';


function CocktailBar() {
  const [allCockteils, SetAllCockteils] = useState([]);
  const [allIngredients, SetAllIngredients] = useState([]);
  const [allGlasses, SetAllGlasses] = useState([]);
  const [allCategories, SetAllCategories] = useState([]);
  const [alcoholicTypes, SetAlhocolicTypes] = useState([]);
  const [ownerName, SetOwnerName] = useState(null);
  const [ownerLastname, SetOwnerLastname] = useState(null);
  const [ownerPhoneNumber, SetOwnerPhoneNumber] = useState(null);
  const [ownerEmail, SetOwnerEmail] = useState(null);
  const [Category, SetCategory] = useState();
  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/search.php?s")
      .then(res => {
        SetAllCockteils(res.data.drinks);
        console.log(res.data);

      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list")
      .then(res => {
        SetAllIngredients(res.data.drinks);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?g=list")
      .then(res => {
        SetAllGlasses(res.data.drinks);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list")
      .then(res => {
        SetAllCategories(res.data.drinks);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  useEffect(() => {
    axios.get("https://www.thecocktaildb.com/api/json/v1/1/list.php?a=list")
      .then(res => {
        SetAlhocolicTypes(res.data.drinks);
      })
      .catch(err => {
        console.log(err);
      })
  }, []);
  const handleChange = (event) => {
    alert();
    SetCategory(event.target.value);
    console.log(Category);

  }
  return (
    <div>
      <div className='row'>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Dessert (100g serving)</TableCell>
                <TableCell align="right">Calories</TableCell>
                <TableCell align="right">Fat&nbsp;(g)</TableCell>
                <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                <TableCell align="right">Protein&nbsp;(g)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {allCategories ?
                allCategories.map((item) => (
                  <TableRow
                    key={item.idDrink}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {item.strCategory}
                    </TableCell>
                    <TableCell component="th" scope="row">
                      {item.strCategory}
                    </TableCell>
                  </TableRow>
                )) : null
              }
            </TableBody>
          </Table>
        </TableContainer>
        )
        <div className='textBox1'>
          HAPPY COCKTEİL
        </div>
      </div>
      <div className='Row'>
        <div className='input_box'>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1, width: '500px' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" label="Name Of Cockteil Bar" variant="outlined" color="secondary" />
            <br />
            <TextField id="outlined-basic" label="First Name" variant="outlined" onChange={(e) => SetOwnerName(e.target.value)} />
            <TextField id="outlined-basic" label="Last Name" variant="outlined" onChange={(e) => SetOwnerLastname(e.target.value)} />
            <br />
            <TextField id="outlined-basic" label="Phone Number" variant="outlined" onChange={(e) => SetOwnerEmail(e.target.value)} />
            <br />
            <TextField id="outlined-basic" label="Email Adress" variant="outlined" onChange={(e) => SetOwnerPhoneNumber(e.target.value)} />
            <br />
          </Box>

        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">Category</InputLabel>
            {console.log(Category, allCategories)}
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              defaultValue={Category}
              label="Category"
              //onChange={(e) => SetCategory(e.target.value)}
              onChange={(e)=>handleChange(e)}
            >
              {

                allCategories.map((item, i) => {
                  return (
                    <MenuItem key={i} value={item.strCategory} >{item.strCategory} asda</MenuItem>

                  );

                })
              }

            </Select>
            <FormHelperText>Please Select Category</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">Alcoholic Types</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={alcoholicTypes}
              label="AlcoholicTypes"
              onChange={handleChange}
            >

              <MenuItem value={10}>alcoholic</MenuItem>

            </Select>
            <FormHelperText>Please Select Alcoholic Types</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">Alcoholic Types</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={alcoholicTypes}
              label="AlcoholicTypes"
              onChange={(e) => (e.target.value)}
            >

              <MenuItem value={10}>alcoholic</MenuItem>
              <MenuItem value={20}>Non-Alcoholic</MenuItem>
              <MenuItem value={30}>Optional Alcoholic</MenuItem>
            </Select>
            <FormHelperText>Please Select Alcoholic Types</FormHelperText>
          </FormControl>
        </div>
        <div>
          <FormControl sx={{ m: 1, minWidth: 200 }}>
            <InputLabel id="demo-simple-select-helper-label">Alcoholic Types</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={alcoholicTypes}
              label="AlcoholicTypes"
              onChange={handleChange}
            >

              <MenuItem value={10}>alcoholic</MenuItem>
              <MenuItem value={20}>Non-Alcoholic</MenuItem>
              <MenuItem value={30}>Optional Alcoholic</MenuItem>
            </Select>
            <FormHelperText>Please Select Alcoholic Types</FormHelperText>
          </FormControl>
        </div>
      </div>
    </div>

  );
}

export default CocktailBar;
