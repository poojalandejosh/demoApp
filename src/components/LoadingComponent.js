import React from "react";
import { useSelector } from "react-redux";

const LoadingComponent = () => {
  const loading = useSelector((state) => state.admin.loading);

  return (
    <div role="loadingView">
      {loading && (
        <div>
          {
            <img
              style={{ width: 100, height: 100 }}
              src={loading}
              alt="loading..."
            />
          }
        </div>
      )}
    </div>
  );
};

export default LoadingComponent;
