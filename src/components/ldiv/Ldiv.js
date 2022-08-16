// import "./Coding.css";
import {Card, Button, Row, Col, Container} from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import React, {useState} from 'react';
import QuestionBox from "../Coding/Question";
import Question from "../Coding/Question";
import CodeEditor from "../Coding/CodeEditor";
import InputBox from "../Coding/InputBox";
import OutputBox from "../Coding/OutputBox";

const Ldiv = () => {
    
    const [state, setState] = useState(5);
    
    const activeIndex = 2;
    const title = "my title here";

  return (
    <Container fluid>
        <Row>

            <Col xs={12} sm={12} md={6} lg={6} xl={6} xxl={6} className=" leftBox">

                <div className="leftScore">
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

                    <Row className="justify-content-around">
                        <Col>
                            <Button className="scoreButton" >Score : 35</Button>
                        </Col>
                        <Col >
                            <Pagination>
                                {[...Array(5).keys()].map((x) => (                                       
                                    <Pagination.Item key={x + 1} active={x + 1 === state} onClick={()=>{setState(x+1)}} >{x + 1}</Pagination.Item>
                                ))}

                            </Pagination>
                        </Col>
                    </Row>

                </div>

                <hr />

                <div className="questionBox my-2" >
                    <Question title={"Qn title here goes"} />
                </div>

                <hr />

                <div className="inputOutput">
                    <Row>
                        <Col>
                            <InputBox />
                        </Col>
                        <Col>
                            <OutputBox />
                        </Col>
                    </Row>
                </div>

            </Col>
            
        </Row>

    </ Container>
  )
}

export default Ldiv