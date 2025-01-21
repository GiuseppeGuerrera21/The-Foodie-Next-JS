import Link from "next/link";

export default function Meals() {
    return (
        <main style={{ color: 'white', textAlign: 'center' }}>
            <h1>
                Time to get started!
            </h1>
            <p>Piatti Italiani</p>
            <p><Link href='/meals/slug-1'>Pasto 1</Link></p>
            <p><Link href='/meals/slug-2'>Pasto 2</Link></p>
            <p><Link href='/meals/slug-3'>Pasto 3</Link></p>
            <p><Link href='/meals/slug-4'>Pasto 4</Link></p>
        </main>
    )
}