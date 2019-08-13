import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './style';

class SignupComponent extends React.Component {

    render() {

        const { classes } = this.props;



        return ( <
            main className = { classes.main } >
            <
            CssBaseline >

            <
            /CssBaseline> <
            Paper className = { classes.paper } >

            <
            /Paper> <
            /main>
        )
    }

}

export default withStyles(styles)(SignupComponent);