import './App.css';

import AddUser from './components/AddUser'
import NavBar from './components/NavBar';
import CrudApp from './components/CrudApp';
import AllUsers from './components/AllUsers';
import EditUser from './components/EditUser';

// To enable routing in App use BrowserRouter package
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//http://localhost:3000/all url based routing.
//diplay components based on routing,if url path matches specific component


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/' element={<CrudApp />} />
        <Route path='/all' element={<AllUsers />} />
        <Route path='/edit/' element={<EditUser />}>
          <Route path=':id' element={<EditUser />} />
        </Route>
        <Route path='/add' element={<AddUser />} />


      </Routes>
    </BrowserRouter>



  );
}
// :id is a variable
export default App;
//mern-stack> npx create-react-app client
//client> npm install @mui/material @emotion/react @emotion/styled from mui.com
//client>npm i react-router-dom
//client>npm i axios
//server>npm init to :create empty package.json
//server> npm i express
//server>npm i mongoose
//server>npm i nodemon
//server> npm i dotenv
//server>npm i cors
//server> npm i body-parser
//server>npm i mongoose-auto-increment
//server>npm i --legacy-peer-deps mongoose-auto-increment

