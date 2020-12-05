import React, { useState, useEffect } from "react";
import { Container } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import CardTemplate from "./CardTemplate";
import Grid from "@material-ui/core/Grid";

import alliances from "./data/allianceData.json";
import networks from "./data/networkData.json";
import partners from "./data/partnerData.json";


const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

const useCardStyles = makeStyles({
  resourceCards: {
    display: "flex",
  },
});

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="left">{row.sponsor}</TableCell>
        <TableCell align="left">{row.amount}</TableCell>
        <TableCell align="right">{row.dueDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <p>{row.description}</p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}


const Resources = (props) => {
  const classes = useCardStyles();
  const [grants, setGrants] = useState([]);
  const contentful = require("contentful");


  useEffect(() => {
    const client = contentful.createClient({
      space: "g79vk6o1szlh",
      accessToken: "HaMELtyUJaegKAtD30E2WqMHfVjwHPFEs-npzky8mFA",
    });
    client.getEntries({ content_type: "grants" }).then((response) => {
      setGrants(response.items);
      console.log(response.items);
    });
  }, []);

  const resourceGrants = grants.map((grant, i) => (
    <Row key={grant.fields.name} row={grant.fields} id = {i} key = {i}/>
  ));

  return (
    <>
      <Container>
        <h1>Resources</h1>
      </Container>

      <Container>
        <h2>Our Networks</h2>
        <div className={classes.resourceCards}>
          <Grid container spacing={1}>
            {networks.networks.map((item) => (
              <Grid item sm={2}>
                <CardTemplate
                  name={item.name}
                  link={item.link}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>

      <Container>
        <h2>Our Partners</h2>
        <div className={classes.resourceCards}>
          <Grid container spacing={1}>
            {partners.partners.map((item) => (
              <Grid item sm={2}>
                <CardTemplate
                  name={item.name}
                  link={item.link}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>

      <Container>
        <h2>Our Alliances</h2>
        <div className={classes.resourceCards}>
          <Grid container spacing={1}>
            {alliances.alliances.map((item) => (
              <Grid item sm={2}>
                <CardTemplate
                  name={item.name}
                  link={item.link}
                  imgSrc={item.imgSrc}
                  alt={item.alt}
                />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>

      <Container>
        <h2>Grants</h2>
        <TableContainer component={Paper} className="resource-table">
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Grant Name</TableCell>
                <TableCell>Sponsor</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell align="right">Due Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {resourceGrants}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Resources;
