import { GetServerSideProps } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

import {
  ImageSuccess,
  SuccessContainer,
  SuccessImageContainer,
} from '@/styles/pages/success'

interface SuccessProps {
  customerName: string
  quantityProducts: string
  products: {
    id: string
    imageUrl: string
  }[]
}

export default function Product({
  customerName,
  quantityProducts,
  products,
}: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <SuccessImageContainer>
          {products.map((product) => (
            <ImageSuccess key={product.id}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageSuccess>
          ))}
        </SuccessImageContainer>

        <h1>Compra efetuada</h1>
        <p>
          Uhuul <strong>{customerName}</strong>, sua compra de{' '}
          {quantityProducts} já está a caminho da sua casa.
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)

  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const customerName = session.customer_details!.name
  const products = session.line_items!.data

  const quantityProducts =
    products.length > 1 ? `${products.length} camisetas` : 'uma camiseta'

  const productsData = products.map((product) => {
    const productData = product.price!.product as Stripe.Product
    return {
      id: productData.id,
      imageUrl: productData.images[0],
    }
  })

  return {
    props: {
      customerName,
      quantityProducts,
      products: productsData,
    },
  }
}
