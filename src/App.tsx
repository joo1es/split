import { Component, createEffect } from 'solid-js'
import { createSignal } from 'solid-js'
import Upload from './components/Upload'

import styles from './App.module.css'
import { variance, avarage } from './utils/variance'

const App: Component = () => {
    const [data, setData] = createSignal<ImageData>()
    const [img, setImg] = createSignal('')
    const [splitImg, setSplitImg] = createSignal('')
    const [splitsSet, setSplitsSet] = createSignal<Set<number>>()
    const [value, setValue] = createSignal('70')
    createEffect(() => {
        const imageData = data()
        setSplitImg('')
        if (!imageData) return
        const lines: number[][] = []
        for (let i = 0; i < imageData.data.length; i += 4) {
            // const rgba = [imageData.data[i], imageData.data[i + 1], imageData.data[i + 2], imageData.data[i + 3]]
            const currentLine = Math.floor(i / (imageData.width * 4))
            if (!lines[currentLine]) lines[currentLine] = []
            lines[currentLine].push(
                imageData.data[i] + imageData.data[i + 1] + imageData.data[i + 2] + imageData.data[i + 3]
            )
        }
        const splits = new Set<number>()
        for (let i = 0; i < lines.length - 1; i++) {
            const line = lines[i]
            const nextLine = lines[i + 1]
            const deltaLine: number[] = []
            for (let j = 0; j < line.length; j++) {
                const current = line[j]
                const next = nextLine[j]
                deltaLine.push(Math.abs(next - current))
            }
            const avarageNumber = avarage(deltaLine)
            if (avarageNumber > Number(value())) splits.add(i + 1)
        }
        setSplitsSet(splits)
        const canvas = document.createElement('canvas')
        canvas.width = imageData.width
        canvas.height = imageData.height
        const ctx = canvas.getContext('2d')
        if (!ctx) return
        ctx.putImageData(imageData, 0, 0)
        ctx.lineWidth = 1
        ctx.strokeStyle = 'red'
        for (const split of splits) {
            ctx.beginPath();
            ctx.moveTo(0, split);
            ctx.lineTo(imageData.width, split)
            ctx.stroke()
            ctx.closePath()
        }
        setSplitImg(canvas.toDataURL())
    })
    return (
        <div class={styles.App}>
            {
                !data() ? (
                    <Upload
                        onUpload={(data, img) => {
                            setData(data)
                            setImg(img)
                        }}
                    />
                ) : (
                    <>
                        <img class={styles.img} src={splitImg() || img()} />
                        <div>
                            <span>分割为 {(splitsSet()?.size || 0) + 1} 块</span>
                            <input type="number" value={value()} onChange={(e) => {
                                setValue((e.target as HTMLInputElement).value)
                            }} />
                            <button
                                class={styles.button}
                                onClick={() => {
                                    setData()
                                    setImg('')
                                }}
                            >重新上传</button>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default App;
