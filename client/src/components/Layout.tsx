import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
    return (
        <>
            <Header />
            
            <div className="govuk-width-container" id="main-container">
                <main className="govuk-main-wrapper" id="main-content">
                    <Outlet />
                </main>
            </div>

            <Footer />
        </>
    );
}