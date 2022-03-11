import Navbar from './Navbar'
import Hero from './Hero'

export default function Header() {

    return (
        <div className="relative overflow-hidden bg-white border-b border-gray-50 shadow">
            <div className="max-w-7xl mx-auto">
                <Navbar />
                <Hero />
            </div>
        </div>
    )
}