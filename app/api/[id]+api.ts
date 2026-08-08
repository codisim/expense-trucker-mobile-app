import { getAllExpenses } from "@/lib/server/db-actions";


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