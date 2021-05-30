import React from "react";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import SnowBlue from "../assets/img/snow_blue.png";
import SnowWhite from "../assets/img/snow_white.png";

const Chat = (props) => {
const isQuestion = (props.type === "question"); // props.typeがquestionならtrue
const classes = isQuestion ? "p-chat__row" : "p-chat__reverse";

  return(
  <>
  <ListItem className={classes}>
        <ListItemAvatar>
          {/* return内のif分：{}はJSの文章であるという構文 */}
          {isQuestion ? (
            <Avatar alt="icon" src={SnowWhite} />
          ) : (
            <Avatar alt="icon" src={SnowBlue} />
          )}
        </ListItemAvatar>
        <div className="p-chat__double">{props.text}</div>
      </ListItem>
      </>
)
}

export default Chat;