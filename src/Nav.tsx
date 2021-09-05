import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Title = styled.span`
  margin-left: 15px;
  font-weight: bold;
`

type NavProps = {
  title: string
}

export default function Nav({ title }: NavProps) {
  return (
    <Container>
      <img src="/logo.svg" alt="" />
      <Title>{title}</Title>
    </Container>
  )
}
