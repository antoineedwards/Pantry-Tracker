import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
const App = () => {
  return (
    <div>
      <>
        <CssBaseline />
        <AppBar position='relative' color='default'>
          <Toolbar>
            <PhotoCamera />
            <Typography variant='h6'>Antoine Edwards</Typography>
          </Toolbar>
        </AppBar>
      </>
    </div>
  )
}

export default App; 
