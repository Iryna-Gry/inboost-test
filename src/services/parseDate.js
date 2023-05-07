import moment from "moment";
moment().format();

export const parseDate = (date) => {
  const dateParsed = moment(date, moment.ISO_8601);

  const shortDate = parseShortDate(dateParsed);
  const shortTime = parseShortTime(dateParsed);
  const today = new Date().getDate();
  if (parseInt(shortDate) === today) {
    return shortTime;
  }
  return shortDate;
};

const parseShortDate = (dateParsed) => {
  const year = dateParsed._d.getFullYear().toString();
  const parsedYear = year.split("").slice(-2).join("");

  const month = dateParsed._d.getMonth() + 1;
  const parsedMonth = month < 10 ? "0" + month : month.toString();

  const day = dateParsed._d.getDate();
  const parsedDay = day < 10 ? "0" + day : day.toString();

  return `${parsedDay}/${parsedMonth}/${parsedYear}`;
};

const parseShortTime = (dateParsed) => {
  const minutes = dateParsed._d.getMinutes();
  const parsedMinutes = minutes < 10 ? "0" + minutes : minutes.toString();

  const hours = dateParsed._d.getHours();
  if (hours.toString().length === 1) {
    const parsedHours = "0" + hours;

    return `${parsedHours}:${parsedMinutes} AM`;
  } else if (hours >= 10 && hours <= 12) {
    const parsedHours = hours.toString();

    return `${parsedHours}:${parsedMinutes} AM`;
  } else {
    const calcHours = hours - 12;
    const parsedHours = calcHours < 10 ? "0" + calcHours : calcHours.toString();

    return `${parsedHours}:${parsedMinutes} PM`;
  }
};
