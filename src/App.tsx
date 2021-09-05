import React from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import Main from "./Main"
import "./index.css"
import Nav from "./Nav"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Nav title="Planned test" />
      <Main />
    </QueryClientProvider>
  )
}

export default App
