import { Outlet } from "@remix-run/react";
import { Header } from "~/components";

const AuthLayout = () => {
    return <>
        <Header />
        <Outlet />
    </> 
} 

export default AuthLayout;