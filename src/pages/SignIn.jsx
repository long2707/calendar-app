import React from "react";
import AuthForm from "../components/AuthForm";
import LayoutAuth from "../components/LayoutAuth";

const SignIn = () => {
	return (
		<LayoutAuth>
			<AuthForm type={"sign-in"} />
		</LayoutAuth>
	);
};

export default SignIn;
