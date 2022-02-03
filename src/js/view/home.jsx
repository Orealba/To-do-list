import React from "react";

import Todolist from "../component/Todolist.jsx";
import Barra from "../component/Barra.jsx";

//create your first component
const Home = () => {
	return (
		<>
			<Barra />
			<Todolist />
		</>
	);
};

export default Home;
