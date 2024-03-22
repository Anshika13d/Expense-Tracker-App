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

//delete item
export const deleteItem = ({key}) => {
    return localStorage.removeItem(key);
};