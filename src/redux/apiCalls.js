import { publicRequest, userRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
	getTeacherFailure,
	getTeacherStart,
	getTeacherSuccess,
	deleteTeacherFailure,
	deleteTeacherStart,
	deleteTeacherSuccess,
	updateTeacherFailure,
	updateTeacherStart,
	updateTeacherSuccess,
	addTeacherFailure,
	addTeacherStart,
	addTeacherSuccess,
} from "./teacherRedux";

//LOGIN
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};
//GET ALL TEACHERS
export const getTeachers = async (dispatch) => {
	dispatch(getTeacherStart());
	try {
		const res = await publicRequest.get("/teachers");
		dispatch(getTeacherSuccess(res.data));
	} catch (err) {
		dispatch(getTeacherFailure());
	}
};

//DELETE TEACHER
export const deleteTeacher = async (id, dispatch) => {
	dispatch(deleteTeacherStart());
	try {
		const res = await userRequest.delete(`/teachers/${id}`);
		dispatch(deleteTeacherSuccess(res.data));
	} catch (err) {
		dispatch(deleteTeacherFailure());
	}
};
//UPDATE TEACHER
export const updateTeacher = async (id, teacher, dispatch) => {
	dispatch(updateTeacherStart());
	try {
		// update
		dispatch(updateTeacherSuccess(id, teacher));
	} catch (err) {
		dispatch(updateTeacherFailure());
	}
};

//CREATE
export const addTeacher = async (teacher, dispatch) => {
	dispatch(addTeacherStart());
	try {
		const res = await userRequest.post(`/teachers/addTeacher`, teacher);
		dispatch(addTeacherSuccess(res.data));
	} catch (err) {
		dispatch(addTeacherFailure());
	}
};
