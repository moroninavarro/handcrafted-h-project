import { Metadata } from 'next';
import Shop from "@/components/Shop";


export default function Page() {
  return (
    <main className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Featured Handcrafts
      </h1>

      <div className="grid grid-cols-2 gap-4">
        <Shop
          name="Moonlit Butterbeer Mug"
          description="Glazed ceramic mug."
          seller="Luna Lovegood"
          price={25}
          image="/images/mug.png"
        />

        <Shop
          name="Ollivander Ash Wand Stand"
          description="Hand-carved wooden wand-stand."
          seller="Ollivander"
          price={40}
          image="/images/wandstand.png"
        />

        <Shop
          name="Herbology Candle Set"
          description="Soy candles infused with forest herbs."
          seller="Pomona Sprout"
          price={18}
          image="/images/candle1.png"
        />

        <Shop
          name="Ravenclaw Knit Scarf"
          description="Soft handmade scarf."
          seller="Rowena Threads"
          price={32}
          image="/images/scarf.png"
        />

        <Shop
          name="Honeydukes Candy Jar"
          description="Decorative glass candy jar."
          seller="Ambrosius Flume"
          price={22}
          image="/images/jar.png"
        />

        <Shop
          name="Three Broomsticks Candle"
          description="Warm butterbeer scented candle."
          seller="Madam Rosmerta"
          price={20}
          image="/images/candle2.png"
        />
      </div>

    </main>
  );
}

export const metadata: Metadata = {
  title: 'Shop',
};