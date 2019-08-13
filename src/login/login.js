import React from 'react';
import { Link } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './style';
// eslint-disable-next-line no-unused-vars
import { FormControlLabel } from '@material-ui/core';
// eslint-disable-next-line no-unused-vars
import { Create, EmailOutlined } from '@material-ui/icons';
// eslint-disable-next-line no-unused-vars
const firebase = require("firebase");

// eslint-disable-next-line no-unused-vars
class LoginComponent extends React.Component {

    render() {

        const { classes } = this.props;
        return ( <
            main className = { classes.main } >
            <
            CssBaseline > < /CssBaseline> <
            Paper className = { classes.paper } >
            <
            Typography component = 'h1'
            variant = 'h5' >
            Log In!
            <
            /Typography> <
            form className = { classes.form }
            onSubmit = {
                (e) => this.submitLogin(e)
            } >
            <
            FormControl required fullWidth margin = 'normal' >
            <
            InputLabel htmlFor = 'login-email-input' > Enter Your Email < /InputLabel> <
            Input autoComplete = 'email'
            autoFocus id = 'login-email-input'
            onChange = {
                (e) => this.userTyping('email', e)
            } > < /Input> < /
            FormControl > <
            FormControl required fullWidth margin = 'normal' >
            <
            InputLabel htmlFor = 'login-password-input' > Enter Your Password < /InputLabel> <
            Input autoComplete = 'password'
            id = 'login-password-input'
            onChange = {
                (e) => this.userTyping('password', e)
            } > < /Input> < /
            FormControl > <
            Button type = 'submit'
            fullWidth variant = 'contained'
            color = 'primary'
            className = { classes.submit } > Log In < /Button> < /
            form > <
            Typography component = 'h5'
            variant = 'h6'
            className = { classes.noAccountHeader } > Don 't have an account?</Typography> <
            Link className = { classes.Link }
            to = '/signup' > Sign Up! < /Link> < /
            Paper >

            <
            /main>
        );
    }


    userTyping = (type, e) => {
        console.log(type, e);
    }
    submitLogin = (e) => {
        console.log('Submitting');
    }







}

export default withStyles(styles)();