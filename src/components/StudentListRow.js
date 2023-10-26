// function StudentListRow(props)
// {
//     const {name,email,rollno} = props.obj; //Object destruction
//     return(
//         <tr>
//             <td>{name}</td>
//             <td>{email}</td>
//             <td>{rollno}</td>
//         </tr>
//     )
// }
// export default StudentListRow;






// import Axios from "axios";
// function StudentListRow(props)
// {
//     const {_id,name,email,rollno} = props.obj; //Object destruction


//     const handleClick = () => {
//         Axios.delete("http://localhost:4000/students/delete-student/"+ _id)
//         .then((res)=>{
//             if(res.status === 200){
//                 alert("Record deleted successfully");
//                 window.location.reload();
//             }
//             else
//                 Promise.reject();
//         })
//         .catch((err)=>alert(err));
//     }


//     return(
//         <tr>
//             <td>{name}</td>
//             <td>{email}</td>
//             <td>{rollno}</td>
//             <td>
//                 <button class="btn btn-success mx-4">Edit</button>
//                 <button onClick={handleClick} class="btn btn-danger">Delete</button>
//             </td>
//         </tr>
//     )
// }
// export default StudentListRow;








// import Axios from "axios";
// import {Link} from "react-router-dom";


// function StudentListRow(props)
// {
//     const {_id,name,email,rollno} = props.obj; //Object destruction


//     const handleClick = () => {
//         Axios.delete("http://localhost:4000/students/delete-student/"+ _id)
//         .then((res)=>{
//             if(res.status === 200){
//                 alert("Record deleted successfully");
//                 window.location.reload();
//             }
//             else
//                 Promise.reject();
//         })
//         .catch((err)=>alert(err));
//     }


//     return(
//         <tr>
//             <td>{name}</td>
//             <td>{email}</td>
//             <td>{rollno}</td>
//             <td>
//                 <button class="btn btn-success mx-4">
//                     <Link to={"/edit-student/" + _id}  class="text-decoration-none text-light">Edit</Link>
//                 </button>
//                 <button onClick={handleClick} class="btn btn-danger">Delete</button>
//             </td>
//         </tr>
//     )
// }
// export default StudentListRow;









import Axios from "axios";
import {Link} from "react-router-dom";


function StudentListRow(props)
{
    const {_id,name,email,rollno} = props.obj; //Object destruction


    const handleClick = () => {
        // Axios.delete("http://localhost:4000/students/delete-student/"+ _id)
        // https://project-backend-deploy-gpe0.onrender.com

        Axios.delete("https://project-backend-deploy-gpe0.onrender.com/students/delete-student/"+ _id)
        .then((res)=>{
            if(res.status === 200){
                alert("Record deleted successfully");
                window.location.reload();
            }
            else
                Promise.reject();
        })
        .catch((err)=>alert(err));
    }


    return(
        <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{rollno}</td>
            <td>
                <button class="btn btn-success mx-4">
                    <Link to={"/edit-student/"+_id} class="text-decoration-none text-light">Edit</Link>
                </button>
                <button onClick={handleClick} class="btn btn-danger">Delete</button>
            </td>
        </tr>
    )
}
export default StudentListRow;