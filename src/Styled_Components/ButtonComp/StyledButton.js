import styled, { keyframes, css } from "styled-components";


export const StyledButton = styled.button`
border : 1px solid red;
border-radius: 0.5rem;
font-size: 20px;
padding: 10px;
margin : 0.5rem;
text-decoration: none;
width :200px;
background-color: ${(props) => props.varient === 'outline' ? '#fff' : 'green'};
color:${(props) => props.varient === 'outline' ? 'red' : '#fff'};
cursor: pointer;
&:hover{
    background-color: ${(props) => props.varient !== 'outline' ? '#fff' : 'red'};
color:${(props) => props.varient !== 'outline' ? 'red' : '#fff'};
}
`

export const FancyButton = styled(StyledButton)`
 background-image: linear-gradient(to right, #f6d365 0% , #fda095 100%);
 border : none;

`
export const SubmitButton = styled(StyledButton).attrs((props) => ({
    type: 'submit',
}))`
/* box-shadow :  0 9px #999; */
&:active {
    background-color : ${(props) =>
        props.varient !== 'outline' ? 'red' : '#fff'};
    box-shadow : 0 6px #666;
    transform : translate(4px) ;
}

`
// const rotate = keyframes`
// from {
//       transform: rotate(0deg);
//     }
//     to {
//       transform: rotate(360deg);
//     }

// `

// export const AnimatedLogo = styled.div`
// height: 30vmin;
// width:30vmin ;
// pointer-events: none;
// animation: ${rotate} infinite 1s linear;
// &:hover{
//   animation: ${rotate} 20s linear infinite;
//   }
// `
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// Here we create a component that will rotate everything we pass in over two seconds
export const Rotate = styled.div`
  display: inline-block;
  animation: ${rotate} 20s linear infinite;
  &:hover{
  animation: ${rotate} 1s linear infinite;
  }
`;

export const DarkTheme = styled(StyledButton)`
border : 2px solid  ${(props) => props.theme.dark.primary};
background-color : ${(props) => props.theme.dark.primary};
border : ${(props) => props.theme.dark.text};

`