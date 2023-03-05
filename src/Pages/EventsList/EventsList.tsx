import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/state/useAppSelector";
import { addEvent, events } from "../../state/slice/events/slice";
import { useAppDispatch } from "../../hooks/state/useAppDispatch";
import { eventProps } from "../../types/events";

const event: eventProps = {
  id: "888",
  name: "ev1 20.03-20.03",
  localisation: "bbb",
  start: "1679313581000",
  end: "1679313581001",
  description: "bbbb lorem ipsum dolor sit am",
  need_accommodation: true,
  hotel_adress: "ccc",
  hotel_name: "ddd",
  hotel_reservation_number: "333",
  need_transport: false,
};

const EventsList = () => {
  const eventsList = useAppSelector(events);
  const dispatch = useAppDispatch();

  console.log(eventsList);
  return (
    <section>
      <header>
        <h2>Events list</h2>
        <nav>
          <ul>
            <li>
              <Link to="/add">Add Event</Link>
            </li>
          </ul>
        </nav>
      </header>
      <button onClick={() => dispatch(addEvent(event))}>Add event</button>
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          {eventsList.map(({ name, id }) => (
            <tr key={id}>
              <td>{name}</td>
              <td>
                <Link to={`${id}/edit`}>Edit</Link>
                <button>remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
};

export default EventsList;
