
export interface FormInterface{
    email:string,
    password:string
}

export interface BudgetDataInterface{
    id:string | null | number,
    date:string | null | Date,
    description:string,
    amount:number,
    type:string
}

export interface budgetInterface 
{
    userId:number,
    description: string,
    type:string,
    value:number,        
    
}

export interface BudgetUiInterface 
{
    income:number
    expense:number
    total:number
}

export interface modelInterface 
{
    total:number
    expenseTotal:number
    incomeTotal:number
    allExp:object[]
    allinc:object[]
}