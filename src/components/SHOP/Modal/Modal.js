import { TextInput } from "flowbite-react";
import { Label } from "flowbite-react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Modal = ({ visible, onClose }: IModal) => {
  const notify = () => toast.success("Order placed successfully");

  const handlerOnClose = (e: React.MouseEvent<HTMLElement>) => {
    if (e.target.id === "container") onClose();
  };
  if (!visible) return null;

  return (
    <div
      id="container"
      onClick={handlerOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center "
    >
      <div className="artboard phone-3">
        <h1 className="   text-3xl font-medium">
          You have chosen the latest{" "}
          <span className=" text-red-700 font-bold"> NIKE 95 </span>sneakers.{" "}
        </h1>
        <p className=" font-medium mt-3">
          Fill out the form and in the next few days the sneakers will arrive at
          your address
        </p>
        <form className="flex flex-col gap-4 mt-7">
          <div>
            <div className="mb-2 block">
              <Label htmlFor="email2" value="Your email" />
            </div>
            <TextInput
              id="email2"
              type="email"
              placeholder="random@random.com"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="text" value="Your name" />
            </div>
            <TextInput id="text" type="" required={true} shadow={true} />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="repeat-password" value="Last name:" />
            </div>
            <TextInput
              id="repeat-password"
              type="text"
              required={true}
              shadow={true}
            />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="address" value="Your address:" />
            </div>
            <TextInput
              id="repeat-password"
              type="address"
              required={true}
              shadow={true}
            />
          </div>
          <p className=" font-medium mt-3">
            After the purchase, you will receive payment information via email.
            THANK YOU FOR YOUR TRUST
          </p>
          <button onClick={notify} className="btn btn-primary mt-2">
            ORDER NOW!
          </button>
          <button
            onClick={onClose}
            class="flex  item-center btn btn-active btn-secondary justify-center"
          >
            Cancel the order{" "}
          </button>
          <ToastContainer />
        </form>
      </div>
    </div>
  );
};

export default Modal;
