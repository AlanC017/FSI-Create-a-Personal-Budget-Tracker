let weeklyExpenses = 0
let monthlyExpenses = 0
let annualExpenses = 0

// Your Code Here
for (let i = 0; i < weeklyExpenseQuestions.length; i++){
    let stringAnswer = window.prompt(weeklyExpenseQuestions[i])
    let numberAnswer = parseFloat(stringAnswer)
    console.log("numberAnswer", numberAnswer, typeof numberAnswer)
    weeklyExpenses = weeklyExpenses + numberAnswer
    console.log("weeklyExpenses", weeklyExpenses)
}


//Monthly Expenses
for (let i = 0; i < monthlyExpenseQuestions.length; i++){
    let stringAnswer = window.prompt(monthlyExpenseQuestions[i])
    let numberAnswer = parseFloat(stringAnswer)
    monthlyExpenses = monthlyExpenses + numberAnswer
    console.log("monthlyExpenses", monthlyExpenses)
}