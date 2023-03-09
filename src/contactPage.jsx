import React, { useEffect, useState } from "react";
import ImgGallery from "./components/HomeSections/gallery";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MultiRangeSlider from "multi-range-slider-react";
import ScrollToTopOnMount from "./components/scrolltoTop";

export default function ContactUs() {
  const [value, setValue] = useState([]);

  const handleInput = (e) => {
    console.log(e.minValue, e.maxValue);
  };
  return (
    <div className="my-16">
      <ScrollToTopOnMount />
      <h2 className="text-3xl md:text-4xl text-pink text-center font-bold mb-16">
        Contact Us
      </h2>
      <ImgGallery />
      <div className="w-11/12 mx-auto mt-10">
        <div>
          <p>
            Want a custom designed neon word sign? Go to our online{" "}
            <span className="text-pink">Neon Sign Maker</span>
          </p>
          <p>
            Need a neon sign for your business logo, name, sale or event? Go to
            <span className="text-pink">Business Signs & Logos</span>
          </p>
          <p>
            Searching for personalized wedding signs? Head over to{" "}
            <span className="text-pink">Neon Wedding Signs & Decor</span>
          </p>

          <p className="mt-4">
            If you&apos;re looking for anything else, tell us about it. We look
            forward to working with you to create something amazing! Call us now
            on 888 000 4851 or send us a message using the form below.
          </p>
        </div>

        <Formik
          initialValues={{
            name: "",
            phoneNumber: "",
            email: "",
            appropriateSize: "",
            tellUs: "",
            budget: "",
            attachment: "",
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            phoneNumber: Yup.number()
              .min(11, "Please Enter a valid Phone Number")
              .required("Required"),
            email: Yup.string()
              .email("Invalid Email Address")
              .required("Required"),
            appropriateSize: Yup.string(),
            tellUs: Yup.string(),
          })}
          onSubmit={(values, { setSubmitting }) => {
            alert(JSON.stringify(values));
            setSubmitting(false);
          }}
        >
          <Form className="my-10 md:w-4/6 flex flex-col gap-6">
            <div className="flex flex-col ">
              <label className="formLabel" htmlFor="name">
                Your Name
              </label>
              <Field
                className="formInput"
                name="name"
                type="text"
                placeholder="John"
              />
              <ErrorMessage name="name" />
            </div>

            <div className="flex flex-col">
              <label className="formLabel" htmlFor="phoneNumber">
                Your Phone Number
              </label>
              <Field
                className="formInput"
                type="number"
                name="phoneNumber"
                placeholder="EX: +971 0 000 0000"
              />
              <ErrorMessage name="phoneNumber" />
            </div>
            <div className="flex flex-col">
              <label className="formLabel" htmlFor="email">
                Your Email
              </label>
              <Field
                className="formInput"
                type="email"
                name="email"
                placeholder="john@mail.com"
                rows={4}
              />
              <ErrorMessage name="email" />
            </div>
            <div className="flex flex-col">
              <label className="formLabel" htmlFor="appropriateSize">
                Appropriate Size(lenght/Height)
              </label>
              <Field className="formInput" type="text" name="appropriateSize" />
            </div>
            <div className="flex flex-col">
              <label className="formLabel mb-2" htmlFor="tellUs">
                Tell us as much as you can about your new CustomNeon sign
              </label>
              <Field
                className="formInput text-sm"
                name="tellUs"
                rows="5"
                component="textarea"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="formLabel" htmlFor="budget">
                Budget Idea
              </label>
              <MultiRangeSlider
                min={200}
                max={2000}
                step={20}
                barLeftColor="#E7E7E7"
                barInnerColor="#FF00B4"
                thumbLeftColor="#ff00b4"
                thumbRightColor="#ff00b4"
                barRightColor="#E7E7E7"
                labels={[200, 650, 1100, 1550, 2000]}
                ruler={false}
                minValue={600}
                className="text-pink bg-transparent shadow-none"
                maxValue={1000}
                onInput={(e) => handleInput(e)}
              />
              <p className="text-sm text-[#838383]">
                This is a rough, ball-park guess at what you like to spend on
                your sign. It will help us make sure we quote sizes and options
                that suit you, and give you flexible choices to suit your needs.
              </p>
            </div>
            <div className="flex flex-col gap-2 relative">
              <label htmlFor="attachment">ADD ATTACHMENT or ARTWORK</label>
              <Field
                className="rounded-lg py-20 px-10 bg-[#F6F6F6]"
                name="attachment"
                type="file"
              />
              <p className="text-sm text-[#838383]">
                Max file size: 10000 KB | Allow file types: ai, eps, gif, jpg,
                jpeg, pdf, png, tiff
              </p>
            </div>
            <div className="flex gap-4 ">
              <button
                className="bg-black px-4 py-2 rounded-full text-white"
                type="submit"
              >
                Get a free quote
              </button>
              <button
                type="submit"
                className="bg-pink px-14 py-2 rounded-full text-white"
              >
                Send
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
