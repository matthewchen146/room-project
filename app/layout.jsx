import PropTypes from 'prop-types';
import './global.css';
import './layout.css';

import Navbar from './(navbar)/navbar';

export default function RootLayout({ children }) {
    return (
        <html>
            <head></head>
            <body>
                <Navbar />
                {children}
            </body>
        </html>
    );
}

RootLayout.propTypes = {
    children: PropTypes.shape({})
};
