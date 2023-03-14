import { useEffect } from 'react';

export default function useExternalScripts({ url }) {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");

        script.setAttribute("src", url);
        script.setAttribute("type", "text/babel")
        head.appendChild(script);

        return () => {
            head.removeChild(script);
        };
    }, [url]);
};