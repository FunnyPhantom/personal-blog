import Image from "next/image";


export default function Home() {


  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen p-8 pb-20 gap-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div>
        <h1 className={"text-amber-300 opacity-25 font-black text-4xl"}>Moha Movahedmanesh</h1>

        {/* <Image src={"/images/luck.png"} alt={"Luck"} width={100} height={100} /> */}
      </div>
    </div>
  );
}
