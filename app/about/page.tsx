import 'swiper/css';
import Swiper from 'swiper';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <main className="w-full box-border flex flex-col bg-red-50 pt-36 space-y-16">
        <section className="lg:grid lg:grid-cols-2 items-end px-16 ">
          <div className="grid ">
            <span className="text-amber-300 text-lg font-semibold">
              We are professionals
            </span>
            <p style={{ maxWidth: "20ch" }} className="text-6xl font-bold ">
              We set out a better standard to treat{" "}
              <span className="text-black/40">customers</span>
            </p>
          </div>
          <div style={{maxWidth: '30ch'}} className="text-sm">
            Together-the investors and partners of investigate-we are
            reinventing real estate investing end-to-end
          </div>
        </section>
        <section className="overflow-hidden box-border w-full "  >
          <div className="grid gap-x-4 w-full lg:grid-cols-3 px-4 items-center justify-center">
            <Image src={`/showcase-3.jpg`} alt='room' width={700} height={300} className='[clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]'></Image>
            <Image src={`/showcase-2.jpg`} alt='room' width={700} height={300} className='[clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]'></Image>
            <Image src={`/showcase-1.jpg`} alt='room' width={700} height={300} className='[clip-path:polygon(0_0,100%_0,100%_85%,85%_100%,0_100%)]'></Image>
          </div>
        </section>
        <section>
          
        </section>
      </main> 
    </>
  );
}
