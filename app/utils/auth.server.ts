import { createCookieSessionStorage, redirect } from "@remix-run/node";
import { tokenSession } from "./token.server";

interface RegisterData {
    email: string;
    password: string;
    confirmPassword?: string;
}

export const registerSession = createCookieSessionStorage<RegisterData>({
    cookie: {
        name: "register",
        sameSite: "lax",
        httpOnly: true,
        secrets: ["r3m1xr0ck5"],
        path: "/",
    },
});

export const getRegisterFormData = async (request: Request) => {
    const session = await registerSession.getSession(
        request.headers.get("Cookie"),
    );

    return {
        session,
        registerSession,
        formData: {
            email: session.get("email"),
            password: session.get("password"),
            confirmPassword: session.get("confirmPassword"),
        },
    };
};

export const getUser = async (request: Request) => {
    const user = await tokenSession.getSession(request.headers.get("Cookie"));

    return user;
};

export const requireUser = async (request: Request) => {
    const user = await getUser(request);

    if (!user) {
        return redirect("/login");
    }

    return user;
};
