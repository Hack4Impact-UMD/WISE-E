import React, { useState } from "react";
import { Container } from "@material-ui/core";
import msg from "./sampleData.json";
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
})

Row.propTypes = {
  row: PropTypes.shape({
    name: PropTypes.string.isRequired,
    dueDate: PropTypes.string.isRequired,
  }).isRequired,
};

const rows = [
  createData("Grant 1", "11/01/2020"),
  createData("Grant 2", "11/02/2020"),
  createData("Grant 3", "11/03/2020"),
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
        <TableCell align="right">{row.dueDate}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Description
              </Typography>
              <p>Random description for grant placed here</p>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

//change this to apply to grant information
function createData(name, dueDate) {
  return {
    name,
    dueDate,
  };
}

const Resources = (props) => {
  const classes = useCardStyles();

  return (
    <>
      <Container>
        <h1>Resources</h1>
      </Container>
      <Container>
        <h2>{msg.Alliances.title}</h2>
        <div className={classes.resourceCards}>
          <CardTemplate
            name={msg.sampleAlliance.name}
            imgSrc={msg.imageExample.src}
            alt={msg.imageExample.alt}
          />
          <CardTemplate
            name={msg.sampleAlliance.name}
            imgSrc={msg.imageExample.src}
            alt={msg.imageExample.alt}
          />
        </div>
      </Container>
      <Container>
        <h2>{msg.Partners.title}</h2>
        <div className={classes.resourceCards}>
          <CardTemplate
            name={msg.samplePartner.name}
            imgSrc={msg.imageExample.src}
            alt={msg.imageExample.alt}
          />
          <CardTemplate
            name={msg.samplePartner.name}
            imgSrc={msg.imageExample.src}
            alt={msg.imageExample.alt}
          />
        </div>
      </Container>
      <Container>
        <h2>{msg.Network.title}</h2>
        <div className={classes.resourceCards}>
          <CardTemplate
            name={msg.sampleNetwork.name}
            imgSrc={msg.imageExample.src}
            alt={msg.imageExample.alt}
          />
          <CardTemplate
            name={msg.sampleNetwork.name}
            imgSrc={msg.imageExample.src}
            alt={msg.imageExample.alt}
          />
        </div>
      </Container>
      <Container>
        <h2>{msg.Grants.title}</h2>
        <TableContainer component={Paper} className="resource-table">
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell />
                <TableCell>Grant Name</TableCell>
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
