import PropTypes from 'prop-types';
import './global.css';
import './layout.css';

import Navbar from './(navbar)/navbar';

export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Noto Serif" />
            </head>
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
