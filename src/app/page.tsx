// pages/index.tsx
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Noetiq Research | Home</title>
        <meta
          name="description"
          content="Discover Noetiq Research: Transforming insights into innovations through machine learning, AI, and groundbreaking technologies."
        />
      </Head>

      <div className="select-none">
        <section
          className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden"
          style={{
            backgroundImage: "url('/Francium.jpeg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-[#F5EFE6]/80 backdrop-blur-sm"></div>
          <div className="relative z-10 flex flex-col items-center justify-center max-w-screen-lg mx-auto px-4">
            <h1 className="font-extrabold text-6xl md:text-8xl text-[#4B3832] mb-4 font-[Anuphan] tracking-tight">
              Introducing
            </h1>
            <div className="-mb-10 w-80">
              <Image
                src="/pearl2.svg"
                alt="Pearl Illustration"
                width={320}
                height={320}
                className="w-full h-auto object-cover drop-shadow-2xl"
              />
            </div>
            <h2 className="font-extrabold text-5xl md:text-7xl text-[#4B3832] font-[Anuphan] tracking-tight">
              PiRL Framework
            </h2>
            <p className="max-w-xl text-lg text-[#6F5844] mt-4">
              Experience the potential of adaptive learning algorithms
              integrated with real-world physics.
            </p>
            <Link
              href="/solutions"
              className="inline-block mt-6 px-6 py-3 rounded bg-[#8C6A5E] text-white shadow-md hover:bg-[#735649] transition"
            >
              Learn More
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#EFE3D7]">
          <div className="container mx-auto flex flex-col md:flex-row items-center gap-8 px-6">
            <div className="flex-1">
              <Image
                src="/images/product-highlight.png"
                alt="Product Highlight"
                width={500}
                height={400}
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl font-bold text-[#4B3832]">
                Introducing Our Latest Breakthrough
              </h2>
              <p className="mt-4 text-lg text-[#6F5844]">
                Discover how our proprietary ML technology is redefining the way
                businesses approach efficiency and innovation.
              </p>
              <Link
                href="/solutions"
                className="inline-block mt-6 px-6 py-3 text-white bg-[#8C6A5E] rounded shadow-lg hover:bg-[#735649] transition"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#EDE0D4]">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-[#4B3832] mb-12">
              What We Do
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Image
                  src="/images/icon-solution.svg"
                  alt="Solution Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#4B3832]">
                  We Build Solutions
                </h3>
                <p className="mt-4 text-[#6F5844]">
                  Crafting proprietary ML algorithms tailored to industry needs.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Image
                  src="/images/icon-research.svg"
                  alt="Research Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#4B3832]">
                  We Conduct Research
                </h3>
                <p className="mt-4 text-[#6F5844]">
                  Expanding the boundaries of what ML can achieve.
                </p>
              </div>
              <div className="p-6 bg-white shadow-lg rounded-lg">
                <Image
                  src="/images/icon-transform.svg"
                  alt="Transform Icon"
                  width={64}
                  height={64}
                  className="mx-auto mb-6"
                />
                <h3 className="text-2xl font-semibold text-[#4B3832]">
                  We Transform Problems
                </h3>
                <p className="mt-4 text-[#6F5844]">
                  Turning inefficiencies into opportunities with scalable
                  technology.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#EDE0D4]">
          <div className="container mx-auto text-center px-6">
            <h2 className="text-4xl font-bold text-[#4B3832] mb-12">
              Explore Our Reach
            </h2>
            <div
              id="chart-container"
              className="relative mx-auto"
              style={{ height: '400px' }}
            ></div>
          </div>
        </section>
      </div>
    </>
  )
}
