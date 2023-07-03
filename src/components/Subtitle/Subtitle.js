import { Typography } from '@material-ui/core'
import React, { useContext } from 'react'
import './Subtitle.css'
import { MyContext } from '../../Context/MyProvider';


const Subtitle = (props) => {
    const ctx = useContext(MyContext)
    return (
        <div className={ctx.themeChanger ? "sub-grid-container-green" : "sub-grid-container"} >
            <span className="subtitlebar">
                <Typography variant="h5" className="subtitle" color="primary" gutterBottom={true}>
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

export default Subtitle
