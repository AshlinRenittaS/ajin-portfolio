import express from "express";
import dotenv from "dotenv";
import cors from "cors"; // 👈 ADD THIS
import mailRoutes from "./routes/mailRoutes.js";

dotenv.config();

const app = express();

// Middleware
// app.use(cors({
//   origin: "http://localhost:5173", // 👈 your frontend URL
//   methods: ["GET", "POST"],
//   credentials: true
// }));

const allowedOrigins = [
  "http://localhost:5173",
  "https://ajin-portfolio-nu.vercel.app"
];

app.use(cors({
  origin: function (origin, callback) {
    // allow requests with no origin (like Postman)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  methods: ["GET", "POST"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api/mail", mailRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} 🚀`);
});