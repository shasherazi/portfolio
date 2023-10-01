export default function Home() {
  return (
    <main className="flex flex-col px-4">
      <h2 className="font-sans text-3xl mt-10">heloo 👋</h2>
      <h1 className="text-4xl mt-5">I am {' '}
        <span className="italic">Syed Hassan Askri</span>, {' '}
        a 20 years old Pakistani, {' '}
        an <span className="text-[#3DA639]">open source</span> enthusiast, {' '}
        and a <span className="decoration-wavy underline underline-offset-8 decoration-green-500">web developer</span>.
      </h1>
    </main>
  );
}
