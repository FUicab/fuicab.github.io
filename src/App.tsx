import { Outlet } from 'react-router-dom';
import Footer from './blocks/Footer';
import Nav from './blocks/Nav';

export default function App() {
    return (
        <div>
            <Nav />

            <main style={{ padding: '1rem' }}>
                {/* This is where Home or About will render */}
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
}