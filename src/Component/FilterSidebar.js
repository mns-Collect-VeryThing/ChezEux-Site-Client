import React, {useRef, useState} from 'react';
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";

function FilterSidebar() {

    const labelRef = React.useRef(null);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const navigate = useNavigate();
    const onSubmit = (data) => {
        console.log(data);
        navigate('/shop?' + new URLSearchParams(data));
        labelRef.current.click();
    };

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleMinInputChange = (event) => {
        setMinValue(event.target.value);
    };

    const handleMaxInputChange = (event) => {
        setMaxValue(event.target.value);
    };

    return (<>
            <label ref={labelRef} htmlFor="my-drawer">toto</label>
            <form onSubmit={handleSubmit(onSubmit)}>
                <select {...register("select", {required: true})} className="select select-primary w-full max-w-xs">
                    <option disabled selected>Catégories</option>
                    <option>Chaussures</option>
                    <option>Chaussettes</option>
                    <option>Entretiens</option>
                </select>
                {errors.select && <span className="text-error">erros</span>}
                <span className="label-text">Prix mini : {minValue}</span>
                <input {...register("priceMin", {required: true})} type="range" min={0} max={100} defaultValue={0}
                       className="range range-primary" onChange={handleMinInputChange}/>
                <span className="label-text">Prix maxi : {maxValue}</span>
                <input {...register("priceMax", {required: true})} type="range" min={0} max={100} defaultValue={100}
                       className="range range-accent" onChange={handleMaxInputChange}/>

                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Filtrer</button>
                </div>
            </form>
        </>
    );
}

export default FilterSidebar;