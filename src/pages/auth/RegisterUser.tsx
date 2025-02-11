import { FormEvent, useEffect, useRef, useState } from "react";
import { RegisterForm, RegisterFormErrors, ResponseMessage } from "@/types";
import { useForm } from "@/hooks/useForm";
import { useSuccess } from "@/hooks/useSuccess";
import { useDisabled } from "@/hooks/useDisabled";
import { useCreateUserMutation } from "@/mutations/useCreateUserMutatuion";
import { validateNewUser } from "@/utils/validateNewUser";
import { CollapsibleAccordion } from "@/components/CollapsibleAccordion";
import { RegisterUserFormFieldset } from "@/pages/auth/RegisterUserFormFieldset";
import { TheButton } from "@/components/navigation/TheButton";

export const RegisterUser = () => {
	const formRef = useRef<HTMLFormElement>(null);

	const { mutate: CREATE_USER, isPending, data } = useCreateUserMutation();

	const { isDisabled, setDisabled } = useDisabled();
	const [submitClicked, setSubmitClicked] = useState<boolean>(false);
	const [response, setResponse] = useState<ResponseMessage>();
	const { success, setSuccess } = useSuccess("/login", response);

	const [formState, setFormState, HANDLE_CHANGE] = useForm<RegisterForm>({
		username: "",
		email: "",
		password: "",
		confirmPassword: "",
	});
	const { username, email, password } = formState;

	const [errors, setErrors] = useState<RegisterFormErrors>({
		username: [],
		email: [],
		password: [],
		confirmPassword: [],
	});

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();
		const { newErrors, isSuccess } = validateNewUser(formState);
		setErrors(newErrors);
		setSuccess(isSuccess);

		if (!success) {
			setSubmitClicked(true);
		} else if (success) {
			CREATE_USER({
				username,
				email,
				password,
			});
			setSubmitClicked(false);
		}
	};
	const SEND_FORM = () => {
		formRef.current?.requestSubmit();
	};

	useEffect(() => {
		if (submitClicked) {
			const { newErrors } = validateNewUser(formState);
			setErrors(newErrors);
		}
	}, [formState, submitClicked]);

	useEffect(() => {
		if (!data) return;
		setResponse(data);
		if (data?.status === "success") {
			setDisabled(true);
			setFormState({
				username: "",
				email: "",
				password: "",
				confirmPassword: "",
			});
		}
	}, [data]);

	return (
		<CollapsibleAccordion>
			<form
				ref={formRef}
				onSubmit={HANDLE_SUBMIT}
				className="mt-[50px] flex flex-col md:w-[400px] mx-auto"
			>
				<RegisterUserFormFieldset
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
