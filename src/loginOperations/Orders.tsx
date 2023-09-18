import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Orders() {

    const [orders, setOrders] = useState([]);
    const [loading, setloading] = useState(true);


    useEffect(() => {

        var token = localStorage.getItem('token');
        
        axios.get("http://localhost:3001/api/orders", {
            headers: {
                'Authorization': `Basic ${token}`
            }
        })
            .then(res => {
                //console.log('DATA', res.data);
                    setOrders(res.data);
                    setloading(false);
            })
            .catch(err => {
                console.log('ERROR', err);

            })

    }, [])


    return (<>
        {
            loading ? <h1>Yukleniyor...</h1> : <table className='w3-table'>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Customer Id</th>
                    <th>Employee Id</th>
                </tr>
            </thead>

            <tbody>
                {
                    
                   orders && orders.map((item: any) => {
                        return <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.customerId}</td>
                            <td>{item.employeeId}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
}       
    </>
    )
}

export default Orders