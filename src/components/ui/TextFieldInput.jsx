import React from "react";

import { Controller } from "react-hook-form";

const TextFieldInput = (props) => {
	const { label, name, type, placeholder, control } = props;

	return (
		<>
			<Controller
				name={name}
				control={control}
				render={({
					field: { onChange, value, ref },
					fieldState: { error },
				}) => (
					<div className="flex flex-col gap-1">
						<label
							htmlFor={name}
							className="text-sm font-semibold text-gray-700"
						>
							{label}
						</label>
						<input
							type={type}
							id={name}
							value={value}
							onChange={onChange}
							ref={ref}
							placeholder={placeholder}
							className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
						/>
						{error && (
							<span className="text-sm text-red-500 mt-1">
								{error.message}
							</span>
						)}
					</div>
				)}
			/>
		</>
	);
};

export default TextFieldInput;
