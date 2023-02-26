import { styled } from '@/styles'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay, {
  position: 'fixed',
  width: '100vw',
  height: '100vh',
  inset: 0,
  background: 'rgba(0, 0, 0, 0.75)',
})

export const Content = styled(Dialog.Content, {
  display: 'flex',
  flexDirection: 'column',
  minWidth: '32rem',
  borderRadius: 6,
  padding: '3rem 0',
  background: '$gray800',
  position: 'fixed',

  top: 0,
  right: 0,
  height: '100vh',
})

export const Title = styled(Dialog.Title, {
  fontWeight: 'bold',
  fontSize: '$lg',
  lineHeight: 1.6,
  padding: '1.5rem 3rem 0',
})

export const Close = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray400',
})

export const CartSection = styled('section', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  'div::-webkit-scrollbar': {
    width: '0.5rem',
  },

  'div::-webkit-scrollbar-thumb': {
    backgroundColor: '$green500',
    borderRadius: 8,
  },
})

export const CartProducts = styled('div', {
  maxHeight: 450,
  overflow: 'auto',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem',
  padding: '0 3rem 0 3rem',
  marginTop: '2rem',
})

export const CartProduct = styled('div', {
  display: 'flex',
  flexDirection: 'row',
  gap: '1.25rem',
})

export const CartDescription = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.125rem',

  span: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',

    b: {
      color: '$gray100',
    },
  },

  button: {
    background: 'transparent',
    color: '$green500',
    border: 0,
    fontWeight: 700,
    fontSize: '$base',
    lineHeight: 1.6,
    textAlign: 'start',
    paddingTop: '0.375rem',

    '&:hover': {
      color: '$green300',
    },
  },
})

export const ImageProduct = styled('div', {
  width: 94.79,
  height: 94.79,
  background: 'linear-gradient(100deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '3.5rem 3.75rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
  },
})

export const CartCheckout = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '3.5rem',
  padding: '0 3rem',

  div: {
    display: 'flex',
    justifyContent: 'space-between',
    fontSize: '$base',
    lineHeight: 2.56,
    color: '$gray100',

    b: {
      fontSize: '$md',
    },
  },

  button: {
    backgroundColor: '$green500',
    color: '$white',
    padding: '1.25rem 0',
    border: 0,
    borderRadius: 8,
    fontWeight: 700,
    fontSize: '$md',
    lineHeight: 1.6,

    '&:hover': {
      background: '$green300',
    },
  },
})

export const CartTotal = styled('div', {
  display: 'flex',
  flexDirection: 'column',
})

export const CartTotalItens = styled('span', {
  fontSize: '$md',
})

export const CartTotalPrice = styled('span', {
  fontWeight: 700,
  fontSize: '$xl',
  lineHeight: 1.4,
})
