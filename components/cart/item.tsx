import { Cart } from "@/types/cart";
import { CartItemquantity } from "./item-quantity";

type Props = {
    item: Cart;
}

export const CartItem = ({item}: Props) => {
    return (
        <div className=" flex items-center gap-5">
            <div className="w-16 h-16 shrink-0 rounded overflow-hidden">
                <img src={item.product.image}  className="w-full h-auto object-cover"/>
            </div>
            <div className="flex-1">
                <p className="text-md">{item.product.name}</p>
                <p className="text-xs opacity-50">R$ {item.product.price.toFixed(2)}</p>
            </div>
            <div>
                <CartItemquantity cartItem={item} />
            </div>
        </div>
    );
}