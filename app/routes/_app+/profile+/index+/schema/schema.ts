import { z } from "zod";

export const BASIC_INFO_SCHEMA = z.object({
    username: z
        .string({
            required_error: "使用者名稱為必填項",
        })
        .min(2, {
            message: "使用者名稱長度至少為 2 個字元",
        })
        .max(24, {
            message: "使用者名稱長度不得超過 24 個字元",
        })
        .optional(),
    phoneNumber: z
        .string({
            required_error: "手機號碼為必填項",
        })
        .regex(/\d/, {
            message: "手機號碼格式錯誤",
        })
        .optional(),
    birthYear: z.coerce.number().int().positive(),
    birthMonth: z.coerce.number().int().positive(),
    birthDay: z.coerce.number().int().positive(),
    state: z.string(),
    city: z.string(),
    address: z.string({
        required_error: "地址為必填項",
    }),
});
