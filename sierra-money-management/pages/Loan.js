import React, { useState } from "react";
import BarChart from "../Component/BarChart";
import InterestTable from "../Component/InterestTable";
import PieChart from "../Component/PieChart";
import styles from "../styles/Loan.module.css";
import calculateEmi from "../Utils/loanCalculator";

const initdata = {
    amount: 0,
    tenure: 0,
    rate: 0,
    loan: "",
};

const Loan = ({ slide }) => {
    const [data, setData] = useState(initdata);
    const [principle, setPrinciple] = useState(0);
    const [interest, setInterest] = useState(0);
    const [emi, setEmi] = useState(0)
    const [report, setReport] = useState([])

    const handleChange = (e) => {
        let value = e.target.value;
        setData({ ...data, [e.target.name]: value });
    };

    const calculateEMI = () => {
        let a = calculateEmi(data);

        setEmi(a.emi)
        setReport(a.loanData)
        setPrinciple(data.amount);
        setInterest(a.interest);
    };

    const { amount, tenure, loan, bank } = data;

    return (
        <div
            className={styles.container}
            style={
                slide
                    ? { width: "85%", marginLeft: "15%" }
                    : { width: "94%", marginLeft: "6%" }
            }
        >
            <div>
            <div className={styles.form}>
                <h1>Loan EMI Calculator</h1>
                <div>
                    <div className = {styles.input_div}>
                        <p>
                            Loan Amount: 
                        </p>
                    <input
                        name="amount"
                        placeholder="loan amount"
                        onChange={(e) => handleChange(e)}
                    />
                    </div>
                    <div className = {styles.input_div}>
                        <p>Interest Rate</p>
                        <input
                        name="rate"
                        placeholder="interest rate"
                        onChange={(e) => handleChange(e)}
                    />
                    </div>
                   <div className = {styles.input_div}>
                       <p>Tenure</p>
                       <input
                        name="tenure"
                        placeholder="tenure"
                        onChange={(e) => handleChange(e)}
                    />
                   </div>
                    <button onClick={calculateEMI}>Submit</button>
                </div>
            </div>
            </div>
            <div>
                {interest !== 0 && (
                    <>
                    <PieChart
                        principle={Number(principle)}
                        interest={Number(interest)}
                        tenure = {data.tenure}
                        rate = {data.rate}
                        emi = {emi}
                    />
                    {report.length !== 0 && <InterestTable report = {report}/>}
                    <BarChart report = {report}/>
                    </>
                )}
            </div>
        </div>
    );
};

export default Loan;
