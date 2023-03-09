import React from 'react'
import ScrollToTopOnMount from './components/scrolltoTop'

const PrivacyPolicy = () => {
    return (
        <div className="my-16">
            <ScrollToTopOnMount />
            <h2 className="text-3xl md:text-4xl text-pink text-center font-bold mb-16">
                Privacy Policy
            </h2>
            <h3 className='text-[20px] text-pink text-start font-bold mb-5 mx-8'>
                Privacy Policy:
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                We take your privacy very seriously and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and disclose information that we receive from users of our website and services.
            </p>
            <h3 className='text-[20px] text-pink text-start font-bold mb-5 mx-8'>
                Information Collection:
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                We may collect personal information from you when you use our website or services, such as your name, email address, and other contact information. We may also collect information about your use of our website and services, including your IP address, browser type, and operating system.
            </p>
            <h3 className='text-[20px] text-pink text-start font-bold mb-5 mx-8'>
                Information Use:
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                We use your personal information to provide you with our services and to communicate with you. We may also use your information for research and analysis to improve our website and services.
            </p>
            <h3 className='text-[20px] text-pink text-start font-bold mb-5 mx-8'>
                Information Disclosure:
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                We may share your personal information with our third-party service providers who help us provide our services. We may also share your information if required by law or if we believe that it is necessary to protect our rights or the safety of others.
            </p>
            <h3 className='text-[20px] text-pink text-start font-bold mb-5 mx-8'>
                Information Security:
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                We use industry-standard security measures to protect your personal information from unauthorized access, disclosure, and misuse. However, no data transmission over the Internet can be guaranteed to be 100% secure. Therefore, we cannot guarantee the security of your information transmitted to or from our website.
            </p>
            <h3 className='text-[20px] text-pink text-start font-bold mb-5 mx-8'>
                Children's Privacy:
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                Our website and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If we learn that we have collected personal information from a child under the age of 13, we will delete that information.
            </p>
            <h3 className='text-[20px] text-pink text-start font-bold mb-5 mx-8'>
                Changes to this Privacy Policy:
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                We may update this Privacy Policy from time to time. Any changes will be posted on our website. We encourage you to review this Privacy Policy regularly to stay informed about how we are protecting your personal information.
            </p>
        </div>
    )
}

export default PrivacyPolicy
