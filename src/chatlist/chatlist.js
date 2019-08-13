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
const firebase = require("firebase");


class ChatListComponent extends React.Component {


    render() {
        return ( <
            div > Hello from ChatList < /div>
        );
    }



}
export default withStyles(styles)(ChatListComponent);