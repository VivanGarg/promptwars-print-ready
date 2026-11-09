import { useState } from "react";
import "./App.css";

function App() {
  const [assignments] = useState([
    {
      id: 1,
      title: "Operating Systems Assignment",
      subject: "Operating Systems",
      deadline: "Nov 12, 2026",
      progress: 80,
      status: "Needs Attention",
    },
    {
      id: 2,
      title: "Discrete Mathematics Worksheet",
      subject: "Discrete Mathematics",
      deadline: "Nov 14, 2026",
      progress: 100,
      status: "Ready to Submit",
    },
    {
      id: 3,
      title: "Data Structures Lab Report",
      subject: "Data Structures",
      deadline: "Nov 16, 2026",
      progress: 50,
      status: "In Progress",
    },
  ]);

  return (
    <div className="app">
      <aside className="sidebar">
        <h2 className="logo">PrintReady<span>.</span></h2>

        <nav>
          <a className="active" href="#">Dashboard</a>
          <a href="#">My Assignments</a>
          <a href="#">Formatting Checker</a>
          <a href="#">Print Calculator</a>
          <a href="#">Settings</a>
        </nav>

        <div className="sidebar-bottom">
          <p>Made for students 🎓</p>
        </div>
      </aside>

      <main className="main">
        <header className="header">
          <div>
            <p className="welcome">STUDENT WORKSPACE</p>
            <h1>Good afternoon! 👋</h1>
            <p>Ready to submit without the last-minute stress?</p>
          </div>

          <div className="profile">VG</div>
        </header>

        <section className="stats">
          <div className="stat-card">
            <p>Total Assignments</p>
            <h2>{assignments.length}</h2>
            <span>Across all subjects</span>
          </div>

          <div className="stat-card">
            <p>Ready to Submit</p>
            <h2>{assignments.filter(a => a.status === "Ready to Submit").length}</h2>
            <span>Looking good!</span>
          </div>

          <div className="stat-card">
            <p>Needs Attention</p>
            <h2>{assignments.filter(a => a.status === "Needs Attention").length}</h2>
            <span>Check these assignments</span>
          </div>

          <div className="stat-card">
            <p>Upcoming Deadlines</p>
            <h2>{assignments.length}</h2>
            <span>Stay ahead of deadlines</span>
          </div>
        </section>

        <section className="assignments-section">
          <div className="section-header">
            <div>
              <h2>My Assignments</h2>
              <p>Track your submission readiness.</p>
            </div>

            <button className="add-button">+ New Assignment</button>
          </div>

          <div className="assignment-list">
            {assignments.map((assignment) => (
              <div className="assignment-card" key={assignment.id}>
                <div className="assignment-top">
                  <div>
                    <p className="subject">{assignment.subject}</p>
                    <h3>{assignment.title}</h3>
                  </div>

                  <span className={`status ${assignment.status === "Ready to Submit" ? "ready" : assignment.status === "Needs Attention" ? "attention" : "progress"}`}>
                    {assignment.status}
                  </span>
                </div>

                <div className="assignment-info">
                  <span>📅 Deadline: {assignment.deadline}</span>
                  <span>📋 Checklist: {assignment.progress}%</span>
                </div>

                <div className="progress-bar">
                  <div style={{ width: `${assignment.progress}%` }}></div>
                </div>

                <button className="view-button">View Assignment →</button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;