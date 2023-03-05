import { createSlice } from "@reduxjs/toolkit";
import { eventProps } from "../../../types/events";
import { RootState } from "../../store";
import { eventReducers } from "./reducers/reducer";

const eventsList: Array<eventProps> = [
  {
    id: "222",
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

export interface EventsState {
  list: Array<eventProps>;
}

const initialState: EventsState = {
  list: eventsList,
};

export const eventSlice = createSlice({
  name: "events",
  initialState,
  reducers: eventReducers,
});

export const { addEvent } = eventSlice.actions;

export const events = (state: RootState) => state.event.list;

export default eventSlice.reducer;
