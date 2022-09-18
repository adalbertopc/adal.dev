import Image from "next/future/image";

export const Footer: React.FC = () => (
  <footer className="py-4 flex flex-col sm:flex-row text-center sm:text-left sm:justify-between">
    <p className="text-sm mb-4 sm:mb-0">
      © 2022 Adalberto P. C. All rights reserved.
    </p>
    <div className="flex justify-center sm:justify-end gap-4">
      <a
        href="https://www.github.com/adalbertopc"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/icons/github.svg"
          alt="github"
          width={16}
          height={16}
        />
      </a>

      <a
        href="https://www.linkedin.com/in/adalberto-prado/"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/icons/linkedin.svg"
          alt="linkedin"
          width={16}
          height={16}
        />
      </a>

      <a
        href="https://www.twitter.com/adalcodes"
        target="_blank"
        rel="noreferrer"
      >
        <Image
          src="/assets/icons/twitter.svg"
          alt="twitter"
          width={16}
          height={16}
        />
      </a>
    </div>
  </footer>
);
