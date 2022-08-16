import { Card, Row, Form } from 'react-bootstrap';
import Pagination from 'react-bootstrap/Pagination';
import React from 'react';

const Question = (props) => {
    return (
        <Card className="QuestionBox">
            <Card.Body  >
                <Card.Title className="questionTitle" style={{ textAlign: "center" }}><h3>{props.title}</h3></Card.Title>
                <hr />
                {/* <Form.Group className="body">
                <Form.Control value="Chairs Requirement">
                Chef's coding class is very famous in Chefland.

                This year X students joined his class and each student will require one chair to sit on. Chef already has Y chairs in his class. Determine the minimum number of new chairs Chef must buy so that every student is able to get one chair to sit on.
                Input Format
                The first line contains a single integer T — the number of test cases. Then the test cases follow.
                The first and only line of each test case contains two integers X and Y — the number of students in the class and the number of chairs Chef already has.

                Output Format
                For each test case, output the minimum number of extra chairs Chef must buy so that every student gets one chair.
                </Form.Control>
            </Form.Group> */}
                <Card.Text>
                    Chef's coding class is very famous in Chefland.

                    This year X students joined his class and each student will require one chair to sit on. Chef already has Y chairs in his class. Determine the minimum number of new chairs Chef must buy so that every student is able to get one chair to sit on.
                    Input Format
                    The first line contains a single integer T — the number of test cases. Then the test cases follow.
                    The first and only line of each test case contains two integers X and Y — the number of students in the class and the number of chairs Chef already has.

                    Output Format
                    For each test case, output the minimum number of extra chairs Chef must buy so that every student gets one chair.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default Question;