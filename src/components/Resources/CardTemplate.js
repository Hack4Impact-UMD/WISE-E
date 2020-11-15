import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    maxHeight: 200,
    marginRight: 20,
  },
  title: {
    fontSize: 14,
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
  link: {
    textDecoration: "none",
  },
  imageProps:{
    maxHeight: 70
  }
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
            <img src={props.imgSrc} alt={props.alt} className={classes.imageProps}/>
          </div>
          <a href={props.link} className={classes.link}>
            {props.name}
          </a>
        </Typography>
      </CardContent>
    </Card>
  );
}
