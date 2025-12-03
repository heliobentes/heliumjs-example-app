import { defineWorker } from "heliumts/server";

export const helloWorldWorker = defineWorker(async () => {
    while (true) {
        console.log("Hello, World! from Helium Worker");
        await new Promise((resolve) => setTimeout(resolve, 10000));
        // throw "test"; // Wait for 10 seconds
    }
});
