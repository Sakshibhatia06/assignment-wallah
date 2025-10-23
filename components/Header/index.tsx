"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<number | null>(null);
  const [openChildMenu, setOpenChildMenu] = useState<number | null>(null);
  const [stickyMenu, setStickyMenu] = useState(false);

  const pathUrl = usePathname();

  useEffect(() => {
    const handleStickyMenu = () => setStickyMenu(window.scrollY >= 80);
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  const toggleSubmenu = (id: number) =>
    setOpenSubmenu(openSubmenu === id ? null : id);
  const toggleChildMenu = (id: number) =>
    setOpenChildMenu(openChildMenu === id ? null : id);

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-4 transition-all duration-200 backdrop-blur-md ${
        stickyMenu
          ? "bg-[rgba(18,18,18,0.8)] shadow-md"
          : "bg-[rgba(19,19,19,0.8)]"
      }`}
    >
      <div className="relative mx-auto max-w-6xl flex items-center justify-between px-4 md:px-8 2xl:px-0">
        <Link href="/" className="flex items-center">
          <div className="relative">
            <Image
              src="/images/assignment-wallh-Photoroom.png"
              alt="AssignmentsWallah logo"
              width={95}
              height={30}
            />
          </div>
        </Link>

        {/* Hamburger Button */}
        <button
          aria-label="Toggle Navigation"
          className="block xl:hidden text-3xl font-bold text-white"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          {navigationOpen ? "✕" : "☰"}
        </button>

        {/* Navigation */}
        <nav
          className={`absolute left-0 top-full w-full rounded-md shadow-lg backdrop-blur-lg bg-[rgba(40,40,40,0.95)] xl:bg-transparent xl:backdrop-blur-none xl:static xl:block xl:w-auto xl:shadow-none transition-all duration-300 ${
            navigationOpen ? "block" : "hidden xl:block"
          }`}
        >
          <ul className="flex flex-col gap-2 max-h-[80vh] text-lg overflow-y-auto scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-transparent px-4 py-4 xl:max-h-none xl:overflow-visible xl:flex-row xl:items-center xl:gap-10 xl:justify-center">
            {menuData.map((menuItem) => (
              <li key={menuItem.id} className="relative group">
                {menuItem.submenu ? (
                  <>
                    {/* Parent Menu Item */}
                    <button
                      onClick={() => toggleSubmenu(menuItem.id)}
                      className={`flex items-center gap-2 font-semibold tracking-wide text-white hover:text-[#2596be] transition-colors duration-200 xl:justify-center ${
                        pathUrl === menuItem.path ? "text-[#2596be]" : ""
                      }`}
                    >
                      <span className="flex items-center justify-center leading-none">
                        {menuItem.title}
                      </span>
                      <svg
                        className={`h-3 w-3 fill-current transition-transform duration-200 xl:hidden ${
                          openSubmenu === menuItem.id ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 512 512"
                      >
                        <path d="M256 294.1l-135.5-135.5-45.3 45.3L256 384.8l180.8-180.9-45.3-45.3z" />
                      </svg>
                    </button>

                    {/* Submenu */}
                    <ul
                      className={`xl:absolute xl:left-0 xl:top-14 xl:min-w-[220px] xl:bg-[rgba(40,40,40,0.95)] xl:p-3 xl:shadow-lg z-50 xl:opacity-0 xl:invisible xl:group-hover:visible xl:group-hover:opacity-100 xl:transition-all xl:duration-200 ${
                        openSubmenu === menuItem.id
                          ? "block"
                          : "hidden xl:block"
                      }`}
                    >
                      {menuItem.submenu.map((subItem) => (
                        <li key={subItem.id} className="relative group/sub">
                          {subItem.submenu ? (
                            <>
                              <button
                                onClick={() => toggleChildMenu(subItem.id)}
                                className="flex w-full items-center justify-between px-4 py-2 text-left text-sm font-medium text-white hover:text-[#2596be]"
                              >
                                {subItem.title}
                                <svg
                                  className={`ml-2 h-3 w-3 fill-current transition-transform duration-200 xl:hidden ${
                                    openChildMenu === subItem.id
                                      ? "rotate-90"
                                      : ""
                                  }`}
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M184 112l144 144-144 144z" />
                                </svg>
                              </button>

                              {/* Nested Submenu */}
                              <ul
                                className={`xl:absolute xl:left-52 xl:top-0 xl:min-w-[220px] max-h-[300px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#555] scrollbar-track-transparent xl:bg-[rgba(40,40,40,0.95)] xl:p-3 xl:shadow-lg xl:opacity-0 xl:invisible xl:group-hover/sub:visible xl:group-hover/sub:opacity-100 xl:transition-all xl:duration-200 ${
                                  openChildMenu === subItem.id
                                    ? "block"
                                    : "hidden xl:block"
                                }`}
                              >
                                {subItem.submenu.map((child) => (
                                  <li key={child.id}>
                                    <Link
                                      href={child.path || "#"}
                                      className="block px-4 py-2 text-sm text-white hover:text-[#2596be]"
                                    >
                                      {child.title}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            </>
                          ) : (
                            <Link
                              href={subItem.path || "#"}
                              className="block px-4 py-2 text-sm text-white hover:text-[#2596be]"
                            >
                              {subItem.title}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  <Link
                    href={menuItem.path || "#"}
                    className={`block font-semibold tracking-wide text-white hover:text-[#2596be] transition-colors duration-200 ${
                      pathUrl === menuItem.path ? "text-[#2596be]" : ""
                    }`}
                  >
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Right section (for future icons/buttons if needed) */}
        <div className="hidden xl:block"></div>
      </div>
    </header>
  );
};

export default Header;

