import React from 'react'
import Para from '../Para/Para'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos'
import './ContentSlider.css'
import { Paper } from "@material-ui/core"


function ContentSlider(props) {
    return (
        <>
        { props.position === "right" 
        ? <Paper className={props.position} >
            <span className="flex">
                <Para align="left">
                    {props.content}
                </Para>
                <span className="flex">
                    <ArrowBackIosIcon
                        style={{fontSize:"100px"}}
                    />
                    <h2 className="title-margin">
                        {props.title}
                    </h2>
                </span>
            </span>
        </Paper> 
        : 
    <Paper className={props.position}>
        <span className="flex">
          <span className="flex">
            <h2 className="title-margin">
              {props.title}
            </h2>
            <ArrowForwardIosIcon
              className="arrow-size"
            />
          </span>
          <Para>
            {props.content}
          </Para>
        </span>
      </Paper>
        }
        </>
    )
}

export default ContentSlider
