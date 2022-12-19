import styled from 'styled-components'

export const Content = styled.section`
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

export const Button = styled.button`
  padding: 12px 16px;

  border-radius: 8px;
  
  color: #FFFFFF;
  background: #0066FF;
`

export const Title = styled.h1`
  font-size: 2rem;
`

export const Footer = styled.footer`
  padding: 32px;

  height: 48px;
  width: 100%;
`

export const List = styled.main`
  gap: 32px; 
  padding: 32px;

  height: 100%;

  overflow: auto;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`

export const Card = styled.div`
  padding: 0 32px;

  display: flex;
  align-items: stretch;
  justify-content: flex-start;

  border-bottom: 1px solid #d3d3d3;
`

export const Info = styled.div`
  flex: 1;

  gap: 8px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`

export const Buttons = styled.div`
  gap: 32px;
  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`
