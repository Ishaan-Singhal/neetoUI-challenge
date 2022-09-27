import dayjs from "dayjs";

export const calculateTimeDifference = date => dayjs(date).fromNow();

export const dayTimeFormatter = date => dayjs(date).format("dddd, hh:mmA");

export const monthDateFormatter = date => dayjs(date).format("MMM D, YYYY");
