import { useContext } from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useKeenSlider } from 'keen-slider/react'
import Stripe from 'stripe'
import { Handbag } from 'phosphor-react'

import { stripe } from '@/lib/stripe'

import { CartContext } from '@/contexts/CartCheckout'
import { ProductType } from '@/reducers/cart/reducer'
import { priceFormatter } from '@/utils/formatter'

import { CartDialog } from '@/components/CartDialog'

import {
  CartButton,
  HomeContainer,
  Product,
  ProductDescription,
} from '@/styles/pages/home'
import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: ProductType[]
}

export default function Home({ products }: HomeProps) {
  const { addProductInCart } = useContext(CartContext)

  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 48,
    },
  })

  function handleAddProductInCart(product: ProductType) {
    addProductInCart(product)
  }

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>

      <HomeContainer ref={sliderRef} className="keen-slider">
        {products.map((product) => (
          <Product key={product.id} className="keen-slider__slide">
            <Link href={`/product/${product.id}`} prefetch={false}>
              <Image src={product.imageUrl} width={520} height={480} alt="" />
            </Link>
            <footer>
              <Link href={`/product/${product.id}`} prefetch={false}>
                <ProductDescription>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </ProductDescription>
              </Link>

              <CartDialog>
                <CartButton onClick={() => handleAddProductInCart(product)}>
                  <Handbag size={24} weight="bold" />
                </CartButton>
              </CartDialog>
            </footer>
          </Product>
        ))}
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: priceFormatter.format(price.unit_amount! / 100),
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2,
  }
}
