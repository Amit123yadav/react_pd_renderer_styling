import styled , {css}from "styled-components";


export const Input = styled.input`
padding: 0.5rem;
margin: 0.5rem;
font-size: 20px;
text-align: center;
color: ${props => props.InputColor || "palevioletred"};
background-color: papayawhip;
border: none;
border-radius: 0.5rem;
`
export const Password =  styled(Input).attrs({
    type : 'password',
})`
border : none;
`
export const Inputs = styled.input.attrs({ type: "checkbox" })``;


export const Label = styled.label`
display: flex;
align-items: center;
justify-content: center;
font-size: 20px;
gap: 10px;
margin-bottom: 10px;

`
export const LabelText = styled.span`
${(props) => {
        switch (props.$mode) {
            case 'Dark':
                return css`
            background-color: black;
            color : white;
            ${Inputs}:checked + && {
            color: blue;
            }
            `
            default:
                return css`
          background-color: white;
          color: black;
          ${Inputs}:checked + && {
            color: red;
          }
        `;
        }
    }
    };

`
export const Main = styled.div`
margin-top: 2rem;
display: flex;
align-items: center;
justify-content: center;
flex-wrap : wrap;

`
export const Div = styled.div`
border : 1px solid black;
width: 700px;
background-color: honeydew;
box-shadow : 2px 2px 2px 2px rgba(50,50,53,0.75);
`