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

export const ChartButton = styled('button', {
  background: '$gray800',
  border: 0,
  borderRadius: 6,
  color: '$gray400',
  padding: '0.75rem',
  cursor: 'pointer',
})
