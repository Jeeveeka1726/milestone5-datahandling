import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Link to='/timer'><button>Timer</button></Link>
      <Link to='/filter'><button>Filter</button></Link>
    </div>
  )
}
