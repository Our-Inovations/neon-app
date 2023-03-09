import React from 'react'
import ScrollToTopOnMount from './components/scrolltoTop'

const About = () => {
    return (
        <div className="my-16">
            <ScrollToTopOnMount />
            <h2 className="text-3xl md:text-4xl text-pink text-center font-bold mb-16">
                About Us
            </h2>
            <h3 className='text-[30px] text-pink text-start font-bold mb-5 mx-8'>
                Our Story
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                Custom Neon is an international brand boasting local operations and design teams in the US, UK, and Australia. With more than 30 amazing team members spread across our operational centers, we take great pride in our high-quality products and excellent customer support.
            </p>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                Our story begins in Australia, where entrepreneurs Jake and Jess Munday launched an LED neon sign business. Leveraging their experience in product development and social media marketing, the company created custom LED neon signs for local businesses, weddings, and events.
            </p>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                The combination of high-quality signs and the ability to custom-design to customers' specific requirements led to explosive growth. Matt and Teresha Aird, e-commerce industry veterans with over two decades of international experience, saw the potential to help the company expand beyond its initial market.
            </p>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                As global orders grew, there was a clear need to increase staff and production capabilities. We have grown our teams in the US, UK and Australia by adding tremendously talented LED neon designers, dedicated support staff and friendy sales people to each office.
            </p>
            <h3 className='text-[30px] text-pink text-start font-bold mb-5 mx-8'>
                Our Community
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                Whether it’s monthly donations to organizations fighting poverty worldwide, sponsored prizes for fundraisers, targeted donations during times of crises, product partnerships to support charities focused on marginalized communities, or a day of cleaning up the beach, we love to give back!
            </p>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                Our charitable giving is focused on poverty alleviation in developing countries, with regular donations to high-impact charities such as Give Directly and Oxfam. We also contribute funds and/or time to local causes that our team feels passionate about. Finally, our 'Signs of Change' product range was created to support marginalized groups, with all profits donated to organizations working in that space.
            </p>
            <h3 className='text-[30px] text-pink text-start font-bold mb-5 mx-8'>
                Our Environment
            </h3>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                We're committed to the future of our business, employees, and the environment. We fund impactful climate projects, including carbon avoidance and reforestation. You can view our impact here.
            </p>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                Our Sales & Design workflow is entirely paperless. Our fully recyclable boxes are printed with soy-based inks and custom-cut to fit each sign, reducing unnecessary packaging. We use biodegradable bags to ship accessories. Our customers are encouraged to reuse the boxes to reduce mess during installation and for safely storing and transporting their signs.
            </p>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                We are continually looking for ways to improve sustainability, with a goal of using 70% recyclable/biodegradable internal packaging materials by 2024.
            </p>
            <p className='text-[16px] text-pink text-start mb-10 mx-8'>
                We have also been working with a major international brand on a range of no-waste signs that use LED neon offcuts to create unique pieces of branded artwork.
            </p>
        </div>
    )
}

export default About
