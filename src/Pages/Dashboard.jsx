import React , { useState }from 'react'
import Navbar from '../components/Navbar'
import DashboardTable from '../components/DashboardTable';
const Dashboard = () => {
     const [events, setEvents] = useState([]);
    
      const addEvent = (eventData) => {
        setEvents([...events, eventData]);
      };
  return (
    <div>
        <Navbar/>
        <DashboardTable />
    </div>
  )
}

export default Dashboard