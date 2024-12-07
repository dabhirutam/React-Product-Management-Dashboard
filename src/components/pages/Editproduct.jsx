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
                    <div className="d-flex flex-wrap align-items-center mb-5 row-gap-2 text-center text-lg-start">
                        <h2 className="col-lg-6 col-12">Edit Product Data Form</h2>
                        <Col lg={6} xs={12} className="text-lg-end">
                            <Button onClick={() => navigate('/')} variant="info" className="text-white fw-bold fs-5 me-3"><i className="bi bi-house-fill"></i></Button>
                            <Button onClick={() => navigate('/add')} variant="info" className="text-white fw-bold fs-5"><i className="bi bi-cart-fill"></i></Button>
                        </Col>
                    </div>
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