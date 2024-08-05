import React, {useState} from 'react';
import {AiOutlineShoppingCart} from "react-icons/ai";
import {FaCartArrowDown} from "react-icons/fa";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";

function ProductCard(props) {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const addProduct = () => {
        toast.success('Produit ajouter au panier');
    }
    const navigate = useNavigate();

    const goToProductPage = () => {
        navigate('/product/' + props.id);
    }

    return (
        <div className="card bg-base-100 shadow-xl cursor-pointer" onClick={goToProductPage}>
            <figure><img
                src={ props.product.image }
                alt={ props.product.name }/></figure>
            <div className="card-body">
                <h2 className="card-title">{props.product.name}</h2>
                <div className="card-actions justify-end">
                    <button
                        className="btn btn-base-100 w-full btn-outline"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={addProduct}
                    >
                        {isHovered ? <FaCartArrowDown /> : <div>{props.product.price} €</div>}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductCard;