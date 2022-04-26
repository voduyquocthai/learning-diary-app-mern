import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const About = () => {
    return (
        <Row className="mt-5" style={{ marginRight: 0 }}>
            <Col className="text-center">
                <Button
                    variant="primary"
                    href="https://github.com/ryantuannguyen"
                    size="lg"
                >
                    Visit my github profile for more projects
                </Button>
            </Col>
        </Row>
    );
};

export default About;
