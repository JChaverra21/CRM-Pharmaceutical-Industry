import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:3001/orders/"

const CompEditOrder = () => {
    const [id_client, setid_client] = useState('')
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [phone, setphone] = useState('')
    const [address, setaddress] = useState('')
    const [products, setproducts] = useState('')
    const [price, setprice] = useState('')
    const navigate = useNavigate() 
    const {id} = useParams()

    //procedimiento para actualizar
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI+id, {
            id_client: id_client, 
            name: name, 
            email: email, 
            phone: phone, 
            address: address, 
            products: products, 
            price: price
        })
        navigate('/')
    }

    useEffect( ()=>{
        getOrderById()
    },[])

    const getOrderById = async () => {
        const res = await axios.get(URI+id)
        setid_client(res.data.id_client)
        setname(res.data.name)
        setemail(res.data.email)
        setphone(res.data.phone)
        setaddress(res.data.address)
        setproducts(res.data.products)
        setprice(res.data.price)
    }

    return (
        <div>
        <h3>Edit POST</h3>
        <form onSubmit={update}>
        <div className='mb-3'>
                    <label className='form-label'>ID Client</label>
                    <input
                        value={id_client}
                        onChange={ (e)=> setid_client(e.target.value)} 
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input
                        value={name}
                        onChange={(e) => setname(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Phone</label>
                    <input
                        value={phone}
                        onChange={(e) => setphone(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Address</label>
                    <input
                        value={address}
                        onChange={(e) => setaddress(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Products</label>
                    <input
                        value={products}
                        onChange={(e) => setproducts(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>
                <div className="mb-3">
                    <label className="form-label">Price</label>
                    <input
                        value={price}
                        onChange={(e) => setprice(e.target.value)}
                        type="text"
                        className='form-control'
                    />
                </div>           
            <button type="submit" className="btn btn-primary">Update</button>
        </form>
    </div>
    )

}

export default CompEditOrder