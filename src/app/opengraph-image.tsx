import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "FUTURE CLASTAR 2026";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// ImageResponse は woff2 非対応のため、OGP 用に TTF を別途読み込む
const font = await readFile(join(process.cwd(), "src/app/fonts/GenInterfaceJPDisplay-Bold.ttf"));

const toDataUrl = async (file: string) =>
  `data:image/png;base64,${(await readFile(join(process.cwd(), "public", file))).toString("base64")}`;
const miku = await toDataUrl("miku_mainVisual_2026-resize.png");
const triangle = await toDataUrl("voca_fun_triangle.png");

// トップページの横並び表示(立ち絵 + テキスト)を 1200×630 で再現する
export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          gap: 36,
          background: "#111111",
          color: "#ededed",
          fontFamily: "GenInterfaceJP",
          fontWeight: 700,
        }}
      >
        {/* 立ち絵は 2:3。三角形の配置は page.tsx と同じ比率 */}
        <div style={{ display: "flex", position: "relative", width: 400, height: 600 }}>
          <img src={triangle} alt="" width={360} height={360} style={{ position: "absolute", top: 84, left: 20 }} />
          <img src={miku} alt="" width={400} height={600} />
        </div>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24 }}>
          <div style={{ fontSize: 76, lineHeight: 1.25, letterSpacing: "-0.025em" }}>FUTURE CLASTAR</div>
          <div style={{ fontSize: 38 }}>Future University Hakodate</div>
          <div style={{ fontSize: 38 }}>2026.10.11 (Sun)</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [{ name: "GenInterfaceJP", data: font, weight: 700, style: "normal" }],
    },
  );
}
