// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;




// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Nav from './components/Nav';
// import { HashRouter,Routes,Route } from 'react-router-dom';
// import CreateStudent from './components/CreateStudent';
// import StudentList from './components/StudentList';
// function App() {
//   return (
//     <HashRouter>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<CreateStudent />} />
//         <Route path="/create-student" element={<CreateStudent />} />
//         <Route path="/student-list" element={<StudentList />} />
//       </Routes>
//     </HashRouter>
//   );
// }

// export default App;






// import './App.css';
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Nav from './components/Nav';
// import { HashRouter,Routes,Route } from 'react-router-dom';
// import CreateStudent from './components/CreateStudent';
// import StudentList from './components/StudentList';
// import EditStudent from './components/EditStudent';

// function App() {
//   return (
//     <HashRouter>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<CreateStudent />} />
//         <Route path="/create-student" element={<CreateStudent />} />
//         <Route path="/student-list" element={<StudentList />} />
//   <Route path="edit-student/:id" element={<EditStudent />} />	
//       </Routes>
//     </HashRouter>
//   );
// }

// export default App;



import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Nav from './components/Nav';
import { HashRouter,Routes,Route } from 'react-router-dom';
import CreateStudent from './components/CreateStudent';
import StudentList from './components/StudentList';
import EditStudent from './components/EditStudent';


function App() {
  return (
    <HashRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<CreateStudent />} />
        <Route path="/create-student" element={<CreateStudent />} />
        <Route path="/student-list" element={<StudentList />} />
        <Route path="/edit-student/:id" element={<EditStudent />} />
      </Routes>
    </HashRouter>
  );
}


export default App;

