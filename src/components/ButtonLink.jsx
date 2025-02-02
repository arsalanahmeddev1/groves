import Image from "next/image";
import Link from "next/link"
const ButtonLink = ({link, classes, text, arrow}) => {
  return (
    <Link
    href={link}
    className={`${classes} ${arrow ? "flex justify-between items-center gap-5" : ""} rounded-[10px] bg-gradient-to-b from-midBrown to-lightBrown text-center text-white hover:bg-theme-gradient transition duration-50000 ease-in-out`}
    >
      {text}
      {arrow && (
        <Image src="/images/arrow-right.png" alt="arrow" width={26} height={19} className="md:w-7 h-auto" />
      )}
      </Link>
  );
};
export default ButtonLink;