import { Typography } from '@material-ui/core'
import React from 'react'

function Para(props) {
    return (
        <Typography variant="h6" paragraph={true} align={props.align ? props.align : "justify"}>
            {props.children}
        </Typography>
    )
}

export default Para
