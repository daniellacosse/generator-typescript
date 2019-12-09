import exampleMessage from "./exampleMessage.helper";

test.concurrent("exampleMessage", async () =>
  Promise.resolve(expect(exampleMessage()).toBe("World!"))
);
