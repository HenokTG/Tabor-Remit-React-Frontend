import React from "react";

function LoadingFailed() {
  return (
    <div className="failed-loading">
      <h3>Error loading</h3>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        Check your connection setting and retry. or Server might be down, please
        retry later.
      </p>
    </div>
  );
}

export default LoadingFailed;
