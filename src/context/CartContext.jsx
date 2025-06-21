import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      { const existingItem = state.items.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      }; }
    case "REMOVE":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case "CLEAR":
      return {
        ...state,
        items: [],
      };

    default:
      return state;
  }
}

export function CartProvider({children}){
    const [state, dispatch] = useReducer(cartReducer, {
        items: []
    })

    const addToCart = (product) => {
        dispatch({type: "ADD" , payload: product})
    }

    const removeFromCart = (productId) => {
        dispatch({type: "REMOVE", payload: productId})
    }

    const updateQuantity = (productId, quantity) => {
        dispatch({type: "UPDATE" , payload: {id: productId, quantity}})
    }

    const clearCart = () => {
        dispatch({type: "CLEAR"})
    }

    const totalItems = state.items.reduce((sum,item) => sum + item.quantity, 0)
    const totalPrice = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity, 0
    )


    return(
        <CartContext.Provider value={{
            items: state.items,
            totalItems,
            totalPrice,
            addToCart,
            removeFromCart,
            updateQuantity,
            clearCart
        }}>
            {children}
        </CartContext.Provider>
    )
}

export function useCart(){
   return useContext(CartContext)
}


