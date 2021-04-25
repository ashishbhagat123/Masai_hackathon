import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Chat from "./Chat";
import Expense from "./Expense";
import Loan from "./Loan";
import styles from "../styles/Chats.module.css";

const Dashboard = () => {
    const [slide, setSlide] = useState(false);
    const [com, setCom] = useState("loan")

    const handleSlide = () => {
        setSlide(!slide);
    };

    const handleButton = (e) => {
        console.log("e", e)
        setCom(e)
    }

    return (
        <div>
            <Sidebar slide={slide} handleSlide={handleSlide} handleButton = {handleButton}/>
            {
                com === "loan"? <Loan slide={slide} /> : <Expense slide={slide} />
            }
            <Chat />
        </div>
    );
};

export default Dashboard;
