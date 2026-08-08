import { updateExpenseItem } from "@/lib/server/db-actions";


export async function PATCH(request: Request, { id }: { id: string }) {
    try {

        const body = await request.json();
        const { title, category, expense_date, amount } = body || {};

        const updateExpense = await updateExpenseItem(id, {
            title,
            category,
            expense_date,
            amount
        })


        if(!updateExpense){
            return Response.json({
                error: "item not found",
                status: 404
            });
        }

        return Response.json({
            message: "Expense item updated successfully",
            // data: updateExpense,
            updateExpense,
            status: 200
        });
        
    } catch (error) {
        const errMessage = error instanceof Error ? error.message : "Failed to update expense item";

        return Response.json({
            error,
            errorMessage: errMessage,
        })
    }
}