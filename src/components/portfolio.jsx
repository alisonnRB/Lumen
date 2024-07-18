import Image from "next/image";
import book from '../assets/books.jpg';
import product from '../assets/products.jpg';

import Link from "next/link";

export default function Portfolio() {
    return (
        <section className="pb-10">

            <h1 className="text-page font-bold visionTitle mb-10">PORTFOLIO</h1>

            <div className="grid grid-cols-2 grid-rows-2">

                <div className="relative col-span-1 row-span-2 z-10 flex items-end">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="/video/model.mp4" type="video/mp4" />
                    </video>

                    <h6 className="text-page font-bold absolute z-20 ml-4 titlePort">MODEL</h6>
                </div>

                <div className="relative col-span-1 z-10">
                    <Image
                        src={book}
                        alt="Fotografia das duas irmãs da Lumen"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        quality={100}
                    />

                    <h6 className="text-page font-bold absolute z-20 ml-1 titlePort">BOOK</h6>
                </div>

                <div className="relative col-span-1 z-10">
                    <Image
                        src={product}
                        alt="Fotografia das duas irmãs da Lumen"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        quality={100}
                    />

                    <h6 className="text-page font-bold absolute z-20 ml-1 titlePort">PRODUCT</h6>
                </div>
            </div>

            <Link href={''}>
                <div className="w-[100%] font-bold bg-page moreLink flex justify-center items-center mt-8 py-[.4em] cursor-pointer">
                    VER MAIS
                </div>
            </Link>


        </section>
    );
}