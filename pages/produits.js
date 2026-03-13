import React from "react";
import supabase from "../lib/supabaseClient";

export default function Produits() {
  const [produits, setProduits] = React.useState([]);

  React.useEffect(() => {
    supabase.from("produits").select("*").then(({ data }) => {
      setProduits(data || []);
    });
  }, []);

  return (
    <div>
      <h1>Liste des produits</h1>
      <ul>
        {produits.map((p) => (
          <li key={p.id}>{p.nom}</li>
        ))}
      </ul>
    </div>
  );
}