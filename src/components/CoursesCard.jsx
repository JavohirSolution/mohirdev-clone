import React from 'react';
import CoursesCardDetail from '../ui/CoursesCardDetail'
import PhytonAsoslari from "../assets/phyton-asoslari.jpeg";
import MalimotLatTuzilmasi from "../assets/malumot-tuzilmasi.jpeg";
import KaliLinux from "../assets/kali-linux.jpeg";
import Laravel from "../assets/laravel.jpeg";
import FullStackReact from "../assets/full-stack-react.jpeg";
import Yii2 from "../assets/Yii2.jpeg";



export default function CoursesCard() {
    return (
        <>
            <CoursesCardDetail img={PhytonAsoslari} text="Dasturlash asoslari. Phyton" alt="Dasturlash asoslari." button="Darsni boshlash" />
            <CoursesCardDetail img={MalimotLatTuzilmasi} text="Malumotlar tuzilmasi va algoritmlar" alt="Malumotlar tuzilmasi va algoritmlar" button="Darsni boshlash" />
            <CoursesCardDetail img={KaliLinux} text="Kali Linux asoslari" alt="Kali Linux asoslari " button="Darsni boshlash" />
            <CoursesCardDetail img={Laravel} text="Laravel PHP Framework, Boshlovchilar uchun" alt="Laravel PHP Framework, Boshlovchilar uchun" button="Darsni boshlash" />
            <CoursesCardDetail img={FullStackReact} text="Full-Stack ReactJS. Real Proyektlar" alt="Full-Stack ReactJS. Real Proyektlar" button="Darsni boshlash" />
            <CoursesCardDetail img={Yii2} text="Yii2 framework bo'yicha o'zbek tilida darslar" alt="Yii2 framework bo'yicha o'zbek tilida darslar" button="Darsni boshlash" />
        </>

    )
}
