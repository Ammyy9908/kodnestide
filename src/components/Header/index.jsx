import React from "react";
import data from "../../data/languages";
import { FaMoon, FaRegSun } from "react-icons/fa";
function index({ setLanguage, setTheme, theme }) {
  console.log("Theme", theme);
  return (
    <div
      className={`px-3 ${
        theme === "vs-dark" ? "bg-[#00030B]" : "bg-gray-300/90"
      } py-6 flex items-center gap-12 justify-between`}
    >
      <div className="flex items-center gap-12">
        <a
          href="/"
          className={`${
            theme !== "vs-dark" ? "text-[#00030B]" : "text-white"
          }  text-2xl font-semibold`}
        >
          KodIDE
        </a>
        {/* <div className="flex items-center gap-6">
          <select
            name="theme"
            id="theme-selector"
            onChange={(e) => setTheme(e.target.value)}
          >
            <option value="vs-dark">Dark</option>
            <option value="vs-light">Light</option>
          </select>
        </div> */}
      </div>

      <div className="flex items-center gap-6">
        <button
          className="w-8 h-8 bg-white flex items-center justify-center shadow-2xl rounded-md"
          onClick={() => {
            if (theme === "vs-dark") {
              setTheme("vs-light");
            } else {
              setTheme("vs-dark");
            }
          }}
        >
          {theme !== "vs-dark" ? <FaMoon /> : <FaRegSun />}
        </button>
        <select
          name="languages"
          id="languages"
          onChange={(e) => {
            setLanguage(e.target.value);
          }}
          className="w-[210px] py-1 bg-purple-600 text-white"
        >
          {data["languages"].map((language) => {
            return <option value={language.id}>{language.name}</option>;
          })}
        </select>
      </div>
    </div>
  );
}

export default index;
