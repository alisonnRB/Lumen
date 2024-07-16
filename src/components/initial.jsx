import Image from 'next/image';
import bgInit from '../assets/homeImage.jpg';

export default function Initial() {
    return (
        <section className="relative w-full h-screen">

            <div className="absolute inset-0">
                <Image
                    src={bgInit}
                    alt="Fotografia de alta qualidade do ambiente luminoso da Lumen"
                    layout="responsive"
                    width={1440}
                    height={1599.97}
                    objectFit="cover"
                    quality={100}
                />
            </div>

            <div className="absolute inset-0 z-10 flex flex-col justify-between textBoxSize pl-5">
                <p className="text-page sizeLogo">LUMEN</p>

                <h1 className='text-page sizeText font-bold'>VEJA O<br/> MELHOR<br/> DE VOCÊ</h1>
            </div>
        </section>
    );
}