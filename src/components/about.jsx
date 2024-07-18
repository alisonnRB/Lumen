import { useEffect } from "react";
import wordAdjust from "@/script/word_adjust";

import Image from "next/image";
import aboutImage from "../assets/irmas.jpg";

export default function About() {

    useEffect(() => {
        const cleanup = wordAdjust('.aboutText');
        return cleanup;
    }, []);

    return (
        <section className="w-full relative aboutBox z-20 flex">

            <div className="w-1/2 flex justify-center items-center about-content">
                <span className="h-[90%] w-[90%] relative">
                    <Image
                        src={aboutImage}
                        alt="Fotografia das duas irmãs da Lumen"
                        fill={true}
                        style={{ objectFit: 'contain' }}
                        quality={100}
                    />
                </span>
            </div>

            <div className="w-1/2 flex flex-col justify-center items-center about-content gap-8 text-page relative bottom-8">

                <h1 className="aboutTitle font-bold">SOBRE A LUMEN</h1>

                <p className="aboutText h-[90%] w-[80%]">
                    Bem-vindo à Lumem! Somos duas irmãs fotógrafas apaixonadas por capturar momentos que contam histórias e celebram a beleza da vida. Com um estilo elegante e atenção aos detalhes, transformamos cada clique em uma obra de arte.<br /><br />
                    Nosso trabalho vai além de simples imagens; é uma expressão de sentimentos e uma forma de eternizar memórias. Com anos de experiência, nos dedicamos a entregar fotografias de alta qualidade que refletem a essência única de cada cliente.
                    Venha descobrir o poder da fotografia com a Lumem, onde cada imagem é pensada e executada com precisão e sensibilidade. Vamos criar juntos imagens que serão apreciadas por gerações!
                </p>

            </div>

        </section>
    );
}