import { style } from '@vanilla-extract/css'

export const contact = style({
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

export const content = style({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  maxWidth: '1000px',
  margin: '0 auto',
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '3rem',
    },
  },
})

export const info = style({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
})

export const infoTitle = style({
  fontSize: '2rem',
  fontWeight: 700,
  marginBottom: '1rem',
  color: '#ffffff',
})

export const infoDescription = style({
  fontSize: '1.1rem',
  lineHeight: 1.8,
  color: 'rgba(255, 255, 255, 0.7)',
  marginBottom: '2rem',
})

export const infoItems = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const infoItem = style({
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
})

export const infoIcon = style({
  fontSize: '1.5rem',
})

export const infoText = style({
  fontSize: '1rem',
  color: 'rgba(255, 255, 255, 0.8)',
})

export const form = style({
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
})

export const formGroup = style({
  display: 'flex',
  flexDirection: 'column',
})

const inputBase = style({
  background: 'rgba(255, 255, 255, 0.05)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '8px',
  padding: '1rem',
  fontSize: '1rem',
  color: '#ffffff',
  transition: 'all 0.3s ease',
  '::placeholder': {
    color: 'rgba(255, 255, 255, 0.5)',
  },
  ':focus': {
    outline: 'none',
    borderColor: '#667eea',
    background: 'rgba(255, 255, 255, 0.08)',
  },
})

export const input = style([inputBase])

export const textarea = style([
  inputBase,
  {
    resize: 'vertical',
    minHeight: '120px',
  },
])

export const submitButton = style({
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  color: '#ffffff',
  padding: '1rem 2rem',
  fontSize: '1rem',
  fontWeight: 600,
  border: 'none',
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  ':hover': {
    transform: 'translateY(-2px)',
    boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
  },
  ':active': {
    transform: 'translateY(0)',
  },
})
