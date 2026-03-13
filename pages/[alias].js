import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import supabase from "../lib/supabaseClient";

export default function RedirectPage() {
  const router = useRouter();
  const { alias } = router.query;
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!alias) return; // attendre que l'alias soit dispo

    const redirect = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("liens")
        .select("id, url, alias, clics")
        .eq("alias", alias)
        .maybeSingle(); // accepte zéro ou un résultat

      if (error) {
        console.error("Erreur Supabase:", error.message);
        setLoading(false);
        return;
      }

      if (data) {
        // incrémente le compteur
        await supabase
          .from("liens")
          .update({ clics: data.clics + 1 })
          .eq("id", data.id);

        // redirection
        window.location.replace(data.url);
      } else {
        console.warn("Alias non trouvé:", alias);
        setLoading(false);
      }
    };

    redirect();
  }, [alias]);

  return <p>{loading ? "Redirection en cours..." : "Alias introuvable"}</p>;
}