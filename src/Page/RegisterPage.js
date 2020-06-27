import React, { useState } from 'react';
import {
    Form,
    Input,
    Alert,

} from 'antd';
import { Link } from "react-router-dom";
import { MailOutlined, LockOutlined } from '@ant-design/icons';
import '../Css/page/Register.css'
import BaseUrl from '../utils/BaseUrl'

export default function RegistrationForm() {
    const [visible, setVisible] = useState(false);
    const handleClose = () => {
        setVisible(false);
    }
    const { TextArea } = Input;
    const onFinish = (values) => {
        submitAgencyRegister(values.account, values.password, values.address)
    }

    const submitAgencyRegister = async (account, password, address) => {
        try {
            await fetch(`${BaseUrl}/api/Agency/register?account=${account}&password=${password}&address=${address}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            setVisible(true)
        } catch (error) {
            console.error('Error', error);
        }
    }
    return (
        <div className="login-container">
            <Form
                name="normal_register"
                className="register-form"
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}>
                <h1>Registation For Agency</h1>
                <Form.Item>
                    {visible ? (
                        <Alert message="Register Fail, Please retry" type="success" closable afterClose={handleClose} />
                    ) : false}
                </Form.Item>
                <Form.Item>
                    {visible ? (
                        <Alert message="Register Successfully" type="success" closable afterClose={handleClose} />
                    ) : true}
                </Form.Item>
                <Form.Item
                    name="account"
                    rules={[
                        {
                            type: 'email',
                            required: true,
                            message: 'Please input your Email!',
                        },
                    ]}
                >
                    <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Item>
                <Form.Item
                    name="confirm-password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Confirm-password!',
                        },
                    ]}
                >
                    <Input
                        prefix={<LockOutlined className="site-form-item-icon" />}
                        type="password"
                        placeholder="Confirm Password"
                    />
                </Form.Item>

                <Form.Item
                    name="address"
                    rules={[
                        {
                            required: true,
                            message: 'Please input Address'
                        }
                    ]}
                >
                    <TextArea rows={3} placeholder="Agency Address" />
                </Form.Item>

                <Form.Item>
                    <button type="submit" className="btn btn-outline-primary">Registation</button>
                    <p style={{ display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
                        I have already Account!<Link style={{ marginLeft: '0.2vw' }} to="/login">Login</Link>
                    </p>
                </Form.Item>
            </Form>
        </div>
    )
}
