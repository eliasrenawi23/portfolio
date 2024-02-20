export const validateString = (value: unknown, maxLength: number) =>
    !value || typeof value !== "string" || value.length > maxLength ? false : true;



export const getErrorMessage = (error: unknown): string => {
    if(error instanceof Error)
        return error.message;

    if(error && typeof error === "object" && "message" in error)
        return String((error as { message: unknown }).message);

    if(typeof error === "string")
        return error;

    return "Something went wrong";
};