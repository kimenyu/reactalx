import React from 'react';

const Footer = () => {
    function getCurrentYear() {
        return new Date().getFullYear();
    }
    
    return ( 
        <footer className="fixed bottom-0 left-0 w-full border-t-2 border-red-600 p-4 text-center">
            <div className="flex items-center justify-center">
                <span className="mr-1">Copyright &copy; {getCurrentYear()}</span>
            </div>
        </footer>
    );
}

export default Footer;
