import React from "react"
import ReactTable from "react-table-6"
import "react-table-6/react-table.css"

type TableProps = {
  columns: any[]
  data: any[]
  sorted: any[]
}

export default function Table({ data, columns, sorted }: TableProps) {
  return (
    <ReactTable
      data={data}
      columns={columns}
      defaultSorted={sorted}
      defaultPageSize={10}
      className="-striped -highlight"
    />
  )
}
