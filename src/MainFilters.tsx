import React from "react"
import styled from "styled-components"
import Button from "./components/Button"
import Input from "./components/Input"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* > {
    margin-bottom: 20px;
  }

  > ::last-child {
    margin-bottom: 0px;
  } */
`

export default function MainFilters({
  // @ts-ignore
  onClick,
  // @ts-ignore
  minValue,
  // @ts-ignore
  maxValue,
  // @ts-ignore
  onMinChange,
  // @ts-ignore
  onMaxChange,
}) {
  return (
    <Container>
      <Input
        type="number"
        placeholder="min"
        onChange={onMinChange}
        value={minValue}
      />
      <Input
        type="number"
        placeholder="max"
        onChange={onMaxChange}
        value={maxValue}
      />
      <Button onClick={onClick}>Retreive users</Button>
    </Container>
  )
}
