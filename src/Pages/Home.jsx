import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Contact from "../Components/Contact/Contact";
import Education from "../Components/Education/Education";
import Skills from "../Components/Skills/Skills";
import Work from "../Components/Work/Work";


const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <About></About>
            </section>
            <section>
                <Skills></Skills>
            </section>
            <section>
                <Work></Work>
            </section>
            <section>
                <Education></Education>
            </section>
            <section>
                <Contact></Contact>
            </section>
        </div>
    );
};

export default Home;