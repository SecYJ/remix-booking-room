import { ZodSchema } from "zod";

export const validateWithSchema = <T>(schema: ZodSchema<T>, data: unknown) => {
    const result = schema.safeParse(data);

    if (!result.success) {
        throw new Error("Validate Error");
    }

    return result.data;
};
