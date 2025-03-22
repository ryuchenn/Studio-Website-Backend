import express from "express";
import authRouter from "./auth/index.ts";
import eventsRouter from "./events/index.ts";

function registerRoutes(app: ReturnType<typeof express>) {
    app.use("/api/auth", authRouter);
    app.use("/api/events", eventsRouter);
}

export default registerRoutes;
