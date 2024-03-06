import { redirect } from "@remix-run/node";
import { getUserIdFromSession } from "./session.server"

export const requireUser = async (request: Request) => {
    const userId = await getUserIdFromSession(request);

    if (!userId) throw redirect("/login");

    return { username: "Sharon i miss you", id: 1}
}