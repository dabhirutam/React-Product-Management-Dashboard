import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { DeleteAction, LoadViewAction } from "../../services/actions/SubmitAction";
import { useEffect } from "react";


const ProductList = () => {

    const { products, isloading } = useSelector((state) => state.SubmitReducer);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleNavigae = () => navigate('/add');
    const handleEdit = (id) => navigate(`/edit/${id}`);
    const handleDelete = (id) => {
        dispatch(DeleteAction(id));
    };

    useEffect(() => {
        dispatch(LoadViewAction());
    }, []);

    return (
        <Container>
            <Row className="py-5 text-center">
                <Col md={12} className="p-4 rounded-4 border border-secondary bg-dark bg-opacity-10 text-white" style={{ backdropFilter: 'blur(10px)' }}>
                    <div className="d-flex justify-content-between align-items-center mb-5">
                        <h2>View product History</h2>
                        <Button onClick={handleNavigae} variant="info" className="text-white fw-bold fs-5"><i className="bi bi-cart-fill"></i></Button>
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
                                                            <Button className="btn btn-primary" onClick={() => handleEdit(product.id)}>
                                                                <i className="bi bi-pencil-square"></i>
                                                            </Button>
                                                            &nbsp; || &nbsp;
                                                            <Button className="btn btn-danger" onClick={() => handleDelete(product.id)}>
                                                                <i className="bi bi-trash-fill"></i>
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