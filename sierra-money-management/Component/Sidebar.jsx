import React, {useState} from 'react'
import styles from "../styles/Sidebar.module.css"

const Sidebar = ({slide, handleSlide}) => {




    return (
        <div className = {styles.container}
            style = {slide? {width: "12%"}: {width: "6%"}}
        >
            <div onClick = {handleSlide}>
                click
            </div>
            <div>Loan</div>
            <div>Expenses</div>
            <div>Income</div>
        </div>
    )
}

export default Sidebar
