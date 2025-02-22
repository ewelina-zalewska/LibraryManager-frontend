import { LoginFormErrors, LoginForm } from "@/types";

export const validateUser = (RegisterForm: LoginForm) => {
	const { login, password } = RegisterForm;

	let isSuccess = true;
	const newErrors: LoginFormErrors = {
		login: [],
		password: [],
	};

	if (!login.trim()) {
		newErrors.login.push("Login is required.");
	}
	if (!password.trim()) {
		newErrors.password.push("Password is required.");
	}

	if (!login.trim() || !password.trim()) {
		isSuccess = false;
	}
	return { newErrors, isSuccess };
};
