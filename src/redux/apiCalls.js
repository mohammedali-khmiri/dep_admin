import { publicRequest } from "../requestMethods";
import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import {
	getTeacherFailure,
	getTeacherStart,
	getTeacherSuccess,
} from "./teacherRedux";

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post("/auth/login", user);
		dispatch(loginSuccess(res.data));
	} catch (err) {
		dispatch(loginFailure());
	}
};

export const getTeachers = async (dispatch) => {
	dispatch(getTeacherStart());
	try {
		const res = await publicRequest.get("/teachers");
		dispatch(getTeacherSuccess(res.data));
	} catch (err) {
		dispatch(getTeacherFailure());
	}
};
