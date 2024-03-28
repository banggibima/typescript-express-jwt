import { Router } from "express";
import { authenticate } from "../middleware/authenticate";
import profilehandler from "../handlers/profile";

const profiles = Router();

profiles.use(authenticate);

profiles.get("/", profilehandler.getProfilesHandler);
profiles.get("/:id", profilehandler.getProfileByIdHandler);
profiles.post("/", profilehandler.createProfileHandler);
profiles.put("/:id", profilehandler.updateProfileHandler);
profiles.delete("/:id", profilehandler.destroyProfileHandler);

export default profiles;
