import styled from 'styled-components'
import { modelS } from '../../assets'

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
background-image: url(${modelS});
display:flex;
flex-direction:column;
justify-content:space-between;
align-items:center;

`

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

`
const DownArrow = styled.img`
margin-top:20px;
height:40px;
width:40px;
border:1px solid red;
animation: animateDown infinite 1.5s
`

export {
    Wrap,ItemText,LeftButton,RightButton, ButtonGroup,DownArrow,Buttons
}
