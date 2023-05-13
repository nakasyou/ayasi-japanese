import convert from "./convert.ts"

export default c => {
  const text = c.req.query("q") ? c.req.query("q") : ""

  return c.text(convert(text))
}
