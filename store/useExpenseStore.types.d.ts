
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