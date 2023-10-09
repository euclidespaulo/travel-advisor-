import React from "react";
import { Autocomplet } from "@react-google-maps/api";
import { AppBar, Toolbar, Typography, InputBase, Box } from "@material-ui/core";

const Header = () => {
    return (
      <AppBar position='static'>
        <Toolbar className={classes.toolbar}>
            <Typography variant='h5' className={ClassNames.titles}>
                Travel Advisor 
            </Typography>
        </Toolbar>
        <Autocomplet>
            <div className={classes.search}>
                <div className={classes.searchIcon}>
                    <searchIcon />
                </div>
                <InputBase placeholder="Search..." classes={{root: classes.InputRoot, input: classes.input}} />
            </div>
        </Autocomplet>
      </AppBar>
    )
};

export default Header;