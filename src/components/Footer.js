import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        WISE.E
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: "#295F70",
    color: "white",
    marginTop: theme.spacing(8),
    padding: theme.spacing(10, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
            
            {/* Contact Us */}
            <Grid item xs>
              <Typography variant="subtitle1">Contact Us</Typography>
            <Grid container spacing={2}>
              <Grid item inner>
              <Typography variant="subtitle2">admin@wise-e.org</Typography>
              </Grid>
            </Grid>
          </Grid>

          {/* Sitemap */}
          <Grid item xs>
            <Typography variant="subtitle1">Sitemap</Typography>

            {/* Row 1 */}
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <a href="/">Home</a>
              </Grid>
              <Grid item xs={4}>
                <a href="events">Events</a>
              </Grid>
            </Grid>

            {/* Row 2 */}
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Link href="about" color="white">
                  About
                </Link>
              </Grid>
              <Grid item xs={4}>
                <a href="Resources">Resources</a>
              </Grid>
            </Grid>

            {/* Row 3 */}
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <a href="team">Our Team</a>
              </Grid>
              <Grid item xs={4}>
                <a href="get-involved">Get Involved</a>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br></br>

        {/* social media icons here  */}

        {/* Copyright here */}
        <Copyright />
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
