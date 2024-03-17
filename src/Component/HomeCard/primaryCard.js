import React from 'react';
import { useTranslation } from 'react-i18next';
function PrimaryCard() {
    const { t } = useTranslation();
    return (
        <div className="bg-secondary h-[85vh] col-span-6 rounded-[40px]">
            <figure><img src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes"/>
            </figure>

            <h2 className="card-title">Shoes!</h2>
            <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
            </div>
        </div>
    );
}

export default PrimaryCard;