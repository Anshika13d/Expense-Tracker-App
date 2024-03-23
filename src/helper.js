export const waiit = () => new Promise(res => setTimeout(res, Math.random() * 2000))

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

//delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key);
};

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