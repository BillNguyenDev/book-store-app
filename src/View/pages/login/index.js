import React, { Component } from 'react';
import { Form, FormGroup, Label, Input, Button, Alert } from 'reactstrap';

import Header from '../../components/HeaderLogin'
import firebase from '../../../Model/config';

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: this.props.location.state ? this.props.location.state.message : '',
        };
    }
    signIn = () => {
        const _data = { email: this.email, password: this.password };
        firebase.firestore().collection('users').get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    if (doc.data().email === _data.email) {

                        if (doc.data().password === _data.password) {
                            let token = true;
                            localStorage.setItem('token', token);
                            this.props.history.push("/");
                            //them cookie
                            
                            return;
                        } else {
                            this.setState({ message: "Mật khẩu không đúng vùi lòng nhập lại!" });
                            return;
                        };
                    } else {
                        this.setState({ message: "Tài khoản không đúng!" });
                        return;
                    }
                });
            })
            .catch((err) => {
                console.log('Lỗi đăng nhập!!!', err);
            });

    }

    render() {
        return (
            <div className="col-md-6">
                <Header title="Bill Nguyen Book Store" />
                <hr className="my-3" />
                {
                    this.state.message !== '' ? (
                        <Alert color="danger" className="text-center"> {this.state.message} </Alert>
                    ) : ''
                }
                <Form>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="text" id="email" onChange={e => this.email = e.target.value} placeholder="Nhập Email ở đây!" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Mật khẩu:</Label>
                        <Input type="password" id="password" onChange={e => this.password = e.target.value} placeholder="Nhập mật khẩu ở đây!" />
                    </FormGroup>
                    <Button color="primary" block onClick={this.signIn}> Đăng Nhập </Button>
                </Form>
            </div>
        );
    }
}