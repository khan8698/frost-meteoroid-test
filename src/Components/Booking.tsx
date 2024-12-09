import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";
import { ChevronDown, ChevronUp } from "lucide-react";

const BookingCard: React.FC<{ booking: Booking }> = ({ booking }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCard = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-full bg-white rounded-xl border border-gray-300 p-4">
      <div className="flex justify-between items-center gap-2">
        <div className="grid">
          <h2 className="font-semibold text-lg truncate">{booking.title}</h2>
        </div>
        <div className="flex gap-1 shrink-0">
          <DropdownMenu>
            <DropdownMenuTrigger className="bg-gray-100 relative rounded-md w-8 h-8 border border-gray-300 flex items-center justify-center">
              <span className="absolute top-0">...</span>
            </DropdownMenuTrigger>
          </DropdownMenu>

          <button
            onClick={toggleCard}
            className="bg-gray-100 rounded-md w-8 h-8 border border-gray-300 flex items-center justify-center font-thin"
          >
            {isOpen ? (
              <ChevronUp strokeWidth={1.5} width="16px" />
            ) : (
              <ChevronDown strokeWidth={1.5} width="16px" />
            )}
          </button>
        </div>
      </div>

      <div className="text-sm">{booking.date}</div>

      <div className="flex gap-2 mt-2">
        {/* Booking Status Tags */}

        <Badge
          className={` px-2 py-1 rounded-lg ${
            booking.status === "canceled"
              ? "bg-red-100 text-black border border-red-200"
              : booking.status === "scheduled"
              ? "bg-purple-100 text-purple-600"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {booking.status}
        </Badge>
        <Badge
          className="font-bold bg-gray-100 border border-gray-200 rounded-lg"
          variant="outline"
        >
          menu confirmed
        </Badge>
      </div>

      {isOpen && (
        <div className="mt-4 text-sm p-4 bg-gray-100 rounded-lg flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <span>Client Name</span>
            <span className="font-semibold">{booking.clientName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Chef Name</span>
            <span className="font-semibold">{booking.chefName}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Duration</span>
            <span className="font-semibold">{booking.duration}</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Chef Payout</span>
            <span className="font-semibold px-3 border border-gray-200 rounded-lg">
              {booking.payout}
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingCard;
