import { LoaderFunctionArgs, redirectDocument } from "@remix-run/node";
import { tokenSession } from "~/utils/token.server";

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const session = await tokenSession.getSession(
        request.headers.get("Cookie"),
    );

    return redirectDocument("/", {
        headers: {
            "Set-Cookie": await tokenSession.destroySession(session),
        },
    });
};
