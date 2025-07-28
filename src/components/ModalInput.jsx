import React from "react";

const ModalInput = ({ isOpen, onClose }) => {
	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
			<div className="w-full max-w-md bg-white rounded-xl shadow-xl p-6">
				<h2 className="text-xl font-semibold mb-4">Edit event</h2>

				<div className="space-y-4">
					<div>
						<label className="block text-sm text-gray-600 mb-1">
							Title
						</label>
						<input
							type="text"
							className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter title"
						/>
					</div>

					<div>
						<label className="block text-sm text-gray-600 mb-1">
							Description
						</label>
						<textarea
							rows={3}
							className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
							placeholder="Enter description"
						/>
					</div>

					<div className="flex items-center space-x-2">
						<input type="checkbox" id="allday" />
						<label
							htmlFor="allday"
							className="text-sm text-gray-700"
						>
							All day
						</label>
					</div>

					<div>
						<label className="block text-sm text-gray-600 mb-1">
							Start date
						</label>
						<input
							type="datetime-local"
							className="w-full border border-gray-300 rounded-md px-3 py-2"
						/>
					</div>

					<div>
						<label className="block text-sm text-gray-600 mb-1">
							End date
						</label>
						<input
							type="datetime-local"
							className="w-full border border-gray-300 rounded-md px-3 py-2"
						/>
					</div>

					<div className="flex items-center space-x-2">
						{[
							"bg-green-500",
							"bg-purple-500 ring-2 ring-purple-300",
							"bg-blue-500",
							"bg-cyan-500",
							"bg-yellow-500",
							"bg-orange-500",
							"bg-red-700",
						].map((color, i) => (
							<button
								key={i}
								className={`w-5 h-5 rounded-full focus:outline-none ${color}`}
							/>
						))}
					</div>
				</div>

				<div className="mt-6 flex justify-between items-center">
					<button className="text-red-600 hover:text-red-800">
						🗑️
					</button>
					<div className="space-x-2">
						<button
							onClick={onClose}
							className="px-4 py-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
						>
							Cancel
						</button>
						<button className="px-4 py-2 rounded-md bg-black text-white hover:bg-gray-800">
							Save changes
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ModalInput;
