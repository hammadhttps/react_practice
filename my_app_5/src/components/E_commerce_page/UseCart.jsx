import { useContext } from "react";
import { CartContext } from "./CartContext";

export function UseCart()
{
    return useContext(CartContext);
}