'use client'
import { useState } from 'react'

import { AiOutlineEdit as EditIcon } from 'react-icons/ai'
import { MdOutlineDeleteOutline as DeleteIcon } from 'react-icons/md'

import { ProductModal } from '@/components'
import { fetchClient } from '@/service'
import { Product } from '@/types'

import { List, Card, Info, Buttons, Content, Header, Title, Footer, Button } from './product-list.styles'

type ModalState = {
  selectedProduct?: Product
  isOpen: boolean,
}

type Props = {
  serverData?: Product[]
}

export default function ProductList ({ serverData = [] }: Props) {
  const [products, setProducts] = useState(serverData)
  const [{ isOpen, selectedProduct }, setModalState] = useState<ModalState>({
    selectedProduct: undefined,
    isOpen: false
  })

  const refetch = async () => {
    const { data } = await fetchClient<Product[]>('products')

    if (data) setProducts(data)
  }

  const handleProductDelete = (id: number) => async () => {
    const { status } = await fetchClient(`products/${id}`, {
      method: 'delete'
    })

    if (status < 299) refetch()
  }

  const handleOpenModal = (product?: Product) => () => {
    setModalState({
      selectedProduct: product,
      isOpen: true
    })
  }

  const handleCloseModal = () => {
    setModalState({
      selectedProduct: undefined,
      isOpen: false
    })
  }

  return (
    <>
      <Content>
        <Header>
          <Title>Products</Title>
          <Button onClick={handleOpenModal()} >Add Button</Button>
        </Header>
        <List>
          {products.map((product) => (
            <Card key={product.id}>
              <Info>
                <h3>name: {product.name}</h3>
                <p>description: {product.description}</p>
                <p>price: {product.price}</p>
                <p>stock: {product.stock_number}</p>
              </Info>
              <Buttons>
                <EditIcon cursor='pointer' onClick={handleOpenModal(product)} />
                <DeleteIcon cursor='pointer' onClick={handleProductDelete(product.id)} />
              </Buttons>
            </Card>
          ))}
        </List>
        <Footer />
      </Content>
      <ProductModal
        isOpen={isOpen}
        onClose={handleCloseModal}
        refetch={refetch}
        selectedProduct={selectedProduct}
      />
    </>
  )
}
