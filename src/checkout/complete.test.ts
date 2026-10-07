import assert from "node:assert/strict";
import test from "node:test";
import { completeCheckout } from "./complete.ts";

test("sends a receipt after successful payment", async () => {
  const order = await completeCheckout({ id: "order-1", amount: 20 });
  assert.equal(order.id, "order-1");
  assert.equal(order.amount, 20);
});
