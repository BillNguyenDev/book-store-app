import React, { Component } from 'react';
import {
    Card, CardImg, CardBody,
    CardTitle, Button, Container, Row, Col
} from 'reactstrap';
import Pagination from "react-js-pagination";
// import "bootstrap/less/bootstrap.less";
import firebase from '../../../Model/config'

const arrData = [];
let _from = 0;
let _to = 0;
export default class ListBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            activePage: 1
        }
    }
    componentDidMount() {
        firebase.firestore().collection('products').get().then((snapshot) => {
            snapshot.forEach((doc) => {
                let _data = doc.data();
                arrData.push(_data);
            });
            this.setState({ items: arrData });
        })
            .catch((err) => {
                console.log('Lỗi không truy xuất dữ liệu ', err);
            });
        this.handlePageChange(1);
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({ activePage: pageNumber });
        _from = (pageNumber - 1) * 9;
        _to = pageNumber * 9;
    }

    render() {
        return (
            <Container>
                <h2>Products</h2>
                <Row>
                    {
                        this.state.items.slice(_from, _to).map(item => (
                            <Col sm="4">
                                <Card>
                                    <CardImg top width="100%" height="100%" src={item.url_avatar} alt="Card image cap" />
                                    <CardBody>
                                        <CardTitle>{item.name}</CardTitle>
                                        <Button>Button</Button>
                                    </CardBody>
                                </Card>
                            </Col>

                        ))
                    }

                </Row>
                <Pagination
                    activePage={this.state.activePage}
                    itemsCountPerPage={9}
                    totalItemsCount={this.state.items.length}
                    pageRangeDisplayed={5}
                    onChange={this.handlePageChange.bind(this)}
                    itemClass="page-item"
                    linkClass="page-link"
                />
            </Container>

        );
    }
}