import { Outlet } from "react-router-dom"
import AdminHeader from "../sections/header/AdminHeader"

const AdminLayout = () => {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <aside>
          admin menu
      </aside>
      <main>
          <Outlet />
      </main>
    </div>
  )
}

export default AdminLayout