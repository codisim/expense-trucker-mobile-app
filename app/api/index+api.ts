

export async function PATCH(request: Request, { id }: { id: string }) {
    try {
        
    } catch (error) {
        const errMessage = error instanceof Error ? error.message : "Failed to update expense item";

        return Response.json({
            error,
            errorMessage: errMessage,
        })
    }
}