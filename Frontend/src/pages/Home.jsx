import Big3 from "../components/Big3";
import FreeGames from "../components/FreeGames";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";

const Home = () => {
    return (
        <div>
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <FreeGames />
            <Big3 />
        </div>
    );
};

export default Home;