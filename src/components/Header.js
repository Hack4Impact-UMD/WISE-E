import React from 'react';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles, Toolbar, Button, IconButton, Typography, Link } from '@material-ui/core';
import { Search as SearchIcon } from '@material-ui/icons';

const sections = [
    { title: "About", url: "/about" },
    { title: "Our Team", url: "/team" },
    { title: "Events", url: "/events" },
    { title: "Contact Us", url: "/contact" },
    { title: "Resources", url: "/resources" },
];

const useStyles = makeStyles((theme) => ({
    toolbar: {
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        flex: 1,
    },
    toolbarSecondary: {
        justifyContent: 'space-between',
        overflowX: 'auto',
    },
    toolbarLink: {
        padding: theme.spacing(1),
        flexShrink: 0,
    },
}));

const Header = props => {
    const classes = useStyles();
    const { title } = props;

    return (
        <React.Fragment>
            <Toolbar className={classes.toolbar}>
                <Button size="small" to="/" component={RouterLink}>Logo</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    {title}
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small" component={RouterLink} to={"/get-involved"}>
                    Get Involved
                </Button>
            </Toolbar>
            <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
                {sections.map((section) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="body2"
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