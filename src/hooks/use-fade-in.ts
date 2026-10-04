import { useEffect } from "react"

export function useFadeIn() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>("[data-fade-in]")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    )

    elements.forEach((element) => {
      element.classList.add("fade-in-section")
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])
}
