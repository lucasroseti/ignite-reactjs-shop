import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'center',
  minHeight: '100vh',
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1180,
  margin: '0 auto',

  display: 'flex',
  justifyContent: 'space-between',
})

export const CartButton = styled('button', {
  background: '$gray800',
  border: 0,
  borderRadius: 6,
  color: '$gray400',
  padding: '0.75rem',
  cursor: 'pointer',
})

export const CartSection = styled('section', {
  display: 'flex',
})

export const CartCounter = styled('div', {
  marginLeft: '-1rem',
  marginTop: '-0.5rem',

  span: {
    display: 'flex',
    color: '$white',
    background: '$green500',
    border: '3px solid $gray900',
    borderRadius: '50%',
    padding: '0.25rem 0.5rem',
    fontWeight: 700,
    fontSize: '0.75rem',
    lineHeight: 1.3,
  },
})
