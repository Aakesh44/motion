export default function Ben10Layout({children}:{ children: React.ReactNode }){
    return (
        <section className="relative w-full h-full bg-pink-200">

            <div className="min-h-screen w-full bg-[#020617] relative">
                {/* Emerald Radial Glow Background */}
                <div
                    className="absolute inset-0 z-0"
                    style={{
                        backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
                    }}
                />
                
                {children}
            </div>


        </section>
    )
}