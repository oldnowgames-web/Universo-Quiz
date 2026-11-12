// Keep the application script resilient when the Tailwind CDN is temporarily unavailable.
        window.tailwind = window.tailwind || {};
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Outfit', 'sans-serif'],
                    },
                    colors: {
                        space: {
                            900: '#030014',
                            800: '#0a061d',
                            700: '#151030',
                            600: '#221b4a',
                        },
                        neon: {
                            cyan: '#00f0ff',
                            purple: '#b026ff',
                            pink: '#ff007f',
                            gold: '#ffd700'
                        }
                    },
                    animation: {
                        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 6, 1) infinite',
                        'float': 'float 6s ease-in-out infinite',
                        'glow': 'glow 2s ease-in-out infinite alternate',
                    },
                    keyframes: {
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                        glow: {
                            '0%': { boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)' },
                            '100%': { boxShadow: '0 0 30px rgba(176, 38, 255, 0.6)' },
                        }
                    }
                }
            }
        }
