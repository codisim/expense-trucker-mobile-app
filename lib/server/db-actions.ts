import { desc } from "drizzle-orm"
import { db } from "./db/client"
import { expenseTransaction } from "./db/schema"


export const getAllExpenses = async () => {
    const rows = await db
        .select()
        .from(expenseTransaction)
        .orderBy(desc(expenseTransaction.created_at))

    return rows;
}



export const createExpense = async (expense: {
    title: string;
    category: string;
    amount: number;
    expense_date: string;
}) => {
    const { title, category, amount, expense_date } = expense || {};  

    const result = await db
        .insert(expenseTransaction)
        .values({
            id: crypto.randomUUID(),
            title,
            category,
            amount,
            expense_date,
            created_at: Date.now(),
        })
        .returning();

    return result[0];
}