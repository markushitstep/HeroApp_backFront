import React from 'react'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core'
import Pagination from '@material-ui/lab/Pagination'
import { makeStyles } from '@material-ui/core/styles'
import styles from './Heroes.module.css'
import ModalWindowC from '../ModalWindowC/ModalWindowC'


const useStyles = makeStyles((theme) => ({
    cardMedia: {
        paddingTop: '65.15%'
    },
    pag: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 10
    }
}))
const Heroes = (props) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hero, setHero] = React.useState(null);
    console.log(props)

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let onPageChanged = (pageNumber) => {
        props.onPageChanged(pageNumber, props.pageSize)
    }

    const handleClose = () => {
        setOpen(false);
        setHero(null);
    }

    let edit = (h) => {
        setHero(h);
        setOpen(true);
    }

    return (
        <Container fixed style={{ marginTop: 14 }}>


            <Button onClick={() => props.getAllHeroes(props.currentPage, props.pageSize)}>Click</Button>
            <Pagination className={classes.pag} count={pagesCount} onChange={(event, val) => onPageChanged(val)} />
            <Grid container spacing={3}>
                {props.heroes.map(hero =>
                    <Grid item key={hero._id} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography variant='h6' paragraph >
                                    {hero.name}
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Real Name: {hero.realName}
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Description: {hero.originDescription}
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Super Powers: {hero.superPowers}
                                </Typography>
                                <Typography variant='subtitle1'>
                                    Catch Phrase: {hero.catchPhrase}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary" onClick={() => edit(hero)}>
                                    Edit
                                </Button>
                                <Button size="small" color="primary">
                                    Delete
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                )}
            </Grid>
            { open &&
                <ModalWindowC edit={edit} handleClose={handleClose} hero={hero} open={open}/>
            }
        </Container>
    )
}

export default Heroes