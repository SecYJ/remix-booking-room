import { useParams } from "@remix-run/react";

const TestingId = () => {
	const { id } = useParams();
	console.log(id, "hola");
	return <div>{id}</div>;
};

export default TestingId;
