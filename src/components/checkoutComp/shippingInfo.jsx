// import { Form, Formik, ErrorMessage, Field } from "formik";
// import * as Yup from "yup";
// import { Country, State, City } from "country-state-city";
// import { useEffect, useState } from "react";

// export default function ShippingInfo({ handleData }) {
//   const [country, setCountry] = useState("");

//   const formsInitial = {
//     email: "",
//     firstName: "",
//     lastName: "",
//     streetAddress: "",
//     country: "",
//     state: "",
//     city: "",
//     postalCode: "",
//     phoneNumber: "",
//     message: "",
//     toggle: false,
//   };

//   const vaildation = Yup.object({
//     email: Yup.string().email("Invalid email address").required("Required"),
//     firstName: Yup.string()
//       .max(15, "Must be 15 characters or less")
//       .required("Required"),
//     lastName: Yup.string()
//       .max(20, "Must be 20 characters or less")
//       .required("Required"),

//     streetAddress: Yup.string().required(),
//     state: Yup.string().required(),
//     city: Yup.string().required(),
//     postalCode: Yup.string().required(),
//     phoneNumber: Yup.number().required(),
//   });

//   return (
//     <div className="lg:w-10/12 mt-16">
//       <Formik
//         initialValues={formsInitial}
//         validationSchema={vaildation}
//         onSubmit={(values) => console.log(values, country)}
//       >
//         <Form>
//           <div className="flex flex-col gap-2 mb-4">
//             <label htmlFor="email">Email Address</label>
//             <Field
//               name="email"
//               type="email"
//               placeholder="john@email.com"
//               className="shippingInput px-8"
//             />
//             <ErrorMessage name="email" />
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 mb-4">
//             <div className="flex flex-col gap-2 flex-1">
//               <label htmlFor="firstName">First Name</label>
//               <Field
//                 name="firstName"
//                 type="text"
//                 className="shippingInput px-4"
//                 placeholder="John"
//               />
//               <ErrorMessage name="firstName" />
//             </div>
//             <div className="flex flex-col gap-2 flex-1">
//               <label htmlFor="lastName">Last Name</label>
//               <Field
//                 name="lastName"
//                 type="text"
//                 className="shippingInput px-4"
//                 placeholder="Doe"
//               />
//               <ErrorMessage name="lastName" />
//             </div>
//           </div>
//           <div className="flex flex-col mb-4 gap-2">
//             <label htmlFor="streetAddress">Street Address</label>
//             <Field
//               name="streetAddress"
//               type="text"
//               className="shippingInput px-8"
//             />
//             <ErrorMessage name="streetAddress" />
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 mb-4">
//             <div className="flex flex-col gap-2 flex-1">
//               <label htmlFor="country">Country</label>
//               <Field
//                 name="country"
//                 as="select"
//                 className="shippingInput px-4"
//                 onChange={(e) => setCountry(e.target.value)}
//                 value={country}
//               >
//                 <option value="default">Select Country</option>
//                 {Country.getAllCountries().map((country) => (
//                   <option value={country.isoCode}>{country.name}</option>
//                 ))}
//               </Field>
//               <ErrorMessage name="country" />
//             </div>
//             <div className="flex flex-col gap-2 flex-1">
//               <label htmlFor="state">State/Province</label>
//               <Field
//                 name="state"
//                 as="select"
//                 className="shippingInput px-4"
//                 placeholder="Doe"
//               >
//                 <option value="default">Select State/Province</option>
//                 {State.getStatesOfCountry(country).map((state) => (
//                   <option value={state.name}>{state.name}</option>
//                 ))}
//               </Field>
//               <ErrorMessage name="lastName" />
//             </div>
//           </div>
//           <div className="flex flex-col sm:flex-row gap-4 mb-4">
//             <div className="flex flex-col gap-2 flex-1">
//               <label htmlFor="city">City</label>
//               <Field name="city" type="text" className="shippingInput px-4" />
//               <ErrorMessage name="city" />
//             </div>
//             <div className="flex flex-col gap-2 flex-1">
//               <label htmlFor="postalCode">Zip/Postal Code</label>
//               <Field
//                 name="postalCode"
//                 type="text"
//                 className="shippingInput px-4"
//               />
//               <ErrorMessage name="postalCode" />
//             </div>
//           </div>
//           <div className="flex gap-4 mb-4">
//             <div className="flex flex-col gap-2 flex-1">
//               <label htmlFor="phoneNumber">Phone Number</label>
//               <Field
//                 name="phoneNumber"
//                 type="number"
//                 className="shippingInput px-4"
//               />
//               {<ErrorMessage name="phoneNumber" />}
//             </div>
//             <div className="sm:flex-1"></div>
//           </div>
//           <p className="text-sm text-[#838383]">
//             Required for package delivery. Please double-check.
//           </p>
//           <button type="submit">submit</button>
//         </Form>
//       </Formik>
//     </div>
//   );
// }
