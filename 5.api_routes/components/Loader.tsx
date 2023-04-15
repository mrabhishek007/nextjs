import React from 'react';

const Loader = () => {
    return (
        <div className="w-100">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    );
};

export default Loader;
