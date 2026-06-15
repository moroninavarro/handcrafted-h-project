import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden w-full">
        <Image
          src="/images/homeImage.jpg"
          alt="Hero Image"
          width={1600}
          height={600}
          priority
          className="h-125 w-full object-cover object-center"
        />

        <div className="absolute inset-0 bg-black/35" />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
          <h1 className="mb-4 text-5xl font-bold text-white drop-shadow-md">
            Discover Unique Handmade Treasures</h1>
          <p className="mb-8 max-w-2xl text-lg">
            Shop now and bring a touch of creativity into your life!
          </p>

          <div className="flex gap-4">
            <Link
              href="/products"
              className="rounded-xl bg-(--color-primary) px-6 py-3 font-semibold 
              text-(--color-text) shadow-md transition hover:bg-(--color-primary-hover)">
              Shop Now
            </Link>

            <Link
              href="/sellers"
              className="rounded-xl border border-(--color-primary) px-6 py-3 font-semibold 
              text-white transition hover:bg-(--color-primary) hover:text-(--color-text)">
              Explore Sellers
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-20">
        <h2 className="mb-6 text-3xl font-semibold text-left text-gray-900">
          ABOUT US
        </h2>

        <p className="mx-auto max-w-3xl text-left text-lg text-gray-700 leading-relaxed">
          Handcrafted Haven is an innovative web application that aims to provide a platform for artisans and crafters 
          to showcase and sell their unique handcrafted items. It serves as a virtual marketplace, connecting talented creators 
          with potential customers who appreciate the beauty and quality of handmade products. 
          The application focuses on fostering a sense of community, supporting local artisans, and promoting sustainable consumption.
        </p>
      </section>
    </>
  );
}