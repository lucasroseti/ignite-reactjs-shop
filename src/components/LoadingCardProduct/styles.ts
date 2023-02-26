import { styled } from '@/styles'

export const LoadingCardProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  width: '100%',
  gap: '4rem',
  maxWidth: 1180,
  margin: '0 auto',
})

export const LoadingCardProductImage = styled('div', {
  width: '100%',
  maxWidth: 576,
  height: 656,
  background: '$gray800',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

export const LoadingCardProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    padding: '1.25rem',
    backgroundColor: '$gray800',
    borderRadius: 8,
  },

  span: {
    marginTop: '1rem',
    padding: '1rem',
    backgroundColor: '$gray800',
    borderRadius: 8,
  },

  p: {
    marginTop: '2.5rem',
    padding: '5rem',
    backgroundColor: '$gray800',
    borderRadius: 8,
  },

  button: {
    marginTop: 'auto',
    backgroundColor: '$gray800',
    border: 0,
    borderRadius: 8,
    padding: '1.25rem',
  },
})
