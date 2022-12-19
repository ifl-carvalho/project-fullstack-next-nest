'use client'
import { useEffect } from 'react'
import { toast } from 'react-toastify'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Modal } from '@/components'
import { fetchClient } from '@/service'
import { numberMask } from '@/utils'
import { Product } from '@/types'

import { Content, Button, Footer, Form, Input, Label } from './product-modal.styles'

import { schema } from './validations'

type Props = {
  isOpen: boolean,
  selectedProduct?: Product
  refetch: () => void
  onClose: () => void
}

export default function ProductModal ({ isOpen, selectedProduct, onClose, refetch }: Props) {
  const { register, reset, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
    defaultValues: selectedProduct
  })

  const onSubmit = async (data: Product) => {
    if (!Object.values(data).length) return toast('At least one field required.')

    const method = selectedProduct ? 'put' : 'post'
    const url = selectedProduct ? `products/${selectedProduct?.id}` : 'products'

    const { status } = await fetchClient<Product[]>(url, {
      body: JSON.stringify({ ...data }),
      method
    })

    if (status < 299) onClose(); reset(); refetch()
  }

  useEffect(() => {
    Object.values(errors).map((error) => toast(error.message))
  }, [errors])

  useEffect(() => {
    reset(selectedProduct)
  }, [reset, selectedProduct])

  const ModalTitle = selectedProduct ? 'Edit product' : 'Create product'

  return (
    <Modal title={ModalTitle} open={isOpen} onClose={onClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Content>
          <Label htmlFor='name'>Name</Label>
          <Input {...register('name')} />
          <Label htmlFor='price'>Price</Label>
          <Input {...register('price', { onChange: numberMask })} />
          <Label htmlFor='description'>Description</Label>
          <Input {...register('description')} onChange={(test) => test} />
          <Label htmlFor='stock_number'>Stock</Label>
          <Input type='number' {...register('stock_number')} />
        </Content>
        <Footer>
          <Button type='submit'>
            Aceitar
          </Button>
        </Footer>
      </Form>
    </Modal>
  )
}
