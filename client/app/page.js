import Image from "next/image"
export default function Home () {
  return (
    <div className="flex flex-col m-32 content-center">
      <h1 class='mb-10 text-3xl font-extrabold  text-white md:text-5xl lg:text-6xl'>
        <span class='text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'>
          Paper Stack
        </span>{' '}
        Eco-Friendly and Scalable
      </h1>
      <p class='text-2xl font-normal lg:text-xl text-gray-400 align-middle ml-[12%]'>
        Using PaperStack recycle old papers by digitalizing them using Filecoin and populate <br />open-data by converting on-paper historical datasets and researches to digital format.
      </p>
      <Image src='/bg-removebg-preview.png' width={500} height={500} className="ml-[23%]"/>
    </div>
  )
}
