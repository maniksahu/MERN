import {addNewPlayer} from "../controllers/playerController";

const routes = (app) =>{
    app.route("/player").post(addNewPlayer); // Post end point
}

export default routes;