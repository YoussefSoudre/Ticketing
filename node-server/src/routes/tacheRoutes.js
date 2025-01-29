import { 
    addNewTache, 
    getTaches, 
    getTacheWithID, 
    updateTache,
    deleteTache 
} from '../controllers/tacheController';

import { getEmployee, addNewEmployee } from '../controllers/employeeController';
import { getTicket, addNewTicket} from '../controllers/ticketController';

const routes = (app) => {
    app.route('/tache')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getTaches)
    
    // POST endpoint
    .post(addNewTache);

    app.route('/tache/:tacheId')
    // get specific contact
    .get(getTacheWithID)
    
    // put request
    .put(updateTache)

    // delete request
    .delete(deleteTache);

    app.route('/employee')
    .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`)
        console.log(`Request type: ${req.method}`)
        next();
    }, getEmployee)
    
    .post(addNewEmployee);


    app.route("/ticket")
      .get((req, res, next) => {
        // middleware
        console.log(`Request from: ${req.originalUrl}`);
        console.log(`Request type: ${req.method}`);
        next();
      },
     getTicket)

      // POST endpoint
      .post(addNewTicket);
 
   
  

    
}

export default routes;
