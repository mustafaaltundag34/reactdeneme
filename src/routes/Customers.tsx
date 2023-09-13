import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

function Customers() {

    const [customers, setCustomers] = useState([]);
    const [loading, setloading] = useState(true);

    useEffect(() => {

        axios.get('https://northwind.vercel.app/api/customers')
            .then(res => {
                setCustomers(res.data);
                setloading(false);
            })

    }, [])

    return (<>
        {
            loading ? <h1>Yukleniyor...</h1> : <table className='w3-table'>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Company Name</th>
                    <th>Contact Name</th>
                </tr>
            </thead>

            <tbody>
                {
                    
                   customers && customers.map((item: any) => {
                        return <tr key={item.id}>
                            <td><Link to={'/customers/' + item.id}>{item.id}</Link></td>
                            <td>{item.companyName}</td>
                            <td>{item.contactName}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
}       
    </>
    )
}

export default Customers