import { useState } from "react";

const BookingCard: React.FC<{ booking: Booking }> = ({ booking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white rounded-lg shadow p-4">
      <div className="flex justify-between items-center">
        <h2 className="font-semibold text-lg">{booking.title}</h2>
        <button onClick={toggleCard} className="text-gray-500">
          {isOpen ? "▲" : "▼"}
        </button>
      </div>
      <div className="text-gray-500 text-sm">{booking.date}</div>
      <div className="flex gap-4 mt-2">
        {/* Booking Status Tags */}
        <span
          className={`text-sm px-2 py-1 rounded-full ${
            booking.status === "canceled"
              ? "bg-red-100 text-red-600"
              : booking.status === "scheduled"
              ? "bg-purple-100 text-purple-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {booking.status}
        </span>
        <span className="text-sm text-green-600 bg-green-100 px-2 py-1 rounded-full">
          Menu Confirmed
        </span>
      </div>

      {isOpen && (
        <div className="mt-4 text-sm">
          <p>
            <strong>Client Name:</strong> {booking.clientName}
          </p>
          <p>
            <strong>Chef Name:</strong> {booking.chefName}
          </p>
          <p>
            <strong>Duration:</strong> {booking.duration}
          </p>
          <p>
            <strong>Chef Payout:</strong> {booking.payout}
          </p>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
