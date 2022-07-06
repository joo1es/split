import { Component } from "solid-js"

interface Props {
    onUpload: (data: ImageData, img: string) => void
}

const Upload: Component<Props> = (props) => {
    const handleUpload = (e: Event) => {
        const files = (e.target as HTMLInputElement).files
        if (!files) return
        const file = files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            const img = new Image()
            img.src = reader.result as string
            img.onload = () => {
                const canvas = document.createElement('canvas')
                canvas.width = img.width
                canvas.height = img.height
                const ctx = canvas.getContext('2d')
                if (!ctx) return
                ctx.drawImage(img, 0, 0);
                (e.target as HTMLInputElement).value = ''
                props.onUpload(ctx.getImageData(0, 0, img.width, img.height), img.src)
            }
        }
    }
    let $input: HTMLInputElement | undefined = void 0
    return (
        <>
            <button
                onClick={() => {
                    if (!$input) return
                    $input.click()
                }}
            >UPLOAD</button>
            <input ref={$input} type="file" onChange={handleUpload} style={{ display: 'none' }} />
        </>
    )
}

export default Upload