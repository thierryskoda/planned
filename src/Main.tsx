import { min, orderBy } from "lodash"
import React from "react"
import { QueryClient, useQuery } from "react-query"
import styled from "styled-components"
import Card from "./components/Card"
import SearchInput from "./components/SearchInput"
import Table from "./components/Table"
import TitleBar from "./components/TitleBar"
import MainFilters from "./MainFilters"

const API_URL = "http://localhost:8099"

const Container = styled.div`
  background-color: #fafafa;
  padding: 15px;
`

const Wrapper = styled.div`
  max-width: 1000px;
  margin: auto;
`

const Content = styled.div`
  display: grid;
  column-gap: 40px;
  grid-template-columns: 200px auto;
`

const SearchInputWrapper = styled.div`
  padding: 20px;
`

const TableWrapper = styled.div`
  padding: 20px;
`

type User = {
  age: number
  email: string
  name: { firstName: string; lastName: string }
}

export default function Main() {
  const [minValue, setMinValue] = React.useState(0)
  const [maxValue, setMaxValue] = React.useState(50)

  const { data: adultsData, refetch: adultsRefetch } = useQuery(
    "repoData",
    () =>
      fetch(`${API_URL}/users/adults?min=${minValue}&max=${maxValue}`).then(
        (res) => res.json()
      )
  )

  const { data: kidsData, refetch: kidsRefetch } = useQuery("repoData", () =>
    fetch(`${API_URL}/users/kids?min=${minValue}&max=${maxValue}`).then((res) =>
      res.json()
    )
  )

  const { data: seniorsData, refetch: seniorsRefetch } = useQuery(
    "repoData",
    () =>
      fetch(`${API_URL}/users/seniors?min=${minValue}&max=${maxValue}`).then(
        (res) => res.json()
      )
  )

  const users = React.useMemo(() => {
    return [
      ...(adultsData?.data || []),
      ...(kidsData?.data || []),
      ...(seniorsData?.data || []),
    ]
  }, [adultsData, kidsData, seniorsData])

  console.log("users", users)

  function fetchUsers() {
    adultsRefetch()
    kidsRefetch()
    seniorsRefetch()
  }

  const orderedUsers = React.useMemo(() => {
    return orderBy(users, [(user) => getUserName(user), "age"], ["asc", "desc"])
  }, [users])

  return (
    <Container>
      <Wrapper>
        <TitleBar title="Users" />
        <Content>
          <Card
            content={
              <MainFilters
                minValue={minValue}
                maxValue={maxValue}
                // @ts-ignore
                onMinChange={(e) => setMinValue(e.target.value)}
                // @ts-ignore
                onMaxChange={(e) => setMaxValue(e.target.value)}
                onClick={fetchUsers}
              />
            }
          />
          <Card
            header={
              <SearchInputWrapper>
                <SearchInput />
              </SearchInputWrapper>
            }
            content={
              <TableWrapper>
                <Table sorted={[]} columns={COLUMNS} data={orderedUsers} />
              </TableWrapper>
            }
          />
        </Content>
      </Wrapper>
    </Container>
  )
}

function getUserName(user: User) {
  return `${user.name.firstName} ${user.name.lastName}`
}

const COLUMNS = [
  {
    Header: "Name",
    accessor: (user: User) => {
      return getUserName(user)
    },
    id: "1",
  },
  {
    Header: "Age",
    accessor: "age",
  },
]
