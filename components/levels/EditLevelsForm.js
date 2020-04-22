import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Formik } from "formik";

import { Button, TextField, Divider, Grid }
    from '@material-ui/core';

import useStyles from './style';
import { editLevel } from '../../includes/requests/levels'

const EditLevelsForm = (props) => {
    const classes = useStyles();
    const { data } = props;
    // console.log('edit form')
    // console.log(data)
    const initValues = {
        id: data.id,
        name: data.name,
        description: data.description,
    }
    const onSubmitHandle = async (formData) => {
        console.log(formData)
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const result = await editLevel(token, formData.id, formData)
                console.log(result)
            } catch (err) {
                console.log(err.response.data)
            }
        } else {
            alert('Not found token')
        }

    }

    return (
        <>
            {initValues.id ? (
                <Formik onSubmit={onSubmitHandle} initialValues={initValues}>
                    {({ handleSubmit, handleChange, values }) => (
                        <form onSubmit={handleSubmit} className={classes.form} >
                            <Grid container direction="row" spacing={2}>
                                <Grid item md={2} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        type="number"
                                        disabled
                                        required
                                        fullWidth
                                        id="id"
                                        label="รหัส"
                                        name="id"
                                        value={values.id}
                                    />
                                </Grid>
                                <Grid item md={2} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        disabled
                                        required
                                        fullWidth
                                        id="name"
                                        label="ชื่อย่อระดับข้าราชการ"
                                        name="name"
                                        value={values.name || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        disabled
                                        required
                                        fullWidth
                                        id="description"
                                        label="ชื่อระดับข้าราชการ"
                                        name="description"
                                        value={values.description || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>

                            </Grid>
                            <Grid container spacing={2} justify="center">
                                {/* <Grid item md={2}>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="secondary"
                                        className={classes.submit}
                                    >บันทึก</Button>
                                </Grid> */}
                                <Grid item md={2}>
                                    <Link href="/levels">
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
            ) : (<>{'loading..'}</>)}

        </>
    )
}

export default EditLevelsForm;