"use client"
import { useState } from "react"

export default function Header(){

    const [lang, setLang] = useState("it");
    const switchLang = ()=>{
        setLang(lang === "it" ? "gb" : "it")
    } 

    return(
        <>
            <div className="w-full h-14 rounded-bl-[3.3rem] bg-[#242D38] flex items-center justify-between p-8">
                <img className="h-12" src="logo/ectosweet-logo.png" alt="" />
                <button onClick={switchLang} className="flex items-center p-1.5 border-2 border-[#00FF9C] w-9 h-9 rounded-full bg-[#00FF9C]/25">
                    <img className="h-36" src={lang === "it" ? "flags/Flag-italy.svg" : "flags/Flag_of_the_United_Kingdom_(3-5).svg"} alt="" />
                </button>
            </div>
        </>
    )
}