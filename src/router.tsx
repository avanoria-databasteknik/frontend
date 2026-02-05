import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./components/layouts/AppLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import BlankLayout from "./components/layouts/BlankLayout";
import MyLayout from "./components/layouts/MyLayout";
import HomePage from "./components/pages/HomePage";
import AdminHomePage from "./components/pages/admin/AdminHomePage";
import AdminCoursesPage from "./components/pages/admin/AdminCoursesPage";
import AdminTeachersPage from "./components/pages/admin/AdminTeachersPage";
import MyProfilePage from "./components/pages/my/MyProfilePage";
import MyBookingsPage from "./components/pages/my/MyBookingsPage";
import MySettingsPage from "./components/pages/my/MySettingsPage";
import NotFoundPage from "./components/pages/NotFoundPage";
import AdminCourseEventsPage from "./components/pages/admin/AdminCourseEventsPage";
import AdminLocationsPage from "./components/pages/admin/AdminLocationsPage";
import CourseDetailsPage from "./components/pages/CourseDetailsPage";
import CoursesPage from "./components/pages/CoursesPage";

export const router = createBrowserRouter([
    {
        element: <AppLayout />,
        children: [
            {
                path: "/",
                handle: { title: "Courses Online" },
                element: <HomePage />
            }
        ]
    },
    {
        element: <AppLayout />,
        path: "/courses",
        children: [
            {
                index: true,
                handle: { title: "Courses" },
                element: <CoursesPage/>
            },     
            {
                path: ":courseId",
                handle: { title: "Course Details" },
                element: <CourseDetailsPage />
            },    
        ]
    },
    {
        element: <AdminLayout />,
        path: "/admin",
        children: [
            {
                index: true,
                handle: { title: "Admin Overview" },
                element: <AdminHomePage />
            },
            {
                path: "courses",
                handle: { title: "Administer Courses" },
                element: <AdminCoursesPage />
            },
            {
                path: "events",
                handle: { title: "Administer Course Events" },
                element: <AdminCourseEventsPage />
            },
                        {
                path: "locations",
                handle: { title: "Administer Locations" },
                element: <AdminLocationsPage />
            },
            {
                path: "teachers",
                handle: { title: "Administer Teachers" },
                element: <AdminTeachersPage />
            },
        ]
    },
    {
        element: <MyLayout />,
        path: "/my",
        children: [
            {
                index: true,
                handle: { title: "My Profile" },
                element: <MyProfilePage />
            },
            {
                path: "bookings",
                handle: { title: "My Bookings" },
                element: <MyBookingsPage />
            },
            {
                path: "settings",
                handle: { title: "My Settings" },
                element: <MySettingsPage />
            },
        ]
    },
    {
        element: <BlankLayout />,
        children: [
            {
                path: "*",
                handle: { title: "Page Not Found" },
                element: <NotFoundPage />
            },
        ]
    },
]);