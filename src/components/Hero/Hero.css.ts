import { keyframes, style } from '@vanilla-extract/css'

const float = keyframes({
  '0%, 100%': { transform: 'translateY(0)' },
  '50%': { transform: 'translateY(-20px)' },
})

const float2 = keyframes({
  '0%, 100%': { transform: 'translateY(0) rotate(45deg)' },
  '50%': { transform: 'translateY(-30px) rotate(45deg)' },
})

const pulse = keyframes({
  '0%': { opacity: 0.6 },
  '50%': { opacity: 1 },
  '100%': { opacity: 0.6 },
})

export const hero = style({
  minHeight: '100vh',
  display: 'flex',
  alignItems: 'center',
  paddingTop: '64px',
  position: 'relative',
  overflow: 'hidden',
})

export const container = style({
  maxWidth: '1200px',
  margin: '0 auto',
  padding: '0 2rem',
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '4rem',
  alignItems: 'center',
  position: 'relative',
  zIndex: 1,
  '@media': {
    '(max-width: 768px)': {
      gridTemplateColumns: '1fr',
      gap: '2rem',
      textAlign: 'center',
    },
  },
})

export const content = style({
  maxWidth: '600px',
})

export const title = style({
  marginBottom: '2rem',
})

export const titleMain = style({
  display: 'block',
  fontSize: 'clamp(3rem, 6vw, 5rem)',
  fontWeight: 800,
  letterSpacing: '-0.03em',
  lineHeight: 1.1,
  marginBottom: '0.5rem',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
})

export const titleSub = style({
  display: 'block',
  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
  fontWeight: 300,
  color: 'rgba(255, 255, 255, 0.8)',
  letterSpacing: '0.05em',
})

export const description = style({
  fontSize: '1.1rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.8,
  marginBottom: '3rem',
})

export const cta = style({
  display: 'flex',
  gap: '1rem',
  flexWrap: 'wrap',
  '@media': {
    '(max-width: 768px)': {
      justifyContent: 'center',
    },
  },
})

const buttonBase = style({
  padding: '1rem 2rem',
  fontSize: '1rem',
  fontWeight: 600,
  borderRadius: '50px',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  border: 'none',
})

export const ctaPrimary = style([
  buttonBase,
  {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: '#ffffff',
    ':hover': {
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 30px rgba(102, 126, 234, 0.4)',
    },
  },
])

export const ctaSecondary = style([
  buttonBase,
  {
    background: 'transparent',
    color: '#ffffff',
    border: '2px solid rgba(255, 255, 255, 0.3)',
    ':hover': {
      borderColor: 'rgba(255, 255, 255, 0.6)',
      background: 'rgba(255, 255, 255, 0.1)',
    },
  },
])

export const visual = style({
  position: 'relative',
  height: '500px',
  '@media': {
    '(max-width: 768px)': {
      height: '300px',
      display: 'none',
    },
  },
})

export const visualElement = style({
  position: 'absolute',
  width: '300px',
  height: '300px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  opacity: 0.3,
  filter: 'blur(40px)',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  animation: `${float} 6s ease-in-out infinite`,
})

export const visualElement2 = style({
  position: 'absolute',
  width: '200px',
  height: '200px',
  borderRadius: '20px',
  background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  opacity: 0.4,
  filter: 'blur(30px)',
  top: '20%',
  right: '10%',
  transform: 'rotate(45deg)',
  animation: `${float2} 8s ease-in-out infinite`,
})

export const visualElement3 = style({
  position: 'absolute',
  width: '150px',
  height: '150px',
  borderRadius: '50%',
  background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  opacity: 0.3,
  filter: 'blur(25px)',
  bottom: '10%',
  left: '20%',
  animation: `${pulse} 4s ease-in-out infinite`,
})
