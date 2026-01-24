"use client";

import { useState } from "react";
import Image from "next/image";
import { Pencil, Check, X, Plus, Minus } from "lucide-react";
import { saveDataToDB } from "../app/actions/admin.js";
import Toast from "./Toast.jsx";

export default  function EditableTable({ teams }) {
  console.log(teams)
  const [editRow, setEditRow] = useState(null);
  const [data, setData] = useState(teams);
  const [toast, setToast] = useState({
  type: "",
  message: "",
});


const sortTeams = (teams) => {
  return [...teams].sort((a, b) => {
    // 1. Points
    if (b.pts !== a.pts) {
      return b.pts - a.pts;
    }

    // 2. Goal Difference
    if (b.gd !== a.gd) {
      return b.gd - a.gd;
    }

    // 3. Goals Scored
    if (b.goal_scored !== a.goal_scored) {
      return b.goal_scored - a.goal_scored;
    }

    // 4. Alphabetical
    return a.name.localeCompare(b.name);
  });
};


  const startEdit = (index) => {
    setEditRow(index);
  };

  const cancelEdit = () => {
    setEditRow(null);
    setData(teams);
  };

  const saveEdit =async (id) => {

    const sorted = sortTeams(data);

    setData(sorted);
    setEditRow(null);
    const r = await saveDataToDB(id,data);
    
     setToast({
      type: r.type,
      message: r.message,
    });
    setEditRow(null);
  };

  const updateValue = (i, field, delta) => {
    setData((prev) =>
      prev.map((row, index) => {
        if (index !== i) return row;

        let value = (row[field]) + delta;

        // Rules
        if (field !== "gd" && value < 0) value = 0;
    if (field === "gd" && value < -100) value = -100;
        return {
          ...row,
          [field]: value,
        };
      })
    );
  };

  return (
    <div className="bg-emerald-950 min-h-screen p-6">
                    <Toast
        type={toast.type}
        message={toast.message}
        onClose={() => setToast({ type: "", message: "" })}
        />

      {/* ===== Header ===== */}
      <div className="max-w-7xl mx-auto mb-8 text-center">

        <h1 className="text-3xl md:text-4xl font-black text-emerald-300 tracking-wide">
          MSL Admin Panel
        </h1>

        <p className="text-emerald-400/70 text-sm mt-1 uppercase tracking-widest">
          Manage League Standings
        </p>

      </div>
    
      {/* ===== Table Wrapper ===== */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl p-4 overflow-x-auto">

        <table className="w-full border-separate border-spacing-y-2 min-w-[800px]">

          {/* Head */}
          <thead>
            <tr className="bg-emerald-700 text-white uppercase text-sm font-bold">

              <th className="py-3 rounded-l-lg">Rank</th>
              <th>Club</th>
              <th>PL</th>
              <th>W</th>
              <th>D</th>
              <th>L</th>
              <th>GD</th>
              <th>Goal Scored</th>
              <th>Pts</th>
              <th className="rounded-r-lg">Edit</th>

            </tr>
          </thead>

          {/* Body */}
          <tbody>

            {data.map((team, i) => (
              <tr
                key={team.name}
                className="bg-gray-50 hover:bg-emerald-50 transition shadow-sm"
              >

                {/* Rank */}
                <td className="text-center font-bold text-emerald-700 py-3">
                  {i + 1}
                </td>

                {/* Club */}
                <td className="py-3 px-2">

                  <div className="flex items-center gap-3">

                    <Image
                      src={team.logo}
                      width={32}
                      height={32}
                      alt=""
                      className="rounded-full border"
                    />

                    <span className="font-semibold text-gray-800">
                      {team.name}
                    </span>

                  </div>

                </td>

                {/* Editable Fields */}
                {["pl", "w", "d", "l", "gd", "goal_scored" ,"pts"].map((field) => (

                  <td key={field} className="text-center py-3">

                    {editRow === i ? (

                      <div className="flex items-center justify-center gap-2">

                        <button
                          onClick={() => updateValue(i, field, -1)}
                          className="p-1 rounded bg-red-100 text-red-600 hover:bg-red-200"
                        >
                          <Minus size={14} />
                        </button>

                        <span className="w-8 font-bold text-gray-900">
                             {field === "gd"
                                    ? team.gd > 0
                                    ? `+${team.gd}`
                                    : team.gd
                                    : team[field]}
                        </span>

                        <button
                          onClick={() => updateValue(i, field, 1)}
                          className="p-1 rounded bg-green-100 text-green-600 hover:bg-green-200"
                        >
                          <Plus size={14} />
                        </button>

                      </div>

                    ) : (
                      <span className="font-semibold text-gray-900">
                        {team[field]}
                      </span>
                    )}

                  </td>

                ))}

                {/* Actions */}
                <td className="text-center py-3">

                  {editRow === i ? (

                    <div className="flex justify-center gap-3">

                      <button
                        onClick={()=>saveEdit(team.id)}
                        className="p-2 rounded bg-green-600 text-white hover:bg-green-700"
                      >
                        <Check size={16} />
                      </button>

                      <button
                        onClick={cancelEdit}
                        className="p-2 rounded bg-red-600 text-white hover:bg-red-700"
                      >
                        <X size={16} />
                      </button>

                    </div>

                  ) : (

                    <button
                      onClick={() => startEdit(i)}
                      className="p-2 rounded bg-gray-200 hover:bg-gray-300 text-gray-700"
                    >
                      <Pencil size={16} />
                    </button>

                  )}

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}
