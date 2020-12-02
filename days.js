export default function GetDate() {
  const date = new Date();
  const theDate = date.getDate();
  const theYear = date.getFullYear();
  const theMonth = date.getMonth();
  const theDay = date.getDay();
  const theHour = date.getHours();
  const theMinute = date.getMinutes();
  let day = getday(theDay);
  let month = getmonth(theMonth);
  let dateOrder = date_order(theDate);

  function getday(d) {
    if (d === 0) {
      return 'Sunday';
    } else if (d === 1) {
      return 'Monday';
    } else if (d === 2) {
      return 'Tuesday';
    } else if (d === 3) {
      return 'Wednesday';
    } else if (d === 4) {
      return 'Thursday';
    } else if (d === 5) {
      return 'Friday';
    } else if (d === 6) {
      return 'Saturday';
    }
  }

  function date_order(theDateOrder) {
    var str = theDateOrder.toString();
    var lastDigit = str.charAt(str.length - 1);
    if (lastDigit === '1' && theDateOrder !== 11) {
      return 'st';
    } else if (lastDigit === '2' && theDateOrder !== 12) {
      return 'nd';
    } else if (lastDigit === '3' && theDateOrder !== 13) {
      return 'rd';
    } else {
      return 'th';
    }
  }

  function getmonth(m) {
    if (m === 0) {
      return 'January';
    } else if (m === 1) {
      return 'February';
    } else if (m === 2) {
      return 'March';
    } else if (m === 3) {
      return 'April';
    } else if (m === 4) {
      return 'May';
    } else if (m === 5) {
      return 'June';
    } else if (m === 6) {
      return 'July';
    } else if (m === 7) {
      return 'August';
    } else if (m === 8) {
      return 'September';
    } else if (m === 9) {
      return 'October';
    } else if (m === 10) {
      return 'November';
    } else if (m === 11) {
      return 'December';
    }
  }

  const currentDate =
    day +
    ', ' +
    theDate +
    dateOrder +
    ' ' +
    month +
    ' ' +
    theYear +
    ' at ' +
    ('0' + theHour).slice(-2) +
    ':' +
    ('0' + theMinute).slice(-2);

  return currentDate;
}
