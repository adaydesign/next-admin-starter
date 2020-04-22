import React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import { Formik } from "formik";

import { Button, TextField, Divider, Grid }
    from '@material-ui/core';

import useStyles from './style';
import { editOffice } from '../../includes/requests/offices'

const EditOfficesForm = (props) => {
    const classes = useStyles();
    const { data } = props;
    // console.log('edit form')
    // console.log(data)
    const initValues = {
        id: data.id,
        court_code: data.court_code,
        division_id: data.division_id,
        court_name: data.court_name,
        office_name: data.office_name,
        abbr_eng: data.abbr_eng,
        official_letter_code: data.official_letter_code,
        address: data.address,
        tel: data.tel,
        fax: data.fax,
        email: data.email,
        website: data.website,

    }
    const onSubmitHandle = async (formData) => {
        console.log(formData)
        const token = localStorage.getItem('token')
        if (token) {
            try {
                const result = await editOffice(token, formData.id, formData)
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
            {initValues.court_code ? (
                <Formik onSubmit={onSubmitHandle} initialValues={initValues}>
                    {({ handleSubmit, handleChange, values }) => (
                        <form onSubmit={handleSubmit} className={classes.form} >
                            <Grid container direction="row" spacing={2}>
                                <Grid item md={1} >
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
                                        autoFocus
                                        value={values.id || 0}
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
                                        id="court_code"
                                        label="รหัสหน่วยงาน"
                                        name="court_code"
                                        value={values.court_code || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={1} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        type="number"
                                        required
                                        fullWidth
                                        id="division_id"
                                        label="สังกัด"
                                        name="division_id"
                                        autoFocus
                                        value={values.division_id || 0}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={4} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="court_name"
                                        label="ชื่อศาล"
                                        name="court_name"
                                        value={values.court_name || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={4} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="office_name"
                                        label="ชื่อสำนักงาน"
                                        name="office_name"
                                        value={values.office_name || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={2} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="abbr_eng"
                                        label="ชื่อย่อ"
                                        name="abbr_eng"
                                        value={values.abbr_eng || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={3} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="official_letter_code"
                                        label="เลขประจำสำนักงาน"
                                        name="official_letter_code"
                                        value={values.official_letter_code || ''}
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
                                        id="address"
                                        label="ที่อยู่"
                                        name="address"
                                        value={values.address || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={4} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="tel"
                                        label="เบอร์โทร"
                                        name="tel"
                                        value={values.tel || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={4} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="fax"
                                        label="เบอร์แฟกซ์"
                                        name="fax"
                                        value={values.fax || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="email"
                                        label="อีเมล์ติดต่อ"
                                        name="email"
                                        value={values.email || ''}
                                        onChange={handleChange}
                                    />
                                </Grid>
                                <Grid item md={6} >
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        size="small"
                                        required
                                        fullWidth
                                        id="website"
                                        label="เวบไซด์"
                                        name="website"
                                        value={values.website || ''}
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
                                    <Link href="/offices">
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

export default EditOfficesForm;