import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Auth/Register";
import HomePage from "./pages/HomePage";
import Login from "./pages/Auth/Login";

import AddBlog from "./pages/Blog/AddBlog";
import EditBlog from "./pages/Blog/EditBlog";
import ViewBlog from "./pages/Blog/ViewBlog";
import ViewSingleBlog from "./pages/Blog/ViewSingleBlog";
import ViewProfile from "./pages/Profile/ViewProfile";
import EditProfile from "./pages/Profile/EditProfile";
import DashBoard from "./pages/Admin/DashBoard";
import AllUsers from "./pages/Admin/AllUsers";
import AllProgram from "./pages/Admin/AllProgram";
import ViewProgram from "./pages/Program/ViewProgram";
import ProgramCheckout from "./pages/Program/ProgramCheckout";
import ProgramAnalytics from "./pages/Admin/ProgramAnalytics";
import ViewSingleProgram from "./pages/Program/ViewSingleProgram";
import Chat from "./pages/Chat/Chat";
import UserLayout from "./Layouts/UserLayout";
import AdminLayout from "./Layouts/AdminLayout";
import AllBlogs from "./pages/Admin/AllBlogs";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/home"
          element={
            <UserLayout>
              <HomePage />
            </UserLayout>
          }
        />

        {/* blog routes */}
        <Route
          path="/add-blog"
          element={
            <UserLayout>
              <AddBlog />
            </UserLayout>
          }
        />
        <Route
          path="/edit-blog/:id"
          element={
            <UserLayout>
              <EditBlog />
            </UserLayout>
          }
        />
        <Route
          path="/blog"
          element={
            <UserLayout>
              <ViewBlog />
            </UserLayout>
          }
        />
        <Route
          path="/blog/:id"
          element={
            <UserLayout>
              <ViewSingleBlog />
            </UserLayout>
          }
        />

        {/* profile routes */}
        <Route
          path="/profile"
          element={
            <UserLayout>
              <ViewProfile />
            </UserLayout>
          }
        />
        <Route
          path="/edit-profile"
          element={
            <UserLayout>
              <EditProfile />
            </UserLayout>
          }
        />

        {/* admin routes */}
        <Route
          path="/dashboard"
          element={
            <AdminLayout>
              <DashBoard />
            </AdminLayout>
          }
        />
        <Route
          path="/all-users"
          element={
            <AdminLayout>
              <AllUsers />
            </AdminLayout>
          }
        />
        <Route
          path="/all-payments"
          element={
            <AdminLayout>
              <AllUsers />
            </AdminLayout>
          }
        />
        <Route
          path="/all-programs"
          element={
            <AdminLayout>
              <AllProgram />
            </AdminLayout>
          }
        />
        <Route
          path="/all-blogs"
          element={
            <AdminLayout>
              <AllBlogs />
            </AdminLayout>
          }
        />

        <Route path="/analytics/:id" element={<AdminLayout><ProgramAnalytics /></AdminLayout>} />

        {/* program routes */}
        <Route
          path="/programs"
          element={
            <UserLayout>
              <ViewProgram />
            </UserLayout>
          }
        />
        <Route
          path="/checkout/:id"
          element={
            <UserLayout>
              <ProgramCheckout />
            </UserLayout>
          }
        />

        <Route
          path="/program/:id"
          element={
            <UserLayout>
              <ViewSingleProgram />
            </UserLayout>
          }
        />

        <Route
          path="/chat-with-ai"
          element={
            <UserLayout>
              <Chat />
            </UserLayout>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
