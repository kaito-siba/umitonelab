import { keyframes, style } from '@vanilla-extract/css'

export const fadeIn = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(20px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const fadeInAnimation = style({
  animation: `${fadeIn} 0.8s ease-out`,
})

export const slideInLeft = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(-30px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const slideInRight = keyframes({
  from: {
    opacity: 0,
    transform: 'translateX(30px)',
  },
  to: {
    opacity: 1,
    transform: 'translateX(0)',
  },
})

export const scaleIn = keyframes({
  from: {
    opacity: 0,
    transform: 'scale(0.9)',
  },
  to: {
    opacity: 1,
    transform: 'scale(1)',
  },
})
