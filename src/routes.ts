import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const routes = Router();
routes.post("/users", async (request, response) => {
    return new CreateUserController().handle(request, response);
});


export { routes };