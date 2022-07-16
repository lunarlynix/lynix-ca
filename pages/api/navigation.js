export default function handler(
  req,
  res
) {
  res.status(200).json({ links: [
    {
      name: "About Me",
      path: "/about-me",
      icon: "fa-solid fa-user mr-1"
    },
    {
      name: "Blog",
      path: "/blog",
      icon: "fa-solid fa-newspaper mr-1"
    },
    {
      name: "Notes & Tools",
      path: "/notes",
      icon: "fa-solid fa-book mr-1"
    },
    {
      name: "Contact",
      path: "/contact",
      icon: "fa-solid fa-comment mr-1"
    },
  ] })
}
