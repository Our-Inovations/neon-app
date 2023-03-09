import { useSelector } from "react-redux";
import React, { useEffect,useState } from 'react'

import CartProduct from "./components/checkoutComp/cartProduct";
import Reviews from "./components/HomeSections/reviewsSection";
import { Icon } from "@iconify/react";
import { Formik, Form, Field, ErrorMessage, useFormikContext } from "formik";
import * as Yup from "yup";
import { Country, State } from "country-state-city";
import ScrollToTopOnMount from "./components/scrolltoTop";
import Card from "./components/cart/card";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.min.css';

export default function CheckOutWithId() {



  const [shippingData, setShippingDate] = useState({});
  const cartItems = useSelector((state) => state.cartReducer.itemsInCart);
  const cartLength = cartItems.length;
  // const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);


  const [totalPrice , settotalPrice  ] = useState("")


  function addPrice(params) {
    var prize = 0
  for (let i = 0; i < cartItems.length; i++) {
   prize = +(prize) + +(cartItems[i].price)
    
  }settotalPrice(prize)
  }
  
  useEffect(() => {
    addPrice()
  }, [cartItems])
  
  const shipping = 0;
  const [error, setError] = useState(null);
const [card,setCard]=useState(false)
const[val,setVal]=useState()
  const [country, setCountry] = useState("");

  const formsInitial = {
    email: "",
    firstName: "",
    lastName: "",
    streetAddress: "",
    country: "",
    state: "",
    city: "",
    postalCode: "",
    phoneNumber: "",
    message: "",
    toggle: false,
  }; 
  const vaildation = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    lastName: Yup.string()
      .max(20, "Must be 20 characters or less")
      .required("Required"),

    streetAddress: Yup.string().required(),
    state: Yup.string().required(),
    city: Yup.string().required(),
    postalCode: Yup.string().required(),
    phoneNumber: Yup.number().required(),
    toggle: Yup.bool()
      .isTrue()
      .required("You must accept the tems and conditions"),
  });
  return (
    <div className="mt-16">
      <ScrollToTopOnMount />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <h2 className="text-4xl text-pink font-bold text-center">Checkout</h2>
      {cartLength > 0 && (
        <Formik
          initialValues={formsInitial}
          validationSchema={vaildation}
          onSubmit={(values) => {
            setCard(true)
            setVal({...values,country:country})
          }}
        >
          <Form>
            <div className="my-20 w-11/12 mx-auto gap-4 flex-col lg:flex-row flex">
              <div className="flex-1">
                <h3 className="text-2xl font-bold">Shipping Address</h3>
                <div className="flex flex-col gap-2 mb-4">
                  <label htmlFor="email">Email Address</label>
                  <Field
                    name="email"
                    type="email"
                    placeholder="john@email.com"
                    className="shippingInput px-8"
                  />
                  <div className="text-[#f03e3e]">
                    <ErrorMessage name="email" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="firstName">First Name</label>
                    <Field
                      name="firstName"
                      type="text"
                      className="shippingInput px-4"
                      placeholder="John"
                    />
                    <div className="text-[#f03e3e]">
                      <ErrorMessage name="firstName" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="lastName">Last Name</label>
                    <Field
                      name="lastName"
                      type="text"
                      className="shippingInput px-4"
                      placeholder="Doe"
                    />
                    <div className="text-[#f03e3e]">
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col mb-4 gap-2">
                  <label htmlFor="streetAddress">Street Address</label>
                  <Field
                    name="streetAddress"
                    type="text"
                    className="shippingInput px-8"
                  />
                  <div className="text-[#f03e3e]">
                    <ErrorMessage name="streetAddress" />
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="country">Country</label>
                    <Field
                      name="country"
                      as="select"
                      className="shippingInput px-4"
                      onChange={(e) => setCountry(e.target.value)}
                      value={country}
                    >
                      <option value="default">Select Country</option>
                      {Country.getAllCountries().map((country) => (
                        <option value={country.isoCode}>{country.name}</option>
                      ))}
                    </Field>
                    <div className="text-[#f03e3e]">
                      <ErrorMessage name="country" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="state">State/Province</label>
                    <Field
                      name="state"
                      as="select"
                      className="shippingInput px-4"
                      placeholder="Doe"
                    >
                      <option value="default">Select State/Province</option>
                      {State.getStatesOfCountry(country).map((state) => (
                        <option value={state.name}>{state.name}</option>
                      ))}
                    </Field>
                    <div className="text-[#f03e3e]">
                      <ErrorMessage name="lastName" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="city">City</label>
                    <Field
                      name="city"
                      type="text"
                      className="shippingInput px-4"
                    />
                    <div className="text-[#f03e3e]">
                      <ErrorMessage name="city" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="postalCode">Zip/Postal Code</label>
                    <Field
                      name="postalCode"
                      type="text"
                      className="shippingInput px-4"
                    />
                    <div className="text-[#f03e3e]">
                      <ErrorMessage name="postalCode" />
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mb-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <Field
                      name="phoneNumber"
                      type="number"
                      className="shippingInput px-4"
                    />
                    <div className="text-[#f03e3e]">
                      <ErrorMessage name="phoneNumber" />
                    </div>
                  </div>
                  <div className="sm:flex-1">
                  </div>
                </div>
                <p className="text-sm text-[#838383]">
                  Required for package delivery. Please double-check.
                </p>
              </div>
              <div className="lg:w-4/12 mt-10 lg:mt-0">
                <h3 className="text-2xl font-bold">Order Summary</h3>
                <div>
                  <div className="">
                    <div className="py-8 flex flex-row gap-4 flex-wrap lg:flex-col border-b border-[#d9d9d9]">
                      {cartItems.map((item) => (
                        <CartProduct {...item} key={item.name} />
                      ))}
                    </div>
                    <div className="my-6 flex flex-col gap-4">
                      <div className="flex justify-between">
                        <h3 className="text-xl">Cart Subtotal: </h3>
                        <p className="text-pink text-xl">$ {totalPrice}</p>
                      </div>
                      <div className="flex justify-between">
                        <h3 className="text-xl">Shipping Free 4-6 weeks</h3>
                        <p className="text-xl text-pink">$ {shipping}</p>
                      </div>
                      <div className="flex justify-between">
                        <h3 className="text-xl">Order Total</h3>
                        <p className="text-pink text-xl">
                          $ {totalPrice + shipping}
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col">
                      <label className="formLabel mb-2" htmlFor="tellUs">
                        Tell us as much as you can about your new CustomNeon
                        sign
                      </label>
                      <Field
                        className="formInput text-sm"
                        name="message"
                        rows="6"
                        component="textarea"
                      />
                    </div>
                    <div className="flex items-start gap-2">
                      <Field
                        type="checkbox"
                        name="toggle"
                        className="mt-3 accent-pink"
                      />

                      <label className="mt-2">
                        Agree Terms and Conditions - Custom-made and
                        personalized items cannot be returned for a refund
                        unless defective.
                      </label>
                    </div>
                    <div className="text-[#f03e3e]">
                      <ErrorMessage name="toggle" />
                    </div>
                    <p className="my-6">
                      Note: Please carefully check the details of your order as
                      we cannot offer refunds after approval unless the sign is
                      faulty when it's received. If you selected YES to the
                      design proof you are assumed to have approved the design.
                      Please see our Returns Policy for full details.
                    </p>

                    
                    {card ? <Card val={val} cartItems={cartItems} />: <button
                      className="px-12 py-4 bg-pink text-white rounded-full" type="submit"
                    >
                      Place Order
                    </button>}
                  </div>
                </div>
              </div>
              
            </div>
          </Form>
        </Formik>
      )} 
      {cartLength === 0 && <EmptyCart />}
      <div className="-mb-14 mt-40 relative z-0">
      
                    <Reviews />
      </div>
    </div>
  );
}

const EmptyCart = () => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center">
  
      <Icon icon="carbon:shopping-cart-error" className="text-[64px] mb-10" />
      Your cart is empty. Please add our neon signs to the cart.
    </div>
  );
};
