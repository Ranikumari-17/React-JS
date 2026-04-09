import React from "react";

function ContentCard({ item, onApprove, onReject }) {
  return (
    <div className="card">
      <h4>{item.user}</h4>
      <p>{item.text}</p>
      <p>Status: {item.status}</p>

      {item.status === "pending" && (
        <>
          <button onClick={() => onApprove(item.id)}>
            Approve
          </button>

          <button onClick={() => onReject(item.id)}>
            Reject
          </button>
        </>
      )}
    </div>
  );
}

export default ContentCard;