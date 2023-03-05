import CreateEvent from "../../Modules/CreateEvent/CreateEvent";

const EditEvent = () => {
  const onSubmit = (data: unknown) => console.log(data);
  return (
    <section>
      <header>
        <h2>edit</h2>
      </header>
      <CreateEvent submitHandler={onSubmit} />
    </section>
  );
};

export default EditEvent;
