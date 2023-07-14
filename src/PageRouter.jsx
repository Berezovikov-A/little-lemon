import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Reservations from "./pages/Reservations";
import UnderConstruction from "./pages/UnderConstruction";

export default function PageRouter() {

    const pages = [
        {
            path: "/",
            key: "home",
            element: <Home />,
        },
        {
            path: "/reservations",
            key: "reservations",
            element: <Reservations />,
        },
        {
            path: "/under-construction",
            key: "under-construction",
            element: <UnderConstruction />,
        }
    ];

    return (
        <Routes>
            {pages.map((page) =>
                <Route {...page} />
            )}
        </Routes>
    );
}