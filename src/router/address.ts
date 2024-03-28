import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import addresshandler from "../handlers/address";

const addresss = Router();

addresss.use(authenticate);

addresss.get("/", addresshandler.getAddressesHandler);
addresss.get("/:id", addresshandler.getAddressByIdHandler);
addresss.post("/", addresshandler.createAddressHandler);
addresss.put("/:id", addresshandler.updateAddressHandler);
addresss.delete("/:id", addresshandler.deleteAddressHandler);

export default addresss;
