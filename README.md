# Mã Âm

Tên dự án là **Mã Âm**, ghép từ **Mã** hóa và **Âm** thanh. Phần giao nhau là mã (code) và âm (sound): phần mềm để làm việc với âm nhạc. Slug `maam` là cách viết không dấu, liền nhau của Mã Âm.

Monorepo Bun cho ứng dụng âm nhạc. App chạy trên TanStack Start (Vite) và Cloudflare Workers.

## Cấu trúc

```
apps/web              @maam/web         TanStack Start + @cloudflare/vite-plugin
packages/types        @maam/types       kiểu dùng chung, không phụ thuộc DOM
packages/music-core   @maam/music-core  TypeScript thuần, không phụ thuộc browser
packages/audio        @maam/audio       wrapper Tone.js, chỉ chạy trên client
```

Hướng phụ thuộc: `music-core` và `audio` dùng `types`. `web` dùng cả ba. `music-core` không được phụ thuộc `audio`, Tone.js, React, hay DOM.

## Client-only

`@maam/types` và `@maam/music-core` chạy được trên Worker lẫn browser.

`@maam/audio` và Tone.js cần Web Audio API. Chỉ import động từ event handler hoặc `useEffect` trên client. Không import từ loader, server function, hay module route được SSR đánh giá.

## Chạy

```sh
cd apps/web
bun install
bun dev
```

OSMD, Strudel và Better Auth cố ý chưa được cài.
