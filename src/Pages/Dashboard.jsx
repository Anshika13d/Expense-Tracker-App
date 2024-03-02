import React from 'react'
import { fetchData } from "../helper"

export function dashboardLoader(){
    const userName = fetchData("userName");
}

function Dashboard() {
  return (
    <div>
        Dashboard
    </div>
  )
}

export default Dashboard