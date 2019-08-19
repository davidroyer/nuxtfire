import { delay } from "@/helpers";

export default async context => {
  console.log("this might take some time....");
  await delay(5000);
  console.log("done!");
};
