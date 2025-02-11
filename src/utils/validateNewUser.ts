import { RegisterFormErrors, RegisterForm } from "@/types";

export const validateNewUser = (RegisterForm: RegisterForm) => {
	const { username, email, password, confirmPassword } = RegisterForm;

	let isSuccess = true;
	const newErrors: RegisterFormErrors = {
		username: [],
		email: [],
		password: [],
		confirmPassword: [],
	};

	if (!username.trim()) {
		newErrors.username.push("Username is required.");
	} else if (username.length < 3) {
		newErrors.username.push("Username must be at least 3 characters long");
	}

	if (!email.trim()) {
		newErrors.email.push("Email is required.");
	}

	if (!password.trim()) {
		newErrors.password.push("Password is required.");
	} else if (password.length < 8) {
		newErrors.password.push("Password must be at least 8 characters long");
	}

	if (password.trim() !== confirmPassword.trim()) {
		newErrors.confirmPassword.push("Password must be the same.");
	}

	if (
		!username.trim() ||
		username.length < 3 ||
		!password.trim() ||
		password.length < 6 ||
		!email.trim() ||
		password.trim() !== confirmPassword.trim()
	) {
		isSuccess = false;
	}
	return { newErrors, isSuccess };
};
