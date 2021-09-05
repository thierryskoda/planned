import React from "react"
import styled from "styled-components"

const Container = styled.div`
  border-color: #fafafa;
  border-width: 1px;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.1);
`
const Header = styled.div`
  border-bottom: 2px solid #fafafa;
`

const Content = styled.div``

type CardProps = {
  header?: React.ReactNode
  content: React.ReactNode
}

export default function Card({ header, content }: CardProps) {
  return (
    <Container>
      {!!header && <Header>{header}</Header>}
      <Content>{content}</Content>
    </Container>
  )
}
