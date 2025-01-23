import Image from "next/image";
import Hero from "./components/Hero";

import Product from './components/Product';
import JoinUs from './components/JoinUs';
import Login from './components/Login';
import Contact from './components/Contact';
import Button from './components/Button';



export default function Home() {
  return (
    <div>
      <Hero />
      <JoinUs />
      <Contact />
      <Login />
      <Product/>
  <Button/>
      </div>
  )}
      