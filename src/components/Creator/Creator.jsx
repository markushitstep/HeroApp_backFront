import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > *': {
            marginBottom: theme.spacing(1.5),
            width: 350,
        }
    },
    but: {
        width: 175,
        "&:hover": {
            color: 'black',
            backgroundColor: '#e6e600'
        }
    }
}));

const Creator = (props) => {
    const classes = useStyles();
    const { handleSubmit, control, reset } = useForm();
    const [open, setOpen] = React.useState(false);

    const onSubmit = data => {
        reset({
            heroName: '', realName: '', wasBorn:'', superPowers:'', catchPhrase: ''
        })
        console.log(data);
    }

    const handleClickOpen = () => {
        //создать флажок для проверки пустая ли форма , отправляется запрос на регистрацию , флажок становится тру и только тогда открывается модальное окно
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    return (

        <Container fixed style={{ marginTop: 14 }}>
            <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    name='heroName'
                    control={control}
                    defaultValue=''
                    rules={{ required: 'Name required' }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label='Hero Name'
                            variant='outlined'
                            type='heroName'
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}

                />
                <Controller
                    name="realName"
                    control={control}
                    defaultValue=''
                    rules={{ required: 'Real name required' }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label='Real Name'
                            variant='outlined'
                            type="realName"
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}

                />
                <Controller
                    name="wasBorn"
                    control={control}
                    defaultValue=''
                    rules={{ required: 'Origin description required' }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label="Was Born"
                            variant='outlined'
                            type='originDescription'
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}

                />
                <Controller
                    name='superPowers'
                    control={control}
                    defaultValue=''
                    rules={{ required: 'Super Powers required' }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label='Super Powers'
                            variant='outlined'
                            type='superPowers'
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}

                />
                <Controller
                    name='catchPhrase'
                    control={control}
                    defaultValue=''
                    rules={{ required: 'Catch Phrase required' }}
                    render={({ field: { onChange, value }, fieldState: { error } }) => (
                        <TextField
                            label='Catch Phrase'
                            variant='outlined'
                            type='catchPhrase'
                            value={value}
                            onChange={onChange}
                            error={!!error}
                            helperText={error ? error.message : null}
                        />
                    )}

                />
                <Button className={classes.but} variant="contained" type='submit' onClick={handleClickOpen} >Submit</Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby='alert-dialog-title'
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id='alert-dialog-title'>{'Success'}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id='alert-dialog-description'>You have successfully created a hero</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} variant="contained">OK</Button>
                    </DialogActions>

                </Dialog>
            </form>
        </Container>

    )
}

export default Creator;