// src/services/orderService.js
import axiosInstance from '../config/axiosConfig';

const getJWT = () => {
    return localStorage.getItem('token');
};

const storeId = process.env.REACT_APP_ID;

const addToCart = async (userId, productId) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.post(`/private/${storeId}/${base64}/cart/add/${productId}`, [], {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
        });
    } catch (error) {
        console.error('Error fetching orders', error);
        let response;
        response = { status: 401, message: 'Unauthorized' };
        return response;
    }
};

const deleteToCart = async (user, id) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(user)))
        return await axiosInstance.delete(`/private/${storeId}/${base64}/cart/${id}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
        });
    } catch (error) {
        return  { status: 400, message: 'Error deleting item' };
    }
};

const getCart = async (user) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(user)))
        return await axiosInstance.get(`/private/${storeId}/${base64}/cart`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
        });
    } catch (error) {
        return  { status: 400, message: 'Error fetching cart' };
    }
};


export { addToCart, deleteToCart, getCart };
