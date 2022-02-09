import React from 'react'
import { FaPlus, FaAngleUp } from "react-icons/fa"
import './Icon.css'

export const FaPlusEdited = (props) => {
        return (
            <FaPlus onClick={props.onClick} className="FaPlusEdited">
                {props.children}
            </FaPlus>
        )
}


export const FaAngleUpEdited = (props) => {
    return (
        <FaAngleUp onClick={props.onClick} className="FaAngleUpEdited">
            {props.children}
        </FaAngleUp>
    )
}


