import React from "react";
import './styles.scss';

function GetAvailability() {
    return (
        <div className="App">
            <header className="App-header">
                <main className="calendar-contain">
                <center><h3>Book a service</h3></center>
                    <section className="title-bar">
                        <span className="title-bar__year">
                            Janaury 2023
                        </span>
                        <span >
                        <select>
                            <option value=''>--Select Month--</option>
                            <option selected value='1'>Janaury</option>
                            <option value='2'>February</option>
                            <option value='3'>March</option>
                            <option value='4'>April</option>
                            <option value='5'>May</option>
                            <option value='6'>June</option>
                            <option value='7'>July</option>
                            <option value='8'>August</option>
                            <option value='9'>September</option>
                            <option value='10'>October</option>
                            <option value='11'>November</option>
                            <option value='12'>December</option>
                        </select> 
                        </span>
                    </section>

                    <aside className="calendar__sidebar">
                        <div className="sidebar__nav">
                            <span className="sidebar__nav-item"><img className="icon icons8-Up" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAxklEQVRYR+3VwQ2DMAyF4Z8NOkI36AodpZ2sjMAoHaWdoJWlIEXI4RHnwMWROAH2ZxuSiZPXdHJ+EjDagUcZ4Rwd5QjAkr9K4icQQkQBdfK1+BAiAvCShxG9gG3b6xGExtED8Gb+K6VbnNA3cRTQCl4DzNKNOALYC7oFdCMUQFXkAboQCvAGbkDrF2sBasQXuAIfb7NSgAtwB5bGTrcHWBFWhF3uUgC1wyqAen/4NExAdiA7kB3IDmQH5GGjHhg9DVV8eT8Bf2HqNiEP+isaAAAAAElFTkSuQmCC"/></span>
                            <span className="sidebar__nav-item"><img className="icon icons8-Down" width="22px" height="22px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAA4UlEQVRYR+2WgQnCMBBFXzdwBSdwBUfRyXQER3EUN1AOEgnxLrkkhYCkUFpI7/+Xf1fajcnHNtmfBTCawDu0sFunuzAYL4CVwEpgJbAS+P8EDsAZeBj/DbUELsAznKpE7WMkxSfgCtwVhRKAmN+AF3AM1x+JGkAUkUINwgKo1X1BagDyYElMA3Cbi7gHoASRAzSZtwBYEClAs3krgAYhQxbnI73XBrbrLdCK0p3m69bbYv79e2cgF9Agms17WpCCdPU830lvAlFHIORw93xvALO33oXRBLw+uw/hsHEUmJ7ABzErNiGyzfJcAAAAAElFTkSuQmCC"/></span>
                        </div>
                        <h2 className="sidebar__heading">Wednesday<br/>April 6</h2>
                        <ul className="sidebar__list">
                            <li className="sidebar__list-item sidebar__list-item--complete"><span className="list-item__time">8.30</span> Team Meeting</li>
                            <li className="sidebar__list-item sidebar__list-item--complete"><span className="list-item__time">10.00</span> Lunch with Sasha</li>
                            <li className="sidebar__list-item"><span className="list-item__time">2.30</span> Design Review</li>
                            <li className="sidebar__list-item"><span className="list-item__time">4.00</span> Get Groceries</li>
                        </ul>
                    </aside>


                    <section className="calendar__days">
                        <section className="calendar__top-bar">
                            <span className="top-bar__days">Mon</span>
                            <span className="top-bar__days">Tue</span>
                            <span className="top-bar__days">Wed</span>
                            <span className="top-bar__days">Thu</span>
                            <span className="top-bar__days">Fri</span>
                            <span className="top-bar__days">Sat</span>
                            <span className="top-bar__days">Sun</span>
                        </section>

                        <section className="calendar__week">
                            <div className="calendar__day inactive">
                                <span className="calendar__date">30</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day inactive">
                                <span className="calendar__date">31</span>
                                <span className="calendar__task">4</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">1</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">2</span>
                                <span className="calendar__task">3</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">3</span>
                                <span className="calendar__task">1</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">4</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">5</span>
                                <span className="calendar__task">4</span>
                            </div>
                        </section>

                        <section className="calendar__week">
                            <div className="calendar__day">
                                <span className="calendar__date">6</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">7</span>
                                <span className="calendar__task">3</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">8</span>
                                <span className="calendar__task">3</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">9</span>
                                <span className="calendar__task">1</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">10</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">11</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">12</span>
                                <span className="calendar__task">1</span>
                            </div>
                        </section>

                        <section className="calendar__week">
                            <div className="calendar__day">
                                <span className="calendar__date">13</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">14</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day today">
                                <span className="calendar__date">15</span>
                                <span className="calendar__task calendar__task--today">4 items</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">16</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">17</span>
                                <span className="calendar__task">1</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">18</span>
                                <span className="calendar__task">4</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">19</span>
                                <span className="calendar__task">2</span>
                            </div>
                        </section>

                        <section className="calendar__week">
                            <div className="calendar__day">
                                <span className="calendar__date">20</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">21</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">22</span>
                                <span className="calendar__task">1</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">23</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">24</span>
                                <span className="calendar__task">5</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">25</span>
                                <span className="calendar__task">3</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">26</span>
                                <span className="calendar__task">1</span>
                            </div>
                        </section>

                        <section className="calendar__week">
                            <div className="calendar__day">
                                <span className="calendar__date">27</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day">
                                <span className="calendar__date">28</span>
                                <span className="calendar__task">1</span>
                            </div>
                            <div className="calendar__day inactive">
                                <span className="calendar__date">1</span>
                                <span className="calendar__task">2</span>
                            </div>
                            <div className="calendar__day inactive">
                                <span className="calendar__date">2</span>
                                <span className="calendar__task">1</span>
                            </div>
                            <div className="calendar__day inactive">
                                <span className="calendar__date">3</span>
                                <span className="calendar__task">5</span>
                            </div>
                            <div className="calendar__day inactive">
                                <span className="calendar__date">4</span>
                                <span className="calendar__task">3</span>
                            </div>
                            <div className="calendar__day inactive">
                                <span className="calendar__date">5</span>
                                <span className="calendar__task">1</span>
                            </div>
                        </section>
                    </section>
                </main>
            </header>
        </div>
    );
}

export default GetAvailability;
