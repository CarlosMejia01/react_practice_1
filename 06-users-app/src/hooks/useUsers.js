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

	const handlerAddUser = (user) => {
		let type;
		if (user.id === 0) {
			type = "addUser";
		} else {
			type = "updateUser";
		}
		dispatch({
			type,
			payload: user,
		});

		Swal.fire(
			user.id === 0 ? "User created" : "User updated",
			user.id === 0
				? "The user has successfully created!"
				: "The user has successfully updated",
			"success"
		);
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
	};

	return {
		users,
		userSelected,
		initialUserForm,
		handlerAddUser,
		handlerRemoveUser,
		handlerUserSelectedForm,
	};
};
