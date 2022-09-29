import React, { useState } from 'react'
import './questionStyle.css'

const QuestionData = () => {

    const [state, setState] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: '',
        question6: '',

    })



    const toggle = (e) => {
        const { name, value } = e.target
        setState({ ...state, [name]: value })
        console.log(state)
    }

    return (
        <div className='main-container'>
            <div className='main'>
                <div className='sub1'>
                    <h5>Did you come in the pharmacy today for medicine ?</h5>
                    <button
                        className='btn1'
                        name='question1'
                        value='no'
                        style={{ 
                            backgroundColor: state.question1 === 'no' ? 'red' : '' ,
                            color: state.question1 === 'no' ? 'white' : ''

                        }}
                        // className={'btn1 ' + (state ? 'toggle--btn1' : '')}
                        onClick={toggle}
                    >
                        No
                    </button>
                    <button
                        className='btn1'
                        name='question1'
                        value='yes'
                        style={{ 
                            backgroundColor: state.question1 === 'yes' ? 'green' : '',
                            color: state.question1 === 'yes' ? 'white' : ''
                         }}
                        // className={'btn1 ' + (isGreen ? 'toggle-btn1' : '')}
                        onClick={toggle}
                    >Yes</button>
                </div>
                <hr />
                <div className='sub2'>
                    <h3>Were you asked any of the following :</h3>
                    <div className='sub2_main'>
                        <h5>Who is the medicine for ?</h5>
                        <button
                            className='btn2'
                            name='question2'
                            value='no'
                            style={{ 
                                backgroundColor: state.question2 === 'no' ? 'red' : '',
                                color: state.question2 === 'no' ? 'white' : ''
                             }}
                            // className={'btn2 ' + (isRed ? 'toggle--btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >No</button>
                        <button
                            className='btn3'
                            name='question2'
                            value='yes'
                            style={{ 
                                backgroundColor: state.question2 === 'yes' ? 'green' : '',
                                color: state.question2 === 'yes' ? 'white' : ''
                             }}
                            // className={'btn3 ' + (isGreen1 ? 'toggle-btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >Yes</button>
                    </div>
                    <div className='sub2_main'>
                        <h5>What are your symptoms ?</h5>
                        <button
                            className='btn4'
                            name='question3'
                            value='no'
                            style={{ 
                                backgroundColor: state.question3 === 'no' ? 'red' : '',
                                color: state.question3 === 'no' ? 'white' : ''
                             }}
                            // className={'btn4 ' + (isRed1 ? 'toggle--btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >
                            No
                        </button>
                        <button
                            className='btn3'
                            name='question3'
                            value='yes'
                            style={{ 
                                backgroundColor: state.question3 === 'yes' ? 'green' : '',
                                color: state.question3 === 'yes' ? 'white' : ''
                             }}
                            //  className={'btn3 ' + (isGreen2 ? 'toggle-btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >
                            Yes
                        </button>
                    </div>
                    <div className='sub2_main'>
                        <h5>How long you had the symptoms?</h5>
                        <button
                            className='btn6'
                            name='question4'
                            value='no'
                            style={{
                                 backgroundColor: state.question4 === 'no' ? 'red' : '' ,
                                 color: state.question4 === 'no' ? 'white' : ''
                                }}
                            // className={'btn6 ' + (isRed2 ? 'toggle--btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >
                            No
                        </button>
                        <button
                            className='btn3'
                            name='question4'
                            value='yes'
                            style={{ 
                                backgroundColor: state.question4 === 'yes' ? 'green' : '',
                                color: state.question4 === 'yes' ? 'white' : ''
                             }}
                            // className={'btn3 ' + (isGreen3 ? 'toggle-btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >
                            Yes
                        </button>
                    </div>
                    <div className='sub2_main'>
                        <h5>What action have you already taken ?</h5>
                        <button
                            className='btn8'
                            name='question5'
                            value='no'
                            style={{
                                 backgroundColor: state.question5 === 'no' ? 'red' : '' ,
                                 color: state.question5 === 'no' ? 'white' : ''
                                }}
                            // className={'btn8 ' + (isRed3 ? 'toggle--btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >
                            No
                        </button>
                        <button
                            className='btn3'
                            name='question5'
                            value='yes'
                            style={{
                                 backgroundColor: state.question5 === 'yes' ? 'green' : '' ,
                                 color: state.question5 === 'yes' ? 'white' : ''
                                }}
                            // className={'btn3 ' + (isGreen4 ? 'toggle-btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >
                            Yes
                        </button>
                    </div>
                    <div className='sub2_main'>
                        <h5>Ary you talking any other medication?</h5>
                        <button
                            className='btn10'
                            name='question6'
                            value='no'
                            style={{
                                 backgroundColor: state.question6 === 'no' ? 'red' : '' ,
                                 color: state.question6 === 'no' ? 'white' : ''
                                }}
                            // className={'btn10 ' + (isRed4 ? 'toggle--btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >
                            No
                        </button>
                        <button
                            className='btn3'
                            name='question6'
                            value='yes'
                            style={{
                                backgroundColor: state.question6 === 'yes' ? 'green' : '',
                                color: state.question6 === 'yes' ? 'white' : ''
                            }}
                            // className={'btn3 ' + (isGreen5 ? 'toggle-btn1' : 'toggle--btn2')}
                            onClick={toggle}
                        >
                            Yes
                        </button>
                    </div>
                </div>
                <hr />
                <div className='sub3'>
                    <button className='btn5'>
                        <i class="fa-solid fa-arrow-left"></i>
                        Back
                    </button>
                    <button className='btn5'>
                        Next
                        <i class="fa-solid fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default QuestionData