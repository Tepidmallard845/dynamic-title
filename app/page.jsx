import Image from 'next/image';
import './globals.css';
import Header from "../components/header";
import Link from "next/link";

export default function Home() {
    return(
    <>
    <Header title="COMPANY NAME" subtitle="Your. Mission. Statement."/>
    <div id='fadingText'>Scroll</div>
    <div className='newPage'></div>
    </>
    );
}