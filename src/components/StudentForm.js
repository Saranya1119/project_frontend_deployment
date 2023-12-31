// function StudentForm()
// {
//     return (
//         <div style={{maxWidth:"40%",margin:"0px auto"}}>
//             <input class="form-control my-3" placeholder="Enter your name" />
//             <input class="form-control my-3" placeholder="Enter your email" />
//             <input class="form-control my-3" placeholder="Enter your rollNo" />
//             <button class="btn btn-success d-block mx-auto my-3" type="submit">Submit</button>
//         </div>
//     )
// }
// export default StudentForm;


// import { useState } from "react";
// function StudentForm(props)
// {
//     const [name,setName] = useState("");
//     const [email,setEmail] = useState("");
//     const [rollNo,setRollNo] = useState("");

//     const arr = [name,email,rollNo];

//     const handleClick = () => {
//         props.getState(arr);
//     }

//     return (
//         <div style={{maxWidth:"40%",margin:"0px auto"}}>
//             <input onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your name" />
//             <input onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" />
//             <input onChange={(event)=>setRollNo(event.target.value)} class="form-control my-3" placeholder="Enter your rollNo" />
//             <button onClick={handleClick} class="btn btn-success d-block mx-auto my-3" type="submit">Submit</button>
//         </div>
//     )
// }
// export default StudentForm;








// import { useState } from "react";
// function StudentForm(props)
// {
//     const [name,setName] = useState(props.nameValue);
//     const [email,setEmail] = useState(props.emailValue);
//     const [rollNo,setRollNo] = useState(props.rollNoValue);


//     const arr = [name,email,rollNo];


//     const handleClick = () => {
//         props.getState(arr);
//     }


//     return (
//         <div style={{maxWidth:"40%",margin:"0px auto"}}>
//             <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your name" />
//             <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" />
//             <input defaultValue={props.rollNoValue} onChange={(event)=>setRollNo(event.target.value)} class="form-control my-3" placeholder="Enter your rollNo" />
//             <button onClick={handleClick} class="btn btn-success d-block mx-auto my-3" type="submit">Submit</button>
//         </div>
//     )
// }
// export default StudentForm;







import { useState, useEffect } from "react";
function StudentForm(props)
{
    const [name,setName] = useState(props.nameValue);
    const [email,setEmail] = useState(props.emailValue);
    const [rollNo,setRollNo] = useState(props.rollNoValue);


	useEffect(()=>{
        setName(props.nameValue);
        setEmail(props.emailValue);
        setRollNo(props.rollNoValue);
    },[props.nameValue,props.emailValue,props.rollNoValue]);


    const arr = [name,email,rollNo];


    const handleClick = () => {
        props.getState(arr);
    }


    return (
        <div style={{maxWidth:"40%",margin:"0px auto"}}>
            <input defaultValue={props.nameValue} onChange={(event)=>setName(event.target.value)} class="form-control my-3" placeholder="Enter your name" />
            <input defaultValue={props.emailValue} onChange={(event)=>setEmail(event.target.value)} class="form-control my-3" placeholder="Enter your email" />
            <input defaultValue={props.rollNoValue} onChange={(event)=>setRollNo(event.target.value)} class="form-control my-3" placeholder="Enter your rollNo" />
            <button onClick={handleClick} class="btn btn-success d-block mx-auto my-3" type="submit">{props.children}</button>
        </div>
    )
}
export default StudentForm;
