import { delay } from "@/helpers";
export default async function({ store, redirect }) {
  if (!process.server) {
    console.log("FROM MIDDLEWARE client - this might take some time....");
    await delay(3000);
    console.log("FROM MIDDLEWARE client done!");
  }
}
