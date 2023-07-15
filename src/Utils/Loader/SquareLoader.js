import React from 'react';
import {RotatingSquare} from 'react-loader-spinner'
//doc pour les loaders https://mhnpd.github.io/react-loader-spinner/docs/category/components/
function SquareLoader() {
    return (
        <>
            <RotatingSquare
                height="100"
                width="100"
                color="#dc944c"
                ariaLabel="rotating-square-loading"
                strokeWidth="4"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </>
    );
}

export default SquareLoader;