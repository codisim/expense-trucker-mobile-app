
export type IExpenseCategory =
    | 'Food'
    | 'Transportation'
    | 'Entertainment'
    | 'Utilities'
    | 'Healthcare'
    | 'Education'
    | 'Shopping'
    | 'Travel'
    | 'Other';

export type IExpense = {
    id: string;
    title: string;
    category: IExpenseCategory;
    amount: number;
    //   expenseDate: Date;
    expenseDate: string;
};


export type IExpenseResponse = { expense: IExpense };


export type IExpenseInput = {
    title: string;
    category: IExpenseCategory;
    amount: number;
    expenseDate: string;
}


export type IExpenseStore = {
    userExpenses: IExpense[];
    fetchExpenses: () => Promise<void>;
    addExpense: (expense: IExpenseInput) => Promise<void>;
    removeExpense: (id: string) => Promise<void>;
    updateExpense: (id: string, input: IExpenseInput) => Promise<void>;

    getExpensesByCategory: (category: IExpenseCategory) => IExpense[];
    getTotalExpenses: () => number;
    getTotalExpensesByCategory: (category: IExpenseCategory) => number;
}