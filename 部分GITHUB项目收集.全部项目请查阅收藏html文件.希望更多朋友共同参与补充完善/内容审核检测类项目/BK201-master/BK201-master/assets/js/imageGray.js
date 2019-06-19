export default function(ele, hgt = 0) {
  if (typeof window === 'undefined' || !ele) {
    return 0
  }

  let [data, width, height, length, i = -4, count = 0] = []

  const getRGB = reallyImage => {
    const canvas = document.createElement('canvas')
    const context = canvas.getContext && canvas.getContext('2d')
    const rgb = { r: 0, g: 0, b: 0 }
    const blockSize = 5 // only visit every 5 pixels

    height = canvas.height =
      hgt ||
      reallyImage.naturalHeight ||
      reallyImage.offsetHeight ||
      reallyImage.height
    width = canvas.width =
      reallyImage.naturalWidth || reallyImage.offsetWidth || reallyImage.width

    try {
      context.drawImage(reallyImage, 0, 0, width, height)
    } catch (e) {
      return rgb
    }

    try {
      data = context.getImageData(0, 0, width, height)
    } catch (e) {
      return rgb
    }

    length = data.data.length

    while ((i += blockSize * 4) < length) {
      ++count
      rgb.r += data.data[i]
      rgb.g += data.data[i + 1]
      rgb.b += data.data[i + 2]
    }

    rgb.r = ~~(rgb.r / count)
    rgb.g = ~~(rgb.g / count)
    rgb.b = ~~(rgb.b / count)
    return rgb
  }

  const getGray = rgb => {
    return rgb.r * 0.299 + rgb.g * 0.587 + rgb.b * 0.114
  }

  return parseInt(getGray(getRGB(ele)), 10)
}
