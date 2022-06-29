import { Route, Routes } from "react-router-dom";
import { Event } from "./pages/Event";
import { Subscribe } from "./pages/Subscribe";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Subscribe />} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
      <Route
        path="*"
        element={
          <div className="h-screen flex items-center justify-center">
            <h1>404 Página não encontrada</h1>
          </div>
        }
      />
    </Routes>
  );
}
