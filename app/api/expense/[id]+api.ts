import { createExpenseItem, getAllExpenses } from "@/lib/server/db-actions";


export async function GET(_request: Request) {
    try {

        const expenses = await getAllExpenses();
        return Response.json({
            message: "Expenses fetched successfully",
            data: expenses,
            status: 200
        });

    } catch (error) {
        const errMessage = error instanceof Error ? error.message : "Failed to fetch expenses";

        return Response.json({
            error,
            errorMessage: errMessage,
        })
    }
}




export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { title, category, expense_date, amount } = body || {};

        if(!title || !category || !expense_date || !amount){
            return Response.json({
                error: "Missing required fields",
                status: 400
            });
        }

        const createExpense = await createExpenseItem({
            title,
            category,
            expense_date,
            amount
        });

        if(!createExpense){
            return Response.json({
                error: "Failed to create expense item",
                status: 500
            });
        }

        return Response.json({
            message: "Expense item created successfully",
            data: createExpense,
            status: 201
        });

    } catch (error) {
        const errMessage = error instanceof Error ? error.message : "Failed to create expense item";

        return Response.json({
            error,
            errorMessage: errMessage,
        })
    }   
}



