import React from 'react';
import { AppBar, Container, Toolbar, Typography, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    but:{
        backgroundColor: '#cccc00',
        "&:hover":{
            color: 'black',
            backgroundColor: '#e6e600'
        } 
    }
}))

const NavBar = (props) => {
    const classes = useStyles();
    let history = useHistory();

    function handleClickCreate() {
        history.push("/creator");
    }

    function handleClickHeroes() {
        history.push('/heroes');
        //props.getAllHeroes();
    }

    return (
        <>
        
        <AppBar className={classes.nav} position='relative' >
            <Container fixed>
                
                <Toolbar>
                    <Typography variant='button' className={classes.title} >Superheroes</Typography>
                    <Box mr={2}>
                        <Button color="inherit" variant='outlined' onClick={handleClickHeroes }>Heroes</Button>
                    </Box>
                    <Button variant='contained' className={classes.but} onClick={  handleClickCreate  } >Create</Button>
                </Toolbar>

            </Container>
        </AppBar>
        
        </>
    )
};

export default NavBar