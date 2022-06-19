import Link from "next/link";
import { useEffect } from "react";

const HomeLayout = ({ children }) => {

  useEffect(() => {
    const ads = document.getElementsByClassName("adsbygoogle").length;
    for (var i = 0; i < ads; i++) {
      try {
        (adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) { }
    }
  }, []);

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-800 dark:text-slate-100">
      <header className="border-b bg-slate-100 border-slate-800 dark:bg-slate-800 dark:border-slate-200">
        <div className="mx-auto max-w-3xl p-4 text-5xl font-thin tracking-wider text-center">
          <Link href="/">
            <a className="text-slate- 700 dark:text-slate-100 no-underline">Notes</a>
          </Link>
        </div>
      </header>
      <main className="flex-grow">
        <div className="mx-auto max-w-4xl px-4 py-24 prose dark:prose-invert flex flex-col">
          {children}
        </div>
      </main>

      {/* Footer ad */}
      <ins className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-4371236859448682"
        data-ad-slot="8151173719"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>

      <footer className="border-t bg-slate-100 border-slate-800 dark:bg-slate-800 dark:border-slate-200">
        <div className="mx-auto max-w-3xl p-4 text-center text-xs">
          &copy; 2022
        </div>
      </footer>
    </div>
  )
}

export default HomeLayout