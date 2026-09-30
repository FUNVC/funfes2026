# FUTURE CLASTAR 2026

公立はこだて未来大学 ボカロファンサークル（FUNVC）によるバーチャル3DCGライブイベント「FUTURE CLASTAR 2026」（2026.10.11 開催）の公式サイトです。

## 技術スタック

- Next.js 16（App Router）/ React 19 / TypeScript
- Tailwind CSS v4
- フォント: GenInterfaceJP Display（ローカル）、Geist

## 開発

```bash
pnpm install
pnpm dev
```

<http://localhost:3000/2026> で確認できます。

| コマンド | 内容 |
| --- | --- |
| `pnpm dev` | 開発サーバー起動 |
| `pnpm build` | 本番ビルド |
| `pnpm start` | 本番サーバー起動 |
| `pnpm lint` | ESLint 実行 |

## 構成

```
src/
  app/
    layout.tsx      # フォント・メタデータ設定
    page.tsx        # トップページ（メインビジュアル・タイトル・開催日）
    globals.css     # 配色・フォントのテーマ定義
    fonts/          # GenInterfaceJP Display (woff2)
  components/
    TicketButton.tsx  # チケット受付ボタン（LivePocket へリンク）
public/             # メインビジュアル画像など
```

## メモ

- `basePath` は `/2026`。ルート `/` へのアクセスは `/2026` にリダイレクトされます（[next.config.ts](next.config.ts)）。
- トップページは画面の向きで縦並び / 横並びを切り替え、CSS 変数でビューポートに収まるようサイズを計算しています。
- この Next.js は学習データと異なる可能性があるため、実装前に `node_modules/next/dist/docs/` を参照してください（[AGENTS.md](AGENTS.md)）。
