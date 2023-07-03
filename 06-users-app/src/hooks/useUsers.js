import { useReducer, useState } from "react";
import Swal from "sweetalert2";
import { usersReducer } from "../reducers/usersReducer";

const initialUsers = [
	{
		id: 1,
		username: "pepe",
		password: "12345",
		email: "pepe@example.com",
	},
];

const initialUserForm = {
	id: 0,
	username: "",
	password: "",
	email: "",
};
export const useUsers = () => {
	const [users, dispatch] = useReducer(usersReducer, initialUsers);
	const [userSelected, setUserSelected] = useState(initialUserForm);
	const [visibleForm, setVisibleForm] = useState(false);

	const handlerAddUser = (user) => {
		dispatch({
			type: user.id === 0 ? 'addUser' : 'updateUser',
			payload: user,
		});

		Swal.fire(
			user.id === 0 ? "User created" : "User updated",
			user.id === 0
				? "The user has successfully created!"
				: "The user has successfully updated",
			"success"
		);
		setVisibleForm(false);
		setUserSelected(initialUserForm);
	};

	const handlerRemoveUser = (id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch({
					type: "removeUser",
					payload: id,
				});
				Swal.fire("User Deleted!", "Your user has been deleted.", "success");
			}
		});
	};

	const handlerUserSelectedForm = (user) => {
		setUserSelected({ ...user });
		setVisibleForm(true);
	};

	return {
		users,
		userSelected,
		initialUserForm,
		visibleForm,
		handlerAddUser,
		handlerRemoveUser,
		handlerUserSelectedForm,
	};
};
