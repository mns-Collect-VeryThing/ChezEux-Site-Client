import axiosInstance from '../config/axiosConfig';

let shop = localStorage.getItem('shopId');
const jwtToken = localStorage.getItem('token');

const getProducts = async (data) => {
    let shop = 2;
    const jwtToken = localStorage.getItem('token');

    try {
        const response =  await axiosInstance.get(`/public/${shop}/product`,  {
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
    let shop = 2;

    try {
        const response =  await axiosInstance.get(`/public/${shop}/product/${id}`,  {
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
