import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/state/useAppSelector";
import { events } from "../../state/slice/events/slice";

const EventsList = () => {
  const eventsList = useAppSelector(events);
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
      <table>
        <thead>
          <tr>
            <td>name</td>
            <td>localization</td>
            <td>start</td>
            <td>end</td>
            <td>accommodation</td>
            <td>transport</td>
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          {eventsList.map(
            ({
              name,
              id,
              localization,
              start,
              end,
              need_accommodation,
              hotel_name,
              need_transport,
            }) => (
              <tr key={id}>
                <td>{name}</td>
                <td>{localization}</td>
                <td>{start}</td>
                <td>{end}</td>
                <td>{need_accommodation ? hotel_name : "n/a"}</td>
                <td>{need_transport ? "route" : "n/a"}</td>
                <td>
                  <Link to={`${id}/edit`}>Edit</Link>
                  <button>remove</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </section>
  );
};

export default EventsList;
