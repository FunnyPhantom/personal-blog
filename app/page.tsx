import Image from "next/image";
import luckImage from "./images/luck.png";
import dichotomyLoveTruthImage from "./images/dichotomy-love-truth.png";


export default function Home() {


  return (
    <div className="flex flex-col min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className={"text-amber-300 opacity-25 font-black text-4xl"}>Moha Movahedmanesh</h1>
        
      </div>
      <div className="grid grid-cols-2 gap-8 ">
        <Image src={luckImage} alt={"Luck"} width={300} height={300} />
        <Image src={dichotomyLoveTruthImage} alt={"Dichotomy Love Truth"} width={300} height={300} />
      </div>
      <div>
        <p>
          {"I'm a software engineer with a passion for building products that help people live better lives."}
        </p>
      </div>
    </div>
  );
}
