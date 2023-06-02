import { FormControl, FormGroup, Input, InputLabel, Typography, styled, Button } from '@mui/material'

import { useState, useEffect } from 'react'

import { editUser, getUser } from '../service/api'
import { useNavigate, useParams } from 'react-router-dom'
const Container = styled(FormGroup)`
width:20%;
height:50%;
margin : 6% auto 0 auto;
& > div{
  margin-top:16px;
}
`
const Fc = styled(FormControl)`
&>label{color:white;}

`
const Ip = styled(Input)`
font-size:10px;
color:blue;
font-weight:bold;


`
const defaultValue = {
  name: '', username: '', email: '', phone: ''
}


const EditUser = () => {
  const [user, setUser] = useState(defaultValue)
  const navigate = useNavigate()
  const { id } = useParams();
  useEffect(() => {

    loadUserDetails();
  }, []);

  const loadUserDetails = async () => {
    const response = await getUser(id);
    setUser(response.data)
  }
  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }

  const editUserDetails = async () => {
    await editUser(user, id);//if success then navigate to /all
    navigate('/all');
  }
  return (
    <Container>
      <Typography variant="h4" style={{ fontSize: 15, fontWeight: 'bold' }}>Edit and Save</Typography>
      <Fc>
        <InputLabel>Name</InputLabel>
        <Ip onChange={(e) => onValueChange(e)} name="name" value={user.name} />
      </Fc>
      <Fc>
        <InputLabel>Username</InputLabel>
        <Ip onChange={(e) => onValueChange(e)} name="username" value={user.username} />
      </Fc>
      <Fc>
        <InputLabel>Email</InputLabel>
        <Ip onChange={(e) => onValueChange(e)} name="email" value={user.email} />
      </Fc>
      <Fc>
        <InputLabel>Phone</InputLabel>
        <Ip onChange={(e) => onValueChange(e)} name="phone" value={user.phone} />
      </Fc>
      <Fc>
        <Button style={{ margin: 'auto', width: 60, fontSize: 9 }} variant="contained" onClick={() => editUserDetails()}>Save</Button>
      </Fc>
    </Container>
  )
}

export default EditUser