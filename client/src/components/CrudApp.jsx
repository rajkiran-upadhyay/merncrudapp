import { useEffect, useState, useLayoutEffect } from 'react'
import { Table, TableHead, TableBody, TableRow, TableCell, styled } from '@mui/material'
import { getUsers } from '../service/api'

//import { NavLink } from 'react-router-dom'

const StyledTable = styled(Table)`
width:55%;
margin:50px auto 0 auto ;
font-size:30px;
`
const Tc = styled(TableCell)`
padding:4px;
`
const Trow = styled(TableRow)`
background: linear-gradient(to right,brown,grey);


& > th{color:#fff;font-size:11px;}
`
const Trbody = styled(TableRow)`

& > td{
font-size:10px;
height:20px;


border:4px outset grey;
}
`
const AllUsers = () => {
  const [users, setUsers] = useState([]);//store response here
  const [searchItem, setSearchItem] = useState("");
  const [newList, SetNewList] = useState([]);

  useLayoutEffect(() => {
    document.body.style.backgroundColor = "grey"
  })
  let filteredList = users.filter((curItem) => {

    if (searchItem === "") {
      return curItem
    } else if (curItem.name.toLowerCase().includes(searchItem.toLowerCase())) {
       return curItem }
      })


  useEffect(() => {//no asyn await inside useeffect
    getAllUsers();
    SetNewList(filteredList)
  }, [searchItem]);//on component mount useeffect will be called : two ags : callback and dependency array: lifecycle method

  const getAllUsers = async () => {
    let response = await getUsers(); //response from api

    setUsers(response.data);  //{ data:[],status:200} this object is response
  }
  //const users = await User.find({}) //find({}) get all documents 
  //response.status(200).json(users); //json(users) ==const users
  function hC(event) { setSearchItem(event.target.value) }
  
  return (
    <>
      <div style={{ textAlign: 'center', marginTop: 12}}><input style={{color:'blue',background:'yellow'}}type='search' placeholder='Search name' value={searchItem} onChange={(e) => { hC(e) }} /></div>
     {searchItem && <StyledTable>
        <TableHead>
          <Trow>
            <Tc>ID </Tc>
            <Tc>NAME</Tc>
            <Tc>USERNAME </Tc>
            <Tc>EMAIL </Tc>
            <Tc>PHONE </Tc>

          </Trow>
        </TableHead>
        <TableBody>
          {
            //{_id:8,name:"raj",username:"raju",email:"rk@gmail.com",phone:"123456789",__v:0}

            newList.map(user => (
              <Trbody key={user._id}>
                <Tc style={{ color: 'blue' }}>{user._id}</Tc>
                <Tc>{user.name}</Tc>
                <Tc>{user.username}</Tc>
                <Tc>{user.email}</Tc>
                <Tc>{user.phone}</Tc>

              </Trbody>

            ))// <NavLink to={`/edit/${user._id}`} >edit</NavLink>

          }
        </TableBody>

      </StyledTable>}
    </>
  )
}

export default AllUsers
//style={{marginRight:10}} :camelCase and 10px and{{}}