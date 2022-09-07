import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import TeacherList from "./pages/teacherList/TeacherList";
import Teacher from "./pages/teacher/Teacher";
import NewTeacher from "./pages/newTeacher/NewTeacher";
import Login from "./pages/login/Login";

function App() {
	const admin = JSON.parse(
		JSON.parse(localStorage.getItem("persist:root")).user
	).currentUser.isAdmin;
	return (
		<Router>
			<Switch>
				<Route path="/login">{admin ? <Redirect to="/" /> : <Login />}</Route>

				{admin && (
					<>
						<Topbar />
						<div className="container">
							<Sidebar />
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/users">
								<UserList />
							</Route>
							<Route path="/user/:userId">
								<User />
							</Route>
							<Route path="/newUser">
								<NewUser />
							</Route>
							<Route path="/teachers">
								<TeacherList />
							</Route>
							<Route path="/teacher/:teacherId">
								<Teacher />
							</Route>
							<Route path="/newteacher">
								<NewTeacher />
							</Route>
						</div>
					</>
				)}
			</Switch>
		</Router>
	);
}

export default App;
