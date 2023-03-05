import { PayloadAction } from "@reduxjs/toolkit";
import { eventProps } from "../../../../types/events";
import { add } from "../actions/add";
import { EventsState } from "../slice";

export const eventReducers = {
  addEvent: (state: EventsState, action: PayloadAction<eventProps>) =>
    add(state, action),
};
