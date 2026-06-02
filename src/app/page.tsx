import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return ( 
    <> 
    <section className="relative overflow-hidden roudned-3xl w-full">


    <Image
      src="/images/homeImage.jpg"
      alt="Hero Image"
     width={1600}
      height={600}
      priority
      className="h-[500px] w-full object-cover"
    />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
       <h1 className="mb-4 text-5xl font-bold">
        Discover Unique Handmade Treasures</h1>
       <p className="mb-8 max-w-2xl text-lg">
        Shop now and bring a touch of creativity into your life!
       </p>

      <div className="flex gap-4">
        <Link href="/products"
         className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:bg-gray-600 hover:text-white">
          Shop Now
        </Link>

        <Link href="/sellers" 
        className="roudned-xl border border-white px-6 py-3 transition hover:bg-white hover:text-black">
          Explore Sellers
        </Link>
      </div>



      
    </div>

    </section>


    <section className="mt-16 w-full text-center">
      <h2 className="mb-4 text-3xl font-bold">ABOUT US</h2>

      <p className="mx-auto max-w-3xl text-gray-600 text-center text-lg">
        Handcrafted Haven is an innovative web application that aims to provide a platform for artisans and crafters to showcase and sell their unique handcrafted items. It serves as a virtual marketplace, connecting talented creators with potential customers who appreciate the beauty and quality of handmade products. The application focuses on fostering a sense of community, supporting local artisans, and promoting sustainable consumption.
      </p>
    </section>
   </>
  );
}
