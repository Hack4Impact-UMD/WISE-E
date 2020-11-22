import React, { useState } from "react";
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

/**
 * TODO:
 * contentful integration for grants
 */

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
    dueDate: PropTypes.string.isRequired,
  }).isRequired,
};

function createData(name, dueDate, amount, sponsor, description) {
  return {
    name,
    dueDate,
    amount,
    sponsor,
    description,
  };
}

//sample data
const rows = [
  createData(
    "Women to Women Giving Circle Grants Program Grant",
    "10/30/20",
    "$1000 to $10,000",
    "Illinois Prairie Community Foundation (IPCF)",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus nulla in orci hendrerit, nec fermentum lectus molestie. Suspendisse pellentesque dapibus nisl. Aliquam laoreet facilisis lobortis. Vestibulum blandit consectetur ligula sit amet pellentesque. Etiam ac auctor erat. Vestibulum vitae ex orci. Pellentesque accumsan sed eros in consequat. Sed elementum vitae lacus eget varius. Suspendisse hendrerit velit arcu, sed condimentum leo dictum eget. Proin sollicitudin sed ligula ac aliquet. Suspendisse et luctus urna. Morbi in libero urna."
  ),
  createData(
    "Caress Dreams to Reality Fund ",
    "11/13/20",
    "<$1000",
    "IFundWomen",
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras finibus nulla in orci hendrerit, nec fermentum lectus molestie. Suspendisse pellentesque dapibus nisl. Aliquam laoreet facilisis lobortis. Vestibulum blandit consectetur ligula sit amet pellentesque. Etiam ac auctor erat. Vestibulum vitae ex orci. Pellentesque accumsan sed eros in consequat. Sed elementum vitae lacus eget varius. Suspendisse hendrerit velit arcu, sed condimentum leo dictum eget. Proin sollicitudin sed ligula ac aliquet. Suspendisse et luctus urna. Morbi in libero urna."
  ),
];

function Row(props) {
  const { row } = props;
  const [open, setOpen] = useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
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
    </React.Fragment>
  );
}

const Resources = (props) => {
  const classes = useCardStyles();

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
                <TableCell align="right">Due Date</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={row.name} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
};

export default Resources;
