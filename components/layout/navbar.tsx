/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { NavbarMenuModel } from "configs/NavBarConfig";

export default function NavBar({
  navbarMenu,
}: {
  navbarMenu: NavbarMenuModel[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#1E252B]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-300 hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? (
                <XIcon className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <MenuIcon className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <a href="/">
                <Image
                  src={`/nerd-logo-white.png`}
                  alt="N"
                  width="100"
                  height="70"
                  priority={true}
                />
              </a>
            </div>
          </div>
          <div className="hidden sm:ml-6 sm:block">
            <div className="flex justify-end space-x-4">
              {navbarMenu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-md px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 hover:text-white"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div
        className={`${isOpen ? "block" : "hidden"} sm:hidden`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navbarMenu.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="block rounded-md px-3 py-2 text-base font-semibold text-white hover:bg-gray-700 hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
