import { createCookieSessionStorage } from "@remix-run/node";

interface User {
    username: string;
    password: string;
    id: number;
}

const { getSession, commitSession } = createCookieSessionStorage({
    cookie: {
        name: "auth",
        path: "/",
        secrets: ["s3cr3t"],
        sameSite: "lax",
        httpOnly: true,
        maxAge: 60, // 1 minute
    },
});

export const storeUserInSession = async (user: User) => {
    const cookie = await getSession();
    cookie.set("userId", user.id);
    const header = await commitSession(cookie);
    return header;
};

export const getUserIdFromSession = async (request: Request) => {
    const session = await getSession(request.headers.get("Cookie"));
    const userId = session.get("userId");

    return userId;
};
