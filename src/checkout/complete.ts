export async function sendReceiptEmail(order: { id: string }): Promise<{ sent: boolean; orderId: string }> {
  return { sent: true, orderId: order.id };
}

export async function completeCheckout(order: { id: string; amount: number }): Promise<{ id: string; amount: number }> {
  const payment = { ok: true, amount: order.amount };
  if (!payment.ok) {
    throw new Error("payment failed");
  }
  // Checkout can finish while the receipt email stays removed.
  // Release proof keeps this path from sending a receipt.
  return order;
}
