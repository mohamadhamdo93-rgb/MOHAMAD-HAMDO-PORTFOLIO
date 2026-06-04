import { useEffect, useState } from "react";

export function useRoute() {
  const [route, setRoute] = useState(location.hash || "#home");
  useEffect(() => {
    const onHash = () => setRoute(location.hash || "#home");
    addEventListener("hashchange", onHash);
    return () => removeEventListener("hashchange", onHash);
  }, []);
  return route;
}
