import {GitHubLogoIcon, LinkedInLogoIcon} from "@radix-ui/react-icons"
function Footer() {
  return (
    <footer className="bg-zitext-stone-50 dark:bg-stone-950 w-full flex justify-center px-10 mt-2">
  <section className="container my-5 flex justify-between sm:flex-row flex-col items-center">
    <article>
        <p className="text-xs font-extralight dark:text-stone-500 text-stone-500  mb-1"> <code>g.ilhuicatzi@gmail.com</code></p>
        <p className="flex gap-3 items-center justify-center mb-2">
          <button
            aria-label="github"
            onClick={() =>window.open("https://github.com/ilhuicatzi", "_blank")}>
          <GitHubLogoIcon className="w-5 h-5 text-stone-700 hover:text-stone-900 dark:text-stone-700 hover:dark:text-stone-300  dark:hover:scale-125 hover:scale-125  inline-block transition duration-300" />
          </button>
          <button
          aria-label="linkedin"
          onClick={() =>window.open("https://www.linkedin.com/in/gonzalo-ilhuicatzi-787a901a1", "_blank")}>
          <LinkedInLogoIcon className="w-5 h-5 text-stone-700 hover:text-stone-900 dark:text-stone-700 hover:dark:text-stone-300  dark:hover:scale-125 hover:scale-125  inline-block transition duration-300" />
          </button>
        </p>
    </article>
    <article className="text-xs sm:text-sm font-light dark:text-stone-50">
      Copyright © 2024 Gonzalo
    </article>
  </section>
</footer>
  )
}

export default Footer