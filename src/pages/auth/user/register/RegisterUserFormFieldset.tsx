import { RegisterUserFormFieldsetProps } from "@/types";
import { TheInput } from "@/components/TheInput";
import { FieldErrors } from "@/components/handleData/FieldErrors";

export const RegisterUserFormFieldset = ({
	onChange,
	formState,
	errors,
}: RegisterUserFormFieldsetProps) => {
	const { username, email, password, confirmPassword, accessCode } = formState;
	return (
		<>
			<legend className="font-normal text-[30px] text-center pb-5">
				Sign up
			</legend>
			<TheInput
				label="Username"
				type="text"
				name="username"
				placeholder="username"
				value={username}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.username} />
			<TheInput
				label="Email"
				type="email"
				name="email"
				placeholder="email"
				value={email}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.email} />
			<TheInput
				label="Password"
				type="password"
				name="password"
				placeholder="password"
				value={password}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.password} />
			<TheInput
				label="Confirm password"
				type="password"
				name="confirmPassword"
				placeholder="confirm password"
				value={confirmPassword}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.confirmPassword} />
			<TheInput
				label="Do you have an access code as admin?"
				type="password"
				name="accessCode"
				placeholder="access code as admin"
				value={accessCode}
				onChange={onChange}
			/>
		</>
	);
};
