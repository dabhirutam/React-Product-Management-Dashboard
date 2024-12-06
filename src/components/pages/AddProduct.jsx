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
                    <h2 className="text-center mb-5">Camel Edit Profile Form</h2>
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