import React from "react";

const TextFieldInput = (props) => {
	const { label, name, type, placeholder } = props;

	return (
		<div className="form-item ">
			<label
				htmlFor={name}
				className="text-sm font-medium leading-none text-gray-700"
			>
				{label}
			</label>
			<div className="flex  flex-col">
				<input
					id={name}
					className="flex w-full rounded-lg border border-gray-300 px-3 py-2 focus-visible:outline-blue-300  file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground"
					type={type}
					placeholder={placeholder}
				/>
			</div>
		</div>
	);
};

export default TextFieldInput;
