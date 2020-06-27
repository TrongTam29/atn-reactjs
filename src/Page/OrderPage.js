import React, { useState, useEffect } from 'react'
import { Form, Select, List, InputNumber } from 'antd'
import '../Css/page/OrderPage.css'
import BaseUrl from '../utils/BaseUrl'

export default function OrderPage() {
    const [agency, setAgency] = useState([])
    const [product, setProduct] = useState([])
    const [customer, setCustomer] = useState([])
    const [showorder, setShoworder] = useState([])

    const [customerId, setCustomerId] = useState(0)
    const [agencyId, setAgencyId] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [maxId, setMaxId] = useState(0)

    const onFinish = value => {
        setCustomerId(value.customerid)
        setAgencyId(value.agencyid)
        setQuantity(value.quantity)
        setShoworder(prev => [...prev, value])
        console.log(value)
    }

    const addNewOrder = async () => {
        if (showorder[0] !== undefined) {
            try {
                await fetch(`${BaseUrl}/api/orderitem/addorder?customer=${customerId}&agency=${agencyId}`, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    }
                })
                showorder.map(async item => {
                    await fetch(`${BaseUrl}/api/orderdetail/add?orderId=${maxId}&productId=${item.product[1]}&quantity=${quantity}`, {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        }
                    })
                })
            } catch (error) {
                console.error('Error', error)
            }
        }
    }
    const getAgency = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/Agency/all`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const data = await response.json();
            setAgency(data)
        } catch (error) {
            console.error('Error', error)
        }
    }

    const getMaxId = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/orderitem/all`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const data = await response.json();
            setMaxId(data.length)
        } catch (error) {
            console.error('Error', error)
        }
    }

    const getProduct = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/product/AssemblyLogo/all`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const data = await response.json()
            setProduct(data)
        } catch (error) {
            console.error('error', error)
        }
    }

    const getCustomer = async () => {
        try {
            const response = await fetch(`${BaseUrl}/api/customer/all`, {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
            })
            const data = await response.json()
            setCustomer(data)
        } catch (error) {
            console.error('error', error)
        }
    }

    useEffect(() => {
        getAgency()
        getCustomer()
        getProduct()
        getMaxId()
    }, [])
    return (
        <div style={{ minHeight: "68vh" }}>
            <List
                className="demo-loadmore-list"
                itemLayout="horizontal"
                dataSource={showorder}
                renderItem={item => (
                    <List.Item
                        key={item.product[1]}
                        style={{ padding: '20px' }}
                        actions={[<h5>${parseFloat(item.product[2] * item.quantity)}</h5>]}
                    >
                        <List.Item.Meta
                            title={<h4>{item.product[0]}</h4>}
                            description={<h5>Product price: {item.product[2]}</h5>}
                        />
                        <h5>Quantity: {item.quantity}</h5>
                    </List.Item>
                )}
            />
            <div className='login-container'>
                <Form
                    name='add'
                    className='AddNewProduct'
                    initialValues={{
                        remember: true
                    }}
                    onFinish={onFinish}
                >
                    <h1>Add New Product</h1>
                    {/* <Form.Item>
                        {visible ? (
                            <Alert message="Register Successfully" type="success" closable afterClose={handleClose} />
                        ) : null}
                    </Form.Item> */}

                    <Form.Item name="product" label="ProductID" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            // onChange={onBranchChange}
                            allowClear
                        >
                            {product.map(item => {
                                return (
                                    <Select.Option key={item.productid} value={[item.productname, item.productid, item.productprice]}>{item.productname}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item name="customer" label="CustomerID" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            // onChange={onBranchChange}
                            allowClear
                        >
                            {customer.map(item => {
                                return (
                                    <Select.Option key={item.customerid} value={item.customerid}>{item.customer_username}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item name="agency" label="AgencyID" rules={[{ required: true }]}>
                        <Select
                            placeholder="Select a option and change input text above"
                            // onChange={onBranchChange}
                            allowClear
                        >
                            {agency.map(item => {
                                return (
                                    <Select.Option key={item.agencyid} value={item.agencyid}>{item.agencyaccount}</Select.Option>
                                )
                            })}
                        </Select>
                    </Form.Item>

                    <Form.Item name="quantity" label="Quantity" rules={[{ required: true }]}
                    // placeholder="Select a option and change input text above"
                    // // onChange={onBranchChange}
                    // allowClear
                    >
                        <InputNumber min={0} max={100} step={1} />
                    </Form.Item>

                    <Form.Item>
                        <button type="submit" className="btn btn-outline-primary"
                            style={{ position: "relative" }}>Order</button>
                    </Form.Item>
                </Form>
                <button onClick={() => addNewOrder()} className="btn btn-outline-success"
                    style={{ position: "relative" }}>Payment</button>
            </div>
        </div>
    )
}
