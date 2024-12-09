"use client";
import BookingCard from "@/Components/Booking";
import { useState } from "react";
import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";

const bookings: Booking[] = [
  {
    title: "Standard Weekly Prep - 3.5 hours",
    date: "Sat, Dec 7, 2024 · 12:30 PM CST",
    status: "canceled", // possible values: 'scheduled', 'canceled', 'pending'
    clientName: "Zainab G",
    chefName: "Horacio Ribe",
    duration: "210 minutes",
    payout: "Pending",
  },
  // Add more bookings here as needed
];

export default function Home() {
  const [value, setValue] = useState<DateValueType>({
    startDate: null,
    endDate: null,
  });
  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Sidebar */}
        <div className="w-16">
          <button className="text-2xl">☰</button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Upcoming Bookings</h1>
          <button className="text-lg text-blue-600">Find Available Chef</button>
        </div>

        {/* Search and Filters */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search by client name..."
              className="w-full p-2 rounded-lg border border-gray-300"
            />
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Sort by:</span>
            <select className="p-2 rounded-lg border border-gray-300">
              <option>Event Name</option>
              <option>Client Name</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm">Select Date:</span>
            <Datepicker
              value={value}
              onChange={(newValue: DateValueType) => setValue(newValue)}
            />
          </div>
        </div>

        {/* Booking List */}
        <div className="space-y-4">
          {bookings.map((booking, index) => (
            <BookingCard key={index} booking={booking} />
          ))}
        </div>
      </div>
    </div>
  );
}
