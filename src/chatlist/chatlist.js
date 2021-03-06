import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import NotificationImportant from '@material-ui/icons/NotificationImportant';
//const firebase = require("firebase");


class ChatListComponent extends React.Component {


    render() {

        const { classes }  = this.props;
        
        if(this.props.chats.length > 0){
            return ( 
                <main className={classes.root}>
                  <Button variant='contained'
                  fullWidth
                  color='primary'
                  className={classes.newChatBtnFn}
                  onClick={this.newChat}>
                      New Message
                  </Button>
                  <List>
                      {
                          this.props.chats.map((_chat, _index) => {
                              return(
                                  <div key={_index}>
                                      <ListItem onClick={() => this.selectedChat(_index)}
                                      className={classes.ListItem}
                                      selected = {this.props.selectedChatIndex === _index}
                                      alignItems = 'flex-start'>
                                          <ListItemAvatar>
                                              <Avatar alt='Remy Sharp'> {_chat.users.filter(_user => _user !== this.props.userEmail)[0].split(''[0])} </Avatar>
                                          </ListItemAvatar>
                                          <ListItemText primary={_user => _chat.users.filter(_user => _user !== this.props.userEmail)[0]}
                                          secondary={
                                              <React.Fragment>
                                                  <Typography component ='span' color='textPrimary'>
                                                      {
                                                          _chat.messages[_chat.messages.length - 1].message.substring(0,30)
                                                      }
                                                  </Typography>
                                              </React.Fragment>
                                          }>
  
                                          </ListItemText>
                                          {
                                              _chat.receiverHasRed === false && !this.userIsSender(_chat)?
                                              <ListItemIcon>
                                                  <NotificationImportant className={classes.unreadMessage}>

                                                  </NotificationImportant>
                                              </ListItemIcon> : null
                                          }
                                      </ListItem>
                                      <Divider></Divider>
                                  </div>
                              );
                          })
                      }
                  </List>
                </main>
          );
        }else{
           return(
            <main className={classes.root}>
                <Button variant='contained' fullWidth onClick={this.newChat}
                    className ={classes.newChatButton}
                    color='primary'>
                    New Message
                </Button>
                <List></List>
            </main>
           );
        }

    }

    newChat = () =>{
        this.props.newChatBtnFn();
    }
    selectedChat = (index) => {
        console.log('index :', index);
     this.props.selectChatFn(index);
    }

    userIsSender = (chat) => chat.messages[chat.messages.length -1].sender === this.props.userEmail;

}
export default withStyles(styles)(ChatListComponent);