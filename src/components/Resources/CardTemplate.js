import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 100,
    marginRight: 20
  },
  title: {
    fontSize: 14,
    textAlign: "center"
  },
  pos: {
    marginBottom: 12,
  },
});

export default function CardTemplate(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          <div>
            <img src={props.imgSrc} alt={props.alt}/>
          </div>
          {props.name}
        </Typography>
      </CardContent>
    </Card>
  );
}
