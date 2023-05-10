const dayjs = require('dayjs');

export const MONTH_NAMES = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const getDay = (dt) => {
    return DAYS[new Date(dt).getDay()];
}

export const month_name = function(dt) {
    return MONTH_NAMES[dt.getMonth()];
};
export const getDateObj = (yr, mon, dt) => {
    let now = dayjs();
    let year = yr || now.year();
    let month = mon || now.month() + 1;
    let date = dt || now.date();
    return {
        year,
        month,
        date
    }
}

export const getNumberSuffix = (i) => {
    let j = i % 10,
        k = i % 100;
    if (j === 1 && k !== 11) {
        return "st";
    }
    if (j === 2 && k !== 12) {
        return "nd";
    }
    if (j === 3 && k !== 13) {
        return "rd";
    }
    return "th";
}

export const generateMonthDays = (daysInMonth, firstDayOfMonth, setRows) => {
    let cells = [];
    let day = 1;
    let rows = [];
    for (let i = 0; i < 6; i++) {
        for (let j = 0; j < 7; j++) {
            if (day <= daysInMonth && (i > 0 || j >= firstDayOfMonth)) {
                cells.push(<div className="calendar__day" key={day}><span className="calendar__date">{day}</span></div>);
            day++;
            } else {
                cells.push(<div className="calendar__day" key={`${i}-${j}`}><span className="calendar__date"></span></div>);
            }
        }
        rows.push(<section className="calendar__week" key={i}>{cells}</section>);
        cells = [];
        if (day > daysInMonth) {
            break;
        }
    }
    setRows(rows);
}
