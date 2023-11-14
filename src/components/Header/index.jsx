import React from "react";
import data from "../../data/languages";
function index({ setLanguage, setValue }) {
  return (
    <div className="px-3 bg-black/90 py-6 flex items-center gap-12 justify-between">
      <div className="flex items-center gap-12">
        <a href="/" className="text-white text-2xl font-semibold">
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
      <select
        name="languages"
        id="languages"
        onChange={(e) => {
          setLanguage(e.target.value);
        }}
        className="w-[210px] py-1"
      >
        {data["languages"].map((language) => {
          return <option value={language.id}>{language.name}</option>;
        })}
      </select>
    </div>
  );
}

export default index;
