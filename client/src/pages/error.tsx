import React from "react";

const ErrorPage: React.FC<{ message?: string }> = ({ message }) => {
  return (
    <div>
      <h1>Error</h1>
      <p>{message || "Sorry, an unexpected error has occurred."}</p>
    </div>
  );
};

export default ErrorPage;