import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Toolbar, Typography, Button, Link } from '@material-ui/core';
import logo from './logo.png';


const sections = [
    { title: "Home", url: "/home"},
    { title: "About", url: "/about" },
    { title: "Our Team", url: "/team" },
    { title: "Events", url: "/events" },
    { title: "Contact Us", url: "/contact" },
    { title: "Resources", url: "/resources" },
    { title: "Get Involved", url: "/get-involved" },
];

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarLogo: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        justifyContent: 'space-between',
        padding: theme.spacing(1.75),
        flexShrink: 1,
    },
    logo:{
        height: 38, 
        width: 126
    }
}));

const Header = props => {
    const classes = useStyles();   

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                
                <Button to="/" component={RouterLink}>
                    <img  className={classes.logo} src={logo} ></img>
                 </Button>

                <div className={classes.toolbarLogo}></div>
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body"
                        className={classes.toolbarLink}
                        component={RouterLink}
                        to={section.url}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>
        </React.Fragment>
    );
}
Header.propTypes = {
    title: PropTypes.string,
};

export default Header;
