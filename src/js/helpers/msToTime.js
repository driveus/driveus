export default function msToTime(ms) {
  let duration = new Date(ms),
      minutes = parseInt(duration.getMinutes()),
      hours = parseInt(duration.getHours()),
      timeOfDay = hours >= 12 ? 'PM' : 'AM';
  hours = hours > 12 ? hours - 12 : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  return hours + ":" + minutes + ' ' + timeOfDay;
}
