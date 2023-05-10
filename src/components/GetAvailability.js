import React, {useState, useEffect} from "react";
import './styles.scss';
import {MONTH_NAMES, getDay, DAYS, month_name, getDateObj, getNumberSuffix, generateMonthDays} from '../lib/constants';
const dayjs = require('dayjs');

function GetAvailability() {
    const [currentDate, setCurrentDate] = useState(null);
    const date = new Date();
    const [rows, setRows] = useState([]);
    const [daysInMonth, setDaysInMonth] = useState(new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate());
    const [firstDayOfMonth, setFirstDayOfMonth] = useState(new Date(date.getFullYear(), date.getMonth() , 1).getDay());
    useEffect(() => {
        const {year, month, date} = getDateObj();
        setCurrentDate(`${year}-${month}-${date}`);
    }, []);
    useEffect(() => {
        generateMonthDays(daysInMonth, firstDayOfMonth, setRows);
    }, [currentDate, daysInMonth, firstDayOfMonth]);
    const setMonth = (mon) => {
        const selectedMonthIndex = MONTH_NAMES.findIndex((item) => {
            return mon === item
        });
        let month = selectedMonthIndex + 1;
        const {year, date} = getDateObj(dayjs(currentDate).get('year'), month, dayjs(currentDate).get('date'));
        setDaysInMonth(new Date(dayjs(currentDate).year(), selectedMonthIndex + 1, 0).getDate());
        setFirstDayOfMonth(new Date(dayjs(currentDate).year(), selectedMonthIndex, 1).getDay());
        setCurrentDate(`${year}-${month}-${date}`);
    };
    const setYear = (year) => {
        const {month, date} = getDateObj(year, dayjs(currentDate).get('month') + 1, dayjs(currentDate).get('date'));
        setDaysInMonth(new Date(year, dayjs(currentDate).month() + 1, 0).getDate());
        setFirstDayOfMonth(new Date(year, dayjs(currentDate).month(), 1).getDay());
        setCurrentDate(`${year}-${month}-${date}`);
    };
    return (
        <div className="App">
            <header className="App-header">
                <main className="calendar-contain">
                <center>
                    <nav className="navbar navbar-light bg-light">
                        <div className="container-fluid">
                            <span className="navbar-brand mb-0 h1">Book a service - ReactJS, JSON Server</span>
                        </div>
                    </nav>
                    </center>
                    <section className="title-bar">
                        <span className="title-bar__year serviceTitle">
                        {getDay(currentDate)}&nbsp;{dayjs(currentDate).date()}<sup>{getNumberSuffix(dayjs(currentDate).date())}</sup>, {month_name(new Date(currentDate))} {dayjs(currentDate).year()}
                        </span>
                        <span >
                        <select value={month_name(new Date(currentDate))} onChange={(e) => {
                            setMonth(e.target.value);
                        }}>
                            {MONTH_NAMES.map((option) => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>&nbsp;
                        <select value={dayjs(currentDate).year()} onChange={(e) => {
                            setYear(e.target.value);
                        }}>
                            <option value='2022'>2022</option>
                            <option value='2023'>2023</option>
                            <option value='2024'>2024</option>
                        </select>
                        </span>
                    </section>

                    <aside className="calendar__sidebar">
                        <h2 className="sidebar__heading">Slots</h2>
                        <ul className="sidebar__list">
                            <li className="sidebar__list-item sidebar__list-item--complete"><span className="list-item__time">8.30</span> Team Meeting</li>
                            <li className="sidebar__list-item sidebar__list-item--complete"><span className="list-item__time">10.00</span> Lunch with Sasha</li>
                            <li className="sidebar__list-item"><span className="list-item__time">2.30</span> Design Review</li>
                            <li className="sidebar__list-item"><span className="list-item__time">4.00</span> Get Groceries</li>
                        </ul>
                    </aside>
                    <section className="calendar__days">
                        <section className="calendar__top-bar">
                        {DAYS.map((weekday) => (
                            <span className="top-bar__days" key={weekday}>{weekday}</span>
                        ))}
                        </section>
                        {rows}
                    </section>
                </main>
            </header>
        </div>
    );
}

export default GetAvailability;
