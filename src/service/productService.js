import axiosInstance from '../config/axiosConfig';

const jwtToken = localStorage.getItem('token');
const storeId = process.env.REACT_APP_ID;

const getProducts = async (data) => {
    const jwtToken = localStorage.getItem('token');

    try {
        const response =  await axiosInstance.get(`/public/${storeId}/product`,  {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching product', error);
        throw error;
    }
};

const getProduct = async (id) => {

    try {
        const response =  await axiosInstance.get(`/public/${storeId}/product/${id}`,  {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        return response.data;
    } catch (error) {
        console.error('Error fetching product', error);
        throw error;
    }
};

export { getProducts, getProduct };
