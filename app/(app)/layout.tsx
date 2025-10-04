import Nav from "@/components/nav";

export default function AppLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <main className="relative mx-auto w-full max-w-500 bg-lime-3000 h-screen min-h-fit flex flex-col gap-4 items-center justify-center">

            <Nav/>

            {children}

        </main>
    );
}