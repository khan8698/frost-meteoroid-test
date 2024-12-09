"use client";
import BookingCard from "@/components/Booking";
// import { useState } from "react";
// import Datepicker, { DateValueType } from "react-tailwindcss-datepicker";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";

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
  // const [value, setValue] = useState<DateValueType>({
  //   startDate: null,
  //   endDate: null,
  // });
  return (
    <div className="min-h-screen flex">
      {/* Main Content */}
      <div className="p-4">
        {/* Sidebar */}
        <div className="w-16">
          <button className="text-2xl">☰</button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-semibold">Upcoming Bookings</h1>
          <button className="text-lg text-start">Find Available Chef</button>
        </div>

        {/* Search and Filters */}
        <div>
          <Input
            className="rounded-xl bg-gray-200 border-gray-300"
            placeholder="Search by client name..."
          />
        </div>

        <div className="w-full flex gap-4 mt-4 mb-6">
          <div className="w-1/4 flex flex-col">
            <label className="font-semibold">Sort By:</label>
            <Select>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="w-3/4 flex flex-col">
            <label className="font-semibold">Select Date:</label>
            <Select>
              <SelectTrigger className="rounded-xl">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
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
