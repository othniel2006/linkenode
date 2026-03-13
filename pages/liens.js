import React from "react";
import supabase from "../lib/supabaseClient";

export default function Liens() {
  const [liens, setLiens] = React.useState([]);

  React.useEffect(() => {
    supabase.from("liens").select("*").then(({ data }) => {
      setLiens(data || []);
    });
  }, []);

  return (
    <div>
      <h1>Mes liens raccourcis</h1>
      <ul>
        {liens.map((l) => (
          <li key={l.id}>
            {l.alias} ➝ {l.url} ({l.clics} clics)
          </li>
        ))}
      </ul>
    </div>
  );
}