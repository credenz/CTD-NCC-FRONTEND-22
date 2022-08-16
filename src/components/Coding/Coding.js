import "./Coding.css";
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import React, { useState } from 'react';
import QuestionBox from "./Question";
import Question from "./Question";
import CodeEditor from "./CodeEditor";
import InputBox from "./InputBox";
import OutputBox from "./OutputBox";

const Coding = () => {

    const [state, setState] = useState(5);

    const activeIndex = 2;
    const title = "my title here";

    return (
        <div className="container-fluid">
            <div className="row">

                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-sx-12 leftBox">

                    {/* <div className="leftScore"> */}
                    {/* <div className="row py-1">
                        <div className="col-md-4">
                        </div>
                        <div className="col-md-8">
                            <div className="pagination">
                                <div>
                                    <Button >Score : 35</Button> */}
                    {/* <Pagination onClick={debugClick} >{items}</Pagination> */}
                    {/* {Pagination.map( number =>{
                                        return(
                                            <Pagination.Item key={number} active={number === activeIndex} >{number}</Pagination.Item>
                                        )
                                    })} */}
                    {/* <Pagination>
                                        {[...Array(5).keys()].map((x) => (                                       
                                            <Pagination.Item key={x + 1} active={x + 1 === state} onClick={()=>{setState(x+1)}} >{x + 1}</Pagination.Item>
                                        ))}

                                    </Pagination>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <Row className="row border border-white border-top-0 border-right-0 px-3 border-bottom-1">
                        <Col className="mt-1">
                            <Button className="scoreButton" >Score : 35</Button>
                        </Col>
                        <Col className="mt-1">
                            <Pagination>
                                {[...Array(5).keys()].map((x) => (
                                    <Pagination.Item key={x + 1} active={x + 1 === state} onClick={() => { setState(x + 1) }} >{x + 1}</Pagination.Item>
                                ))}

                            </Pagination>
                        </Col>
                    </Row>

                    {/* </div> */}

                    <div className="questionBox my-2" >
                        <Question title={"Question Title Here"} />
                    </div>

                    <hr />

                    <div className="inputOutput px-3">
                        <Row>
                            <Col>
                                <InputBox />
                            </Col>
                            <Col>
                                <OutputBox />
                            </Col>
                        </Row>
                    </div>

                </div>

                <div className="col-xxl-6 col-lg-6 col-md-6 col-sm-12 col-sx-12 rightBox">
                    <CodeEditor />
                </div>
            </div>

        </div>
    )
}

export default Coding