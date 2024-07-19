import Link from "next/link";
import Image from "next/image";

import Pinterest from '../assets/pinterest.svg';
import Facebook from '../assets/facebook.svg';
import Instagran from '../assets/instagran.svg';
import Linkedin from '../assets/linkedin.svg';
import Twitter from '../assets/twitter.svg';

export default function Footer() {

    const Midias = () => {
        const list = [
            { "icon": Pinterest, "alt": "imagem do Pinterest para contato com a Lumem", "link": "https://br.pinterest.com/" },
            { "icon": Instagran, "alt": "imagem do Instagran para contato com a Lumem", "link": "https://www.instagram.com/" },
            { "icon": Facebook, "alt": "imagem do Facebook para contato com a Lumem", "link": "https://www.facebook.com/?locale=pt_BR" },
            { "icon": Twitter, "alt": "imagem do Twitter para contato com a Lumem", "link": "https://x.com/" },
            { "icon": Linkedin, "alt": "imagem do Linkedin para contato com a Lumem", "link": "https://www.linkedin.com/" }
        ];
        const tags = [];

        for (let i = 0; i < list.length; i++) {
            let item =
                <Link href={list[i].link}>
                    <Image
                        src={list[i].icon}
                        alt={list[i].alt}
                        style={{ objectFit: 'contain' }}
                        quality={100}
                        className="cursor-pointer icon"
                    />
                </Link>

            tags.push(item);
        }

        return tags;

    }

    return (
        <footer className="px-[5%] w-[100%] pb-[3em] mt-20 flex flex-col">

            <div className="flex flex-col items-center gap-6 pt-8 border-solid border-page border-t-[.3em]">
                <h1 className="text-page font-bold contact-title">ACOMPANHE NOSSO TRABALHO</h1>

                <span className="flex gap-10 icon-box">
                    {Midias()}
                </span>

            </div>

            <div className="flex gap-6 mt-20 justify-center text-page contatosN">
                <p>+45 99876-4884</p>
                <p className="border-solid border-page border-x-[.1em] px-6">Lumens_contato@gmail.com</p>
                <p>+45 99876-4884</p>
            </div>

            <div className="text-page flex justify-center mt-6 contatosN">
                <p>BR, São Paulo, SP.AV.200</p>
            </div>
        </footer>
    );
}