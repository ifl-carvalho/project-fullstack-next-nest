import styled from 'styled-components'

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;

  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  flex: 1;

  margin: 32px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-start;
`

export const Label = styled.label`
  margin-top: 16px;

  font-size: 1rem;
`

export const Input = styled.input`
  height: 48px;

  padding: 0 8px;
  margin-top: 8px;

  font-size: 1rem;

  border: 2px solid #0066FF;
  border-radius: 8px;
`

export const Footer = styled.footer`
  gap: 12px;
  padding: 12px 16px;

  height: 80px;
  width: 100%;

  border-top: 1px solid #c3c3c3;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`

export const Button = styled.button`
  padding: 12px 16px;

  border-radius: 8px;
  
  color: #FFFFFF;
  background: #0066FF;
`
