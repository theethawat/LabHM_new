import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 画像パスを正規化する関数（basePath対応）
export function getImagePath(path: string): string {
  // 相対パスの場合は適切な形式に変換
  if (path.startsWith("./")) {
    path = path.replace("./", "/");
  }

  if (process.env.NODE_ENV === "development") {
    return path;
  }

  // 本番ビルド時（basePath設定時）はプレフィックスを追加
  if (typeof window !== "undefined") {
    // クライアントサイドでbasePath情報を取得
    const basePath = document
      .querySelector('script[src*="/_next/"]')
      ?.getAttribute("src")
      ?.match(/^(\/[^\/]+)?\//);
    if (basePath && basePath[1]) {
      return basePath[1] + path;
    }
  } else {
    // サーバーサイドまたはビルド時
    if (process.env.STATIC_EXPORT === "true") {
      return "/imagelab" + path;
    }
  }

  // 開発環境または通常の場合はそのまま返す
  return path;
}

// リンクパスを正規化する関数（basePath対応）
export function getLinkPath(path: string): string {
  // 本番ビルド時（basePath設定時）はプレフィックスを追加
  if (typeof window !== "undefined") {
    // クライアントサイドでbasePath情報を取得
    const basePath = document
      .querySelector('script[src*="/_next/"]')
      ?.getAttribute("src")
      ?.match(/^(\/[^\/]+)?\//);
    if (basePath && basePath[1]) {
      return basePath[1] + path;
    }
  } else {
    // サーバーサイドまたはビルド時
    if (process.env.STATIC_EXPORT === "true") {
      return "/imagelab" + path;
    }
  }

  // 開発環境または通常の場合はそのまま返す
  return path;
}

// 背景画像のスタイルを生成する関数
export function getBackgroundImageStyle(imagePath: string) {
  return {
    backgroundImage: `url('${getImagePath(imagePath)}')`,
  };
}
