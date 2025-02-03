import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,}",
    "./components/**/*.{js,ts,jsx,tsx,mdx,}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		animationTimeline: {
  			view: 'view()'
  		},
  		colors: {
  			blue: {
  				'500': '#3B82F6',
  				'600': '#2563EB',
  				'700': '#1D4ED8'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
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
  			'float-up': {
  				from: {
  					transform: 'translateY(20px)',
  					opacity: '0'
  				},
  				to: {
  					transform: 'translateY(0)',
  					opacity: '1',
  					zIndex: '1'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out',
  			'float-up': 'float-up 0.5s ease'
  		},
  		fontFamily: {
  			sans: [
  				'Inter var',
                    ...defaultTheme.fontFamily.sans
                ]
  		}
  	}
  },
  plugins: [
    require("tailwindcss-animate"),
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        ".animation-timeline-view": {
          animationTimeline: "view(15% 5%)",
        },
        ".bg-box": {
          borderWidth: "1px",
          backgroundImage:
            "linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "200px 200px",
          backgroundPosition: "center",
        },
        ".section": {
          maxWidth: "screen-xl",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "10rem",
          paddingBottom: "10rem",
          paddingLeft: "2.5rem",
          paddingRight: "2.5rem",
        },
        ".darken-bg": {
          position: "relative",
          color: "white",
          "&::after": {
            content: "''",
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.25)",
            top: "0",
            left: "0",
            zIndex: "100",
          },
          "&.dark::after": {
            backgroundColor: "rgba(0, 0, 0, 0.75)",
          },
        },
        ".underline-hover": {
          position: "relative",
          "&::after": {
            content: "''",
            position: "absolute",
            width: "0",
            height: "1px",
            backgroundColor: "hsl(var(--primary))",
            bottom: "0",
            left: "0",
            transition: "width 0.1s ease",
          },
          "&:hover::after": {
            width: "100%",
          },
        },
        ".blur-bg": {
          color: "hsl(var(--secondary-foreground)",
          WebkitBackdropFilter: "blur(12px) brightness(1.25)",
          backdropFilter: "blur(12px) brightness(1.25) ",
          "&.dark": {
            WebkitBackdropFilter: "blur(12px) brightness(.9)",
            backdropFilter: "blur(12px) brightness(.9)",
          },
        },
      };

      addUtilities(newUtilities);
    }),
  ],
};
export default config;