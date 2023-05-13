export default (text: string): string => {
  const data: Record<string,string> = {
    "語": "语",
    "し": "レ"
  }
  for(const [pure, ayasi] of Object.entries(data)){
    text = text.replaceAll(new RegExp(pure), (raw) => {
      return (Math.random()>0.5) ? ayasi : raw
    })
  }
  return text
}
