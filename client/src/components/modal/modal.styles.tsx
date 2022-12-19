import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #00000060;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  height: 600px;
  width: 100%;
  max-width: 1120px;

  background: #ffffff;
  border-radius: 16px;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 32px;

  height: 48px;
  width: 100%;

  border-bottom: 1px solid #d3d3d3;
`

export const Title = styled.h1`
  font-size: 2rem;
`
