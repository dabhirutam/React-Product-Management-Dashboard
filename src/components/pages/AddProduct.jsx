import { useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { SubmitAction } from "../../services/actions/SubmitAction";
import { useNavigate } from "react-router";


const AddProduct = () => {

    const [formData, setFormData] = useState({
        name: '',
        category: "",
        price: "",
        quantity: "",
        description: ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(SubmitAction(formData));
        navigate('/');
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={10} xs={12} className="border border-secondary rounded-3 p-4 text-white" style={{ backdropFilter: 'blur(10px)' }}>
                <div className="d-flex flex-wrap align-items-center mb-5 row-gap-2 text-center text-lg-start">
                        <h2 className="col-lg-6 col-12">Add Product Data Form</h2>
                        <Col lg={6} xs={12} className="text-lg-end">
                            <Button onClick={() => navigate('/')} variant="info" className="text-white fw-bold fs-5"><i className="bi bi-house-fill"></i></Button>
                        </Col>
                    </div>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3 row-gap-3">
                            <Col xs={12}>
                                <Form.Control type="text" placeholder="Enter Product Name" name="name" value={formData.name} onChange={handleInputChange} />
                            </Col>
                            <Col xs={12}>
                                <Form.Control type="text" placeholder="Enter Category" name="category" value={formData.category} onChange={handleInputChange} />
                            </Col>
                            <Col xs={12}>
                                <Form.Control type="text" placeholder="Enter Price" name="price" value={formData.price} onChange={handleInputChange} />
                            </Col>
                            <Col xs={12}>
                                <Form.Control type="text" placeholder="Enter Quantity" name="quantity" value={formData.quantity} onChange={handleInputChange} />
                            </Col>
                            <Col xs={12}>
                                <Form.Control type="text" placeholder="Enter Description" name="description" value={formData.description} onChange={handleInputChange} />
                            </Col>
                            <Col xs={12} className="text-center mt-3">
                                <Button variant="primary" type="submit" className="px-4">
                                    Add Product
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default AddProduct;