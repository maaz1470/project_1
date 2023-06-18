import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

export default function Verify(){
	const [verify, setVerify] = useState(false)
	const [loading, setLoading] = useState(true)

	const navigate = useNavigate();

	const {token} = useParams();
	useEffect(() => {
		axios.get(`/api/verify-customer/${token}`).then(response => {
			console.log(response)
			if(response){
				if(response.data.status === 200){
					Swal.fire('Success',response.data.message,'success')
					setVerify(true)
					navigate('/login',{
						replace: true
					})
				}else if(response.data.status === 403){
					Swal.fire('Error',response.data.message,'error')
					navigate('/login',{
						replace: true
					})
				}
				setLoading(false)
			}
		})
	},[token])
	if(loading) return <h1>Loading...</h1>
	return (
		<div>
			<h1>{verify ? 'You are verified successfully.' : 'You are not verified.'}</h1>
		</div>
	)
}