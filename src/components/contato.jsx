import Link from "next/link";
import Image from "next/image";
import contato from '../assets/contato.jpg';

export default function Contato() {
    return (
        <section className="w-[100%] mt-36 pb-20">

            <div className="w-[100%] flex justify-center gap-8">

                <div className="relative flex max-w-[30%] top-[2rem]">
                    <Image
                        src={contato}
                        alt="Fotografia das duas irmãs da Lumen"
                        style={{ objectFit: 'contain' }}
                        quality={100}
                        className="z-20"
                    />

                    <div className="w-[100%] h-[100%] absolute border-solid border-page border-[.5vw] ml-[17%] mt-[-17%] z-10"></div>
                </div>

                <div className="relative flex flex-col items-center justify-center w-[45%] gap-14">

                    <h1 className="contact-title text-page text-center">CRIE MOMENTOS<br /> RECORDE EMOÇÕES</h1>

                    <Link href={''}>
                        <div className="contact-buton bg-page px-5 py-2 cursor-pointer">
                            ENTRE EM CONTATO
                        </div>
                    </Link>

                </div>
            </div>

        </section>
    );
}