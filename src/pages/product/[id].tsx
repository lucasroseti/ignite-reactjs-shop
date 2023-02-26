import { useContext } from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/lib/stripe'

import { CartContext } from '@/contexts/CartCheckout'
import { priceFormatter } from '@/utils/formatter'

import { CartDialog } from '@/components/CartDialog'
import { LoadingCardProduct } from '@/components/LoadingCardProduct'

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
    defaultPriceId: string
  }
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()

  const { addProductInCart } = useContext(CartContext)

  function handleAddProductInCart() {
    addProductInCart(product)
  }

  if (isFallback) {
    return <LoadingCardProduct />
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>

      <ProductContainer>
        <ProductImage>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ProductImage>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>

          <p>{product.description}</p>

          <CartDialog>
            <button onClick={handleAddProductInCart}>Colocar na sacola</button>
          </CartDialog>
        </ProductDetails>
      </ProductContainer>
    </>
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
    price: priceFormatter.format(price.unit_amount! / 100),
    description: productData.description,
    defaultPriceId: price.id,
  }

  return {
    props: {
      product,
    },
    // revalidate: 60 * 60 * 1,
  }
}
