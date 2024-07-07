import React from 'react';
import holebertonlogo from '../assets/images/holebertonlogo.jpg';

const Nav = () => {
    return (
        <div className="flex items-start justify-start border-b-2 border-red-500 pb-2">
            <div className="flex items-start">
                <img className="h-12.5 w-12.5" src={holebertonlogo} alt="Holeberton logo" />
            </div>
            <div className="flex items-center justify-center ml-4">
                <div className="text-4xl font-medium text-red-500">School dashboard</div>
            </div>
        </div>
    );
}

export default Nav;
