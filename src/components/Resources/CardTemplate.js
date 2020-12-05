import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';


const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "18vmax",
    marginRight: "8%",
  },
  title: {
    fontSize: 13,
    textAlign: "center",
  },
  link: {
    textDecoration: "none",
  },
  imageProps: {
    maxHeight: "80%",
    maxWidth: "80%",
  },
});

export default function CardTemplate(props) {
  const classes = useStyles();

  return (
    <Box display="flex">
      <Card className={classes.root}>
        <CardContent>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            <div>
              <img
                src={props.imgSrc}
                alt={props.alt}
                className={classes.imageProps}
              />
            </div>
            <a href={props.link} className={classes.link}>
              {props.name}
            </a>
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
