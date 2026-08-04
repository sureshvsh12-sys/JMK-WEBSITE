import { useCallback, useEffect, useState } from "react";
import { fetchProperties } from "../services/properties";
export default function useCloudProperties() {
  const [properties, setProperties] = useState([]); const [loading, setLoading] = useState(true); const [error, setError] = useState("");
  const load = useCallback(async () => { try { setLoading(true); setError(""); setProperties(await fetchProperties()); } catch (e) { setError(e.message || "Properties load failed."); setProperties([]); } finally { setLoading(false); } }, []);
  useEffect(() => { load(); const timer = window.setInterval(load, 30000); return () => window.clearInterval(timer); }, [load]);
  return { properties, loading, error, reload: load };
}
