import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return ( 
    <section className="relative overflow-hidden roudned-3xl">


    <Image
      src="/images/candle2.png"
      alt="Hero Image"
     width={1200}
      height={500}
      priority
      className="h-[500px] w-full object-cover"
    />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
       <h1 className="mb-4 text-5xl font-bold">
        Discover Unique Handmade Treasures</h1>
       <p className="mb-8 max-w-2xl text-lg">
        example
       </p>

      <div className="flex gap-4">
        <Link href="/shop"
         className="rounded-xl bg-white px-6 py-3 font-semibold text-black">
          Shop Now
        </Link>

        <Link href="/sellers" 
        className="roudned-xl border border-white px-6 py-3">
          Explore Sellers
        </Link>
      </div>

    </div>
    </section>
  
   
  );
}
