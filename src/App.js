import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ArchiveTasks from "./Components/Archive Tasks/ArchiveTasks";
import CompletedTaks from "./Components/Completed Tasks/CompletedTaks";
import ImprogressTasks from "./Components/Improgress Tasks/ImprogressTasks";
import NewTasks from "./Components/New Tasks/NewTasks";
import { Navbar, Container, Nav } from "react-bootstrap";
import DateTime from "./Components/DateTime/DateTime";
import Update from "./Components/Update/Update";
import CompleteOrder from "./Components/CompleteOrder/CompleteOrder";
function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Navbar bg="light" expand="lg">
                    <Container fluid>
                        <Navbar.Brand>Foreign Admits</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll">
                            <Nav
                                className="me-auto my-2 my-lg-0"
                                style={{ maxHeight: "100px" }}
                                navbarScroll
                            >
                                <Link to="/newtask" className="me-3">
                                    New Tasks
                                </Link>
                                <Link to="/inprogress" className="me-3">
                                    Inprogress Tasks
                                </Link>
                                <Link to="/complete" className="me-3">
                                    Completed Tasks
                                </Link>
                                <Link to="/archive">Archive Tasks</Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>

                <Routes>
                    <Route path="/" element={<NewTasks />} />
                    <Route path="/newtask" element={<NewTasks />} />
                    <Route path="/inprogress" element={<ImprogressTasks />} />
                    <Route path="/complete" element={<CompletedTaks />} />
                    <Route path="/archive" element={<ArchiveTasks />} />
                    <Route path="/date" element={<DateTime />} />
                    <Route path="/update/:id" element={<Update />} />
                    <Route
                        path="/completeorder/:id"
                        element={<CompleteOrder />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
