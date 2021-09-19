import React from 'react'
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) =>({
    image: {
        maxHeight: 500,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    }
}))

const Home = () =>{
    const classes = useStyles();

    return (

        <Paper className={classes.image} >
                <img className={classes.img} alt='Superheroes' src='https://scontent.fdnk3-2.fna.fbcdn.net/v/t1.6435-9/128041140_10158771997692156_7912342912263406523_n.png?_nc_cat=102&ccb=1-3&_nc_sid=e3f864&_nc_ohc=mJ8Mq0LZJZ8AX-npjy3&_nc_ht=scontent.fdnk3-2.fna&oh=1595f81ab1551edc50209efd3271e547&oe=61293AC1' />
        </Paper>
    )
}

export default Home