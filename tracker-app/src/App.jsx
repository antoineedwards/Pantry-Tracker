'use client'
import React from 'react';
import { Box, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar } from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { makeStyles } from '@mui/material/styles'
import { useState, useEffect } from 'react';
import { firestore } from '/firebase';

function App() {
  const [inventory, setInventory] = useState([])
  const [open, setOpen] = useState(false)
  const [itemname, setItemName] = useState('')

const updateInventory = async () => {
  const snapshot = query(collection(firestore, 'inventory'))
  const docs = await getDocs(snapshot)
  docs.forEach((doc)=>{
   inventoryList.push({
    name: doc.id,
    ...doc.data(),
  })
  setInventory(inventoryList)
})
}

useEffect(() => {
  updateInventory()
}, [])
  return (
    <Box>
      <Typography variant='h1'>Inventory Tracker</Typography>
      {
        inventory.forEach(item) 
      }
    </Box>
  )
}

export default App; 
