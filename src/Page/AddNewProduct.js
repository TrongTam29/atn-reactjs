import React, { useState, useEffect } from 'react'
import { Form, Select, Input } from 'antd'
import '../Css/page/Register.css'
import { CodepenOutlined, FileImageOutlined, MoneyCollectOutlined } from '@ant-design/icons';
import BaseUrl from '../utils/BaseUrl'

export default function AddNewProduct() {
    const [supplier, setSupplier] = useState([])
    const [category, setCategory] = useState([])



    const onFinish = (values) => {
        addNewProduct(values.NameProduct, values.ProductImage, values.ProductPrice, values.supplier, values.category)
    }

    const addNewProduct = async (name, image, price, supplier, category) => {
        try {
            const response = await fetch(`${BaseUrl}/api/product/addproduct?name=${name}&image=${image}&price=${price}&supplier=${supplier}&category=${category}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            // setVisible(true)
        } catch (error) {
            console.error('Error', error);
        }
    }
    const getSupplier = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/supplier/all`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const data = await response.json();
            setSupplier(data)
        } catch (error) {
            console.error('Error', error)
        }
    }

    const getCategory = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/category/all`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const data = await response.json()
            setCategory(data)
        } catch (error) {
            console.error('error', error)
        }
    }

    useEffect(() => {
        getSupplier()
        getCategory()
    }, [])

    return (
        <div className="login-container">
            <Form
                name='add'
                className='AddNewProduct'
                initialValues={{
                    remember: true
                }}
                onFinish={onFinish}>
                <h1>Add New Product</h1>
                {/* <Form.Item>
                        {visible ? (
                            <Alert message="Register Successfully" type="success" closable afterClose={handleClose} />
                        ) : null}
                    </Form.Item> */}

                <Form.Item
                    name="NameProduct"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your NameProduct!'
                        },
                    ]}
                >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"><strong>Product Name</strong></label>
                        <Input prefix={<CodepenOutlined className="site-form-item-icon" />} placeholder="Product Name" />
                    </div>
                </Form.Item>
                <Form.Item
                    name="ProductImage"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Product Image!'
                        },
                    ]}
                >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"><strong>Product Image</strong></label>
                        <Input prefix={<FileImageOutlined className="site-form-item-icon" />} placeholder="Product Image" />
                    </div>
                </Form.Item>
                <Form.Item
                    name="ProductPrice"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your Product Price!'
                        },
                    ]}
                >
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label"><strong>Product Price</strong></label>
                        <Input prefix={<MoneyCollectOutlined className="site-form-item-icon" />} placeholder="Product Prices" />
                    </div>
                </Form.Item>

                <Form.Item name="supplier" label="Supplier" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        // onChange={onBranchChange}
                        allowClear
                    >
                        {supplier.map(item => {
                            return (
                                <Select.Option key={item.supplierid} value={item.supplierid}>{item.suppliername}</Select.Option>
                            )
                        })}
                    </Select>
                </Form.Item>

                <Form.Item name="category" label="Category" rules={[{ required: true }]}>
                    <Select
                        placeholder="Select a option and change input text above"
                        // onChange={onBranchChange}
                        allowClear
                    >
                        {category.map(item => {
                            return (
                                <Select.Option key={item.categoryid} value={item.categoryid}>{item.categoryid}</Select.Option>
                            )
                        })}
                    </Select>
                </Form.Item>

                <Form.Item>
                    <button type="submit" className="btn btn-outline-primary"
                        style={{ position: "relative" }}>Finish</button>
                </Form.Item>
            </Form>
        </div>
    )
}

