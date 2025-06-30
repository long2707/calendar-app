import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

const Calendar = React.lazy(() => import("./pages/Calendar"));
const SignIn = React.lazy(() => import("./pages/SignIn"));
const SignUp = React.lazy(() => import("./pages/SignUp"));

const App = () => {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Routes>
				<Route path="/" element={<Calendar />} />
				<Route path="/sign-in" element={<SignIn />} />
				<Route path="/sign-up" element={<SignUp />} />
			</Routes>
		</Suspense>
	);
};

export default App;
