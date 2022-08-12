import Image from "next/future/image";

export const Hero: React.FC = () => (
  <div className="flex gap-12">
    <div>
      <h1 className="text-5xl mb-1 font-bold">Adalberto Prado</h1>
      <h2 className="text-lg mb-3">Software Engineer</h2>
      <p className="">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum eius
        quaerat veritatis, tempora quibusdam ullam et molestias ad! Quia debitis
        officiis reprehenderit illo veniam, accusantium aspernatur saepe nemo ab
        sit?
      </p>
    </div>
    <div className="hidden sm:flex">
      <div className="w-36">
        <Image
          className="rounded-full"
          src="/assets/img/adal.jpeg"
          alt="Adalberto Prado"
          width={144}
          height={144}
        />
      </div>
    </div>
  </div>
);
