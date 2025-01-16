"use client";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="px-6 py-20 mx-auto overflow-hidden max-w-7xl sm:py-24 lg:px-8">
        <p className="mt-10 text-xs leading-5 text-center text-gray-500">
          &copy; {new Date().getFullYear()} Abir Tasrif Anto, All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
