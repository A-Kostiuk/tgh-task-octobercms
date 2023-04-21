const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');

mix.js('assets/js/app.js', 'assets/public/js')
    .sass('assets/sass/app.scss', 'assets/public/css')
    .options({
        postCss: [tailwindcss('tailwind.config.js')],
    })
