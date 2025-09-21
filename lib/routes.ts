export type Route = {
    name: string;
    path: string;
    description: string;
}

export const routes: Route[] = [
    {
        name: "Ben 10",
        path: "/ben10",
        description: "Showcase of ben 10 animations and interactions",
    },
    {
        name: "Food",
        path: "/food",
        description: "Showcase of food animations and interactions",
    },
] as const;