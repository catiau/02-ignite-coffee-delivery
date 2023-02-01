import { Intro } from "./components/Intro";
import { OurCoffes } from "./components/OurCoffees";

export function Home() {
    return (
        <>
            <Intro />
                <main>
                    <OurCoffes />
                </main>
        </>
    )
}