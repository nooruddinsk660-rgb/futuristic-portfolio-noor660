import { keyframes } from "framer-motion";

export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme:{
        extend: {
            colours: {
                dark: {
                    900:'#0a0a0f',
                    800:'#13131a',
                    700:'#1a1a24',
                },
                neon: {
                    blue: '#00d4ff', 
                    purple: '#a855f7', 
                    pink: '#ec4899',   
                    cyan: '#06b6d4',
                },
            },
            animation: {
                'gradient': 'gradient 8s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
            },
            keyframes: {
                gradient:{
                    '0%, 100%': {
                        'background-size': "200% 200%",
                        'background-position': 'left center',
                    },
                    '50%': {
                        'background-size': "200% 200%",
                        'background-position': 'right center',
                    },  
                },
                float: {
                    '0% 100%': {transform: 'translateY(0px)'},
                    '50%': { transform: 'translateY(-20px)'},
                },
                glow: {
                    'from': {
                        'text-shadow': '0 0 10px #00d4ff , 0 0 20px #00d4ff , 0 0 30px #00d4ff',
                    },
                    'to': {
                        'text-shadow': '0 0 20px #00d4ff , 0 0 30px #00d4ff , 0 0 40px #00d4ff',
                    },
                },
            },
            
            backdropBlur: {
                xs: '2px',
            }, 
        },
    },
    plugins: [],
}