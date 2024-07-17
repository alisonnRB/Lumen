import Image from "next/image";
import book from '../assets/books.jpg';
import product from '../assets/products.jpg';

export default function Portfolio() {
    return (
        <section className="pb-10">

            <h1 className="text-page font-bold visionTitle mb-10">PORTFOLIO</h1>

            <div className="grid grid-cols-2 grid-rows-2">

                <div className="relative col-span-1 row-span-2">
                    <video autoPlay loop muted className="w-full h-full object-cover">
                        <source src="/video/model.mp4" type="video/mp4" />
                    </video>
                </div>

                <div className="relative col-span-1">
                    <Image
                        src={book}
                        alt="Fotografia das duas irmãs da Lumen"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        quality={100}
                    />
                </div>

                <div className="relative col-span-1">
                    <Image
                        src={product}
                        alt="Fotografia das duas irmãs da Lumen"
                        fill={true}
                        style={{ objectFit: 'cover' }}
                        quality={100}
                    />
                </div>

                <div className="relative col-span-1">
                    <Image
                        src={product}
                        alt="Fotografia das duas irmãs da Lumen"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                    />
                </div>
            </div>

        </section>
    );
}