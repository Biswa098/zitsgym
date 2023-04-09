import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import exerciseRouter from "./routes/exercise.routes.js";
import dietRouter from "./routes/diet.routes.js";

dotenv.config();

const server = express();
server.use(cors());
 server.use(express.json({ limit: "50mb" }));

server.use("/api/v2/users", userRouter);
server.use("/api/v2/exercises", exerciseRouter);
server.use("/api/v1/diets", dietRouter);

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);

        server.listen(8080, () =>
            console.log("Server started on port http://localhost:8080"),
        );
    } catch (error) {
        console.log(error);
    }
};

startServer();
