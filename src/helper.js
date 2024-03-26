export const waiit = () => new Promise(res => setTimeout(res, Math.random() * 1000))

const generateRandomColor= () => {
    const existingBudgetLength = fetchData("budget")?. length?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}

//local storage
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

//create budget
export const createBudget = ({
    name, amount
})=>{
    const newItem = {
        id: crypto.randomUUID(),
        name: name, 
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    const existingBudget = fetchData('budgets') ?? [];
    return localStorage.setItem("budgets", JSON.stringify([...existingBudget, newItem]))

}

export const createExpense = ({
    name, amount, budgetId
})=>{
    const newItem = {
        id: crypto.randomUUID(),
        name: name, 
        createdAt: Date.now(),
        amount: +amount,
        budgetId: budgetId
    }
    const existingExpenses = fetchData('expenses') ?? [];
    return localStorage.setItem("expenses", JSON.stringify([...existingExpenses, newItem]))

}



//total spent by bdget
export const calculateSpentByBudget = (budgetId) => {
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => {
        //check expense.id = budgetId
        if(expense.budgetId !== budgetId) return acc

        //add curretn amount ot total
        return acc += expense.amount
    }, 0)
    return budgetSpent;
}

//formatting %s
export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: 'percent',
        minimumFractionDigits: 0
    })
}

//format currency
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "USD"
    })
}

//format date
export const formatDateToLocale = (epoch) => new Date(epoch).toLocaleDateString();


//from local storage
export const getAllMatchingItems = ({category, key, value}) => {
    const data = fetchData(category) ?? [];
    return data.filter((item) => item[key] === value);
}

//delete ann item form local
export const deleteItem = ({key, id}) =>{
    const existingData = fetchData(key);
    if(id){
        const newData = existingData.filter((item) => item.id !== id);
        return localStorage.setItem(key, JSON.stringify(newData));
    }
    return localStorage.removeItem(key)
}