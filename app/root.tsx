import { LoaderFunctionArgs, json } from "@remix-run/node";
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
} from "@remix-run/react";
import stylesheet from "~/index.css?url";
import { tokenSession } from "./utils/token.server";
import { getUser } from "./services/users/getUser.server";

export const links = () => [{ rel: "stylesheet", href: stylesheet }];

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const session = await tokenSession.getSession(
        request.headers.get("Cookie"),
    );

    if (!session.data.token) return null;

    const user = await getUser(session.data.token);

    return json(user.result);
};

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <Meta />
                <Links />
            </head>
            <body>
                <Outlet />
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}
