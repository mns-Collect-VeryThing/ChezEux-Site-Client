// src/services/orderService.js
import axiosInstance from '../config/axiosConfig';


const getJWT = () => {
    return localStorage.getItem('jwtToken');
};

const storeId = process.env.REACT_APP_ID;


const postLogin = async (data) => {
    try {
        console.log(data)
        return await axiosInstance.post('/login_check', data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching orders', error);
        let response;
        response = { status: 401, message: 'Unauthorized' };
        return response;
    }
};

const postSignUp = async (data) => {
    try {
        return await axiosInstance.post(`/public/${storeId}/customer/new`, data, {
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Error fetching orders', error);
        let response;
        response = { status: 401, message: 'Unauthorized' };
        return response;
    }
};


export { postLogin, postSignUp };
