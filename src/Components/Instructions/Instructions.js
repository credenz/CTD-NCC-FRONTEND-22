import './Instructions.css';
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import '../../App.css';
import { useState } from 'react';
import {  useNavigate } from "react-router-dom";

function Instructions(){
    let a=localStorage.getItem("isloggedin");
    console.log(a);
    const navigate=useNavigate();
    if(a=="false"){console.log("not logged in");navigate("/");}
    const [inst_checked, setChecked] = useState(false);
    

    function chk_inst_st(e){
        if(e.target.checked===true){
            setChecked(true);
            document.getElementById("inst_s_btn").disabled=false;
        }
        else {
            setChecked(false);
            document.getElementById("inst_s_btn").disabled=true;
        }
    }
    // function changeac(){
    //     let element=document.getElementById("#nav-ins");
    //     // console.log(element);
        
    // }
    function Redirect(){
        if(inst_checked)navigate("/questionhub");
        else document.getElementById("inst_s_btn").checked=true;
        
        
    }
    return(
        <div className="inst_page d-flex justify-content-center align-items-center text-white text-center">
            {
                // changeac()
            }
            <Card className='inst_page_mdiv br2 p-2 m-3'>
            <h1 className='text-white fs1 m-3 font-weight-bold'>Instructions</h1>
            <ol className='text-left i1 p1'>
            <li>Contest will contain 5-6 problems that need to be coded in Python, C++, or C.</li>
            <li>Single Participant event.</li>
            <li>For the first correct submission of a question, you will receive the points currently available on that question.</li>
            <li>For each wrong submission before the correct submission, 10 points will be deducted. If the question was already solved before, no points will be deducted for that question.</li>
            <li>Plagiarism checks would be done after the contest.</li>
            </ol>
            <p><input type="checkbox" name="" required id="" onChange={chk_inst_st}
            className='m-2 cbx-i' />I have read and understood all the <span >instructions !</span></p>
            <div><Button variant="primary"  className="mb-2 s-bt1" id="inst_s_btn" onClick={Redirect} >
                  Proceed
                </Button></div>
                
            </Card>
        </div>
    );


}

export default Instructions;