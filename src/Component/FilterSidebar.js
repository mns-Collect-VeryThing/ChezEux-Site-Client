import React from 'react';
import {useForm} from "react-hook-form";

function FilterSidebar() {

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <select {...register("select", {required: true})} className="select select-primary w-full max-w-xs">
                <option disabled selected>What is the best TV show?</option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
            </select>
            {errors.select && <span className="text-error">prout</span>}

            <div className="card-actions justify-end">
                <button className="btn btn-primary">Filtrer</button>
            </div>
        </form>
    );
}

export default FilterSidebar;