import React, { useState } from "react";
import { Col, Container, FloatingLabel, Form, Row } from "react-bootstrap";
import DateTime from "../DateTime/DateTime";

const NewTasks = () => {
    const [title, setTitle] = useState({});
    const [description, setDescription] = useState({});

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };
    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(displayTodayDate, time, title, description);
        const newTask = {
            date: displayTodayDate,
            time: time,
            title: title,
            description: description,
            status: "pending",
        };
        fetch("http://localhost:2000/tasks", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(newTask),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    alert("Task Created successfully!");
                    setTitle({});
                    setDescription("");
                }
            });
        // setTitle("");
        // setDescription("");
    };
    // console.log(handleTitleChange);
    var showDate = new Date();
    var displayTodayDate =
        showDate.getDate() +
        "/" +
        (showDate.getMonth() + 1) +
        "/" +
        showDate.getFullYear();
    var time =
        showDate.getHours() +
        ":" +
        showDate.getMinutes() +
        ":" +
        showDate.getSeconds();
    return (
        <div>
            <h1 className="mt-5 mb-5 text-center">My New Task: </h1>
            <>
                <Container>
                    <Form>
                        <FloatingLabel
                            controlId="floatingTextarea"
                            label="Title"
                            className="mb-3"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a Title here"
                                onChange={handleTitleChange}
                            />
                        </FloatingLabel>
                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="Description"
                        >
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a Description here"
                                onChange={handleDescriptionChange}
                                style={{ height: "100px" }}
                            />
                        </FloatingLabel>
                    </Form>
                </Container>
                {/* Time and date container */}
                <Container>
                    <Row>
                        <Col>
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder={displayTodayDate}
                                        // value={displayTodayDate}
                                        readOnly={true}
                                    />
                                </Form.Group>
                            </Form>
                        </Col>
                        <Col>
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                >
                                    <Form.Label>Time</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder={time}
                                        readOnly={true}
                                    />
                                </Form.Group>
                            </Form>
                            <input
                                type="submit"
                                className="btn btn-primary mt-5"
                                onClick={handleSubmit}
                            ></input>
                        </Col>
                    </Row>
                </Container>
            </>
        </div>
    );
};

export default NewTasks;
