import Header from "@/components/Header";
import Footer from "@/components/Footer/Footer";
import Link from "next/link";

export default function WorkNotFound() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <Header />
      <main className="pt-36 pb-24 px-5 mx-auto max-w-[760px] text-center">
        <h1 className="poppins-font font-bold text-4xl">Case study not found</h1>
        <p className="mt-4 text-muted">
          This project is not part of the selected work, or the link is incorrect.
        </p>
        <Link href="/#work" className="inline-block mt-8 text-teal-400 font-semibold hover:text-teal-300">
          ← Back to selected work
        </Link>
      </main>
      <Footer />
    </div>
  );
}
