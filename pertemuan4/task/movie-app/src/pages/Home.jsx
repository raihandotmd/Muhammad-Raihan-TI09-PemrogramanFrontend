import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import Movies from "../components/Movies/Movies";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Movies />
            <Footer />
        </>
    );
};

export default Home;
