import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Form from "../components/Form/Form";
import Footer from "../components/Footer/Footer";

const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Movies />
            <Form />
            <Footer />
        </>
    );
};

export default Home;
