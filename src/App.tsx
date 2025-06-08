import React from "react";

export default function App() {
  return (
    <main style={{ fontFamily: "sans-serif", padding: "2rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", color: "#1e40af" }}>
        SaaS Starter Kit
      </h1>
      <p style={{ maxWidth: "600px", margin: "1rem auto", color: "#555" }}>
        A modular monolith architecture designed for scalable SaaS applications.
        Built with React, TypeScript, and modern development practices.
      </p>

      <section style={{ display: "flex", justifyContent: "center", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
        <div style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1.5rem",
          width: "250px",
          backgroundColor: "#fff",
        }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>🧩 Modular Architecture</h3>
          <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#444" }}>
            Clean separation of concerns with domain-driven design principles
          </p>
        </div>

        <div style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1.5rem",
          width: "250px",
          backgroundColor: "#fff",
        }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>🛠 Developer Ready</h3>
          <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#444" }}>
            Error boundaries, logging, and testing infrastructure included
          </p>
        </div>

        <div style={{
          border: "1px solid #ddd",
          borderRadius: "8px",
          padding: "1.5rem",
          width: "250px",
          backgroundColor: "#fff",
        }}>
          <h3 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>🚀 Scalable Foundation</h3>
          <p style={{ fontSize: "0.9rem", marginTop: "0.5rem", color: "#444" }}>
            Multi-tenant ready with clean abstractions for growth
          </p>
        </div>
      </section>
    </main>
  );
}

