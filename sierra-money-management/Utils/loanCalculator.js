const calculateEmi = ({tenure,amount,rate}) => {
    let t = tenure * 12
    let p = Number(amount)
    let n = rate / (100 * 12)
    let upperSum = n*((1+n)**t)
    let lowerSum = ((n+1)**(t)-1)
    let total = upperSum/lowerSum
    let emi = Math.floor(p * total)
    let totalAmount = Math.floor(emi * t)
    let interest = Math.floor((emi*t) - p)
    let arr = []
    const loanData = monthlyInterest(emi,totalAmount,t,n,0,arr)
    return {emi,totalAmount,interest, loanData}
}


const monthlyInterest = (emi, totalAmount, t,n, i,arr) => {
    if(i === t){
        return arr
    }
    let interest_paid = Math.floor((n) * totalAmount)
    let principal_paid = Math.floor(emi - interest_paid)
    totalAmount = totalAmount - emi
    let data = {
        emi,
        interest_paid,
        principal_paid,
        totalAmount
    }
    arr.push(data)
    i++
    return monthlyInterest(emi,totalAmount,t,n,i++,arr)
}

export default calculateEmi