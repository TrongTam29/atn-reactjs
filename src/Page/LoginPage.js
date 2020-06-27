import React from 'react'
import { Form, Input } from 'antd'
import { useHistory } from 'react-router-dom'
import '../Css/page/Login.css'
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import BaseUrl from '../utils/BaseUrl'

export default function LoginPage() {
    let history = useHistory();
    const onFinish = (values) => {
        submitStaffLogin(values.account, values.password)
    }

    const submitStaffLogin = async (account, password) => {
        try {
            const response = await fetch(`${BaseUrl}/api/Agency/login?account=${account}&password=${password}`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            const data = await response.json();
            if (data[0] !== undefined) {
                localStorage.setItem("staffInfo", JSON.stringify(data[0]))
                let path = "/"
                history.push(path)
                window.location.reload(false)
            }
        } catch (error) {
            console.error('Error', error);
        }
    }


    return (
        <div className="login-container">
            <Form
                name='Login'
                className='AgencyLogin'
                initialValues={{
                    remember: true,
                }}
                onFinish={onFinish}>
                <h1>Login</h1>
                <br /><br />
                <Form.Item
                    name="account"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Account!',
                        },
                    ]}
                >
                    <div className="mb-6 row">
                        <label className="form-label"><strong>Account</strong></label>


                        <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
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
                    <div className="mb-4 row">
                        <label className="form-label"><strong>Password</strong></label>
                        <Input.Password prefix={<LockOutlined className="site-form-item-icon" />} placeholder="Password" />
                    </div>
                </Form.Item>

                <Form.Item>
                    <div className="mb-3 form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label">Check me out</label>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">Login</button>
                </Form.Item>
            </Form>
        </div >
    )

}
