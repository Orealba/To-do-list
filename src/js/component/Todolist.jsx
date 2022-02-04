import React, { useEffect, useState } from "react";
import "../../styles/Todolist.css";

const Todolist = (props) => {
	const [list, setlist] = useState([]);
	const [tarea, setTarea] = useState("");

	const HandleSubmit = (ev) => {
		ev.preventDefault();
		setlist([...list, tarea]);
		document.getElementsByClassName;
		console.log(list);
	};

	return (
		<>
			<div className="todo-list">
				<h1>To-do list</h1>
				<form onSubmit={HandleSubmit}>
					<input
						className="vacio"
						onChange={(ev) => setTarea(ev.target.value)}
						type="text"
						placeholder="text"
					/>
					<button type="submit"> Agregar tarea</button>
				</form>
				{list.map((item, index) => (
					<div key={index}>
						<span>{item}</span>
					</div>
				))}
			</div>
		</>
	);
};
export default Todolist;
