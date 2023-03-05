import { Link } from "react-router-dom";

const EventsList = () => {
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
            <td>actions</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>name here</td>
            <td>
              <Link to={`${666}/edit`}>Edit</Link>
              <button>remove</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default EventsList;
