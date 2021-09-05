import React from "react"
import styled from "styled-components"

const Container = styled.div``

const Title = styled.h1``

type TitleBarProps = {
  title: string
}

export default function TitleBar({ title }: TitleBarProps) {
  return (
    <Container>
      <Title>{title}</Title>
    </Container>
  )
}
