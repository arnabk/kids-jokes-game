import React from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import classname from "classname";
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: "auto",
    marginTop: 50
  },
  thumbIcon: {
    float: 'right',
    position: 'fixed',
    right: 10,
    top: 10,
  },
}));

const Answer = ({ questionNr, answer, onClickNextQuestion, win }) => {
  const classes = useStyles();
  
  return (
    <Card className={classname(classes.card, "animated", "tada")}>
      {win ? <ThumbUpIcon className={classes.thumbIcon} color="primary" />
        : <ThumbDownIcon className={classes.thumbIcon} color="secondary" />}
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Answer #{questionNr + 1}
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            {answer}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClickNextQuestion}>
          Next Question
        </Button>
      </CardActions>
    </Card>
  );
};

export default Answer;
