import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Table from './components/table'

function App() {
  const columns = [
    {
      dataField: 'branch',
      caption: 'Branch'
    },
    {
      dataField: 'status',
      caption: 'Status Pending'
    },
    {
      caption: 'Vehicles Number',
      columns: [
        {
          caption: 'nam 2022',
          dataField: '2022'
        },
        {
          caption: 'nam 2023',
          dataField: '2023'
        },
        {
          caption: '2024',
          columns: [
            {
              dataField: '1',
              caption: 'thang 1',
            },
            {
              dataField: '2',
              caption: 'thang 1',
            },
            {
              dataField: '3',
              caption: 'thang 1',
            }
          ]
        },
        {
          caption: 'Sum',
          dataField: 'Sum1'
        }
      ]
    },
    {
      caption: 'TicketsNumber',
      columns: [
        {
          caption: 'nam 2022',
          dataField: '2022'
        },
        {
          caption: 'nam 2023',
          dataField: '2023'
        },
        {
          caption: '2024',
          columns: [
            {
              dataField: '1',
              caption: 'thang 1',
            },
            {
              dataField: '2',
              caption: 'thang 1',
            },
            {
              dataField: '3',
              caption: 'thang 1',
            }
          ]
        },
        {
          caption: 'Sum',
          dataField: 'Sum2'
        }
      ]
    }
  ]

  return (
    <>
      <Table columns={columns} />
    </>
  )
}

export default App
