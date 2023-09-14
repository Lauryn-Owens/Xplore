import React, { useState } from 'react';

import '../pageStyles/dashboardNotifications.css';

import NavigationBarDashboard from '../components/navigationBarDashboard';
import NotificationsToggle from '../components/notificationsToggle';

export default function DashboardNotifications() {
    const [moveOver, setMoveOver] = useState(false);
    const [pushOver, setPushOver] = useState(false);

    function pushOverLeft() {
        setPushOver(!pushOver);
    }
    return (
        <div className="dashboard_notifications">
            <NavigationBarDashboard
                pushOverLeft={pushOverLeft} />
            <main
                style={{ left: pushOver ? '313px' : '0' }}
                className="notifications_container">
                <ul className="notifications_container--list">
                    <li className="notifications_container--list--notifications">
                        <h2>Notifications</h2>
                        <p>We may still send you important notifications about your account
                            outside of your notification settings</p>
                    </li>
                    <hr id="first_hr"/>
                    <li className="notifications_container--list--recommendations">
                        <section className="notifications_container--list--recommendations--left">
                            <h3>Recommendations</h3>
                            <p>These are notifications for new recommendations
                                for new categories on Xplore</p>
                        </section>
                        <section className="notifications_container--list--recommendations--right">
                            <section className="notifications_container--list--recommendations--right--options">
                                <NotificationsToggle />
                                <p>Push</p>
                            </section>
                            <section className="notifications_container--list--recommendations--right--options">
                                <NotificationsToggle />
                                <p>Email</p>
                            </section>
                            <section className="notifications_container--list--recommendations--right--options">
                                <NotificationsToggle />
                                <p>SMS</p>
                            </section>
                        </section>
                    </li>
                    <hr />
                    <li className="notifications_container--list--recommendations">
                        <section className="notifications_container--list--recommendations--left">
                            <h3>Location</h3>
                            <p>These are notifications for instances when you are
                                close to your saved spots</p>
                        </section>
                        <section className="notifications_container--list--recommendations--right">
                            <section className="notifications_container--list--recommendations--right--options">
                                <NotificationsToggle />
                                <p>Push</p>
                            </section>
                            <section className="notifications_container--list--recommendations--right--options">
                                <NotificationsToggle />
                                <p>Email</p>
                            </section>
                            <section className="notifications_container--list--recommendations--right--options">
                                <NotificationsToggle />
                                <p>SMS</p>
                            </section>
                        </section>
                    </li>
                    <hr />
                    <li className="notifications_container--list--recommendations">
                        <section className="notifications_container--list--recommendations--left">
                            <h3>Reminders</h3>
                            <p>These are notifications to remind you of new updates made on Xplore</p>
                        </section>
                        <section className="notifications_container--list--recommendations--right">
                            <section className="notifications_container--list--recommendations--right--options">
                                <NotificationsToggle />
                                <p>Push</p>
                            </section>
                            <section className="notifications_container--list--recommendations--right--options">
                                <NotificationsToggle />
                                <p>Email</p>
                            </section>
                            <section className="notifications_container--list--recommendations--right--options">
                                <NotificationsToggle />
                                <p>SMS</p>
                            </section>
                        </section>
                    </li>
                    <hr />
                </ul>
            </main>
        </div>
    )
}