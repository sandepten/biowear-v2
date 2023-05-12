import { XMarkIcon } from "@heroicons/react/24/outline";

interface Props {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Cart = (props: Props) => {
  const { isOpen, setIsOpen } = props;
  const cartItem = [];
  return (
    <div
      className={`fixed top-0 right-0 z-10 h-screen w-[85%] bg-white transition-transform duration-200 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-3">
        <p className="text-xl font-medium">Shopping Cart</p>
        <XMarkIcon className="w-8" onClick={() => setIsOpen(false)} />
      </div>
      <div className="h-[90%] px-4 pt-4">
        {!cartItem.length ? (
          <p>Your cart is empty</p>
        ) : // <div className="flex flex-col gap-4">
        //     {cartItem.map((item) => ())}
        // </div>
        null}
      </div>
    </div>
  );
};

export default Cart;
