import { Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import './Title.css'
import { MyContext } from './../../Context/MyProvider';


const Title = (props) => {
    const ctx = useContext(MyContext)
    return (
        <div className={ctx.themeChanger ? "grid-container-green" : "grid-container"} >
            <span className="titlebar">
                <Typography variant="h4" className="title" color="primary" gutterBottom={true}>
                    {props.children}
                </Typography>
            </span>
            {props.id ? <span>
                {props.status
                    // ? <FaAngleUpEdited onClick={() => ctx.paraToggle(props.id)} />
                    // : <FaPlusEdited onClick={() => ctx.paraToggle(props.id)} />
                    ? ""
                    : ""
                }
            </span>
                : ""}
        </div>
    )
}

export default Title
