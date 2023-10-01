# Simple Clone Short Video

> A simple clone short video app using React with TypeScript, for Heng Yuan company test demo.

## Implemented

- [x] 上下滑動切換
- [x] 過場圖片遮罩(預覽圖)
- [x] Progress Bar 可拖曳播放進度

## Todo or Fixed

- [ ] Following / For You 切換暫停(切換回去要從離開的進度繼續播放)
- [ ] 測試兼容性(Use ngrok)
  - [x] Mac Chrome
  - [ ] iPhone 實體手機
  - [ ] iPhone Simulator

## Question

### 如何設計一部影片中，提供前 5 分鐘的試看內容，並且在試看結束後，限制使用者必須付費才能繼續觀看

## Technology used

- React 18
- TypeScript
- Vite 4.4.5
- TailwindCSS
- hls.js
- swiper

## Remark

Because I use pnpm as package manager, so I need use executable commands.
example: `pnpm dlx tailwindcss init` instead of `npx tailwindcss init`.
