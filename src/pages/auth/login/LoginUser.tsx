import { FormEvent, useEffect, useRef, useState } from "react";
import { LoginForm, LoginFormErrors, ResponseMessage } from "@/types";
import { useForm } from "@/hooks/useForm";
import { useSuccess } from "@/hooks/useSuccess";
import { useDisabled } from "@/hooks/useDisabled";
import { useLogInMutation } from "@/mutations/useLogInMutation";
import { validateUser } from "@/utils/validateUser";
import { CollapsibleAccordion } from "@/components/CollapsibleAccordion";
import { TheButton } from "@/components/navigation/TheButton";
import { LoginUserFormFieldset } from "@/pages/auth/login/LoginUserFormFieldset";

import { Route as AuthUserHomePageImport } from "@/routes/auth/_withUserAuth/user/homePage";
import { Route as AuthAdminHomePageImport } from "@/routes/auth/_withAdminAuth/admin/homePage";

export const LoginUser = () => {
	const formRef = useRef<HTMLFormElement>(null);
	const authUserLink = AuthUserHomePageImport.fullPath;
	const authAdminLink = AuthAdminHomePageImport.fullPath;

	const { mutate: LOGIN_USER, isPending, data } = useLogInMutation();

	const { isDisabled, setDisabled } = useDisabled();
	const [submitClicked, setSubmitClicked] = useState<boolean>(false);
	const [response, setResponse] = useState<ResponseMessage | null>(null);
	const [link, setLink] = useState<string>(authUserLink);

	const { success, setSuccess } = useSuccess(link, response);

	const [formState, setFormState, HANDLE_CHANGE] = useForm<LoginForm>({
		login: "",
		password: "",
	});
	const { login, password } = formState;

	const [errors, setErrors] = useState<LoginFormErrors>({
		login: [],
		password: [],
	});

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();
		const { newErrors, isSuccess } = validateUser(formState);
		setErrors(newErrors);
		setSuccess(isSuccess);

		if (!success) {
			setSubmitClicked(true);
		} else if (success) {
			LOGIN_USER({
				login,
				password,
			});
			setFormState({
				login: "",
				password: "",
			});
			setSubmitClicked(false);
		}
	};
	const SEND_FORM = () => {
		formRef.current?.requestSubmit();
	};

	useEffect(() => {
		if (submitClicked) {
			const { newErrors } = validateUser(formState);
			setErrors(newErrors);
		}
	}, [formState, submitClicked]);

	useEffect(() => {
		if (!data) return;
		setResponse(data);

		if (data.role === "admin") {
			setLink(authAdminLink);
		} else setLink(authUserLink);

		if (data.status === "success") {
			setDisabled(true);
		}
	}, [data]);

	return (
		<CollapsibleAccordion>
			<form
				ref={formRef}
				onSubmit={HANDLE_SUBMIT}
				className="mt-[50px] flex flex-col md:w-[400px] mx-auto"
			>
				<LoginUserFormFieldset
					onChange={HANDLE_CHANGE}
					formState={formState}
					errors={errors}
				/>
				<div className="mx-auto p-5">
					<TheButton
						onClick={SEND_FORM}
						disabled={isPending || isDisabled}
						btnLabel="SEND"
						type="submit"
					></TheButton>
				</div>
			</form>
			{success && (
				<div className="w-[100%] text-center text-[20px]">
					<p
						className={`py-5 ${response?.status === "success" ? "text-green" : "text-error"}`}
					>
						{response ? response.message : ""}
					</p>
				</div>
			)}
		</CollapsibleAccordion>
	);
};
