import React from 'react'
import { Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, TextField } from '@material-ui/core'
import { useForm, Controller } from 'react-hook-form';

const ModalWindowC = (props) => {
    const { handleSubmit, control, reset } = useForm();

    const onSubmit = data => {
        // reset({
        //     heroName: '', realName: '', wasBorn:'', superPowers:'', catchPhrase: ''
        // })
        console.log(data);
    }

    return (
        <Dialog
            open={props.open}
            onClose={props.handleClose}
            aria-labelledby='alert-dialog-title'
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id='alert-dialog-title'>{'Editing'}</DialogTitle>
            <DialogContent>
                <DialogContentText id='alert-dialog-description'>You can edit your hero</DialogContentText>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name='heroName'
                        control={control}
                        defaultValue={props.hero.name}
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
                </form>
            </DialogContent>
            <DialogActions>
                <Button onClick={props.handleClose} variant="contained">OK</Button>
            </DialogActions>

        </Dialog>
    )
}

export default ModalWindowC;