import Image from 'next/image';
import './globals.css';
import Header from "../components/header";
import Link from "next/link";

export default function Home() {
    return(
    <>
    <Header name="viewport" title="COMPANY NAME TEST" subtitle="Your. Mission. Statement."/>
    <div id='fadingText'>Scroll</div>
    <div className='newPage'></div>
    </>
    );
}