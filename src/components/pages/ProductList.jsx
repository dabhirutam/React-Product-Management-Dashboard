import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteConformAction, LoadViewAction } from "../../services/actions/SubmitAction";
import { useEffect } from "react";

const ProductList = () => {

    const { products, isloading } = useSelector((state) => state.SubmitReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(LoadViewAction());
    }, []);

    return (
        <Container>
            <Row className="py-5 text-center">
                <Col md={12} className="p-4 rounded-4 border border-secondary bg-dark bg-opacity-10 text-white" style={{ backdropFilter: 'blur(10px)' }}>
                    <div className="d-flex flex-wrap align-items-center mb-5 row-gap-2 text-center text-md-start">
                        <h2 className="col-12 col-md-6">View Product History</h2>
                        <Col md={6} xs={12} className="text-md-end">
                            <Button onClick={() => navigate('/add')} variant="info" className="text-white fw-bold fs-5"><i className="bi bi-cart-fill"></i></Button>
                        </Col>
                    </div>
                    {
                        isloading ? (
                            <div className="text-center">
                                <div className="spinner-border text-info" role="status"></div>
                            </div>
                        )
                            : <div className="overflow-x-auto">
                                <Table bordered hover style={{ minWidth: '1000px' }}>
                                    <thead className="table-dark">
                                        <tr>
                                            <th>#</th>
                                            <th>Product ID</th>
                                            <th>Name</th>
                                            <th>Category</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
                                            <th>Description</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            products.map((product, index) => {
                                                return (
                                                    <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{product.id}</td>
                                                        <td>{product.name}</td>
                                                        <td>{product.category}</td>
                                                        <td>{product.price}</td>
                                                        <td>{product.quantity}</td>
                                                        <td>{product.description}</td>
                                                        <td>
                                                            <Button className="btn btn-primary" onClick={() => navigate(`/edit/${product.id}`)}>
                                                                <i className="bi bi-pencil-square"></i>
                                                            </Button>
                                                            &nbsp; || &nbsp;
                                                            <Button className="btn btn-danger" onClick={() => dispatch(DeleteConformAction(product.id))}>
                                                                <i className="bi bi-trash-fill"></i>
                                                            </Button>
                                                            &nbsp; || &nbsp;
                                                            <Button className="btn btn-success" onClick={() => navigate(`/single/${product.id}`)}>
                                                                <i className="bi bi-eye-fill"></i>
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                            })
                                        }
                                    </tbody>
                                </Table>
                            </div>
                    }
                </Col>
            </Row>
        </Container>

    )
}

export default ProductList;