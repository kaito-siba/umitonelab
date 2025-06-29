import { style } from '@vanilla-extract/css'

export const works = style({
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
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '2rem',
})

export const card = style({
  background: 'rgba(255, 255, 255, 0.02)',
  borderRadius: '16px',
  overflow: 'hidden',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  ':hover': {
    transform: 'translateY(-5px)',
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
  },
})

export const cardImage = style({
  height: '200px',
  width: '100%',
  position: 'relative',
  overflow: 'hidden',
})

export const gradients = {
  gradient1: style({
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  }),
  gradient2: style({
    background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
  }),
  gradient3: style({
    background: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
  }),
  gradient4: style({
    background: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
  }),
}

export const cardContent = style({
  padding: '1.5rem',
})

export const cardCategory = style({
  fontSize: '0.85rem',
  color: '#667eea',
  fontWeight: 600,
  textTransform: 'uppercase',
  letterSpacing: '0.05em',
})

export const cardTitle = style({
  fontSize: '1.3rem',
  fontWeight: 700,
  margin: '0.5rem 0',
  color: '#ffffff',
})

export const cardDescription = style({
  fontSize: '0.95rem',
  color: 'rgba(255, 255, 255, 0.7)',
  lineHeight: 1.6,
  marginBottom: '1rem',
})

export const cardTech = style({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '0.5rem',
})

export const techTag = style({
  fontSize: '0.8rem',
  padding: '0.3rem 0.8rem',
  background: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '20px',
  color: 'rgba(255, 255, 255, 0.8)',
})
