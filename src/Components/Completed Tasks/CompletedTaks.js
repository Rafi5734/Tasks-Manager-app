import React, { useEffect, useState } from "react";
import { Card, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CompleteTasks = () => {
    const [complete, setComplete] = useState([]);

    useEffect(() => {
        fetch("http://localhost:2000/tasks?status=complete")
            .then((res) => res.json())
            .then((data, index) => {
                const sortedActivities = data
                    .slice(11, 20)
                    .sort((a, b) => a.date - b.date);

                setComplete(sortedActivities.reverse());
            });
    }, []);

    return (
        <div>
            <Container>
                {complete.map((item) => (
                    <Card style={{ width: "18rem", marginTop: "30px" }}>
                        <Card.Body>
                            <Card.Title>{item.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">
                                {item.description}
                            </Card.Subtitle>
                            <Card.Text>
                                <span>{item.date}</span>{" "}
                                <span>{item.time}</span>
                            </Card.Text>
                            <span className="me-3">{item.status}</span>
                            <Link to={`/update/${item._id}`}>
                                <Button
                                    variant="outline-success"
                                    // onClick={handleComplete}
                                >
                                    Update Status
                                </Button>{" "}
                            </Link>
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        </div>
    );
};

export default CompleteTasks;

{
    /*  */
}
