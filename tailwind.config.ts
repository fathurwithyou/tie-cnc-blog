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
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				heading: ['Crimson Text', 'Georgia', 'Times New Roman', 'serif'],
				logo: ['Playfair Display', 'Merriweather', 'Source Serif Pro', 'Georgia', 'serif'],
				serif: ['Merriweather', 'Source Serif Pro', 'Georgia', 'Times New Roman', 'serif'],
				mono: ['Fira Code', 'SF Mono', 'Monaco', 'Cascadia Code', 'Roboto Mono', 'Consolas', 'Courier New', 'monospace'],
			},
			fontSize: {
				'xs': ['0.75rem', { lineHeight: '1.5', letterSpacing: '0.025em' }],
				'sm': ['0.875rem', { lineHeight: '1.6', letterSpacing: '0.015em' }],
				'base': ['1rem', { lineHeight: '1.6', letterSpacing: '0' }],
				'lg': ['1.125rem', { lineHeight: '1.7', letterSpacing: '-0.01em' }],
				'xl': ['1.25rem', { lineHeight: '1.6', letterSpacing: '-0.015em' }],
				'2xl': ['1.5rem', { lineHeight: '1.4', letterSpacing: '-0.02em' }],
				'3xl': ['1.875rem', { lineHeight: '1.3', letterSpacing: '-0.025em' }],
				'4xl': ['2.25rem', { lineHeight: '1.2', letterSpacing: '-0.025em' }],
				'5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
				'6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.03em' }],
			},
			colors: {
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
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			spacing: {
				'18': '4.5rem',
				'88': '22rem',
			},
			maxWidth: {
				'prose': '65ch',
			},
			letterSpacing: {
				tighter: '-0.05em',
				tight: '-0.025em',
				normal: '0',
				wide: '0.025em',
				wider: '0.05em',
				widest: '0.1em',
			},
			boxShadow: {
				'xs': '0 1px 2px 0 rgb(0 0 0 / 0.03)',
				'sm': '0 1px 3px 0 rgb(0 0 0 / 0.05)',
				'DEFAULT': '0 1px 3px 0 rgb(0 0 0 / 0.05), 0 1px 2px -1px rgb(0 0 0 / 0.05)',
				'md': '0 4px 6px -1px rgb(0 0 0 / 0.07)',
				'lg': '0 10px 15px -3px rgb(0 0 0 / 0.08)',
				'xl': '0 20px 25px -5px rgb(0 0 0 / 0.08)',
				'2xl': '0 25px 50px -12px rgb(0 0 0 / 0.15)',
				'inner': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.03)',
				'none': 'none',
			},
			animation: {
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.3s ease-out',
				'pulse-soft': 'pulse-soft 2s ease-in-out infinite',
			},
			keyframes: {
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'slide-in': {
					'0%': { opacity: '0', transform: 'translateX(-10px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' }
				},
				'pulse-soft': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				}
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'hsl(var(--foreground))',
						lineHeight: '1.7',
						fontSize: '1.125rem',
						'h1, h2, h3, h4, h5, h6': {
							fontFamily: 'Crimson Text, Georgia, serif',
							fontWeight: '600',
							color: 'hsl(var(--foreground))',
						},
						'code': {
							fontFamily: 'Fira Code, monospace',
							backgroundColor: 'hsl(var(--muted))',
							padding: '0.125rem 0.375rem',
							borderRadius: '0.25rem',
							fontSize: '0.9em',
						},
						'pre': {
							backgroundColor: 'hsl(var(--muted))',
							border: '1px solid hsl(var(--border))',
							borderRadius: '0.5rem',
						},
						'blockquote': {
							borderLeftColor: 'hsl(var(--border))',
							backgroundColor: 'hsl(var(--muted) / 0.3)',
							borderRadius: '0 0.375rem 0.375rem 0',
						},
						'a': {
							color: 'hsl(var(--foreground))',
							textDecorationColor: 'hsl(var(--muted-foreground))',
							'&:hover': {
								textDecorationColor: 'hsl(var(--foreground))',
							},
						},
					},
				},
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography"),
	],
} satisfies Config;