import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

 const Container = styled.div(({
   minHeight:'60px',
   position:'fixed',
   display:'flex', 
   justifyContent:'space-between',
   alignItems:'center',
   padding:'0 20px',
   top:'0',
   right:'0',
   left:'0',
   zIndex:'1'
 }))
const Menu = styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;
a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
}
@media(max-width:768px){
    display:none;
}
`

const RightMenu = styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right:10px;
}
`
const CustomMenu = styled(MenuIcon)`
cursor:pointer;

` 
const CustomClose= styled(CloseIcon)`
cursor:pointer;

` 
const CloseWrapper = styled.div`
display:flex;
justify-content:flex-end;
`

const BurgerNav = styled.div(props => ({
position:'fixed',
top:0,
bottom:0,
right:0,
background:'white',
width:'300px',
zIndex:'16',
listStyle:'none',
padding:'20px',
textAlign:'start',


})
`

li{
    padding: 15px 0;
    border-bottom: 1px solid rgba(0,0,0,0.2)
}
a{
    fontWeight:'600';
}`)
export {
    Container,Menu,RightMenu,CustomMenu,BurgerNav,CustomClose,CloseWrapper
}