import PropTypes from 'prop-types';

export default function RootLayout({ children }) {
    const a = async () => {

    };

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
