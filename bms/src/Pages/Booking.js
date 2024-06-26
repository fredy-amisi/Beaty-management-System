import React from "react";
import axios from "axios";
import { useState } from "react";
import Scrollbutton from '../Components/Scrollbutton';
import "../Css/Booking.css";

const Booking = () => {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post('http://localhost:80/api/booking.php', inputs);

            // Alert the user about successful insertion (assuming data indicates success)
            alert("Booking successful!");

            // Redirect to the dashboard page
            window.location.href = "/Dashboard";
        } catch (error) {
            // Handle any errors that occur during the API call
            console.error(error);
            alert("Error While: " + error.message);
        }
    };

    return (
        <>
            <div>
                <div className="Booking-container">
                    <form onSubmit={handleSubmit}>
                        <h2>Book Now</h2>
                        <div className="overral-divs">
                            <div className="div1">
                                <div>
                                    <input
                                        type="text"
                                        name="fullName"
                                        onChange={handleChange}
                                        placeholder="Write Your Full Name"
                                        required />

                                    <input
                                        type="email"
                                        name="email"
                                        onChange={handleChange}
                                        placeholder="Write Your email here"
                                        required />
                                </div>
                                <div>
                                    <label htmlFor="appointment-date">
                                        Appointment Date:
                                        <input
                                            type="date"
                                            name="appointmentDate"
                                            onChange={handleChange}
                                            required />
                                    </label>
                                </div>
                            </div>

                            <div className="div2">
                                <div>
                                    <select className="select"
                                        name="service"
                                        onChange={handleChange}
                                        required>
                                        <option value="">Select Service</option>
                                        <option value="hair-styling">Hair Styling</option>
                                        <option value="nail-care">Nail Care</option>
                                        <option value="facials">Facials</option>
                                        <option value="massage-therapy">Massage Therapy</option>
                                        <option value="makeup-artistry">Makeup Artistry</option>
                                        <option value="waxing-threading">Waxing and Threading</option>
                                        <option value="body-treatments">Body Treatments</option>
                                        <option value="spa-packages">Spa Packages</option>
                                        <option value="special-events">Special Events</option>
                                    </select>
                                </div>
                                <div>
                                    <select className="select"
                                        name="paymentMethod"
                                        onChange={handleChange}
                                        required>
                                        <option value="">Select Your Payment Method</option>
                                        <option value="mpesa">Mpesa</option>
                                        <option value="check">Check</option>
                                        <option value="cash">Cash</option>
                                    </select>
                                </div>
                                <div>
                                    <label htmlFor="appointment-time">
                                        Appointment Time:
                                        <input
                                            type="time"
                                            name="appointmentTime"
                                            onChange={handleChange}
                                            required />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="div">
                            <input type="submit" name="submit" value="Submit" />
                        </div>
                    </form>
                </div>
                <Scrollbutton />
            </div>
        </>
    );
};

export default Booking;
