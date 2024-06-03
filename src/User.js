// import React, { useEffect, useState } from 'react'
// import axios from 'axios';
// import './User.css'
// function Main(){
//     const[data,setData]=useState([])
//     useEffect(()=>{
//         axios.get('http://localhost:8000/form')
//         .then(info=>{
//             setData(info.data)
//         })
            
//         .catch(err=>
//             console.log(err))
//     })
//     const[value,setValue]=useState([])
//     const[ans,setAns]=useState([])
//     function answer(select,crtAns){
//             setValue(select);
//             setAns(crtAns);
//     }
//     if(value===ans){
//         var final="Correct";
//     }
//     else{
//         var final="Incorect"
//     }
    
//     return(
//         <div>
//             hello
//          {
//             data.map(q=>{
//                 return  <div>
//                  <h5>{q.question}</h5>
//                  <div className='div' onClick={()=>answer(q.opt1,q.ans)}> {q.opt1} </div>
//                  <div className='div' onClick={()=>answer(q.opt2,q.ans)}> {q.opt2} </div>
//                  <div className='div' onClick={()=>answer(q.opt3,q.ans)}> {q.opt3} </div>
//                  <div className='div' onClick={()=>answer(q.opt4,q.ans)}> {q.opt4} </div>
//                  <div className='ans'>{final}</div>
//                </div>
//             })
//          }
//         </div>
//     )
// }
// export default Main;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './User.css';

function Main() {
    const [data, setData] = useState([]);
    const [count,setCount]=useState(1);
    const [selectedOption, setSelectedOption] = useState(null);
   

    useEffect(() => {
        axios.get('http://localhost:8000/form')
            .then(info => {
                setData(info.data);
            })
            .catch(err => console.log(err));
    }, []); // Added an empty dependency array to run once

    const handleOptionClick = (selected, correctAnswer,e) => {
        setSelectedOption(selected);
        if(selected===correctAnswer){
            e.target.classList.add("correct");
        }
        else{
            e.target.classList.add("wrong");
        }
    };
   

    return (
        <div className='que'>
           
                        {data.map((q, index) => (
                <div key={index} >
                    <h5>{index+1}. {q.question}</h5>
                    <div className='div' onClick={(e) => handleOptionClick(q.opt1, q.ans,e)}> {q.opt1} </div>
                    <div className='div' onClick={(e) => handleOptionClick(q.opt2, q.ans,e)}> {q.opt2} </div>
                    <div className='div' onClick={(e) => handleOptionClick(q.opt3, q.ans,e)}> {q.opt3} </div>
                    <div className='div' onClick={(e) => handleOptionClick(q.opt4, q.ans,e)}> {q.opt4} </div>
                    <hr></hr>
                </div>
            ))}
            <br></br>
           
        </div>
    );
}

export default Main;
