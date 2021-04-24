import React, { useState } from "react";
import styles from "../styles/Sidebar.module.css";
import {
    GiPayMoney,
    GiReceiveMoney,
    GiTakeMyMoney,
    GiPowerButton,
} from "react-icons/gi";
import { AiFillSetting, AiOutlineLogout } from "react-icons/ai";

const Sidebar = ({ slide, handleSlide }) => {
    return (
        <div
            className={styles.container}
            style={slide ? { width: "15%" } : { width: "6%" }}
        >
            <div onClick={handleSlide}>
                <GiPowerButton
                    style={
                        slide
                            ? {
                                  fontSize: "40px",
                                  marginLeft: "160px",
                                  cursor: "pointer",
                              }
                            : {
                                  fontSize: "50px",
                                  marginLeft: "22px",
                                  cursor: "pointer",
                              }
                    }
                />
            </div>
            <div className={styles.links}>
                <span>
                    <GiReceiveMoney
                        color="white"
                        style={
                            slide ? { fontSize: "30px" } : { fontSize: "50px" }
                        }
                    />
                </span>
                <p>Income</p>
            </div>
            <div className={styles.links}>
                <span>
                    <GiPayMoney
                        color="white"
                        style={
                            slide ? { fontSize: "30px" } : { fontSize: "50px" }
                        }
                    />
                </span>{" "}
                <p>Expenses</p>
            </div>
            <div className={styles.links}>
                <span>
                    <GiTakeMyMoney
                        color="white"
                        style={
                            slide ? { fontSize: "30px" } : { fontSize: "50px" }
                        }
                    />
                </span>{" "}
                <p>Loans</p>
            </div>
            <div className={styles.links}>
                <span>
                    <AiFillSetting
                        color="white"
                        style={
                            slide ? { fontSize: "30px" } : { fontSize: "50px" }
                        }
                    />
                </span>{" "}
                <p>Settings</p>
            </div>
            <div className={styles.links}>
                <span>
                    <AiOutlineLogout
                        color="white"
                        style={
                            slide ? { fontSize: "30px" } : { fontSize: "50px" }
                        }
                    />
                </span>{" "}
                <p>LogOut</p>
            </div>
        </div>
    );
};

export default Sidebar;
