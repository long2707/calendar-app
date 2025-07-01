import React from "react";
import AuthForm from "../components/AuthForm";
import LayoutAuth from "../components/LayoutAuth";

const SignUp = () => {
	return (
		<LayoutAuth>
			<AuthForm type={"sign-up"} />
		</LayoutAuth>
	);
};

export default SignUp;
