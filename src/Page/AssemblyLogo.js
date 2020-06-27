import React, { useState, useEffect } from 'react'
import { Carousel } from 'antd';
// import 'bootstrap/dist/css/bootstrap.min.css'
import '../Css/page/AssemblyLogo.css'

//utils
import BaseUrl from '../utils/BaseUrl'

export default function AssemblyLogo() {
    const [category1, setCategory1] = useState([])
    const [category2, setCategory2] = useState([])
    // const [staffInfo, setStaffInfo] = useState(null)

    const getAssemblyProduct = async () => {
        const response = await fetch(`${BaseUrl}/api/product/AssemblyLogo/all`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        setCategory1(json.filter(item => item.categoryid === 1))
        setCategory2(json.filter(item => item.categoryid === 2))
    }

    useEffect(() => {
        // const staff = localStorage.getItem("staffInfo")
        // const json = JSON.parse(staff)
        // setStaffInfo(json)
        getAssemblyProduct()
    }, [])

    return (
        <div>
            <Carousel autoplay>
                <div>
                    <img src={require('../assets/images/AL1.jpg')} className="img-fluid" alt="AL1" />
                </div>
                <div>
                    <img src={require('../assets/images/AL1.jpg')} className="img-fluid" alt="AL1" />
                </div>
                <div>
                    <img src={require('../assets/images/AL1.jpg')} className="img-fluid" alt="AL1" />
                </div>
                <div>
                    <img src={require('../assets/images/AL1.jpg')} className="img-fluid" alt="AL1" />
                </div>
            </Carousel>,

            <div className=".container-fluid">
                <h1>Assembly Lego</h1>
                <div id="chinh">
                    <div className="row">
                        {category1.map(item => {
                            return (
                                <div style={{ margin: '5px' }} className="Pla-unit-container shadow-lg p-3 mb-5 bg-white rounded col-xl-3 col-md-2 col-sm6 col-xs-4">
                                    <img src={item.productimage} alt="TS5" width="250px" className="img-fluid" />
                                    <div className="pla-unit-title T4OwTb"><span>{item.productname}</span></div>
                                    <div className="e10twf T4OwTb"><span>{item.productprice}</span></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <h1>Control Toys</h1>
                <div id="chinh">
                    <div className="row">
                        {category2.map(item => {
                            return (
                                <div style={{ margin: '5px' }} className="Pla-unit-container shadow-lg p-3 mb-5 bg-white rounded col-xl-3 col-md-2 col-sm6 col-xs-4">
                                    <img src={item.productimage} alt="TS5" width="250px" />
                                    <div className="pla-unit-title T4OwTb"><span>{item.productname}</span></div>
                                    <div className="e10twf T4OwTb"><span>{item.productprice}</span></div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
