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