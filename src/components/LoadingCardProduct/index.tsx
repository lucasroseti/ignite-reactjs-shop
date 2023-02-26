import {
  LoadingCardProductContainer,
  LoadingCardProductDetails,
  LoadingCardProductImage,
} from './styles'

export function LoadingCardProduct() {
  return (
    <LoadingCardProductContainer>
      <LoadingCardProductImage />

      <LoadingCardProductDetails>
        <h1></h1>
        <span></span>

        <p></p>

        <button></button>
      </LoadingCardProductDetails>
    </LoadingCardProductContainer>
  )
}
