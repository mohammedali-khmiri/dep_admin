import { Link, useLocation } from "react-router-dom";
import "./teacher.css";
import Chart from "../../components/chart/Chart";
import { productData } from "../../dummyData";
import { Publish } from "@material-ui/icons";
import { useSelector } from "react-redux";

export default function Teacher() {
	const location = useLocation();
	const teacherId = location.pathname.split("/")[2];

	const teacher = useSelector((state) =>
		state.teacher.teachers.find((teacher) => teacher._id === teacherId)
	);
	return (
		<div className="product">
			<div className="productTitleContainer">
				<h1 className="productTitle">Teacher</h1>
				<Link to="/newteacher">
					<button className="productAddButton">Create</button>
				</Link>
			</div>
			<div className="productTop">
				<div className="productTopLeft">
					<img src={teacher.img} alt="" className="productInfoImg" />
				</div>
				<div className="productTopRight">
					<div className="productInfoTop">
						<span className="productName">
							{teacher.firstName} {teacher.lastName}
						</span>
					</div>
					<div className="productInfoBottom">
						<div className="productInfoItem">
							<span className="productInfoKey">id:</span>
							<span className="productInfoValue">{teacher._id}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">specialité:</span>
							<span className="productInfoValue">{teacher.specialty}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">grade:</span>
							<span className="productInfoValue">{teacher.grade}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">email:</span>
							<span className="productInfoValue">{teacher.email}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">adress:</span>
							<span className="productInfoValue">{teacher.address}</span>
						</div>
						<div className="productInfoItem">
							<span className="productInfoKey">tel:</span>
							<span className="productInfoValue">{teacher.phone}</span>
						</div>
					</div>
				</div>
			</div>
			<div className="productBottom">
				<form className="productForm">
					<div className="productFormLeft">
						<label>Nom d'Enseignant</label>
						<input type="text" placeholder={teacher.firstName} />
						<label>Prenon d'Enseignant</label>
						<input type="text" placeholder={teacher.lastName} />
						<label>Email</label>
						<input type="text" placeholder={teacher.email} />
						<label>Telephone</label>
						<input type="text" placeholder={teacher.phone} />
						<label>Specialité</label>
						<select name="specialty" id="specialty">
							<option value="" disabled selected>
								{teacher.specialty}
							</option>
							<option value="big data">Big Data</option>
							<option value="soap">Soap</option>
							<option value="reseau">Réseau</option>
							<option value="developpement">Développement</option>
							<option value="mobile">Mobile</option>
						</select>
						<label>Grade</label>
						<select name="grade" id="grade">
							<option value="" disabled selected>
								{teacher.grade}
							</option>
							<option value="chef departement">Chef Departement</option>
							<option value="professeur">Professeur</option>
							<option value="assistant">Assistant</option>
							<option value="maitre assistant"> Maitre Assistant</option>
						</select>
					</div>
					<div className="productFormRight">
						<div className="productUpload">
							<img src={teacher.img} alt="" className="productUploadImg" />
							<label for="file">
								<Publish />
							</label>
							<input type="file" id="file" style={{ display: "none" }} />
						</div>
						<button className="productButton">Update</button>
					</div>
				</form>
			</div>
		</div>
	);
}
