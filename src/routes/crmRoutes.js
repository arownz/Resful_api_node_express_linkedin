import { addNewContact, getContacts, getContactWithId, updateContact, deleteContact } from "../controllers/crmController";

const routes = (app) => {
  app
    .route("/contact")
    // get all contacts
    .get((req, res, next) => {
      // middleware
      console.log(`Request from: ${req.originalUrl}`);
      console.log(`Request from: ${req.method}`);
      next();
    }, getContacts)

    .post(addNewContact)

  app
    .route("/contact/:contactId")
    // get specific contact
    .get(getContactWithId)

    // update specific contact
    .put(updateContact)

    // delete specific contact
    .delete(deleteContact)
};

export default routes;
