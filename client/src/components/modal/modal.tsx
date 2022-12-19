'use client'
import { MouseEvent, PropsWithChildren } from 'react'

import { GrClose as CloseIcon } from 'react-icons/gr'

import { Content, Header, Overlay, Title } from './modal.styles'

type Props = {
  open: boolean
  title?: string
  onClose: () => void
} & PropsWithChildren

export default function Modal ({ open, title, onClose, children }: Props) {
  const handleStopPropagation = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  if (!open) return null

  return (
    <Overlay onClick={onClose}>
      <Content onClick={handleStopPropagation}>
        <Header>
          <Title>{title}</Title>
          <CloseIcon onClick={onClose} cursor='pointer' />
        </Header>
        {children}
      </Content>
    </Overlay>
  )
}
