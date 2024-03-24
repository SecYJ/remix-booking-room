import { z } from "zod";

export const schema = z.object({
    username: z
        .string({ required_error: "使用者名稱是必填項" })
        .min(2, "使用者名稱最少為2個字符")
        .max(50, "使用者名稱不可大於50個字符"),
    phoneNum: z
        .string({
            required_error: "手機號碼為必填項",
        })
        .regex(/^\d+$/, {
            message: "手機號碼只可以包含數字",
        })
        .refine((val) => val.length >= 10 && val.length <= 12, {
            message: "手機號碼長度應該在10到12之間",
        }),
    email: z
        .string({
            required_error: "電子信箱為必填項",
        })
        .email("電子信箱格式不正確"),
    address: z
        .string({ required_error: "地址為必填項" })
        .max(255, "地址不可大於255個字符"),
});
