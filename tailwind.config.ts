import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1200px'
			}
		},
		extend: {
			colors: {
				/* Figma token aliases */
				bg: 'var(--color-bg)',
				text: 'var(--color-text)',
				muted: 'var(--color-muted)',
				surface: 'var(--color-surface)',
				"dark-1": 'var(--color-dark-1)',
				tint100: 'var(--tint-100)',
				tint200: 'var(--tint-200)',
				tint300: 'var(--tint-300)',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
				fontFamily: {
					inter: ['var(--font-body)', 'ui-sans-serif', 'system-ui'],
					heading: ['var(--font-heading)', 'ui-sans-serif', 'system-ui']
				},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.98)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.98)', opacity: '0' }
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				}
				,
				blink: {
					'0%, 49%': { opacity: '1' },
					'50%, 100%': { opacity: '0' }
				},
				'aura-pulse': {
					'0%, 100%': { transform: 'scale(1)', opacity: '0.6' },
					'50%': { transform: 'scale(1.05)', opacity: '0.9' }
				},
				'sparkle-move': {
					'0%': { transform: 'translate3d(-20%, 20%, 0) scale(1)' },
					'50%': { transform: 'translate3d(60%, -40%, 0) scale(1.1)' },
					'100%': { transform: 'translate3d(120%, -20%, 0) scale(1)' }
				},
				'bar-pulse': {
					'0%': { transform: 'scaleY(0.4)' },
					'50%': { transform: 'scaleY(1)' },
					'100%': { transform: 'scaleY(0.75)' }
				},
				'sheen-sweep': {
					from: { transform: 'translateX(-120%)' },
					to: { transform: 'translateX(120%)' }
				},
				'float-soft': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-4px)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'scale-in': 'scale-in 0.25s ease-out',
				'scale-out': 'scale-out 0.25s ease-in',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-in',
				enter: 'fade-in 0.3s ease-out, scale-in 0.25s ease-out',
				exit: 'fade-out 0.3s ease-in, scale-out 0.25s ease-in',
				blink: 'blink 1s steps(2, start) infinite',
				'aura-pulse': 'aura-pulse 6s ease-in-out infinite',
				'sparkle': 'sparkle-move 8s linear infinite',
				'bar-pulse': 'bar-pulse 4s ease-in-out infinite',
				'sheen': 'sheen-sweep 1.2s ease-out',
				'float-soft': 'float-soft 6s ease-in-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
