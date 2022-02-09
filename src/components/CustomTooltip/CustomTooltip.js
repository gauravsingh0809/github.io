import { Fade } from '@material-ui/core'
import Tooltip from '@material-ui/core/Tooltip'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    customTooltip: {
        maxWidth: 350,
        backgroundColor: theme.palette.common.white,
        color: 'rgba(17, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 14,
        fontWeight:600
    },
    customTooltip2: {
        maxWidth: 350,
        backgroundColor: theme.palette.common.white,
        color: 'rgba(17, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 14,
        fontWeight:600,
        top:455
    }
}
));

const CustomTooltip = (props) => {
    const classes = useStyles();

    return (
        <>
            <Tooltip
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 600 }}
                interactive
                arrow
                placement = {'top'}
                title={props.tooltip}
                classes={{ tooltip: props.top ? classes.customTooltip2 : classes.customTooltip}}
                >
                <span style={{color:"rgba(40,10,160,1)", fontWeight:"700",fontSize:"15px"}}>
                    {props.content}
                </span>
            </Tooltip>
            <sup>
                {props.supScript}
            </sup>
        </>
    )
}

export default CustomTooltip
