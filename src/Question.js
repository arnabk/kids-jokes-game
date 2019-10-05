import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from '@material-ui/core/Typography';
import classname from "classname";
import React from "react";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
    margin: "auto",
    marginTop: 50
  },
  textField: {
    width: "100%"
  }
}));

const Question = ({
  questionNr,
  question,
  userAnswer,
  onChangeUserAns,
  onClickCheckAnsBtt,
  disableButton,
}) => {
  const classes = useStyles();
  return (
    <Card
      className={classname(classes.card, "animated", "zoomIn")}
      key={questionNr}
    >
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Question #{questionNr + 1}
          </Typography>
          <Typography variant="body1" color="textPrimary" component="p">
            {question}
          </Typography>
          <TextField
            id="standard-name"
            label="What do you think?"
            className={classes.textField}
            value={userAnswer}
            onChange={onChangeUserAns}
            margin="normal"
          />
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={onClickCheckAnsBtt} disabled={disableButton}>
          Check Answer
        </Button>
      </CardActions>
    </Card>
  );
};

export default Question;
