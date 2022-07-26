export const split = async(imageData: ImageData, splits: Set<number>) => {
    let lineRecord = 0
    const result: string[] = []
    const splitsCopy = new Set(splits)
    splitsCopy.add(imageData.height)
    const bitmap = await createImageBitmap(imageData)
    for (const line of splitsCopy) {
        const image = cutImage(bitmap, imageData.width, line - lineRecord, 0, lineRecord)
        if (!image) continue
        result.push(image)
        lineRecord = line
    }
    return result
}

export const cutImage = (bitmap: ImageBitmap, width: number, height: number, x: number, y: number) => {
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.drawImage(bitmap, x, y, width, height, 0, 0, width, height)
    return canvas.toDataURL()
}