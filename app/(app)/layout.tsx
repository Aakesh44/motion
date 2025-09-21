import Nav from "@/components/nav";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="mx-auto p-4 pt-8 flex flex-col gap-4 items-center justify-center md:max-w-5xl">

            <Nav/>

            {children}

        </main>
    );
}