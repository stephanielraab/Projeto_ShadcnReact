import { useCartStore } from "@/stores/cart-store";
import { useCheckoutStore } from "@/stores/checkout-store";

export const generateMessage = () => {
    const { name, email, phone, address } = useCheckoutStore(state => state);
    const { cart } = useCartStore(state => state);

    return `**Dados do Cliente:**
Nome: ${name}
E-mail: ${email}
Telefone: ${phone}
Endereço: ${address.street}, ${address.number} - (${address.complement})
${address.district}, ${address.city}/${address.state}
-------
**Pedido:**
${cart
  .map(item => `- ${item.quantity}x ${item.product.name} (R$ ${item.product.price.toFixed(2)})`)
  .join('\n')}
`;
};
