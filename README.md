# motitsu-motaretsu-hp

株式会社モチツモタレツのコーポレートサイトの**サンプルページ**です。
本番公開用ではなく、社内での共有・確認を目的としています。

- Figma Make で作成したデザイン（React）を、HTML / CSS / JavaScript で書き直したものです
- ビルドツールやパッケージのインストールは不要です
- 文言はほぼ同じで、デザインだけが異なる案を複数用意しています。ヘッダー右上の「A案 / B案 / C案」で切り替えられます

| 案 | ファイル | デザイン |
| --- | --- | --- |
| A案 | `index.html` | 余白を広く取った、落ち着いたコーポレート風 |
| B案 | `b.html` | カードやコードエディタ風のビジュアルを使ったテックスタートアップ風 |
| C案 | — | 準備中 |

## ファイル構成

```
motitsu-motaretsu-hp/
├── index.html        # A案
├── b.html            # B案
├── css/
│   ├── common.css    # 全案共通（リセット・基本設定・A/B/C案の切り替えボタン）
│   ├── style.css     # A案のスタイル
│   └── style-b.css   # B案のスタイル
├── js/
│   └── main.js       # 全案共通（スマホメニュー開閉・フォーム完了表示の切り替え）
└── README.md
```

## ローカルでの確認方法

### ブラウザで直接開く（いちばん手軽）

```sh
cd motitsu-motaretsu-hp
open index.html
```

`open` は macOS のコマンドです。Windows の場合は `start index.html`、またはエクスプローラーから `index.html` をダブルクリックしてください。

## GitHub Pages での公開

1. GitHub のリポジトリで **Settings → Pages** を開く
2. **Source** で「Deploy from a branch」を選ぶ
3. **Branch** で `main`、フォルダで `/ (root)` を選んで **Save**
4. 数分後、`https://<ユーザー名または組織名>.github.io/motitsu-motaretsu-hp/` で閲覧できるようになります

↑の対応は完了しているので以降は`main` ブランチに push するたびに、公開ページも自動で更新されます。

> **注意：GitHub Pages は基本的に誰でも閲覧できます**
> リポジトリを private にしていても、GitHub Pages のページ自体は URL を知っていれば誰でも見られます（閲覧者を限定できるのは GitHub Enterprise Cloud の場合のみ）。
> 社内限定の情報（実在の取引先名、社員の個人情報など）は載せないでください。

## サンプルとしての注意点

- **お問い合わせフォームは送信されません。** 送信ボタンを押すと完了表示に切り替わるだけで、データはどこにも送られません
- **会社概要や実績はダミーを含みます。** 代表者名「山田 太郎」などは仮の内容です
- **画像は Unsplash のフリー素材です。** 実際の社内写真ではありません
