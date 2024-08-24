// src/services/orderService.js
import axiosInstance from '../config/axiosConfig';

const getJWT = () => {
    return localStorage.getItem('token');
};

const storeId = process.env.REACT_APP_ID;

const getOrdersById = async (userId) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.get(`/private/${storeId}/order/${base64}`,{
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

const postOrder = async (userId, delivery, billing, id) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.post(`/private/${storeId}/order/${base64}/new`, {
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

const payOrder = async (userId, orderId, paymentIntent) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.put(`/private/${storeId}/order/${base64}/${orderId}/payed`, {
            'stripeIntent': paymentIntent
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

const getOrder = async (userId, orderId) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.get(`/private/${storeId}/order/${base64}/${orderId}`,{
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

export { getOrdersById, postOrder, payOrder, getOrder };
