import Product from "./Product"

interface Order {
  id: string; // Consider using string type for document IDs
  customer_id: number;
  products: Product[];
  total_price: number;
  status: Order_Status; // Use the enum here
  created_at: Date;
  updated_at: Date;
  tracking_number?: string; // Optional field
  shipping_address: {
    street: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
  };
  billing_address: {
    street: string;
    city: string;
    state: string;
    zip_code: string;
    country: string;
  };
  // Other fields as needed (e.g., payment information, notes, etc.)
  payment: Payment;
  notes: Note[];
}

// Notes.ts
interface Note {
  id: string;
  order_id: string;
  content: string;
  author: string;
  created_at: Date;
  updated_at: Date;
}

interface Payment {
  id: string;
  order_id: string;
  amount: number;
  method: string;
  status: string;
  created_at: Date;
  updated_at: Date;
}

enum Order_Status {
  Pending = "pending",
  Shipped = "shipped",
  Delivered = "delivered",
  Cancelled = "cancelled",
}
