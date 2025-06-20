import { createBrowserRouter } from "react-router-dom";
import RatingStarsPage from "../modules/feedback/pages/RatingPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <RatingStarsPage />,
    },
    {
        path: "*",
        element: <h1>404 - Página no encontrada</h1>,
    },
]);

export default router;
