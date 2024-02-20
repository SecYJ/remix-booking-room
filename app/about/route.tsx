import { Outlet } from "@remix-run/react";

const Route = () => {
	return (
		<div>
			route page
			<Outlet />
		</div>
	);
};

export default Route;
