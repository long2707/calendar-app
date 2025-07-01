import React from "react";

const LayoutAuth = ({ children }) => {
	return (
		<main className="flex w-full min-h-screen justify-between font-inter">
			<section className="flex-center size-full max-sm:px-6">
				{children}
			</section>
			<div className="auth-asset">
				<div>
					<img
						src="/images/background.webp"
						alt="background"
						className="object-contain w-lg h-[512px]"
					/>
				</div>
			</div>
		</main>
	);
};

export default LayoutAuth;
