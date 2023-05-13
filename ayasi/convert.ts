export default (text: string): string => {
  const data: Record<string,string> = {
    "語": "语",
  }
  for(const [pure, ayasi] of Object.entries(data)){
    text = text.replaceAll(pure,ayasi)
  }
  return text
}
