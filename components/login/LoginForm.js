import React from 'react'

import jwt from 'jsonwebtoken';
import { Formik } from "formik";

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from '../../components/login/style';

import { useDispatch } from 'react-redux';
import { getUserById } from '../../includes/requests/users';
import { saveLoginUser } from '../../includes/lib/store';
import { postLogin } from '../../includes/requests/login';

const LoginForm = (props) => {
    const classes = useStyles();

    const { onResponses } = props;
    // redux dispatch
    const dispatch = useDispatch();    

    const onSubmitHandle = async (data) => {
        console.log(data);
        try {
            const response = await postLogin(data)
            // console.log("--rs--")
            // console.log(response.data);
            if (response.data != undefined && response.data.token != undefined) {
                const token = response.data.token
                const decoded = jwt.decode(token)

                const responsGetUser = await getUserById(decoded.id,token)
                // console.log(responsGetUser.data)

                if(responsGetUser.data != undefined && responsGetUser.data.success){
                    // user data
                    const userData = responsGetUser.data.data
                    // store user data to redux
                    dispatch(saveLoginUser(userData, token))
                    onResponses(true, { user_fullname: userData.full_name })
                }else{
                    onResponses(false, { errors: 'can not get user data' })
                }
                
            } else {
                onResponses(false, { errors: 'invalid response data and token' })
            }

        } catch (err) {
            // console.log("--error--")
            // console.log(err.response);
            if (err.response != undefined && err.response.data != undefined) {
                onResponses(false, err.response.data)
            } else {
                onResponses(false, { errors: err })
            }
        }
    }

    /*
    return (<>
        <form className={classes.form} noValidate>
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                label="บัญชีผู้ใช้"
                name="username"
                autoFocus
            />
            <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="รหัสผ่าน"
                type="password"
                id="password"
            />
            <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="ให้เครื่องจำค่าชื่อบัญชีผู้ใช้ไว้"
            />
            <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
            >
                เข้าสู่ระบบ
            </Button>


        </form>
    </>)

    */
   return (
    <Formik onSubmit={onSubmitHandle} initialValues={{ username: "", password: "" }}>
        {({ handleSubmit, handleChange, values }) => (
            <form onSubmit={handleSubmit} className={classes.form} >
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="username"
                    label="ชื่อผู้ใช้งาน"
                    name="username"
                    autoFocus
                    value={values.username || ''}
                    onChange={handleChange}
                />
                <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="รหัสผ่าน"
                    type="password"
                    id="password"
                    value={values.password || ''}
                    onChange={handleChange}
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="secondary"
                    className={classes.submit}
                >เข้าสู่ระบบ</Button>
            </form>
        )}
    </Formik>
)
}


export default LoginForm