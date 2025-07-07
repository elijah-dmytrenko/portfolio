// Theme configuration - centralized place to manage all colors and styling
export const theme = {
  colors: {
    // Background colors
    background: {
      primary: '#fefefe', // Almost white
      secondary: '#f8f6f3', // Off-white
      tertiary: '#f5f3f0', // Lighter off-white
      card: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white for cards
    },
    // Text colors
    text: {
      primary: '#2d2d2d', // Dark gray for main text
      secondary: '#6b7280', // Medium gray for secondary text
      accent: '#78716c', // Stone accent color
      muted: '#9ca3af', // Muted text
    },
    // Accent colors
    accent: {
      primary: '#78716c', // Stone-600
      secondary: '#a8a29e', // Stone-500
      tertiary: '#d6d3d1', // Stone-300
      hover: '#57534e', // Stone-700
    },
    // Button colors
    button: {
      primary: '#78716c', // Stone-600
      primaryHover: '#57534e', // Stone-700
      secondary: 'transparent',
      secondaryBorder: '#78716c', // Stone-600
      secondaryHover: '#78716c', // Stone-600
    },
    // Tag/Badge colors
    tag: {
      background: '#f5f5f4', // Stone-100
      text: '#78716c', // Stone-700
    },
    // Dark mode colors
    dark: {
      background: {
        primary: '#1c1917', // Stone-900
        secondary: '#292524', // Stone-800
        tertiary: '#44403c', // Stone-700
        card: 'rgba(41, 37, 36, 0.8)', // Semi-transparent dark for cards
      },
      text: {
        primary: '#fafaf9', // Stone-50
        secondary: '#d6d3d1', // Stone-300
        accent: '#a8a29e', // Stone-400
        muted: '#78716c', // Stone-500
      },
      accent: {
        primary: '#a8a29e', // Stone-400
        secondary: '#d6d3d1', // Stone-300
        tertiary: '#e7e5e4', // Stone-200
        hover: '#d6d3d1', // Stone-300
      },
      button: {
        primary: '#a8a29e', // Stone-400
        primaryHover: '#d6d3d1', // Stone-300
        secondary: 'transparent',
        secondaryBorder: '#a8a29e', // Stone-400
        secondaryHover: '#a8a29e', // Stone-400
      },
      tag: {
        background: '#44403c', // Stone-700
        text: '#d6d3d1', // Stone-300
      },
    },
  },
  // Gradient configurations
  gradients: {
    primary: 'linear-gradient(to bottom right, var(--color-bg-secondary), var(--color-bg-tertiary))',
    secondary: 'linear-gradient(to bottom, var(--color-bg-secondary), var(--color-bg-tertiary))',
  },
  // Spacing and sizing
  spacing: {
    container: 'max-w-4xl',
    section: 'py-8',
  },
  // Border radius
  borderRadius: {
    card: 'rounded-2xl',
    button: 'rounded-lg',
    tag: 'rounded-full',
  },
  // Shadows
  shadows: {
    card: 'shadow-xl',
    cardHover: 'hover:shadow-2xl',
  },
};

// CSS custom properties for easy theming
export const cssVariables = `
  :root {
    /* Background colors */
    --color-bg-primary: ${theme.colors.background.primary};
    --color-bg-secondary: ${theme.colors.background.secondary};
    --color-bg-tertiary: ${theme.colors.background.tertiary};
    --color-bg-card: ${theme.colors.background.card};
    
    /* Text colors */
    --color-text-primary: ${theme.colors.text.primary};
    --color-text-secondary: ${theme.colors.text.secondary};
    --color-text-accent: ${theme.colors.text.accent};
    --color-text-muted: ${theme.colors.text.muted};
    
    /* Accent colors */
    --color-accent-primary: ${theme.colors.accent.primary};
    --color-accent-secondary: ${theme.colors.accent.secondary};
    --color-accent-tertiary: ${theme.colors.accent.tertiary};
    --color-accent-hover: ${theme.colors.accent.hover};
    
    /* Button colors */
    --color-button-primary: ${theme.colors.button.primary};
    --color-button-primary-hover: ${theme.colors.button.primaryHover};
    --color-button-secondary: ${theme.colors.button.secondary};
    --color-button-secondary-border: ${theme.colors.button.secondaryBorder};
    --color-button-secondary-hover: ${theme.colors.button.secondaryHover};
    
    /* Tag colors */
    --color-tag-bg: ${theme.colors.tag.background};
    --color-tag-text: ${theme.colors.tag.text};
  }

  @media (prefers-color-scheme: dark) {
    :root {
      /* Dark mode background colors */
      --color-bg-primary: ${theme.colors.dark.background.primary};
      --color-bg-secondary: ${theme.colors.dark.background.secondary};
      --color-bg-tertiary: ${theme.colors.dark.background.tertiary};
      --color-bg-card: ${theme.colors.dark.background.card};
      
      /* Dark mode text colors */
      --color-text-primary: ${theme.colors.dark.text.primary};
      --color-text-secondary: ${theme.colors.dark.text.secondary};
      --color-text-accent: ${theme.colors.dark.text.accent};
      --color-text-muted: ${theme.colors.dark.text.muted};
      
      /* Dark mode accent colors */
      --color-accent-primary: ${theme.colors.dark.accent.primary};
      --color-accent-secondary: ${theme.colors.dark.accent.secondary};
      --color-accent-tertiary: ${theme.colors.dark.accent.tertiary};
      --color-accent-hover: ${theme.colors.dark.accent.hover};
      
      /* Dark mode button colors */
      --color-button-primary: ${theme.colors.dark.button.primary};
      --color-button-primary-hover: ${theme.colors.dark.button.primaryHover};
      --color-button-secondary: ${theme.colors.dark.button.secondary};
      --color-button-secondary-border: ${theme.colors.dark.button.secondaryBorder};
      --color-button-secondary-hover: ${theme.colors.dark.button.secondaryHover};
      
      /* Dark mode tag colors */
      --color-tag-bg: ${theme.colors.dark.tag.background};
      --color-tag-text: ${theme.colors.dark.tag.text};
    }
  }
`; 