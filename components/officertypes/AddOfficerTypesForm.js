import React from 'react'
import Link from 'next/link'
import { Formik } from "formik";

import { Button, TextField, Divider, Grid }
    from '@material-ui/core';

import useStyles from '../../components/officertypes/style';
import { createNewOfficerType } from '../../includes/requests/officertypes'

const AddOfficerTypesForm = (props) => {
    const classes = useStyles();

    const initValues = {
        id: 0,
        name: "",
        description: "",
        remark: ""
    }

    const onSubmitHandle = async (data) => {
        console.log(data)
        const token = localStorage.getItem('token')
        if (token) {
            // console.log(token)
            createNewOfficerType(token, data).then(response=>{
                console.log(response)
            })
            .catch(err=>{
                console.log(err)
            })
        } else {
            alert('not have token')
        }
    }

    return (
        <Formik onSubmit={onSubmitHandle} initialValues={initValues}>
            {({ handleSubmit, handleChange, values }) => (
                <form onSubmit={handleSubmit} className={classes.form} >
                    <Grid container spacing={0} direction="column" >
                        <Grid item md={8}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="id"
                                label="กำหนดรหัสประเภท"
                                name="id"
                                type="number"
                                autoFocus
                                value={values.id || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={8}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="name"
                                label="ชื่อประเภทบุคคลในหน่วยงาน"
                                name="name"
                                autoFocus
                                value={values.name || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={8}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                required
                                fullWidth
                                id="description"
                                label="คำอธิบาย"
                                name="description"
                                autoFocus
                                value={values.description || ''}
                                onChange={handleChange}
                            />
                        </Grid>
                        <Grid item md={8}>
                            <TextField
                                variant="outlined"
                                margin="normal"
                                size="small"
                                fullWidth
                                id="remark"
                                label="หมายเหตุ"
                                name="remark"
                                autoFocus
                                value={values.remark || ''}
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
                        <Link href='/officertypes'>
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
            )}
        </Formik>
    )
}


export default AddOfficerTypesForm