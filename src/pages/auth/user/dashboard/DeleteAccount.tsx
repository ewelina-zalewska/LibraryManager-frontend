import { FormEvent, useContext, useEffect, useRef, useState } from "react";
import { TheButton } from "@/components/navigation/TheButton";
import { TheInput } from "@/components/TheInput";
import { UserDataContext } from "@/context/UserDataContext";
import { useForm } from "@/hooks/useForm";
import { useConfirmDeleteAccountMutation } from "@/mutations/useConfirmDeleteAccountMutation";
import { useCreateLogMutation } from "@/mutations/useCreateLogMutation";
import { useDeleteAccountMutation } from "@/mutations/useDeleteAccountMutation";
import { getTime } from "@/utils/getTime";
import { useNavigate } from "@tanstack/react-router";
import { DataLoading } from "@/components/handleData/DataLoading";
import { useLogoutMutation } from "@/mutations/useLogoutMutation";
import { useCheckDeleteAccount } from "@/hooks/useCheckDeleteAccount";

export const DeleteAccount = () => {
	const userBooks = useCheckDeleteAccount();
	const userData = useContext(UserDataContext);
	const { login } = userData;
	const formRef = useRef<HTMLFormElement>(null);
	const {
		mutate: CONFIRM_DELETE_ACCOUNT,
		isPending: LOAD_CONFIRM,
		data: DATA_CONFIRM,
	} = useConfirmDeleteAccountMutation();
	const {
		mutate: DELETE_ACCOUNT,
		isPending: LOAD_DELETE,
		data: DATA_DELETE,
	} = useDeleteAccountMutation();
	const { mutate: CREATE_LOG } = useCreateLogMutation();
	const { mutate: LOGOUT_USER } = useLogoutMutation();

	const [error, setError] = useState<{ emptyInput: boolean; clicked: boolean }>(
		{
			emptyInput: true,
			clicked: false,
		},
	);
	const [formState, setFormState, HANDLE_CHANGE] = useForm<{
		password: string;
	}>({
		password: "",
	});
	const { password } = formState;
	const { emptyInput, clicked } = error;

	const HANDLE_SUBMIT = (e: FormEvent) => {
		e.preventDefault();
		setError((prevError) => ({
			...prevError,
			clicked: true,
		}));
		if (emptyInput) return;

		CONFIRM_DELETE_ACCOUNT({
			password,
		});
		setFormState({
			password: "",
		});
	};

	const SEND_FORM = () => {
		formRef.current?.requestSubmit();
	};

	const navigate = useNavigate();
	useEffect(() => {
		if (!DATA_CONFIRM) return;
		if (DATA_CONFIRM.status === "success") {
			LOGOUT_USER({ message: "Logout" });
			DELETE_ACCOUNT(login);
		}
		CREATE_LOG({
			action: "Account deletion",
			bookId: null,
			created_on: new Date().toISOString().split("T")[0],
			created_at: getTime(),
			userID: login,
		});
		console.log(DATA_DELETE);
		navigate({
			to: "/logout",
			search: { status: "The user account has been deleted successfully." },
		});
	}, [DATA_CONFIRM]);

	useEffect(() => {
		if (password) {
			setError((prevError) => ({
				...prevError,
				emptyInput: false,
			}));
		} else {
			setError((prevError) => ({
				...prevError,
				emptyInput: true,
			}));
		}
	}, [password]);
	console.log(userBooks);
	return (
		<div>
			{LOAD_DELETE && <DataLoading />}
			<div className="p-5">
				{userBooks.length > 0 ? (
					<div>
						<p className="text-error text-center">
							You cannot delete your account. Return all books first.
						</p>
					</div>
				) : (
					<p className="text-center">
						Are you sure you want to delete your account? Enter your password
						and your account will be permanently deleted.
					</p>
				)}
			</div>
			<div>
				<form
					ref={formRef}
					onSubmit={HANDLE_SUBMIT}
					className="mt-[50px] flex flex-col md:w-[400px] mx-auto"
				>
					<TheInput
						type="password"
						name="password"
						placeholder="password"
						value={password}
						onChange={HANDLE_CHANGE}
					/>
					<div className="mx-auto p-5">
						<TheButton
							onClick={SEND_FORM}
							disabled={LOAD_CONFIRM || userBooks.length > 0}
							btnLabel="Delete Account"
							type="submit"
						></TheButton>
					</div>
					{clicked && emptyInput && (
						<div>
							<p className="text-error text-center">Password is required</p>
						</div>
					)}{" "}
				</form>
			</div>
		</div>
	);
};
