// function CreateStudent()
// {
//     return <h1>Create student page</h1>
// }
// export default CreateStudent;






// import { useState } from "react";
// import StudentForm from "./StudentForm";
// function CreateStudent()
// {
//     const [arr,setArr] = useState([]);

//     const getState = (out) => {
//         setArr(out);
//     }

//     return (
//         <form >
//             <StudentForm getState={getState} />
//             {console.log(arr)}
//         </form>
//     )
// }
// export default CreateStudent;









// import { useState } from "react";
// import StudentForm from "./StudentForm";
// import Axios from "axios";

// function CreateStudent()
// {
//     const [arr,setArr] = useState([]);
//     //[Shankar,shankar@gmail.com,1]
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert("Creating a record...");
//         const data = {name: arr[0], email: arr[1], rollno: arr[2]}
//         Axios.post("http://localhost:4000/students/create-student",data)
//         .then((res)=>{
//             if(res.status === 200)
//                 alert("Record added to DB");
//             else {
//                 alert("res.status:"+ res.status)
//                 Promise.reject();
//             }
//         })
//         .catch((err)=>console.log(err));
//     }
//     const getState = (out) => {
//         setArr(out);
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <StudentForm getState={getState} />
//             {console.log(arr)}
//         </form>
//     )
// }
// export default CreateStudent;









// import Axios from "axios";
// import {useEffect, useState} from "react";
// import StudentListRow from "./StudentListRow";


// function StudentList()
// {
//     const [arr,setArr] = useState([]);


//     useEffect(()=>{
//         Axios.get("http://localhost:4000/students")
//         .then((res)=>{
//             if(res.status === 200)
//                 setArr(res.data);
//             else
//                 Promise.reject();
//         })
//         .catch((err)=>alert(err));
//     },[])


//     const ListItems = () => {
//         return arr.map((val,ind)=>{  //[{},{},{}]
//             return <StudentListRow obj={val}  />
//         })
//     }


//     return (
//         <table style={{maxWidth:"40%"}} class="mx-auto table table-success table-striped table-bordered">
//             <thead>
//                 <tr style={{backgroundColor:"forestgreen"}}>
//                     <th class="text-center">Name</th>
//                     <th class="text-center">Email</th>
//                     <th class="text-center">Roll Number</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {ListItems()}
//             </tbody>
//         </table>
//     )
// }
// export default StudentList;









// import { useState } from "react";
// import StudentForm from "./StudentForm";
// import Axios from "axios";


// function CreateStudent()
// {
//     const [arr,setArr] = useState([]);
//     //[Shankar,shankar@gmail.com,1]
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         alert("Creating a record...");
//         const data = {name: arr[0], email: arr[1], rollno: arr[2]}
//         Axios.post("http://localhost:4000/students/create-student",data)
//         .then((res)=>{
//             if(res.status === 200)
//                 alert("Record added to DB");
//             else {
//                 alert("res.status:"+ res.status)
//                 Promise.reject();
//             }
//         })
//         .catch((err)=>console.log(err));
//     }
//     const getState = (out) => {
//         setArr(out);
//     }


//     return (
//         <form onSubmit={handleSubmit}>
//             <StudentForm getState={getState}
//             nameValue="" emailValue = "" rollNoValue = "" />
//             {console.log(arr)}
//         </form>
//     )
// }
// export default CreateStudent;





import { useState } from "react";
import StudentForm from "./StudentForm";
import Axios from "axios";


function CreateStudent()
{
    const [arr,setArr] = useState([]);
    //[Shankar,shankar@gmail.com,1]
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("Creating a record...");
        const data = {name: arr[0], email: arr[1], rollno: arr[2]}
        // Axios.post("http://localhost:4000/students/create-student",data)
        //https://project-backend-deploy-gpe0.onrender.com/

        Axios.post("https://project-backend-deploy-gpe0.onrender.com/students/create-student",data)

        .then((res)=>{
            if(res.status === 200)
                alert("Record added to DB");
            else {
                alert("res.status:"+ res.status)
                Promise.reject();
            }
        })
        .catch((err)=>console.log(err));
    }
    const getState = (out) => {
        setArr(out);
    }


    return (
        <form onSubmit={handleSubmit}>
            <StudentForm getState={getState}
            nameValue="" emailValue = "" rollNoValue = "">
                Create Student
            </StudentForm>
        </form>
    )
}
export default CreateStudent;