import { NextResponse, type NextRequest } from "next/server";

/*
 * basePath (/2026) の外のパス(/2025 など)は Next.js が素の 404 を返し、app/not-found.tsx が使われない。
 * basePath 配下の存在しないパスへ rewrite して、同じ 404 ページを表示させる(URL はそのまま、ステータスも 404)
 */
export function proxy(request: NextRequest) {
  // basePath 配下のリクエストでは nextUrl.basePath に "/2026" が入る
  if (request.nextUrl.basePath) return NextResponse.next();
  return NextResponse.rewrite(new URL("/2026/_not-found", request.url));
}
