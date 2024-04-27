import { createCookieSessionStorage } from "@remix-run/node";

interface SessionData {
    token: string;
}

export const tokenSession = createCookieSessionStorage<SessionData>({
    cookie: {
        name: "token",
        sameSite: "lax",
        httpOnly: true,
        secrets: ["r3m1xr0ck5"],
        path: "/",
    },
});
