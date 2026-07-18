import React from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const navigate = useNavigate();
    const logout = () => {
  localStorage.removeItem("adminToken");
  navigate("/admin/login");
};
  return (
    <main className="min-h-screen bg-slate-100 p-10">

      <h1 className="text-4xl font-bold">
        Admin Dashboard
      </h1>

      <p className="mt-5">
        Welcome Admin 👋
      </p>
      <button
  onClick={logout}
  className="rounded-xl bg-red-500 px-5 py-3 text-white"
>
  Logout
</button>

    </main>
  );
};

export default Dashboard;