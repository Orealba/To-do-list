import React from "react";
import "../../styles/Todolist.css";

const Todolist = () => {
	return (
		<>
			<div className="lista">
				<h1> To-do list</h1>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						id="flexCheckDefault"
					/>
					<label class="form-check-label" for="flexCheckDefault">
						<h3> Limpiar la casa</h3>
					</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						id="flexCheckChecked"
						checked
					/>
					<label class="form-check-label" for="flexCheckChecked">
						<h3>Imprimir las guías </h3>
					</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						id="flexCheckDefault"
					/>
					<label class="form-check-label" for="flexCheckDefault">
						<h3> Sacar al perro</h3>
					</label>
				</div>
				<div class="form-check">
					<input
						class="form-check-input"
						type="checkbox"
						value=""
						id="flexCheckDefault"
					/>
					<label class="form-check-label" for="flexCheckDefault">
						<h3> Comprar el periódico</h3>
					</label>
				</div>
			</div>
		</>
	);
};
export default Todolist;
