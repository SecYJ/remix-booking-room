import { createCookieSessionStorage } from "@remix-run/node";

interface SessionData {
    token: string;
    username: string;
}

export const tokenSession = createCookieSessionStorage<SessionData>({
    cookie: {
        name: "token",
        sameSite: "lax",
        httpOnly: true,
        secrets: ["r3m1xr0ck5"],
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
    },
});
