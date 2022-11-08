import PropTypes from 'prop-types';

export default function RootLayout({ children }) {
    return (
        <html>
            <head></head>
            <body>{children}</body>
        </html>
    );
}

RootLayout.propTypes = {
    children: PropTypes.shape({})
};
