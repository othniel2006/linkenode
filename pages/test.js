import { useEffect } from "react";
import supabase from "../lib/supabaseClient";

export default function TestPage() {
  useEffect(() => {
    const checkConnection = async () => {
      const { data, error } = await supabase.from("liens").select("*").limit(1);

      if (error) {
        console.error("Erreur de connexion Supabase:", error.message);
      } else {
        console.log("Connexion OK, exemple de données:", data);
      }
    };

    checkConnection();
  }, []);

  return <p>Test de connexion en cours... regarde la console (F12)</p>;
}