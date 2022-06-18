import Link from "next/link"

const Breadcrumb = ({ props }) => {
  return (
    <div className="flex">
      <div className="bg-slate-100 dark:bg-slate-700 px-4 py-2">
        <ul className="flex items-baseline gap-2 list-none pl-0 text-sm">
          <li className="m-0 p-0">
            <Link href="/">
              <a className="text-slate- 700 dark:text-slate-100 no-underline hover:underline ">Home</a>
            </Link>
          </li>/
          <li class="m-0 p-0">
            <Link href="#">
              <a className="text-slate- 700 dark:text-slate-100 no-underline hover:underline ">Human Anatomy and Physiology</a>
            </Link>
          </li>/
          <li class="m-0 p-0">
            <Link href="#">
              <a className="text-slate- 700 dark:text-slate-100 no-underline hover:underline ">Musculoskeletal System</a>
            </Link>
          </li>/
          <li class="m-0 p-0">
            <span className="text-slate- 700 dark:text-slate-200 no-underline font-bold">Skeletal System</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Breadcrumb