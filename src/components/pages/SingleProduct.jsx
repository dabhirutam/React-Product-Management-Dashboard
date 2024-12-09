import { Container, Row, Col, ListGroup, Button } from "react-bootstrap";
import { useNavigate, useParams } from "react-router";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LoadViewSingleAction } from "../../services/actions/SubmitAction";
import shopImg from "../../images/shopify.png";

const SingleProduct = () => {

    const { product, isloading } = useSelector((state) => state.SubmitReducer);
    const disptch = useDispatch();
    const { id } = useParams();
    const navigate = useNavigate();
    const [viewData, setViewData] = useState({
        id: '',
        name: '',
        category: "",
        price: "",
        quantity: "",
        description: ""
    });

    useEffect(() => {
        disptch(LoadViewSingleAction(id));
    }, [])

    useEffect(() => {
        product && setViewData(product);
    }, [product])

    return (
        <Container>
            <Row>
                <Col md={6} xs={10} className="p-4 mt-5 bg-black border border-secondary rounded-4 mx-auto">
                    <div className="d-flex justify-content-center column-gap-2 align-items-center mb-4 text-center col-12">
                        <Button onClick={() => navigate('/')} variant="info" className="text-white fw-bold fs-5"><i className="bi bi-house-fill"></i></Button>
                        <Button onClick={() => navigate('/add')} variant="info" className="text-white fw-bold fs-5"><i className="bi bi-cart-fill"></i></Button>
                    </div>
                    {
                        isloading ?
                            <div className="text-center">
                                <div className="spinner-border text-info" role="status"></div>
                            </div>
                            : <div className="d-flex flex-wrap align-items-center justify-content-center row-gap-2">
                                <Col lg={6} xs={12} className="p-2 text-center">
                                    <img className="object-fit-cover" style={{ width: 'clamp(200px, 80%, 500px)', aspectRatio: '1/1' }} src={shopImg} alt="" />
                                </Col>
                                <Col lg={6} xs={12}>
                                    <ListGroup>
                                        {
                                            ['name', 'id', 'category', 'price', 'quantity', 'description'].map((feild, index) => {
                                                return (
                                                    <ListGroup.Item key={index} className="d-flex justify-content-between text-white">
                                                        <span className="fw-medium text-capitalize">{feild} :</span>
                                                        &nbsp; {viewData[feild]}
                                                    </ListGroup.Item>
                                                )
                                            })
                                        }
                                    </ListGroup>
                                </Col>
                            </div>

                    }

                </Col>
            </Row>
        </Container>
    )
};

export default SingleProduct;