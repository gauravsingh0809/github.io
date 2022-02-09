import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import {
    Link
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

export default function FloatingActionButtons(props) {
    const classes = useStyles();

    return (
        <div className={classes.root} style={{ zIndex: 1, position: "fixed", bottom: "50px", right: "50px" }}>

            <Link to={props.back}>
                <Fab aria-label="back" >
                    <ArrowBackIosIcon />
                </Fab>
            </Link>
            <Fab color="primary" aria-label="home" href="/">
                <HomeOutlinedIcon />
            </Fab>
            <Link to={props.forward}>
                <Fab aria-label="forward">
                    <ArrowForwardIosIcon />
                </Fab>
            </Link>
        </div>
    );
}


// #http://androidcss.com/css/css3-floating-button-tutorial/ Refer this website to udate only with css and html