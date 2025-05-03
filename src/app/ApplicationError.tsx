import React from "react";

const ApplicationError: React.FC = () => {
  return (
    <div
      style={{
        fontFamily: "'Courier New', Courier, 'Lucida Console', monospace",
        backgroundColor: "#f8f8f8",
        color: "#333",
        padding: "40px",
        maxWidth: "800px",
        margin: "50px auto",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h1 style={{ fontSize: "32px", marginBottom: "20px" }}>
        Application Error
      </h1>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        A Vercel application error has occurred. This may be due to a
        misconfiguration in your deployment settings, or the application has
        crashed unexpectedly.
      </p>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        If you are the developer, please check your server logs or deployment
        configuration. Common causes include:
      </p>
      <ul style={{ marginLeft: "20px" }}>
        <li>Missing or invalid environment variables</li>
        <li>Improper usage of API routes</li>
        <li>Uncaught runtime exceptions</li>
        <li>Exceeding function memory or execution timeout</li>
      </ul>
      <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
        For more information, visit{" "}
        <a
          href="https://vercel.com/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Vercel Documentation
        </a>
        .
      </p>
      <hr style={{ margin: "30px 0" }} />
      <p style={{ fontSize: "14px", color: "#666" }}>
        Request ID: <code>vercel-err-5e6f17db8f1234567890abcdef</code>
        <br />
        Deployment ID: <code>deploy_abc123xyz</code>
      </p>
    </div>
  );
};

export default ApplicationError;
