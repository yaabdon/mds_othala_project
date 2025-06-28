import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";
import { UpdateUserController } from "./controllers/UpdateUserController";
import { DeleteUserController } from "./controllers/DeleteUserController";
import { ListUsersController } from "./controllers/ListUsersController";

const routes = Router();
const deleteUserController = new DeleteUserController();
const listUsersController = new ListUsersController();
routes.delete("/users/:id", (request, response) => {
    return deleteUserController.handle(request, response);
});

routes.post("/users", async (request, response) => {
    return new CreateUserController().handle(request, response);
});

routes.put("/users/:id", (request, response) => {
    return new UpdateUserController().handle(request, response);
});

routes.get("/users", (request, response) => {
    return listUsersController.handle(request, response);
});

routes.get("/allusers", (request, response) => {
    return listUsersController.handle(request, response);
});

export { routes };