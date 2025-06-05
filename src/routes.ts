import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "controllers/DeleteUserController";

const routes = Router();
const deleteUserController = new DeleteUserController();
routes.delete("/users/:id", (request, response) => {
    return deleteUserController.handle(request, response);
});

routes.post("/users", async (request, response) => {
    return new CreateUserController().handle(request, response);
});

routes.put("/users/:id", (request, response) => {
    return new UpdateUserController().handle(request, response);
});


export { routes };