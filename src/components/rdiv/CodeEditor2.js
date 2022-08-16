import React, { useState } from "react";
import "./CodeEditor2.css";
import { Form, Row, Col, Button, Dropdown, DropdownButton, InputGroup, Container } from "react-bootstrap";
import AceEditor from "react-ace";
import "react-ace-builds/webpack-resolver-min";

export default function CodeEditor2() {


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
    <Form classname="scrollablediv2">
        <Form.Group controlId="codearea">
            <div>
                <Row className="upperRight justify-content-between my-2">
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
            <Row className="upperRight justify-content-between my-2">
                <Col>
                    <Button className="btn btn-primary file" >Upload File</Button>
                </Col>

                <Col>
                    <Button className="btn btn-primary" >Test Cases</Button>
                </Col>

                <Col>
                    <Button className="btn btn-primary" >Submit</Button>
                </Col>
                
            </ Row>            
        </div>
 
    </Form>
  )
}
