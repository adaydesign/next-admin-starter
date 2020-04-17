import React from 'react'

import { Formik } from "formik";

import { Button, TextField, Divider, Grid }
    from '@material-ui/core';

import useStyles from '../../components/officertypes/style';

const AddOfficerTypesForm = (props) => {
    const classes = useStyles();

    const initValues = {
        name: "",
        description: "",
        remark: ""
    }

    const onSubmitHandle = async (data) => {

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
                        <Grid item  md={2}>
                            <Button
                                type="button"
                                fullWidth
                                variant="contained"
                                color="secondary"
                                className={classes.submit}
                            >ยกเลิก</Button>
                        </Grid>
                    </Grid>
                </form>
            )}
        </Formik>
    )
}


export default AddOfficerTypesForm