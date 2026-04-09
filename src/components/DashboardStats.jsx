import React from "react";

function DashboardStats({ data }) {
  const approved = data.filter(d => d.status === "approved").length;
  const rejected = data.filter(d => d.status === "rejected").length;
  const pending = data.filter(d => d.status === "pending").length;

  return (
    <div className="stats">
      <div>Approved: {approved}</div>
      <div>Rejected: {rejected}</div>
      <div>Pending: {pending}</div>
    </div>
  );
}

export default DashboardStats;