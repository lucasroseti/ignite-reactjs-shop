import { ImageSuccess, SuccessContainer } from '@/styles/pages/success'
import Link from 'next/link'

export default function Product() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageSuccess></ImageSuccess>
      <p>
        Uhuul <strong>Diego Fernandes</strong>, sua{' '}
        <strong>Camiseta Beyond</strong> the Limits já está a caminho da sua
        casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
