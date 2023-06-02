import { AppBar, Toolbar, styled } from '@mui/material';//AppBar is the component of mui: component reusability
//or  import AppBar from '@mui/material/AppBar' is the default import
import { NavLink } from 'react-router-dom';
const Header = styled(AppBar)` 
  background:linear-gradient(to left,grey,black,yellow)
  `;
const Tb = styled(Toolbar)` 
  margin:0 auto;

  &>a:link{
    color:red;
  }
  &>a:visited{
    color:green;
  }
  &>a:hover{
    font-weight:bold;
    color:violet;
    box-shadow:0 0 6px violet;
  }
  &>a:active{
    color:blue;
    }
  `;

const Tabs = styled(NavLink)`
  font-size:10px;
  font-weight:bold;
  margin-right:15px;
  border:1px solid white;
  border-radius: 4px;
  padding:4px;
  text-decoration:none;
  box-shadow: 0 0 4px yellow
`
const NavBar = () => {
  return (
    <Header position='static'>
      <Tb>
        <Tabs to='/'>Home</Tabs>
        <Tabs to='/all'>Edit/Delete Users</Tabs>
        <Tabs to='/add'>Add Users</Tabs>
      </Tb>
    </Header>
  )
}
export default NavBar;