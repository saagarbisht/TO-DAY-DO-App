import React from "react";

export default function Tabs({ todos, selectedTab, setSelectedTab }) {
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, idx) => {
        const numberOfTask =
          tab === "All"
            ? todos.length
            : tab === "Open"
            ? todos.filter((todo) => !todo.complete).length
            : todos.filter((todo) => todo.complete).length;
        return (
          <button
            key={idx}
            className={
              "tab-button " + (tab === selectedTab ? "tab-selected" : " ")
            }
            onClick={() => {setSelectedTab(tab)}}
          >
            <h4>
              {tab} <span>({numberOfTask})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
