// import React, { useEffect, useState } from 'react';
// import { PDFViewer ,PDFDownloadLink} from '@react-pdf/renderer';
// import './App.css';
// import TextPdf from './React_PDF_Reander/TextPdf'
// import MultipleSelect from './Select/MultipleSelect';
// import SingleSelect from './Select/SingleSelect';
// // const options = [
// //   {
// //     label: 'HTML',
// //   },
// //   {
// //     label: 'CSS',
// //   },
// //   {
// //     label: 'JavaScript',
// //   },
// //   {
// //     label: 'React',
// //   },
// //   {
// //     label: 'Bootstrap',
// //   },
// // ]
// function App() {
//   //   const [state, setState] = useState(options[0])
//   //   const [isActive, setIsActive] = useState(false)
//   //   const [multiple , setMultiple] =  useState(true)

//   // console.log(state)

//   //   const handleOpen = () =>{
//   //     setIsActive(!isActive)
//   //   }
// //   const openPDF = (url) => {
// //     window.open(url, '_blank');
// // };

//   return (
//     <div className="App mt-2">
//       {/* <SingleSelect
//         options={options}
//         isActive={isActive}
//         state={state}
//         handleChange={handleChange}
//         handleClick={handleClick}
//         // inp={inp}
//         setIsActive={setIsActive}
//       /> */}
//       {/* <MultipleSelect
//         options={options}
//         state={state}
//         setState={setState}
//         onChange={o => setState(o)}
//         handleOpen={handleOpen}
//         isActive={isActive}
//         multiple={multiple}
//       /> */}
//       <PDFViewer member_detail={'test'} style={{width : '700px' , height : '500px'}}>
//         <TextPdf />
//       </PDFViewer>

//       <PDFDownloadLink document={<TextPdf />} fileName="fee_acceptance.pdf">
//         {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
//       </PDFDownloadLink>
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import { ThemeProvider } from 'styled-components';
// // import logo from './logo.svg';
// // import './styles.css';
// // import Button from './Styled_Components/Button'
// import StyledButton, { AnimatedLogo } from './Styled_Components/ButtonComp/Button';
// import { FancyButton, SubmitButton , DarkTheme} from './Styled_Components/ButtonComp/Button';

// const theme =  {
//   dark : {
//    primary : '#000',
//    text : '#fff',
//   },
//   light : {
//  primary : '#fff',
//  text : '#000'
//   }
// }
// const App = () => {
//   return (
//     <div className='App mt-3'>
//         <ThemeProvider theme={theme}>
//         {/* <img src='../logo192.png'  className='App-logo' alt='logo' /> */}
//         <AnimatedLogo src='../logo192.png' />
//         <StyledButton type='submit'>Styled Button</StyledButton>
//         <br />
//         <br />
//         <StyledButton varient='outline'>Styled Button</StyledButton>
//         <br />
//         <br />
//         <FancyButton as='a' >Fancy Button</FancyButton>
//         <br />
//         <br />
//         <SubmitButton>Submit Button</SubmitButton>
//         <DarkTheme>Dark Theme</DarkTheme>
//     </ThemeProvider >
//       </div>
//   )
// }

// export default App


import React from 'react'
import './App.css'
import Form from './Styled_Components/ButtonComp/Form'

const App = () => {
  return (
    <div className='App'>
      <Form/>
    </div>
  )
}

export default App