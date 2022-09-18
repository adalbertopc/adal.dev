import Image from "next/future/image";

export const Hero: React.FC = () => (
  <div className="flex gap-12">
    <div>
      <h1 className="text-5xl mb-1 font-bold">Adalberto Prado</h1>
      <h2 className="text-lg mb-3">Front End Developer at Ben & Frank</h2>
      <p className="">
        Software Engineer with 2+ years of experience in the industry. I have
        worked with a variety of technologies and I am always looking for new
        challenges. Experienced in building Ecommerces with Shopify and Web
        Applications with modern frameworks like NextJs and Remix.
      </p>
    </div>
    <div className="hidden sm:flex">
      <div className="w-36">
        <Image
          className="rounded-full border-8 border-white shadow-lg"
          src="/assets/img/adal.jpeg"
          alt="Adalberto Prado"
          width={160}
          height={160}
        />
      </div>
    </div>
  </div>
);
