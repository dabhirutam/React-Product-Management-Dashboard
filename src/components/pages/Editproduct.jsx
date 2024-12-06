import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { SingleDataAction, UpadateAction } from "../../services/actions/SubmitAction";
import { useNavigate, useParams } from "react-router";


const EditProduct = () => {

    const { product } = useSelector((state) => state.SubmitReducer);

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        category: "",
        price: "",
        quantity: "",
        description: ""
    });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();

    const handleInputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(UpadateAction(formData));
        navigate('/');
    };

    useEffect(() => {
        dispatch(SingleDataAction(id));
    }, []);

    useEffect(() => {
        setFormData(product);
    }, [product]);

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={10} xs={12} className="border border-secondary rounded-3 p-4 text-white" style={{ backdropFilter: 'blur(10px)' }}>
                    <h2 className="text-center mb-5">Camel Edit Profile Form</h2>
                    <Form onSubmit={handleSubmit}>
                        <Row className="mb-3 row-gap-3">
                            <Form.Control type="text" name="id" hidden />
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
                                    Update Product
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default EditProduct;