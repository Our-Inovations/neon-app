// import img1 from "./../../assets/gallery/img1.jpg";
// import img2 from "./../../assets/categories/img3.png";
// import { Formik, Form, Field } from "formik";
// import CartProduct from "./cartProduct";
// import { useSelector } from "react-redux";

// export default function OrderSummary() {
//   const cartItems = useSelector((state) => state.cartReducer.itemsInCart);
//   const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
//   const shipping = 0;
//   return (
//     <div className="">
//       <div className="py-8 flex flex-row gap-4 flex-wrap lg:flex-col border-b border-[#d9d9d9]">
//         {cartItems.map((item) => (
//           <CartProduct {...item} key={item.title} />
//         ))}
//       </div>
//       <div className="my-6 flex flex-col gap-4">
//         <div className="flex justify-between">
//           <h3 className="text-xl">Cart Subtotal: </h3>
//           <p className="text-pink text-xl">$ {totalPrice}</p>
//         </div>
//         <div className="flex justify-between">
//           <h3 className="text-xl">Shipping Free 4-6 weeks</h3>
//           <p className="text-xl text-pink">$ {shipping}</p>
//         </div>
//         <div className="flex justify-between">
//           <h3 className="text-xl">Order Total</h3>
//           <p className="text-pink text-xl">$ {totalPrice + shipping}</p>
//         </div>
//       </div>
//       <Formik
//         initialValues={{ message: "", toggle: false }}
//         onSubmit={(value) => console.log(value)}
//       >
//         <Form>
//           <div className="flex flex-col">
//             <label className="formLabel mb-2" htmlFor="tellUs">
//               Tell us as much as you can about your new CustomNeon sign
//             </label>
//             <Field
//               className="formInput text-sm"
//               name="message"
//               rows="6"
//               component="textarea"
//             />
//           </div>
//           <div className="flex items-start gap-2">
//             <Field type="checkbox" name="toggle" className="mt-3 accent-pink" />

//             <label className="mt-2">
//               Agree Terms and Conditions - Custom-made and personalized items
//               cannot be returned for a refund unless defective.
//             </label>
//           </div>
//           <p className="my-6">
//             Note: Please carefully check the details of your order as we cannot
//             offer refunds after approval unless the sign is faulty when it's
//             received. If you selected YES to the design proof you are assumed to
//             have approved the design. Please see our Returns Policy for full
//             details.
//           </p>
//           <button
//             className="px-12 py-4 bg-pink text-white rounded-full"
//             type="submit"
//           >
//             Place Order
//           </button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }

// const data = [
//   {
//     img: img1,
//     title: "Neon Light Advanced",
//     color: "Pink",
//     price: "599.00",
//   },
//   {
//     img: img2,
//     title: "Neon Light Pro Max",
//     color: "white",
//     price: "499.00",
//   },
// ];
