import React from "react"
import styled from "styled-components"

interface InputProps extends React.HTMLProps<HTMLInputElement> {}

const InputStyled = styled.input`
  border-color: #fafafa;
  border-width: 1px;
  border-radius: 5px;
  padding: 20px;
`

export default function Input(props: InputProps) {
  // @ts-ignore
  return <InputStyled {...props} />
}
