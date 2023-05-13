export default (text: string): string => {
  const data: Record<string,string> = {
    "語": "语",
    "きさま|あなた|貴方|きみ": "贵樣",
    "すごい|えぐい|やばい|めっちゃ|大きな": "極度",
    
    // ひらがな
    "し": "レ",
    "る": "ゑ",
    "ら": "う",
    "か", "カ",
  }
  for(const [pure, ayasi] of Object.entries(data)){
    text = text.replaceAll(new RegExp(pure,"g"), (raw) => {
      return (Math.random()>0.3) ? ayasi : raw
    })
  }
  return text
}
