import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
const TOKEN =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMGJjM2YyNTQwYjgzNjhhOTAxMzg3MyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2MjQ2MTY5NCwiZXhwIjoxNjYyNzIwODk0fQ.tAyJDJ9HzY2FdwF3ZEU8jY4zYy87ey_n4t8Mf_YbLKQ";
// JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
// 	.currentUser.accessToken;

export const publicRequest = axios.create({
	baseURL: BASE_URL,
});

export const userRequest = axios.create({
	baseURL: BASE_URL,
	headers: { token: TOKEN },
});
