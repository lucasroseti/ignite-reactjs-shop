import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

import {
  ProductContainer,
  ProductDetails,
  ProductImage,
} from '@/styles/pages/product'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
  }
}
export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  if (isFallback) {
    return <p>Loading...</p>
  }

  return (
    <ProductContainer>
      <ProductImage>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ProductImage>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      {
        params: { id: 'prod_NMp9olimXYYha2' },
      },
    ],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({
  params,
}) => {
  const productId = params!.id

  const productData = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = productData.default_price as Stripe.Price

  const product = {
    id: productData.id,
    name: productData.name,
    imageUrl: productData.images[0],
    price: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(price.unit_amount! / 100),
    description: productData.description,
  }

  return {
    props: {
      product,
    },
    // revalidate: 60 * 60 * 1,
  }
}
