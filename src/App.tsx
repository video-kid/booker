import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

const App = () => {
  const router = createBrowserRouter(routes);

  return (
    <div className="App">
      <header>
        <h1>Booker</h1>
      </header>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
