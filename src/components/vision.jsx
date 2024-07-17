import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Image from 'next/image';

import capa from '../assets/capaPage.jpg';
import contate from '../assets/contatePage.png';

export default function Vision() {
    const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientation: portrait)").matches);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(orientation: portrait)");

        const handleOrientationChange = (e) => {
            setIsPortrait(e.matches);
        };

        mediaQuery.addEventListener('change', handleOrientationChange);

        return () => {
            mediaQuery.removeEventListener('change', handleOrientationChange);
        };
    }, []);

    const { ref, inView } = useInView({
        threshold: isPortrait ? 0.45 : 0.2, // Diferente threshold para portrait
    });

    useEffect(() => {
        const capa = document.getElementById('capa');
        const sobreposicao = document.getElementById('sobreposicao');
        const foto = document.getElementById('foto');
        const foto2 = document.getElementById('foto2');

        if (inView) {
            document.body.style.backgroundColor = '#F5F5F5';
            capa.style.opacity = 0;
            foto.style.opacity = 1;
            foto2.style.opacity = 1;
            sobreposicao.style.opacity = 1;
        } else {
            document.body.style.backgroundColor = '#0E0E0E';
            capa.style.opacity = 1;
            foto.style.opacity = 0;
            foto2.style.opacity = 0;
            sobreposicao.style.opacity = 0;
        }

        return () => {
            document.body.style.backgroundColor = '#0E0E0E';
            capa.style.opacity = 1;
            foto.style.opacity = 0;
            foto2.style.opacity = 0;
            sobreposicao.style.opacity = 0;
        };
    }, [inView]);

    return (
        <section ref={ref} className='w-[100dvw] vision-content flex flex-col pb-5'>
            <div className='flex self-end justify-center text-justify w-[50dvw] relative'>

                <div id='sobreposicao' className='bg-bg absolute w-[60%] h-[60%] z-30 overflow-clip transition-opacity delay-75'>
                    <div className='relative right-[27%]'>
                        <h1 className='visionTitle font-bold text-page w-[46dvw]'>
                            MINHA PAIXÃO É<br /> TORNAR VOCÊ,<br /> MAIS VOCÊ
                        </h1>
                    </div>
                </div>

                <h1 className='visionTitle font-bold text-bg w-[46dvw] relative z-20'>
                    MINHA PAIXÃO É<br /> TORNAR VOCÊ,<br /> MAIS VOCÊ
                </h1>

            </div>

            <div className='flex w-[100dvw]'>
                <div className='w-1/2 flex about-content'>
                    <p className='VisionText px-[5dvw] text-bg'>
                        Cada pessoa possui uma essência única, e meu objetivo como fotógrafa é capturar essa singularidade em cada clique. A fotografia, para mim, é mais do que uma profissão;
                        é uma paixão que me permite revelar o melhor de cada indivíduo, destacando suas verdadeiras características e emoções.
                    </p>
                </div>

                <div className='w-1/2 flex justify-end about-content'>
                    <span id='foto' className="w-[48dvw] h-[90%] relative transition-opacity delay-75">
                        <Image
                            src={capa}
                            alt="Fotografia das duas irmãs da Lumen"
                            fill
                            style={{ objectFit: 'cover' }}
                            quality={100}
                        />
                    </span>
                </div>
            </div>

            <div className='w-[100dvw] mt-10'>
                <span id='foto2' className=" flex justify-center items-center w-[100dvw] h-[100%] relative z-10 transition-opacity delay-75">
                    <Image
                        src={contate}
                        alt="Fotografia das duas irmãs da Lumen"
                        layout="responsive"
                        width={1440}
                        height={405}
                        style={{ objectFit: 'cover' }}
                        quality={100}
                    />

                    <a href=""
                        className='text-page absolute z-20 cursor-pointer px-[1em] py-[.2em] border-solid font-bold
                      border-page opacity-75 border-[.1em] VisionText hover:opacity-100 hover:bg-[rgba(245,245,245)]
                      hover:text-bg hover:border-bg transition-all delay-75'>
                        NOS CONTATE
                    </a>
                </span>

            </div>

        </section>
    )
}