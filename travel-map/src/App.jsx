import React from 'react';
import {CardHeader, CssBaseline, Grid} from '@mui/material';

import Head from "./components/Head/Head";
import List from "./components/List/List";
import Map from "./components/Map/Map";
import PlaceDetails from "./components/PlaceDetails/PlaceDetails";

const App = () => {
  return(
    <>
      <CssBaseline />
      <CardHeader />
      <Grid container spacing={3} style={{width: '100%'}} >
          <Grid item xs={12} md={4} >
            <List />
            <h1></h1>
          </Grid>
          <Grid item xs ={12} md={8}>
            <Map />
          </Grid>
      </Grid>
    </>
  );
 }

 export default App;

