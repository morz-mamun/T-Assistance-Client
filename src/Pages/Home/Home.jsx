import AudienceT from "./AudienceT/AudienceT";
import Banner from "./Banner/Banner";
import FAQSection from "./FAQSection/FAQSection";


const Home = () => {
    return (
        <div>
           <Banner></Banner> 
           <AudienceT></AudienceT>
           <FAQSection></FAQSection>
        </div>
    );
};

export default Home;