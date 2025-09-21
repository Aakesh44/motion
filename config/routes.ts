export type Route = {
    name: string;
    path: string;
}

export const routes: Route[] = [
    {
        name: "Ben 10",
        path: "/ben10",
    },
    {
        name: "Food",
        path: "/food",
    },
] as const;