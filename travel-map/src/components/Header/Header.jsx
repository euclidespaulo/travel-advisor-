import React from "react";
import { Autocomplete } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";
import SeachIcon from '@material-ui/icons/Search';


import useStyles from './style'

const Header = () => {

    const classes = useStyles();

    return (
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={classes.titles}>
                Travel Advisor 
            </Typography>
            <Box display="flex">
                <Typography variant="h6" className={classes.title}>
                    Explore new places 
                </Typography>
              {/* < Autocomplete> */}
                    <div className={classes.search}>
                            <div className={classes.searchIcon}>
                                <SeachIcon />
                            </div>
                            <InputBase placeholder="Search..." classes={{root: classes.InputRoot, input: classes.input}} />
                    </div>
               {/* </Autocomplete> */}
            </Box>
        </Toolbar>
      
      </AppBar>
    )
};

export default Header;