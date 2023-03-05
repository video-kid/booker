import { RouteObject } from "react-router-dom";
import AddEvent from "../Pages/AddEvent/AddEvent";
import EventsList from "../Pages/EventsList/EventsList";

export const routes: Array<RouteObject> = [
  {
    path: "/",
    element: <EventsList />,
  },
  {
    path: "/add",
    element: <AddEvent />,
  },
  {
    path: "/:id/edit",
    element: <AddEvent />,
  },
];
