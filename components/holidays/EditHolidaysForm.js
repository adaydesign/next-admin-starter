import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Formik } from "formik";

import { Button, TextField, Divider, Grid }
    from '@material-ui/core';

import useStyles from '../holidays/style';
import { editHoliday } from '../../includes/requests/holidays'
import { getDateYMDFormat } from '../../includes/lib/date-utils'

const EditHolidaysForm = (props) => {
    const classes = useStyles();
    const { data } = props;
    // console.log('edit form')
    console.log(data)
    const initValues = {
        id: data.id,
        name: data.name,
        year: data.year,
        month: data.month,
        count: data.count,
        start_date: getDateYMDFormat(data.start_date),
        end_date: getDateYMDFormat(data.end_date),
    }
    const onSubmitHandle = async (formData) => {
        console.log(formData)
        var sendData = { ...formData }        
        sendData.start_date = new Date(formData.start_date).toJSON()
        sendData.end_date = new Date(formData.end_date).toJSON()

        const token = localStorage.getItem('token')
        if (token) {
            try {
                const result = await editHoliday(token, sendData.id, sendData)
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
                                        type="number"
                                        required
                                        fullWidth
                                        id="year"
                                        label="ปี"
                                        name="year"
                                        value={values.year}
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
                                        value={values.month}
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
                                        label="จำนวนวัน"
                                        name="count"
                                        value={values.count}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        type="date"
                                        required
                                        fullWidth
                                        id="start_date"
                                        label="วันหยุด(เริ่มต้น)"
                                        name="start_date"
                                        value={values.start_date || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        type="date"
                                        required
                                        fullWidth
                                        id="end_date"
                                        label="วันหยุด(สิ้นสุด)"
                                        name="end_date"
                                        value={values.end_date || ''}
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
                                        label="ชื่อวันหยุด"
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
                                    <Link href="/holidays">
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

export default EditHolidaysForm;