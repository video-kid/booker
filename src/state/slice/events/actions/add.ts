import { PayloadAction } from "@reduxjs/toolkit";
import { eventProps } from "../../../../types/events";
import { EventsState } from "../slice";

export const add = (state: EventsState, action: PayloadAction<eventProps>) => {
  state.list = [...state.list, action.payload];
};
