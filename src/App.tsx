import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";

const eventsList = [
  {
    name: "ev1 20.03-20.04",
    localisation: "aaa",
    start: "1679313581000",
    end: "1681991981000",
    description: "lorem ipsum dolor sit am",
    need_accommodation: true,
    hotel_adress: "aaa",
    hotel_name: "xxx",
    hotel_reservation_number: "2137",
    need_transport: false,
  },
];

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
