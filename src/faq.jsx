import Faqs from './components/customDesign/FaQs'
import ScrollToTopOnMount from './components/scrolltoTop'

const Faq = () => {
    return (
        <div className="my-16">
            <ScrollToTopOnMount />
            <Faqs />
        </div>
    )
}

export default Faq
