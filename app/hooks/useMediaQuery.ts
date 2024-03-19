import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
    const [matchMedia, setMatchMedia] = useState(() => {
        return typeof window === "object" && window.matchMedia(query).matches;
    });

    useEffect(() => {
        const media = window.matchMedia(query);

        const listener = () => setMatchMedia(media.matches);

        media.addEventListener("change", listener);

        return () => media.removeEventListener("change", listener);
    }, [query]);

    return matchMedia;
};

export default useMediaQuery;
