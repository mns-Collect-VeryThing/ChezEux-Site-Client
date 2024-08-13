// src/services/orderService.js
import axiosInstance from '../config/axiosConfig';

const getJWT = () => {
    return localStorage.getItem('token');
};

let shop = 2;


const getOrders = async () => {
    try {
        const response = await axiosInstance.get('/orders');
        return response.data;
    } catch (error) {
        console.error('Error fetching orders', error);
        throw error;
    }
};
const postOrder = async (userId, delivery, billing, id) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.post(`/private/${shop}/order/${base64}/new`, {
            cartId: id,
            delivery: delivery,
            billing: billing
        }, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
        });
    } catch (error) {
        return { status: 401, message: 'Unauthorized' };
    }
};

const payOrder = async (userId, orderId) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.put(`/private/${shop}/order/${base64}/${orderId}/payed`, {}, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
        });
    } catch (error) {
        return { status: 401, message: 'Unauthorized' };
    }
};

const getOrder = async (userId, orderId) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.get(`/private/${shop}/order/${base64}/${orderId}`,{
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
        });

    } catch (error) {
        console.error('Error fetching orders', error);
        throw error;
    }
};

export { getOrders, postOrder, payOrder, getOrder };
