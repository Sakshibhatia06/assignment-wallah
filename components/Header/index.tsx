"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import menuData from "./menuData";

const Header = () => {
  const [navigationOpen, setNavigationOpen] = useState(false);
  const [stickyMenu, setStickyMenu] = useState(false);
  const pathUrl = usePathname();

  // Sticky menu
  useEffect(() => {
    const handleStickyMenu = () => {
      setStickyMenu(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyMenu);
    return () => window.removeEventListener("scroll", handleStickyMenu);
  }, []);

  // Recursive function to render nested submenus
  const renderMenu = (items: any[]) => (
    <ul className="absolute left-0 top-full mt-2 hidden min-w-[220px] rounded-md bg-white p-3 shadow-lg group-hover:block dark:bg-blacksection z-50">
      {items.map((item) => (
        <li key={item.id} className="relative group">
          {item.submenu ? (
            <>
              <button className="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-gray-800 hover:text-primary dark:text-white">
                {item.title}
                <svg
                  className="ml-2 h-3 w-3 fill-current"
                  viewBox="0 0 512 512"
                >
                  <path d="M184 112l144 144-144 144z" />
                </svg>
              </button>
              <ul className="absolute left-full top-0 ml-1 hidden min-w-[220px] rounded-md bg-white p-3 shadow-lg group-hover:block dark:bg-blacksection">
                {renderMenu(item.submenu)}
              </ul>
            </>
          ) : (
            <Link
              href={item.path || "#"}
              className="block px-4 py-2 text-sm text-gray-800 hover:text-primary dark:text-white"
            >
              {item.title}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full py-6 transition-all duration-200 ${stickyMenu
          ? "bg-white py-4 shadow-md dark:bg-black"
          : "bg-transparent"
        }`}
    >
      <div className="relative mx-auto max-w-c-1390 flex items-center justify-between px-4 md:px-8 2xl:px-0">
        {/* ---------- Logo ---------- */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/assignment-wallh-Photoroom.png"
            alt="logo"
            width={90}
            height={30}
            className="dark:hidden"
          />
          <Image
            src="/images/assignment-wallh-Photoroom.png"
            alt="logo"
            width={90}
            height={30}
            className="hidden dark:block"
          />
        </Link>

        {/* ---------- Hamburger Toggle ---------- */}
        <button
          aria-label="Toggle Navigation"
          className="block xl:hidden"
          onClick={() => setNavigationOpen(!navigationOpen)}
        >
          <span className="text-2xl font-bold">☰</span>
        </button>

        {/* ---------- Navigation ---------- */}
        <nav
          className={`absolute left-0 top-full w-full rounded-md bg-white shadow-lg transition-all duration-300 dark:bg-blacksection xl:static xl:block xl:w-auto xl:shadow-none ${navigationOpen ? "block" : "hidden xl:block"
            }`}
        >
          <ul className="flex flex-col gap-5 xl:flex-row xl:items-center xl:gap-10">
            {menuData.map((menuItem) => (
              <li key={menuItem.id} className="relative group">
                {menuItem.submenu ? (
                  <>
                    {/* Parent menu button */}
                    <button className="flex items-center gap-2 text-gray-800 dark:text-white hover:text-primary">
                      {menuItem.title}
                      <svg
                        className="h-3 w-3 fill-current"
                        viewBox="0 0 512 512"
                      >
                        <path d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                      </svg>
                    </button>

                    {/* 1st level submenu */}
                    <ul className="absolute left-0 top-full mt-0 hidden min-w-[220px] rounded-md bg-white p-3 shadow-lg group-hover:block dark:bg-blacksection z-50 transition-all duration-150 ease-in-out">
                      {menuItem.submenu.map((subItem) => (
                        <li key={subItem.id} className="relative group/sub">
                          {subItem.submenu ? (
                            <>
                              {/* 2nd level menu button */}
                              <button className="flex w-full items-center justify-between px-4 py-2 text-left text-sm text-gray-800 hover:text-primary dark:text-white">
                                {subItem.title}
                                <svg
                                  className="ml-2 h-3 w-3 fill-current"
                                  viewBox="0 0 512 512"
                                >
                                  <path d="M184 112l144 144-144 144z" />
                                </svg>
                              </button>

                              {/* Nested (2nd-level) submenu */}
                              <ul className="absolute left-full top-0 ml-0 hidden min-w-[220px] rounded-md bg-white p-3 shadow-lg group-hover/sub:block dark:bg-blacksection transition-all duration-150 ease-in-out">
                                {subItem.submenu.map((child) => (
                                  <li key={child.id}>
                                    <Link
                                      href={child.path || "#"}
                                      className="block px-4 py-2 text-sm text-gray-800 hover:text-primary dark:text-white"
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
                              className="block px-4 py-2 text-sm text-gray-800 hover:text-primary dark:text-white"
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
                    className={`hover:text-primary ${pathUrl === menuItem.path ? "text-primary" : ""
                      }`}
                  >
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
