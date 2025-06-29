import { style } from '@vanilla-extract/css'

export const about = style({
  padding: '6rem 0',
  backgroundColor: '#0f0f0f',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
})

export const title = style({
  fontSize: '3rem',
  fontWeight: 800,
  marginBottom: '4rem',
  textAlign: 'center',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})

export const content = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '2rem',
    },
  },
})

export const textContent = style({
  maxWidth: '600px',
})

export const subtitle = style({
  fontSize: '1.8rem',
  fontWeight: 700,
  marginBottom: '1.5rem',
  color: '#ffffff',
})

export const description = style({
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: '1.5rem',
})

export const skills = style({
  marginTop: '3rem',
})

export const skillsTitle = style({
  fontSize: '1.2rem',
  fontWeight: 600,
  marginBottom: '1rem',
  color: 'rgba(255, 255, 255, 0.9)',
})

export const skillGrid = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
  },
})

export const skill = style({
  padding: '0.8rem 1.2rem',
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  fontSize: '0.9rem',
  color: 'rgba(255, 255, 255, 0.8)',
  textAlign: 'center',
  transition: 'all 0.3s ease',
  ':hover': {
    background: 'rgba(255, 255, 255, 0.1)',
    borderColor: 'rgba(255, 255, 255, 0.2)',
    transform: 'translateY(-2px)',
  },
})

export const imageContent = style({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

export const imagePlaceholder = style({
  width: '400px',
  height: '400px',
  borderRadius: '20px',
  overflow: 'hidden',
  position: 'relative',
})

export const imageGradient = style({
  width: '100%',
  height: '100%',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
  opacity: 0.8,
})
