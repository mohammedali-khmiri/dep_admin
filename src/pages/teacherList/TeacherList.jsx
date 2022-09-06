import "./teacherList.css";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { productRows } from "../../dummyData";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTeachers } from "../../redux/apiCalls";

export default function TeacherList() {
	const [data, setData] = useState(productRows);
	const dispatch = useDispatch();
	const teachers = useSelector((state) => state.teacher.teachers);

	useEffect(() => {
		getTeachers(dispatch);
	}, [dispatch]);

	const handleDelete = (id) => {
		setData(data.filter((item) => item.id !== id));
	};

	const columns = [
		{ field: "_id", headerName: "ID", width: 220 },
		{
			field: "teacher",
			headerName: "Enseignant",
			width: 200,
			renderCell: (params) => {
				return (
					<div className="productListItem">
						<img className="teacherListImg" src={params.row.img} alt="" />
						{params.row.firstName} {params.row.lastName}
					</div>
				);
			},
		},
		{
			field: "grade",
			headerName: "Grade",
			width: 160,
		},
		{ field: "email", headerName: "Email", width: 200 },
		{
			field: "specialty",
			headerName: "Spécialité",
			width: 180,
		},

		{
			field: "action",
			headerName: "Action",
			width: 150,
			renderCell: (params) => {
				return (
					<>
						<Link to={"/teachers/" + params.row.id}>
							<button className="teacherListEdit">Edit</button>
						</Link>
						<DeleteOutline
							className="teacherListDelete"
							onClick={() => handleDelete(params.row.id)}
						/>
					</>
				);
			},
		},
	];

	return (
		<div className="teacherList">
			<DataGrid
				rows={teachers}
				disableSelectionOnClick
				columns={columns}
				getRowId={(row) => row._id}
				pageSize={8}
				checkboxSelection
			/>
		</div>
	);
}
