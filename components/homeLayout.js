import Link from "next/link";

const HomeLayout = ({ children }) => {

  return (
    <div className="min-h-screen flex flex-col dark:bg-slate-800 dark:text-slate-100">
      <header className="border-b bg-slate-100 border-slate-500 dark:bg-slate-800">
        <div className="mx-auto max-w-3xl p-4 text-5xl font-thin tracking-wider text-center">
          <Link href="/">
            <a className="text-slate- 700 dark:text-slate-100 no-underline font-display">Notes</a>
          </Link>
        </div>
      </header>
      <main className="flex-grow">
        <div className="mx-auto max-w-4xl px-4 py-24 prose dark:prose-invert flex flex-col">
          {children}
        </div>
      </main>

      <footer className="border-t bg-slate-100 border-slate-500 dark:bg-slate-800">
        <div className="mx-auto max-w-3xl p-4 text-center text-xs">
          &copy; 2022
        </div>
      </footer>
    </div>
  )
}

export default HomeLayout