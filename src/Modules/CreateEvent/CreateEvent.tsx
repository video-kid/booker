import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import { eventProps } from "../../types/events";

type CreateEventProps = {
  submitHandler: SubmitHandler<eventProps>;
};

const CreateEvent = ({ submitHandler }: CreateEventProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<eventProps>();

  // console.log(errors);
  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <div>
          <label htmlFor="name">name</label>
          <input
            type="text"
            placeholder="name"
            id="name"
            {...register("name", { required: false })}
          />
        </div>
        <div>
          <label htmlFor="localization">localization</label>
          <input
            type="text"
            placeholder="localization"
            id="localization"
            {...register("localization", { required: false })}
          />
        </div>
        <div>
          <label htmlFor="start">start</label>
          <input
            type="text"
            placeholder="start"
            {...register("start", { required: false })}
          />
        </div>
        <div>
          <label htmlFor="end">end</label>
          <input type="text" placeholder="end" {...register("end", {})} />
        </div>
        <div>
          <label htmlFor="description">description</label>
          <input
            type="text"
            placeholder="description"
            {...register("description", {})}
          />
        </div>
        <div>
          <label htmlFor="need_accommodation">need hotel</label>
          <input
            type="checkbox"
            placeholder="need_accommodation"
            {...register("need_accommodation", {})}
          />
        </div>
        <div>
          <label htmlFor="hotel_adress">hotel_adress</label>
          <input
            type="text"
            placeholder="hotel_adress"
            {...register("hotel_adress", {})}
          />
        </div>
        <div>
          <label htmlFor="hotel_name">hotel_name</label>
          <input
            type="text"
            placeholder="hotel_name"
            {...register("hotel_name", {})}
          />
        </div>
        <div>
          <label htmlFor="hotel_reservation_number">
            hotel_reservation_number
          </label>
          <input
            type="text"
            placeholder="hotel_reservation_number"
            {...register("hotel_reservation_number", {})}
          />
        </div>
        <div>
          <label htmlFor="need_transport">need_transport</label>
          <input
            type="checkbox"
            placeholder="need_transport"
            {...register("need_transport", {})}
          />
        </div>

        <button type="submit">send</button>
      </form>
      <Link to="/">cancel</Link>
    </>
  );
};

export default CreateEvent;
