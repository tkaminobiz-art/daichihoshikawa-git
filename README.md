# 🌟 星川大地 公式サイト (Daichi Hoshikawa Official Website)

奈良県議会議員 星川大地の公式サイトリニューアルプロジェクト。
「現場の声」と「政策（ロジック）」を融合させ、信頼と熱意を伝えるデザインを目指しています。

## 🛠️ 技術スタック (Tech Stack)

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (Recommended)

## 📂 プロジェクト構成 (Directory Structure)

重要なドキュメントは `DAICHI HOSHIKAWA/` ディレクトリに一元管理されています。

- **`DAICHI HOSHIKAWA/`**
  - `task.md`: 進捗管理・タスク一覧
  - `implementation_plan.md`: 実装計画・仕様詳細
  - `addition_proposal.md`: 機能追加・デザイン提案

- **`app/`**: Next.js アプリケーションのページ・ルーティング
- **`components/`**: 再利用可能なUIコンポーネント
- **`data/`**: コンテンツ用データファイル（`supportData.ts` など）

## 🚀 開発の始め方 (Getting Started)

MacBook Airなどの別デバイスで作業を始める手順です。

### 1. 準備 (Prerequisites)
- [Node.js](https://nodejs.org/) (v18以上推奨)
- Git

### 2. 環境構築 (Setup)

ターミナルを開き、以下のコマンドを実行してください。

```bash
# リポジトリのクローン
git clone https://github.com/tkaminobiz-art/daichihoshikawa-git.git

# ディレクトリへ移動
cd daichihoshikawa-git

# 依存パッケージのインストール
npm install
```

### 3. 開発サーバーの起動 (Run Dev Server)

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開くと、サイトが表示されます。

## 🔄 複数デバイスでの作業フロー (Workflow)

このプロジェクトは `DAICHI HOSHIKAWA/` 内のドキュメントで進行状況を管理しています。

1. **作業開始前**: 必ず `git pull` して最新の状態を取得する。
2. **指示出し**: `DAICHI HOSHIKAWA/task.md` に新しいタスクを追記するだけでも立派な指示になります。
3. **作業終了時**: 変更内容を `git push` して保存する。

こうすることで、iMacとMacBook Airの間で「指示」と「進捗」を同期できます。
