import type { Config } from "tailwindcss";

export default {
    content: [
        "./app/**/*.{js,jsx,ts,tsx}",
        "./components/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        container: {
            center: true,
            padding: ".75rem",
        },
        extend: {
            spacing: {
                13: "3.25rem",
                15: "3.75rem",
                18: "4.5rem",
                21: "5.25rem",
                30: "7.5rem",
            },
            colors: {
                primary: {
                    tint: "#FAF7F5",
                    10: "#f7f2ee",
                    40: "#F1EAE4",
                    60: "#E1D1C2",
                    80: "#D0B79F",
                    100: "#BF9D7D",
                    120: "#7B6651",
                },
                success: {
                    10: "#E8FEE7",
                    20: "#bcfbbd",
                    100: "#52dd7e",
                    120: "#299f65",
                },
                info: {
                    10: "#e6fbfe",
                    20: "#b1effe",
                    100: "#3badef",
                    120: "#1d66ac",
                },
                alert: {
                    10: "#fdecef",
                    20: "#f5ccd1",
                    100: "#da3e51",
                    120: "#c22538",
                },
                neutral: {
                    10: "#f9f9f9",
                    40: "#ececec",
                    60: "#909090",
                    80: "#4b4b4b",
                    bg: "#140f0a",
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
