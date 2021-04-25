import axios from "axios";
import React, { useState } from "react";
import Select from "react-select";
import styles from "../styles/Expense.module.css"
import _ from 'lodash';

const initialState = {
    category: "",
    amount: "",
    note: "",
    account: "",
    user: "",
};
const options = [
    { value: "food", label: "Food", name: "category" },
    { value: "transportation",name:"category", label: "Transportation" },
    { value: "household", label: "Household",name: "category" },
    { value: "others", label: "Others",name: "category" },
];
const acc = [
    { value: "cash", label: "Cash", name : "account" },
    { value: "bank", label: "Bank", name : "account"},
    { value: "others", label: "Others", name : "account" },
];

const Expense = ({slide}) => {
    const [data, setData] = useState(initialState);
    const [expenses, setExpenses] = useState([])
    const [money, setMoney] = useState(0)


    const handleChange = (e) => {
        const { value, name } = e;
        console.log(e)
        const a = JSON.parse(localStorage.getItem("user"))
        const newData = {
            ...data,
            user:a._id,
            [name]: value,
        };
        setData(newData);
    };

    const handleTotal = () => {
        axios.get("api/expense")
        .then((res) => {
            const a = JSON.parse(localStorage.getItem("user"))
            const newD = res.data.filter((e) => a._id === e.user)
            const amoun = _.sum(_.map(newD, "amount"))
            setMoney(amoun)
            setExpenses(newD)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post("api/expense", data)
        .then(res => handleTotal())
        .catch(err => console.log(err))
    }

    return (
        <div className = {styles.main}
        style={
            slide
                ? { width: "85%", marginLeft: "15%" }
                : { width: "94%", marginLeft: "6%" }
        }
        >
        <div className = {styles.container}>
            <h1>Expenses</h1>
            <form onSubmit = {handleSubmit}>
                <p>Category</p>
                <Select
                    className = {styles.sel}
                    name="category"
                    onChange={(e) => handleChange(e)}
                    defaultValue="household"
                    options={options}
                />
                <p>Amount</p>
                <input
                    name="amount"
                    type= "number"
                    onChange={(e) => handleChange(e.target)}
                    placeholder="amount spend"
                />
                <p>Account</p>
                <Select
                    className = {styles.sel}
                    name="account"
                    onChange={(e) => handleChange(e)}
                    defaultValue="cash"
                    options={acc}
                />
                <p>Description</p>
                <input
                    name="note"
                    onChange={(e) => handleChange(e.target)}
                    placeholder="add some note"
                />
                <input className = {styles.submit} onSubmit = {handleSubmit} type = "submit" />
            </form>
        </div>
            <div>
                <h1>Total Expenses</h1>
                <h2>{money}</h2>
            </div>
        </div>
    );
};

export default Expense;
