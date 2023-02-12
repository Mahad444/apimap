import React from 'react';

import {CssBaseline,Grid} from '@material-ui/core';


import Header from './components/Header/header';
import List from './components/List/list';
import placeDetails from './components/PlaceDetails/placeDetails';
import Map from './components/Maps/maps';

function App() {
  return (
    <>
    <CssBaseline />
    <Header />
    <Grid container spacing={3} style={{width:'100%'}}>
      <Grid item xs={12} md={4} >
        <List/>
      </Grid>
      <Grid item xs={12} md={8}>
        <Map/>
      </Grid>

    </Grid>
      
     
    </>
  );
}

export default App;
