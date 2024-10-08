// src/services/orderService.js
import axiosInstance from '../config/axiosConfig';


const getJWT = () => {
    return localStorage.getItem('token');
};

const storeId = process.env.REACT_APP_ID;

const getAddresses = async (userId, productId) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.get(`/private/${storeId}/${base64}/address`,  {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
        });
    } catch (error) {

        return { status: 401, message: 'Unauthorized' };
    }
};

const addAddress = async (userId, data) => {
    try {
        let base64 = btoa(unescape(encodeURIComponent(userId)))

        return await axiosInstance.post(`/private/${storeId}/${base64}/address/new`, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getJWT()}`
            },
        });
    } catch (error) {
        return { status: 401, message: 'Unauthorized' };
    }
};

export { getAddresses, addAddress };
