import React, { useState } from "react";
import "./App.css";

// Space Travel Booking Component
const SpaceBooking = () => {
  const [departureDate, setDepartureDate] = useState("");
  const [destination, setDestination] = useState("Moon");
  const [seatClass, setSeatClass] = useState("Economy");
  const [bookingSuccess, setBookingSuccess] = useState(false);

  const handleBooking = () => {
    setBookingSuccess(true);
    setTimeout(() => setBookingSuccess(false), 5000);  // Hide success message after 5 seconds
  };

  return (
    <div className="space-booking">
      <h1>Dubai to the Stars 🚀</h1>
      <h2>Book Your Space Travel Experience</h2>
      <label>
        Departure Date:
        <input
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)}
        />
      </label>
      <label>
        Destination:
        <select
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        >
          <option value="Moon">Moon</option>
          <option value="Mars">Mars</option>
          <option value="ISS">International Space Station (ISS)</option>
        </select>
      </label>
      <label>
        Seat Class:
        <select
          value={seatClass}
          onChange={(e) => setSeatClass(e.target.value)}
        >
          <option value="Economy">Economy</option>
          <option value="Luxury">Luxury</option>
          <option value="VIP">VIP Zero-Gravity</option>
        </select>
      </label>
      <button onClick={handleBooking}>Book Your Trip</button>

      {bookingSuccess && (
        <div className="booking-success">
          <h3>Booking Successful!</h3>
          <p>You're all set for your trip to {destination} on {departureDate} in {seatClass} class!</p>
        </div>
      )}
    </div>
  );
};

export default SpaceBooking;
