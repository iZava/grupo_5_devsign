import React from "react";
import { DashboardService } from "../../services/dashboardServices";
import './table.css';

const Table = () => {
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const getUsers = async () => {
      const usersData = await DashboardService.getUsers();
      setUsers(usersData);
      console.log(users)
    }
    getUsers();

  }, []);

  return(
    <>
    <h1>users</h1>
    </>
  )
}

export default Table;