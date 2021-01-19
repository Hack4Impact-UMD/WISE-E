import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import FacebookIcon from "@material-ui/icons/Facebook";

function Copyright() {
  return (
    <Typography variant="body2" color="white" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        WISE.E
      </Link>{" "}
      {new Date().getFullYear()} {" | "} {"Website by "}
      <Link color="inherit" href="https://umd.hack4impact.org">
        Hack4Impact
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    // backgroundColor: "#295F70",
    // backgroundColor: "#180142",
    backgroundColor: "#3354BD",
    color: "white",
    marginTop: theme.spacing(8),
    padding: theme.spacing(10, 0),
  },
  link: {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: 20,
    // fontWeight: "bold"
  },
  subtitle: {
    color: "white",
    fontFamily: "sans-serif",
    fontSize: 20,
    display: "inline-flex",
    verticalAlign: "bottom",
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

             {/* Row 1 */}
             <Grid container spacing={3}>
              <Grid item xs={9}>
              <Typography variant="subtitle2" className={classes.subtitle}>
                  {" "}
                  <EmailIcon /> &nbsp; admin@wise-e.org
                </Typography>
              </Grid>
            </Grid>

            
             {/* Row 2 */}
             <Grid container spacing={3}>
              <Grid item xs={9}>
              <Typography variant="subtitle2" className={classes.subtitle}>
                  {" "}
                  <PhoneIcon /> &nbsp; 404-936-0620
                </Typography>
              </Grid>
            </Grid>


            {/* Row 3 */}
            <Grid container spacing={3}>
              <Grid item xs={9}>
              <Link
                  className={classes.subtitle}
                  href="https://www.facebook.com/Center-for-Sustainable-Communities-Atlanta-219072231567212/"
                >
                  <FacebookIcon /> &nbsp; Facebook
                </Link>
              </Grid>
            </Grid>
          </Grid>

          {/* Sitemap */}
          <Grid item xs>
            <Typography variant="subtitle1">Sitemap</Typography>

            {/* Row 1 */}
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Link className={classes.link} href="/">
                  Home
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link className={classes.link} href="resources">
                  Resources
                </Link>
              </Grid>
            </Grid>

            {/* Row 2 */}
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Link className={classes.link} href="about">
                  About
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link className={classes.link} href="partners">
                  Partners
                </Link>
              </Grid>
            </Grid>

            {/* Row 3 */}
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Link className={classes.link} href="team">
                  Our Team
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link className={classes.link} href="get-involved">
                  Get Involved
                </Link>
              </Grid>
            </Grid>

            {/* Row 4 */}
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Link className={classes.link} href="events">
                  Events
                </Link>
              </Grid>
              <Grid item xs={4}>
                <Link className={classes.link} href="donate">
                  Donate
                </Link>
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
