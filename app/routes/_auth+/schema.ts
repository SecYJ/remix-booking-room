import { z } from "zod";

export const REGISTER_STEP_ONE_SCHEMA = z
    .object({
        email: z.preprocess(
            (value) => (value === "" ? undefined : value),
            z
                .string({
                    required_error: "電子信箱為必填項",
                })
                .email({
                    message: "電子信箱格式錯誤",
                }),
        ),
        password: z
            .string({
                required_error: "密碼為必填項",
            })
            .min(8, {
                message: "密碼長度至少為 8 個字元",
            })
            .max(24, {
                message: "密碼長度不得超過 24 個字元",
            }),

        confirmPassword: z.string().optional(),
    })
    .refine((values) => values.password === values.confirmPassword, {
        message: "密碼不一致",
        path: ["confirmPassword"],
    });

export const REGISTER_STEP_TWO_SCHEMA = z.object({
    username: z
        .string({
            required_error: "使用者名稱為必填項",
        })
        .min(2, {
            message: "使用者名稱長度至少為 2 個字元",
        })
        .max(24, {
            message: "使用者名稱長度不得超過 24 個字元",
        }),
    phoneNumber: z
        .string({
            required_error: "手機號碼為必填項",
        })
        .regex(/\d/, {
            message: "手機號碼格式錯誤",
        }),
    birthYear: z.coerce.number().int().positive(),
    birthMonth: z.coerce.number().int().positive(),
    birthDay: z.coerce.number().int().positive(),
    state: z.string(),
    city: z.string(),
    address: z.string({
        required_error: "地址為必填項",
    }),
    agreeTerm: z.boolean(),
});

export const LOGIN_SCHEMA = z.object({
    email: z
        .string({
            required_error: "電子信箱為必填項",
        })
        .email("電子信箱格式錯誤"),
    password: z
        .string({
            required_error: "密碼為必填項",
        })
        .min(8, "密碼長度至少為 8 個字元")
        .max(24, "密碼長度不得超過 24 個字元")
        .regex(/[A-Za-z0-9]/, "密碼只能包含英文及數字"),
});
