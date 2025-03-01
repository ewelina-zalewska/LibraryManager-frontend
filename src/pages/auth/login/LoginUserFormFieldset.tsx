import { LoginUserFormFieldsetProps } from "@/types";
import { TheInput } from "@/components/TheInput";
import { FieldErrors } from "@/components/handleData/FieldErrors";

export const LoginUserFormFieldset = ({
	onChange,
	formState,
	errors,
}: LoginUserFormFieldsetProps) => {
	const { login, password } = formState;
	return (
		<>
			<legend className="font-normal text-[30px] text-center pb-5">
				Log in
			</legend>
			<TheInput
				label="Login"
				type="text"
				name="login"
				placeholder="user id"
				value={login}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.login} />
			<TheInput
				label="Password"
				type="password"
				name="password"
				placeholder="password"
				value={password}
				onChange={onChange}
			/>
			<FieldErrors errors={errors.password} />
		</>
	);
};
