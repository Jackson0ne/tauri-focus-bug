const { invoke } = window.__TAURI__.tauri
const { getCurrent, WebviewWindow } = window.__TAURI__.window

console.log(`Main window focused: ${await getCurrent().isFocused()}`)

setTimeout(() => {
    const win = new WebviewWindow("testjs",{
        visible: false,
        focus: false,
        center: true,
        width: 300,
        height: 150
    })

    win.once("tauri://created", async () => {
        win.show()
        console.log(`Spawned JS window focused: ${await WebviewWindow.getByLabel("testjs").isFocused()}`)
    })

    win.once("tauri://error", err => console.log(err))
}, 5000)