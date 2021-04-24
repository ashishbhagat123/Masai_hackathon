import styles from "../styles/Webpage/whyUs.module.css"

const WhyUs = () => {
    return (
        <div className = {styles.wrapper} id = "whyUS">
            <div className = {styles.container}>
                <div>
                   <div className = {styles.innertext}>
                        <h1 className = {styles.headings}>
                            ANALYZE YOUR EXPENSE.
                        </h1>
                        <p className = {styles.text}>
                            Keeping track of your expenses will ensure that work within your budgeting. This allows you to live within your means.
                        </p>
                   </div>
                </div>
                <div>
                    <img src="undraw_Segment_analysis_re_ocsl.svg" alt=""/>
                </div>
            </div>
            
            <div className = {styles.container} >
                <div>
                    <img src="undraw_Savings_re_eq4w.svg" alt=""/>
                </div>
                <div >
                    <div className = {styles.innertext}>
                        <h1 className = {styles.headings}>
                            ADD MORE TO YOUR SAVINGS
                        </h1>
                        <p className = {styles.text}>
                            Money is personal, so are we. What are your goals? We’ll help you personlize your savings, spending and investing Goals.
                        </p>
                    </div>
                </div>
            </div>

            <div className = {styles.container} >
                <div>
                    <div className = {styles.innertext}>
                        <h1 className = {styles.headings}>
                            Reach your goals the easy way.
                        </h1>
                        <p className = {styles.text}>
                            Guiding money to your goals each day, you’ll hit them faster and feel at peace along the way.
                        </p>
                    </div>
                </div>
                <div>
                    <img src="undraw_Investing_re_bov7.svg" alt=""/>
                </div>
            </div>

            <div className = {styles.container} >
                <div>
                  <img src="undraw_Connected_re_lmq2.svg" alt=""/>
                </div>
                <div >
                   <div className = {styles.innertext}>
                        <h1 className = {styles.headings}>
                            Security & support you can trust
                        </h1>
                        <p className = {styles.text}>
                            Want some guidance? Chat live with our financial Services team and get help in various investment or Loan related queries.
                        </p>
                   </div>
                </div>
            </div>       

        </div>
    )
}

export default WhyUs
