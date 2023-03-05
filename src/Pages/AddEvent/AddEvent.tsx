import CreateEvent from "../../Modules/CreateEvent/CreateEvent";
import { useAppDispatch } from "../../hooks/state/useAppDispatch";
import { eventProps } from "../../types/events";
import { addEvent } from "../../state/slice/events/slice";

const AddEvent = () => {
  const dispatch = useAppDispatch();
  const onSubmit = (data: eventProps) => {
    dispatch(addEvent(data));
  };

  return (
    <section>
      <header>
        <h2>add</h2>
      </header>
      <CreateEvent submitHandler={onSubmit} />
    </section>
  );
};

export default AddEvent;
