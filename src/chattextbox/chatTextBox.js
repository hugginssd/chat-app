/* eslint-disable no-unused-vars */
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Send from '@material-ui/icons/Send';
import styles from './styles';
import { withStyles } from '@material-ui/core/styles';


class ChatTextBoxComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            chatText = ''
        };
    }




    render(){

        const { classes } = this.props; 

            return(
                <div className={classes.chatTextBoxContainer}>
                <TextField placeholder='Type your message...'
                 onKeyUp={(e)=>this.userTyping(e)}
                 id='chattextbox'
                 className={classes.chatTextBox}
                 onFocus={this.userClickedInput}>

                </TextField>
                <Send onClick={this.submitMessage} className={classes.sendBtn}></Send>
                </div>
             );
        }

        userTyping = (e) =>{
            console.log('User typing');
        }
        submitMessage = () =>{
            console.log('Submit');
        }
        userClickedInput = () => console.log('Clicked input');

}

export default withStyles(styles)(ChatTextBoxComponent);