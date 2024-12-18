import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="flex gap-3">
      <header className="bg-gray-500 p-5">
        <nav>
          <ul className="flex flex-col items-center gap-1">
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
                to="tasks"
              >
                Tasks
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-red-500" : "text-black"
                }
                to="messages"
              >
                Messages
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
