// src/services/orderService.js
import axiosInstance from '../config/axiosConfig';

const getProducts = async () => {
    try {
        const response = await axiosInstance.get('/articles/articles');
        return response.data;
    } catch (error) {
        console.error('Error fetching orders', error);
        throw error;
    }
};

const getProduct = async () => {
    try {
        const response = await axiosInstance.get('/products');
        // const response = await axiosInstance.get('/product/' + id);
        return response.data;
    } catch (error) {
        console.error('Error fetching orders', error);
        throw error;
    }
};


export { getProducts, getProduct };
