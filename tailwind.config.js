module.exports = {
    content: [
        './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}',
        './node_modules/astro-boilerplate-components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/typography'),
        require('postcss-import'),
        require('postcss-100vh-fix'),
        require('autoprefixer'),
    ],
};
