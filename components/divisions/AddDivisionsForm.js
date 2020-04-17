import React from 'react'
import Link from 'next/link'
import { Formik } from "formik";

import { Button, TextField, Divider, Grid }
    from '@material-ui/core';

import useStyles from '../../components/divisions/style';
import { createNewDivision } from '../../includes/requests/divisions'

const AddDivisionsForm = (props) => {
    const classes = useStyles();
    const initValues = {
        id: "",
        name: "",
    }
    const onSubmitHandle = async (data) => {
        console.log(data)
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const result = await createNewDivision(token, data)
                console.log(result)
            } catch (err) {
                console.log(err.response.data)
            }
        } else {
            alert('Not found token')
        }

    }


    return (
        <Formik onSubmit={onSubmitHandle} initialValues={initValues}>
            {({ handleSubmit, handleChange, values }) => (
                <form onSubmit={handleSubmit} className={classes.form} >

                    <Grid container direction="column">
                        <Grid item md={8} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                type="number"
                                required
                                fullWidth
                                id="id"
                                label="รหัสภาค"
                                name="id"
                                autoFocus
                                value={values.id || 0}
                                onChange={handleChange}
                            />
                        </Grid>

                        <Grid item md={8} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="name"
                                label="ชื่อภาค/สังกัด"
                                name="name"
                                value={values.name || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={2} justify="center">
                        <Grid item md={2}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >บันทึก</Button>
                        </Grid>
                        <Grid item md={2}>
                            <Button

                                type="reset"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >รีเซ็ต</Button>
                        </Grid>
                        <Grid item md={2}>
                            <Link href="/divisions">
                                <Button
                                    type="button"
                                    fullWidth
                                    variant="contained"
                                    color="secondary"
                                    className={classes.submit}
                                >ยกเลิก</Button>
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            )
            }
        </Formik >
    )
}


export default AddDivisionsForm;