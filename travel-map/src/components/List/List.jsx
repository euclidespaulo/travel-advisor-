import React, {useState} from 'react';
import { Grid, Typography, FormControl} from '@mui/material';
import {PlaceDetails} from '../PlaceDetails/PlaceDetails';

const List = ({places}) => {
    const[type, setType] = useState('restaurant');
    const[rating, setRating] = useState('');

  
    return(
        <div sx={{padding: '25px'}}>
            <Typography variant='h4'>Restaurant, Hotels & Attractions around you</Typography>
            <FormControl sx={{ margin: spacing(1), minWidth: 120, marginBottom: '30px'}}>
                <InputLabel>Type</InputLabel>
                <Select value={type} onChange={e => setType(e.target.value)}>
                    <MenuItem value="restaurants"> Restaurants</MenuItem>
                    <MenuItem value="hotels">Hotels</MenuItem>
                    <MenuItem value="attraction">Attraction</MenuItem>
                </Select>      
            </FormControl>
            <FormControl sx={{ margin: spacing(1), minWidth: 120, marginBottom: '30px'}}>
                <InputLabel>Rating</InputLabel>
                <Select value={rating} onChange={e => setRating(e.target.value)}>
                    <MenuItem value={0}>All</MenuItem>
                    <MenuItem value={3}>Above 3.0</MenuItem>
                    <MenuItem value={4}>Above 4.0</MenuItem>
                    <MenuItem value={4.5}>Above 4.5</MenuItem>
                </Select>    
            </FormControl>
            <Grid container spacing={3} sx={{ height: '75vh', overflow: 'auto',}}>
                {places?.map((place, i) => (
                    <Grid item key={i} xs={12}>
                        <PlaceDetails place={place}/>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
} 

export default List;