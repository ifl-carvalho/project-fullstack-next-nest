import { fetchClient, Response } from '@/service'
import { ProductList } from '@/components'
import { Product } from '@/types'

import { Container } from './page.styles'

const getProducts = async (): Promise<Response<Product[]>> => {
  return await fetchClient<Product[]>('products', {
    next: { revalidate: 5 }
  })
}

export default async function Home () {
  const { data } = await getProducts()
  return (
    <Container>
        <ProductList serverData={data} />
    </Container>
  )
}
