/** @type {import('tailwindcss').Config}*/
module.exports = {
    content: [
        './src/**/*.{js,ts,jsx,tsx}',
        "./node_modules/flowbite/**/*.js",
    ],
    darkMode: 'class',
    theme: {
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1024px',
            'xl': '1280px',
            '2xl': '1536px',
        },
        fontFamily: {
            sans: ['Graphik', 'sans-serif'],
            serif: ['Merriweather', 'serif'],
        },
        extend: {
            spacing: {
                '128': '32rem',
                '144': '36rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('flowbite/plugin')
    ],
}
