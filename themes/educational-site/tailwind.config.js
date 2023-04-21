/** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        './pages/**/*.htm',
        './layouts/**/*.htm',
        './partials/**/*.htm',
    ],
    theme: {
        screens: {
            mobile: '480px',
            'only-mobile': {'max': '767px'},
            tablet: '768px',
            laptop: '976px',
            desktop: '1440px',
        },
        fontFamily: {
            sans: ['Roboto', 'sans-serif'],
        },
        extend: {
            minHeight: {
                header: '65px',
                footer: '65px',
            },
            colors: {
                black: '#000000',
                white: '#ffffff',
                primary: '#f8f8f8',
                secondary: '#ffffff',
                text: '#000000',
                social: 'rgb(0 62 131)',
                imgBack: 'rgba(9,70,120,.6)',
            },
        },
    },
    plugins: [],
};

