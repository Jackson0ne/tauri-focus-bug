## What is this for?

This is a minimal reproduction to demonstrate an issue with focusing windows in Tauri 1.4. In this project, both windows have their focus properties set to "false" (either via `tauri.conf.json`, or via the `new WebviewWindow` JS method), but will exhibit different behaviour under different circumstances.

It seems that the focus state of any subsequently spawned windows depends on the current focus state of the main window, as demonstrated below.

## How to reproduce the bug:

- After compiling and running, a small window will appear in the center of the screen. Another window will be spawned via JS after 5 seconds.
- If the first window is unfocused (i.e. clicked out of) before the second window appears, the DevTools Console will report the second window's focus state as "false" - this is the desired state as set in JS via `"focus": false`.
- However, if you run the project again and click the first window to focus it, the second window's focus state will now be reported as "true" in the DevTools Console. It seems to follow the focus state of the first window, regardless of whether the "focus" setting is explicitly set via the Window Options.
