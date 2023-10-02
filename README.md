# Simple Clone Short Video

> A simple clone short video app using React with TypeScript, for Heng Yuan company test demo.

## Implemented

- [x] 上下滑動切換
- [x] 過場圖片遮罩(預覽圖)
- [x] Progress Bar 可拖曳播放進度

## Todo or Fixed

- [ ] Following / For You 切換暫停(切換回去要從離開的進度繼續播放)
- [ ] 測試兼容性
  - [x] Mac Chrome
  - [x] Mac Safari
  - [ ] 目前測試使用 ngrok，讓實體手機連上網址，但無法拿到本地端 api，暫時無法測試，後續研究部署後端專案到任一 SaaS 服務，在打遠端 api 測試
    - [ ] iPhone 實體手機
    - [ ] iPhone Simulator
- [ ] 正中間的播放按鈕，無法正常暫停，需仰賴 video tag 原生的暫停按鈕

## Question

### 如何設計一部影片中，提供前 5 分鐘的試看內容，並且在試看結束後，限制使用者必須付費才能繼續觀看

設計一個具有 5 分鐘免費試用的視頻播放器涉及前端和後端邏輯。以下是如何實現此功能的高級概述：

#### 後端模擬邏輯

- 確認使用者已認證登入，用於追蹤不同使用者的試看狀況與種類。
- 在 `database` 中建立一個 `trial_watch` table，用於紀錄使用者的試看狀況，例如哪些類型的試看內容的完看率較高。
- 當使用者觀看影片時，前後端都進行倒數檢查，若觀看進度到達 5 分鐘，則阻擋使用者繼續觀看，並且回傳阻擋狀態給前端。
- 當使用者再次觀看影片時，檢查使用者的付費狀況，若已付費，則不阻擋使用者繼續觀看影片。
- 當使用者觀看完影片時，將使用者的觀看狀況寫入 `database`，用於後續的分析。

#### 前端模擬邏輯

- 當使用者播放影片時，建立倒數計時器，當到達 5 分鐘時，阻擋使用者繼續觀看影片，並且跳出付費或訂閱提示。
- 檢查後端回傳的阻擋狀態，若為阻擋，則顯示付費或訂閱提示(避免前端被繞過)。
- 串接當前已有的金流，提供使用者付費或訂閱的功能。
- 根據付費的狀態以及需求，開通使用者的觀看權限(但仍是遵循後端回傳的狀態)。

#### 前端 Mock Function

```jsx
import { useEffect, useState } from 'react';

const checkIfUserHasPaid = () => false;

function VideoPlayer() {
  const [hasPaid, setHasPaid] = useState(checkIfUserHasPaid());
  const [secondsWatched, setSecondsWatched] = useState(0);
  const [videoSrc, setVideoSrc] = useState('mock_video_source_here');

  useEffect(() => {
    let timer;
    if (!hasPaid && secondsWatched < 300) {
      // 300 秒 = 5 分鐘
      timer = setInterval(() => {
        setSecondsWatched((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else if (secondsWatched >= 300) {
      clearInterval(timer);
      // 在這裡顯示付款提示
      setVideoSrc(''); // 移除影片來源，避免前端被繞過，並跳出付費提示訊息
    }

    return () => {
      clearInterval(timer);
    };
  }, [hasPaid, secondsWatched]);

  const handlePaymentSuccess = () => {
    setHasPaid(true);
    setVideoSrc('mock_video_source_here'); // 付款後，重置影片來源
  };

  return (
    <div>
      <video controls src={videoSrc} />
      {secondsWatched >= 300 && !hasPaid && (
        <div>
          <p>您的 5 分鐘試用已結束。請訂閱已繼續觀看。</p>
          <button onClick={handlePaymentSuccess}>模擬付款按鈕</button>
        </div>
      )}
    </div>
  );
}

export default VideoPlayer;
```

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
