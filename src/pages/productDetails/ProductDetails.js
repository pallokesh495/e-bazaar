import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Header from '../../components/header/Header';
import logotxt from '../../assets/logotext.png';
import style from './ProductDetails.module.css';
import Footer from '../../components/footer/Footer';

const style_logotxt = {
    maxWidth: '15rem',
    maxHeight: 'auto'
};

const ProductDetails = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const itemId = parseInt(id);

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        axios.get('http://localhost:8080/all-products')
            .then(response => {
                setData(response.data);
                setLoading(false); 
            })
            .catch(error => {
                console.log("error in fetching data====>", error);
                setLoading(false); 
            });
    }, []);

    const item = data.find(item => item.productId === itemId);

    const handleItem = () => {
        dispatch({ type: 'ADD-ITEM', payload: item });
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!item) {
        return <div>Product not found</div>;
    }

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Header />
            <div className={style.wrapper}>
                <div className={style.section1}>
                    <img src={logotxt} alt='hello' style={style_logotxt} />
                    <img src={logotxt} alt='hello' style={style_logotxt} />
                    <img src={logotxt} alt='hello' style={style_logotxt} />
                </div>
                <img src={logotxt} alt='hello' className={style.section2} style={{ width: '20rem' }} />
                <div className={style.section3}>
                    <h2>{item.name}</h2>
                    <h2>*****</h2>
                    <h4>MRP: {item.price}</h4>
                    <p>Description: {item.description}</p>
                    <h4>Available: Yes</h4>
                    <h4>Product Id: {item.id + '870836'}</h4>
                    <h4>Manufacturer: random</h4>
                    <h4>Colour: Default</h4>
                    <div className='btn btn-danger' onClick={handleItem}>ADD TO CART</div>
                </div>
            </div>
            <Footer style={{ marginTop: 'auto' }} />
        </div>
    );
};

export default ProductDetails;
