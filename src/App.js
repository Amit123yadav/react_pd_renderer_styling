import React, { useEffect, useState } from 'react';
import { PDFViewer ,PDFDownloadLink} from '@react-pdf/renderer';
import './App.css';
import TextPdf from './React_PDF_Reander/TextPdf'
import MultipleSelect from './Select/MultipleSelect';
import SingleSelect from './Select/SingleSelect';
// const options = [
//   {
//     label: 'HTML',
//   },
//   {
//     label: 'CSS',
//   },
//   {
//     label: 'JavaScript',
//   },
//   {
//     label: 'React',
//   },
//   {
//     label: 'Bootstrap',
//   },
// ]
function App() {
  //   const [state, setState] = useState(options[0])
  //   const [isActive, setIsActive] = useState(false)
  //   const [multiple , setMultiple] =  useState(true)

  // console.log(state)

  //   const handleOpen = () =>{
  //     setIsActive(!isActive)
  //   }
//   const openPDF = (url) => {
//     window.open(url, '_blank');
// };

  return (
    <div className="App mt-2">
      {/* <SingleSelect
        options={options}
        isActive={isActive}
        state={state}
        handleChange={handleChange}
        handleClick={handleClick}
        // inp={inp}
        setIsActive={setIsActive}
      /> */}
      {/* <MultipleSelect
        options={options}
        state={state}
        setState={setState}
        onChange={o => setState(o)}
        handleOpen={handleOpen}
        isActive={isActive}
        multiple={multiple}
      /> */}
      <PDFViewer member_detail={'test'} style={{width : '700px' , height : '500px'}}>
        <TextPdf />
      </PDFViewer>
     
      <PDFDownloadLink document={<TextPdf />} fileName="fee_acceptance.pdf">
        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download now!')}
      </PDFDownloadLink>
    </div>
  );
}

export default App;
