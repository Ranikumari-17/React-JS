import React, { useEffect, useState } from "react";
import { getContent } from "../services/api";
import ContentCard from "../components/ContentCard";
import DashboardStats from "../components/DashboardStats";

function Dashboard() {

  const [data, setData] = useState([]);

  useEffect(() => {
    getContent().then(res => setData(res));
  }, []);

  const approveContent = (id) => {
    setData(data.map(item =>
      item.id === id ? { ...item, status: "approved" } : item
    ));
  };

  const rejectContent = (id) => {
    setData(data.map(item =>
      item.id === id ? { ...item, status: "rejected" } : item
    ));
  };

  return (
    <div className="dashboard">

      <DashboardStats data={data} />

      <div className="content-list">
        {data.map(item => (
          <ContentCard
            key={item.id}
            item={item}
            onApprove={approveContent}
            onReject={rejectContent}
          />
        ))}
      </div>

    </div>
  );
}

export default Dashboard;