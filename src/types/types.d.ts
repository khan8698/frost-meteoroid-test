interface Booking {
  title: string;
  date: string;
  status: "scheduled" | "canceled" | "pending"; // Enum for possible statuses
  clientName: string;
  chefName: string;
  duration: string;
  payout: string;
}
