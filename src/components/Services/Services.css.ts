import { style } from '@vanilla-extract/css'

export const services = style({
  padding: '6rem 0',
  backgroundColor: '#0a0a0a',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
})

export const title = style({
  fontSize: '3rem',
  fontWeight: 800,
  marginBottom: '1rem',
  textAlign: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})

export const subtitle = style({
  fontSize: '1.2rem',
  color: 'rgba(255, 255, 255, 0.7)',
  textAlign: 'center',
  marginBottom: '4rem',
})

export const grid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
  gap: '2rem',
})

export const card = style({
  background: 'rgba(255, 255, 255, 0.02)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
  padding: '2.5rem',
  transition: 'all 0.3s ease',
  ':hover': {
    transform: 'translateY(-5px)',
    borderColor: 'rgba(102, 126, 234, 0.5)',
    background: 'rgba(255, 255, 255, 0.05)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  },
})

export const cardIcon = style({
  fontSize: '3rem',
  marginBottom: '1.5rem',
})

export const cardTitle = style({
  fontSize: '1.5rem',
  fontWeight: 700,
  marginBottom: '1rem',
  color: '#ffffff',
})

export const cardDescription = style({
  fontSize: '1rem',
  lineHeight: 1.6,
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: '1.5rem',
})

export const cardFeatures = style({
  listStyle: 'none',
  padding: 0,
  margin: 0,
})

export const cardFeature = style({
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.6)',
  marginBottom: '0.5rem',
  paddingLeft: '1.5rem',
  position: 'relative',
  '::before': {
    content: '✓',
    position: 'absolute',
    left: 0,
    color: '#667eea',
  },
})
