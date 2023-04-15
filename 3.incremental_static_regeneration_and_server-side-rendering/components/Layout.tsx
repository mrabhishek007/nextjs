import React from 'react';

const Layout = ({children} : {children : React.ReactNode}) => {
    return (
        <div className="container mt-5">

            <div className="gap-2 d-flex flex-column ">

                {children}

            </div>

        </div>

    );
};

export default Layout;
