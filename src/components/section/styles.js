import styled from 'styled-components'
import { modelS } from '../../assets'

const Wrap = styled.div(props => ({
    width:'100vw',
height:'100vh',
backgroundSize:'cover',
backgroundPosition:'center',
backgroundRepeat:'no-repeat',
backgroundImage:` url(${props.backgroundImage})`,
display:'flex',
flexDirection:'column',
justifyContent:'space-between',
alignItems:'center',
}))

const ItemText = styled.div`
padding-top:15vh;
text-align:center;
`
const Buttons = styled.div`
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;
`
const ButtonGroup = styled.div`
display:flex;
margin-bottom:10px;
@media(max-width: 768px){
    flex-direction:column;
}
`
const LeftButton = styled.div`
background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;


`
const RightButton = styled(LeftButton)`
background-color:white;
opacity:0.65;
color:black;
`
const DownArrow = styled.img`
height:40px;
width:40px;
animation: animateDown infinite 1.5s
`

export {
    Wrap,ItemText,LeftButton,RightButton, ButtonGroup,DownArrow,Buttons
}
