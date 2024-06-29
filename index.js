const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

dotenv.config(); // Load config

async function main() {
  await connectDB();
  // MIDDLEWARES
  // parse json body in request (for POST, PUT, PATCH requests)
  app.use(express.json());

  // allow CORS fir local development (for production, you should configure it properly)
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );

  // ROUTES
  const bookRoutes = require("./routes/book.route");
  app.use("/api/books", bookRoutes);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

main();
