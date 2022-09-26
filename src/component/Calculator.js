import React, { useEffect, useState } from 'react'
import './calculator.css'
import { NumericFormat } from 'react-number-format'
const Calculator = () => {
    const [preState, setPreState] = useState("");
    const [curState, setCurState] = useState("");
    const [input, setInput] = useState("0");
    const [operator, setOperator] = useState(null);
    const [opt, setOpt] = useState();

    const [total, setTotal] = useState(false);

    const inputNum = (e) => {
        if (curState.includes(".") && e.target.innerText === ".") return;

        if (total) {
            setPreState("");
        }
        curState
            ? setCurState((pre) => pre + e.target.innerText)
            : setCurState(e.target.innerText);
        setTotal(false);
    };

    useEffect(() => {
        setInput(curState);
    }, [curState]);


    useEffect(() => {
        setInput("0");
    }, []);
    const operatorType = (e) => {
        setTotal(false);
        setOpt(e.target.innerText)
        setOperator(e.target.innerText);
        if (curState === "") return;
        if (preState !== "") {
            equals();
        } else {
            setPreState(curState);
            setCurState("");
        }
    };

    const equals = (e) => {
        setOpt("")
        if (e?.target.innerText === "=") {
            setTotal(true);
        }
        let cal;
        switch (operator) {
            case "/":
                cal = String(parseFloat(preState) / parseFloat(curState));
                break;

            case "+":
                cal = String(parseFloat(preState) + parseFloat(curState));
                break;
            case "X":
                cal = String(parseFloat(preState) * parseFloat(curState));
                break;
            case "-":
                cal = String(parseFloat(preState) - parseFloat(curState));
                break;
            default:
                return curState ;

        }
        setInput("");
        setPreState(cal);
        setCurState("");
    };


    const percentage = () => {
        preState
            ? setCurState(String((parseFloat(curState) / 100) * preState))
            : setCurState(String(parseFloat(curState) / 100));
    };

    const resetAll = () => {
        setPreState("");
        setCurState("");
        setInput("0");
    };


    const cancelOne = () => {
        if (input !== '' && input !== 0) {
            let a = curState.slice(0, -1)
            setCurState(a)
        } else {
            setPreState("0")
        }
    };
    return (
        <div className='container'>
            <div className='wrap'>
                <div className='input_screen'>
                    <NumericFormat
                        value={preState}
                        displayType={"text"}
                        thousandSeparator={true}
                    />
                    {opt}
                    <NumericFormat
                        value={input}
                        displayType={"text"}
                        thousandSeparator={true}
                    /> 
                </div>
                <div name='Ac'
                    className='btn light-grey' onClick={resetAll}>AC</div>
                <div className='btn light-grey' onClick={cancelOne}>
                    <i className="fa-solid fa-square-xmark"></i>
                </div>
                <div className='btn light-grey' onClick={percentage}>%</div>
                <div className='btn orange' onClick={operatorType}>/</div>
                <div className='btn' onClick={inputNum}>7</div>
                <div className='btn' onClick={inputNum}>8</div>
                <div className='btn' onClick={inputNum}>9</div>
                <div className='btn orange' onClick={operatorType}>X</div>
                <div className='btn' onClick={inputNum}>4</div>
                <div className='btn' onClick={inputNum}>5</div>
                <div className='btn' onClick={inputNum}>6</div>
                <div className='btn orange' onClick={operatorType}>-</div>
                <div className='btn' onClick={inputNum}>1</div>
                <div className='btn' onClick={inputNum}>2</div>
                <div className='btn' onClick={inputNum}>3</div>
                <div className='btn orange' onClick={operatorType}>+</div>
                <div className='btn zero' onClick={inputNum}>0</div>
                <div className='btn dot' onClick={inputNum}>.</div>
                <div className='btn' onClick={equals}>=</div>
            </div>
        </div>
    )
}

export default Calculator