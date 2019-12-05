/* eslint-disable no-console */
import { auth } from "@/services/firebase";
import { getCurrentUser } from "@/helpers";

export default async context => {
    console.log('server/client: ', process.server);
    
  const user = await getCurrentUser(auth);
  console.log("from init.client plugin -> user", user);
  await context.store.dispatch("nuxtClientInit", user);
};
