import React from 'react'
import Link from 'next/link'
import { Formik } from "formik";

import { Button, TextField, Divider, Grid }
    from '@material-ui/core';

import useStyles from './style';
import { createNewWorkday } from '../../includes/requests/workdays'

const AddWorkdaysForm = (props) => {
    const classes = useStyles();
    const initValues = {
        year: "",
        month: "",
        count: "",
    }
    const onSubmitHandle = async (data) => {
        //console.log(data)
        var sendData = { ...data }
        sendData.start_date = new Date(data.start_date).toJSON()
        sendData.end_date = new Date(data.end_date).toJSON()
        //console.log('after')
        //console.log(sendData)

        const token = localStorage.getItem('token')
        if (token) {
            try {
                const result = await createNewWorkday(token, sendData)
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

                    <Grid container direction="row" spacing={2}>
                        <Grid item md={2}  >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                type="number"
                                required
                                fullWidth
                                id="year"
                                label="ปี"
                                name="year"
                                autoFocus
                                value={values.year || 0}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={2} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                type="number"
                                required
                                fullWidth
                                id="month"
                                label="เดือน"
                                name="month"
                                value={values.month || 0}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={2} >
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                type="number"
                                required
                                fullWidth
                                id="count"
                                label="จำนวนวัน(รวม)"
                                name="count"
                                value={values.count || 0}
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
                            <Link href="/workdays">
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


export default AddWorkdaysForm;