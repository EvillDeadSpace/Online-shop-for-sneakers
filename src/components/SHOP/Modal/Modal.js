
import { TextInput } from 'flowbite-react';
import { Label } from 'flowbite-react';


const Modal = ({ visible, onClose }) => {
    const handlerOnClose = (e) => {
        if (e.target.id === 'container') onClose();
    }
    if (!visible) return null;

    const onFinish = (e) => {
        console.log(e);
        setTimeout(() => { alert('You have successfully ordered the sneakers!'), 1000 })
    }


    return (



        <div
            id='container'
            onClick={handlerOnClose}
            className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center '>
            <div className='artboard phone-3'>
                <h1 className='   text-3xl font-medium'>You have chosen the latest <span className=' text-red-700 font-bold'> NIKE 95 </span>sneakers. </h1>
                <p className=' font-medium mt-3'>Fill out the form and in the next few days the sneakers will arrive at your address</p>
                <form className="flex flex-col gap-4 mt-7">
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="email2"
                                value="Your email"
                            />
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
                            <Label
                                htmlFor="password2"
                                value="Your password"
                            />
                        </div>
                        <TextInput
                            id="password2"
                            type="password"
                            required={true}
                            shadow={true}
                        />
                    </div>
                    <div>
                        <div className="mb-2 block">
                            <Label
                                htmlFor="repeat-password"
                                value="Repeat password"
                            />
                        </div>
                        <TextInput
                            id="repeat-password"
                            type="password"
                            required={true}
                            shadow={true}
                        />
                    </div>

                    <button onClick={onFinish} className="btn btn-primary mt-2">ORDER NOW!</button>
                    <button onClick={onClose} class="flex  item-center btn btn-active btn-secondary justify-center">
                        Cancel the order </button>

                </form>
            </div>
        </div >
    )
}

export default Modal