import { pgTable, text } from "drizzle-orm/pg-core";


export const expenseTransaction = pgTable("expense_transaction", {
    id: text("id").primaryKey(),
    
});