import React from "react"
import styled from "styled-components"

const ButtonStyled = styled.button``

interface ButtonProps extends React.HTMLProps<HTMLButtonElement> {}

export default function Button(props: ButtonProps) {
  const { onClick, children } = props
  return <ButtonStyled onClick={onClick}>{children}</ButtonStyled>
}
