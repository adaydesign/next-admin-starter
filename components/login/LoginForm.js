import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import useStyles from '../../components/login/style';

const LoginForm = () => {
    const classes = useStyles();
    
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
}


export default LoginForm