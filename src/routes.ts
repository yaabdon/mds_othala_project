import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";

const routes = Router();

routes.post("/users", async (request, response) => {
    return new CreateUserController().handle(request, response);
});

routes.put("/users/:id", (request, response) => {
    return new UpdateUserController().handle(request, response);
});


export { routes };