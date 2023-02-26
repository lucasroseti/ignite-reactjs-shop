import { styled } from '@/styles'

export const CounterContainer = styled('div', {
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
