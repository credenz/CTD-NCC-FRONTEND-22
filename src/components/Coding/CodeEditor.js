import React, { useState } from "react";
// import "./CodeEditor.css";
import { Form, Row, Col, Button, Dropdown, DropdownButton, InputGroup, Accordion } from "react-bootstrap";
import AceEditor from "react-ace";
import "react-ace-builds/webpack-resolver-min";

export default function CodeEditor() {


    let themes={
        monokai:"monokai",
        github:"github",
        tomorrow:"tomorrow",
        kuroir:"kuroir",
        twilight:"twilight",
        xcode:"xcode",
        textmate:"textmate",
        solarized_dark:"solarized_dark",
        solarized_light:"solarized_light",
        terminal:"terminal",
        dracula:"dracula",
        eclipse:"eclipse",
        chrome:"chrome",
        visualforce:"visualforce",
    }

    // C_Cpp:       ["cpp|c|cc|cxx|h|hh|hpp|ino"],
    // Java:        ["java"],
    // JavaScript:  ["js|jsm|jsx|cjs|mjs"],
    // Typescript:  ["ts|typescript|str"],
    // JSON:        ["json"],
    // JSON5:       ["json5"],
    // Python:      ["py"],
    // R:           ["r"],
    // SQL:         ["sql"],
    //   golang:      ["go"],
    // Assembly_x86:["asm|a"],
    // Swift:       ["swift"],
    //  Text:        ["txt"],
    // Textile:     ["textile"],
    //  XML:         ["xml|rdf|rss|wsdl|xslt|atom|mathml|mml|xul|xbl|xaml"],
    //   Django:      ["html"]


    let codeMode={
        c:"c",
        cpp:"cpp",
        java:"java",
        python:"py",
    }

    function onChange4(newValue) {
        console.log("change", newValue);
    }

    const [lang, setLang] = useState("c");
    const [color, setColor] = useState("monokai");
    // const [codeMode, setcodeMode] = useState(c)

    const onChange2 = (e) => {
        setLang(e);
        console.log("change2: ", e);
    }

    const onChange3 = (e) => {
        setColor(e);
        console.log("change3: ", e);
    }

  return (
    <Form>
        <Form.Group controlId="codearea">
            <div className="Container" style={{marginLeft:"30px"}}>
                <Row className="upperRight justify-content-between align-items-center">
                {/* <Row className="upperRight justify-content-between my-2"> */}
                    {/* <label >
                        Pick you language: */}
                        <Col xs={12} sm={4} md={3} lg={3} xl={3} xxl={3} className="py-2">
                            <select name="selectLang" id="selectLanguage" value={lang} onChange={(e)=>onChange2(e.target.value)} >
                                <option value="cpp" >c++</option>
                                <option value="c" >c</option>
                                <option value="java" >java</option>
                                <option value="python" >python</option>
                            </select>
                        </Col>
                        <Col  xs={12} sm={4} md={3} lg={3} xl={3} xxl={3} className="py-2">
                            <Button className="btn btn-primary" >Load Buffer</Button>
                        </Col>
                        <Col  xs={12} sm={4} md={3} lg={3} xl={3} xxl={3} className="py-2">
                            <Button className="btn btn-primary" >Reset Code</Button>
                        </Col>
                        <Col  xs={12} sm={4} md={3} lg={3} xl={3} xxl={3} className="py-2">
                            <select name="selectCol" id="selectColor" value={color} onChange={(e)=>onChange3(e.target.value)} >
                                {/* <option value="solaris">Solaris</option>
                                <option value="eclipse">Eclipse</option> */}
                                <option value="monokai">monokai</option>
                                <option value="github">github</option>
                                <option value="tomorrow">tomorrow</option>
                                <option value="kuroir">kuroir</option>
                                <option value="twilight">twilight</option>
                                <option value="xcode">xcode</option>
                                <option value="textmate">textmate</option>
                                <option value="solarized_dark">solarized_dark</option>
                                <option value="solarized_light">solarized_light</option>
                                <option value="terminal">terminal</option>
                                <option value="dracula">dracula</option>
                                <option value="eclipse">eclipse</option>
                                <option value="chrome">chrome</option>
                                <option value="visualforce">visualforce</option>
                            </select>
                        </Col>

                        
                        
                        
                    {/* </label> */}
                          {/* <InputGroup className="mb-3">
                                <DropdownButton
                                    variant="outline-secondary"
                                    title={dropdownTitle}
                                    id="input-group-dropdown-1"
                                    value={lang}
                                    onChange={onChange2}
                                    // onClick={onChange2}
                                    // onSelect={onChange2}
                                >
                                    <Dropdown.Item value={'cpp'}  name={'C++'}>C++</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item value={'c'}   name={'C'}>C</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item value={'java'}   name={'Java'}>Java</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item value={'python'}  name={'Python'}>Python</Dropdown.Item>
                                </DropdownButton>
                            </InputGroup> */}
                    {/* <Form.Control
                        style={{ marginRight: "80px" }}
                        className="score"
                        type="text"
                        value="Score: 000"
                        readOnly
                    /> */}
                </Row>
            </div>
        </Form.Group>
        <div className="midRight my-2">

            <AceEditor
                mode={lang}
                theme={color}
                name="UNIQUE_ID_OF_DIV"
                onChange={onChange4}
                editorProps={{ $blockScrolling: true }}
            />

        </div>
        <div className="lowerRight">
            <Row className="px-2">
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                      <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body text-black">
                            {/* Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body. */}
                            <Row>
                                <Col>Input <br /> <textarea rows="2" /></Col>
                                <Col md={2}><br /><Button >Test</Button></Col>
                                <Col>Output <br /> <textarea rows="2" /></Col>
                            </Row>
                        </div>
                      </div>
                    </div>
                </div>
            </Row>
            <Row className="upperRight justify-content-between my-2">
                <Col>
                <label for="file-upload" class="custom-file-upload text-light">
                    <i class="fa fa-cloud-upload"></i> Custom Upload
                </label>
                <input id="file-upload" type="file"/>
                </Col>



                <Col>
                    {/* <Button className="btn btn-primary" >Test Cases</Button> */}
                    {/* <Accordion.Item eventKey="0">
                          <Accordion.Header>Accordion Item #1</Accordion.Header>
                          <Accordion.Body>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                            culpa qui officia deserunt mollit anim id est laborum.
                          </Accordion.Body>
                    </Accordion.Item> */}
                      {/* <h2 className="accordion-header" id="headingOne"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Test Cases</button></h2> */}
                      {/* <h2 id="headingOne"><button className="btn btn-primary collapsed dropdown-toggle dropup" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">Test Cases</button></h2> */}
                    <div className="btn-group dropup">
                        <button type="button" className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                            Test Cases
                        </button>
                    </div>


                </Col>

                <Col>
                    <Button className="btn btn-primary" >Submit</Button>
                </Col>
                
            </ Row>            
        </div>
 
    </Form>
  )
}
