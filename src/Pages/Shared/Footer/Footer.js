import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (

        <footer className='mt-3 bg-primary'>
            <p className='text-center mt-3 tex-white p-5'><small>Copyright &copy; {year}</small></p>
        </footer>
    );
};

export default Footer;