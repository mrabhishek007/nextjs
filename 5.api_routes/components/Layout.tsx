import React from 'react';

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div className="container mt-5 d-flex flex-column" style={{minHeight: "60vh"}}>

            <div className="gap-2 d-flex flex-column h-100 ">

                {children}

            </div>

        </div>

    );
};

export default Layout;
