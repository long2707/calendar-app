import React from "react";
import TextFieldInput from "./ui/TextFieldInput";
import { authFormSchema } from "../lib/utils";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";

const AuthForm = ({ type }) => {
	const formSchema = authFormSchema(type);

	const navigate = useNavigate();
	const { control, handleSubmit } = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
		},
	});

	const handleSubmitForm = async (data) => {
		try {
			console.log("Submitted Data:", data);
			navigate("/");
		} catch (error) {
		} finally {
		}
	};

	return (
		<section className="auth-form">
			<header className="flex flex-col gap-5 md:gap-8">
				<a href="/" className="flex  gap-2 items-center">
					<img src="/images/logo.svg" alt="logo app" />
					<h1 className="font-ibm-plex-serif text-2xl font-bold text-black-1">
						Calendar App
					</h1>
				</a>
				<div className="flex flex-col gap-1 md:gap-3">
					<h1 className="text-4xl lg:text-36 font-semibold text-gray-900">
						{type === "sign-in" ? "Đăng nhập" : "Đăng ký"}

						<p className="text-16 font-normal text-gray-600	">
							{type === "sign-in"
								? "Đăng nhập vào tài khoản của bạn"
								: "Đăng ký tài khoản mới"}
						</p>
					</h1>
				</div>
			</header>
			<form
				action=""
				className="space-y-8"
				onSubmit={handleSubmit(handleSubmitForm)}
			>
				{type === "sign-up" && (
					<div className="flex max-w-full gap-4">
						<TextFieldInput
							label="Họ"
							name="firstName"
							type="text"
							placeholder="Nhập họ của bạn"
							control={control}
						/>
						<TextFieldInput
							label="Tên"
							name="lastName"
							type="text"
							placeholder="Nhập tên của bạn"
							control={control}
						/>
					</div>
				)}
				<TextFieldInput
					label="Email"
					name="email"
					type="email"
					placeholder="Nhập địa chỉ email của bạn"
					control={control}
				/>
				<TextFieldInput
					label="Mật khẩu"
					name="password"
					type="password"
					placeholder="Nhập mật khẩu của bạn"
					control={control}
				/>

				<div className="flex w-full">
					<button className="flex-center w-full bg-blue-500 text-white py-2 rounded-xl font-bold cursor-pointer hover:bg-blue-600 transition-colors duration-200">
						{" "}
						{type == "sign-in" ? "Đăng nhập" : "Đăng ký"}
					</button>
				</div>
			</form>
			<footer className="flex justify-center  gap-1">
				<p className="text-sm font-normal text-gray-600">
					{type == "sign-in"
						? "Bạn không có tài khoản?"
						: "Bạn đã có tài khoản?"}
				</p>
				<a
					href={type === "sign-in" ? "/sign-up" : "/sign-in"}
					className="cursor-pointer text-sm text-blue-500"
				>
					{type == "sign-in" ? "Đăng ký" : "Đăng nhập"}
				</a>
			</footer>
		</section>
	);
};

export default AuthForm;
