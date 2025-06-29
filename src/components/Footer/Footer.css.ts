import { style } from '@vanilla-extract/css'

export const footer = style({
  backgroundColor: '#050505',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  padding: '4rem 0 2rem',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
})

export const content = style({
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',
  gap: '4rem',
  marginBottom: '3rem',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
  },
})

export const brand = style({
  display: 'flex',
  flexDirection: 'column',
})

export const brandName = style({
  fontSize: '1.8rem',
  fontWeight: 700,
  marginBottom: '0.5rem',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})

export const brandTagline = style({
  fontSize: '1rem',
  color: 'rgba(255, 255, 255, 0.6)',
})

export const links = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '2rem',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '1.5rem',
    },
  },
})

export const linkGroup = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',
})

export const linkTitle = style({
  fontSize: '1.1rem',
  fontWeight: 600,
  marginBottom: '0.5rem',
  color: '#ffffff',
})

export const link = style({
  fontSize: '0.95rem',
  color: 'rgba(255, 255, 255, 0.6)',
  textDecoration: 'none',
  transition: 'color 0.3s ease',
  ':hover': {
    color: '#ffffff',
  },
})

export const bottom = style({
  paddingTop: '2rem',
  borderTop: '1px solid rgba(255, 255, 255, 0.1)',
  textAlign: 'center',
})

export const copyright = style({
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.5)',
})
