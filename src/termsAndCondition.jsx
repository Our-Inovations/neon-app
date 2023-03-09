import React from 'react'
import ScrollToTopOnMount from './components/scrolltoTop'

const TermsAndCondition = () => {
    return (
        <div className="my-16">
            <ScrollToTopOnMount />
            <h2 className="text-3xl md:text-4xl text-pink text-center font-bold mb-16">
                Terms And Condition
            </h2>
            <h3 className='text-[20px] text-pink text-start font-bold mb-5 mx-8'>
                Welcome to Pick A Neon! By using our website, you agree to the following terms and conditions:
            </h3>
            <ol className='list-decimal'>
                <li className='text-[16px] text-pink text-start mx-8 my-5'><span className='font-bold'>Account Creation:</span> You must create an account to purchase products on our website. You agree to provide accurate information when creating an account, and to keep your account information up to date.</li>
                <li className='text-[16px] text-pink text-start mx-8 my-5'><span className='font-bold'>Product Descriptions:</span> We strive to provide accurate product descriptions, however, we do not guarantee the accuracy, completeness, reliability or suitability of any information on our website. We reserve the right to correct any errors, inaccuracies or omissions and to change or update information at any time without prior notice.</li>
                <li className='text-[16px] text-pink text-start mx-8 my-5'><span className='font-bold'>Payment:</span> Payment for products must be made at the time of purchase. We accept various forms of payment, including credit cards and PayPal.</li>
                <li className='text-[16px] text-pink text-start mx-8 my-5'><span className='font-bold'>Shipping:</span> We will make every effort to ship your order in a timely manner. However, we do not guarantee delivery dates or times.</li>
                <li className='text-[16px] text-pink text-start mx-8 my-5'><span className='font-bold'>Returns and Refunds:</span> We accept returns for damaged or defective products. Please review our returns policy for more information.</li>
                <li className='text-[16px] text-pink text-start mx-8 my-5'><span className='font-bold'>Intellectual Property:</span> All content, logos, trademarks, and other intellectual property on our website are owned by us or our licensors. You agree not to use any of our intellectual property without our prior written consent.</li>
                <li className='text-[16px] text-pink text-start mx-8 my-5'><span className='font-bold'>Disclaimers:</span> Our website is provided on an "as is" and "as available" basis. We make no warranties, express or implied, about the accuracy, reliability, or suitability of our website.</li>
                <li className='text-[16px] text-pink text-start mx-8 my-5'><span className='font-bold'>Limitation of Liability:</span> We will not be liable for any damages arising from the use of our website, including but not limited to direct, indirect, incidental, punitive, and consequential damages.</li>
            </ol>
        </div>
    )
}

export default TermsAndCondition
