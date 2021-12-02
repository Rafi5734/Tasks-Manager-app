import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
const Update = () => {
    const { id } = useParams();
    const [updateStatus, setUpdateStatus] = useState([]);

    const handleNameChange = (e) => {
        const statusUpdate = e.target.value;
        const changeStatus = { status: statusUpdate };
        setUpdateStatus(changeStatus);
    };

    const handleUpdateStatus = () => {
        fetch(`http://localhost:2000/update/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updateStatus),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Status Changed Successfully!");
                    setUpdateStatus({});
                }
            });
    };

    useEffect(() => {
        fetch(`http://localhost:2000/update/${id}`)
            .then((res) => res.json())
            .then((data) => setUpdateStatus(data));
    }, []);
    return (
        <div>
            <Container>
                <h1>I am from update</h1>
                <input
                    type="text"
                    value={updateStatus.status}
                    className="me-3"
                    onChange={handleNameChange}
                ></input>
                {/* <Link to="/inprogress"> */}
                <Button variant="outline-warning" onClick={handleUpdateStatus}>
                    Update
                </Button>{" "}
                {/* </Link> */}
            </Container>
        </div>
    );
};

export default Update;
