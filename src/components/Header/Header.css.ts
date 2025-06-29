import { style } from '@vanilla-extract/css'

export const header = style({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(10, 10, 10, 0.9)',
  backdropFilter: 'blur(10px)',
  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
  zIndex: 1000,
  padding: '0 1rem',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '64px',
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
})

export const logoText = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  letterSpacing: '-0.02em',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})

export const nav = style({
  display: 'flex',
  gap: '2rem',
  '@media': {
    '(max-width: 768px)': {
      gap: '1rem',
    },
  },
})

export const navLink = style({
  background: 'none',
  border: 'none',
  color: 'rgba(255, 255, 255, 0.8)',
  fontSize: '0.9rem',
  fontWeight: 500,
  cursor: 'pointer',
  transition: 'color 0.3s ease',
  padding: '0.5rem 0',
  ':hover': {
    color: '#ffffff',
  },
})
