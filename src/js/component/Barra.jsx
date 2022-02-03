import React from "react";
import "../../styles/Barra.css";

const Barra = () => {
	return (
		<div className="labarra">
			<input
				class="form-control"
				type="text"
				placeholder="Disabled input"
				aria-label="Disabled input example"
				disabled
			/>
			<input
				class="form-control"
				type="text"
				value="Disabled readonly input"
				aria-label="Disabled input example"
				disabled
				readonly></input>
		</div>
	);
};

export default Barra;
