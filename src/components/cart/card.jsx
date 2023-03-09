import { CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { usePaymentInputs } from "react-payment-inputs";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import { emptyCart } from "../../../store/cartSplice";
export default function Card({ val, cartItems }) {
  const { meta, getCardNumberProps, getExpiryDateProps, getCVCProps } = usePaymentInputs()
  const [cardname, setCardName] = useState();
  const [cardnumber, setCardNumber] = useState();
  const [carddate, setCardExpriryDate] = useState();
  const [cardYear, setCardExpriryYear] = useState();
  const [cardCvc, setCardCvc] = useState();
  const [loader, setLoader] = useState(false)
  const router = useNavigate()
  const dispatch = useDispatch()
  const onSubmit = async () => {
    if(meta.error){
      toast.error("Please Enter Correct card values")
    }else{
      setLoader(true)
      try {
        for (let i = 0; i < cartItems.length; i++) {
          const isNotCustom = cartItems[i].name ? true : false;
  
          const response = await axios.post(
            "https://admin.pickaneon.com/api/generate_payment_intent",
            isNotCustom
              ? {
                product_id: cartItems[i].id,
                email: val.email,
                firstName: val.firstName,
                streetAddress: val.streetAddress,
                country: val.country,
                state: val.state,
                city: val.city,
                postalCode: val.postalCode,
                phoneNumber: val.phoneNumber,
                number: cardnumber,
                exp_month: carddate.split("/")[0],
                exp_year: carddate.split("/")[1],
                cvc: cardCvc,
              }
              : {
                type: "custom",
                image: cartItems[i].img,
                color: cartItems[i].color,
                price: cartItems[i].price,
                email: val.email,
                firstName: val.firstName,
                streetAddress: val.streetAddress,
                country: val.country,
                state: val.state,
                city: val.city,
                postalCode: val.postalCode,
                phoneNumber: val.phoneNumber,
                number: cardnumber,
                exp_month: carddate,
                exp_year: cardYear,
                cvc: cardCvc,
              }
          );
          await axios.post("https://admin.pickaneon.com/api/payment", {
            pi: response.data,
          }); 
          if(cartItems.length-1 == i){
          toast.success("Successfuly ordered")
          setLoader(false)
          dispatch(emptyCart()); 
        }
        }
       
        
      } catch (err) {
        console.error(err);
        setLoader(false)
        toast.error("something went wrong")
      }
    }
   
  };
  return (
    <div>
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
      <div class=" bg-gray-200 flex items-center justify-center pb-10 pt-16">
    
        <div>
          <p className="text-pink text-xl font-bold mb-3" >Enter Card</p>
      <input className="w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" {...getCardNumberProps({ onChange: (e) => { setCardNumber(e.target.value) } })} value={cardnumber} />
      <input className="w-1/2 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" {...getExpiryDateProps({ onChange: (e) => setCardExpriryDate(e.target.value) })} value={carddate} />
      <input className="w-1/2 px-3 py-2 mb-1 border-2 border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors" {...getCVCProps({ onChange: (e) => { setCardCvc(e.target.value) }  })} value={cardCvc} />
      {meta.isTouched && meta.error && <span>Error: {meta.error}</span>}
    </div>
      </div>
      {loader ? <CircularProgress /> : <button
        className="px-12 py-4 bg-pink text-white rounded-full" onClick={onSubmit}
      >
        Place Order
      </button>}

    </div>
  );
}
