# 🎨 Design System & Guidelines

星川大地 公式サイトのデザインルールです。
「Logic & Passion（論理と情熱）」をテーマに、信頼感のある和モダンな世界観を構築しています。

## 1. Color Palette (カラーパレット)

### Primary Colors
- **Trust Navy (濃紺)**: `#0A1A3A`
  - 使用箇所: ヘッダー、フッター、見出し、背景
  - 意味: 揺るぎない信念、警察出身の規律、夜明け前の静寂
- **Action Red (朱赤)**: `#FF1A1A`
  - 使用箇所: アクセント、CTAボタン、強調テキスト
  - 意味: 情熱、行動力、変革への意志
- **Support Green (若竹色)**: `#008c4b`
  - 使用箇所: 制度ナビ（Support Portal）、LINEボタン
  - 意味: 安心、成長、寄り添う心

### Base Colors
- **Washi White (和紙白)**: `#F9F9F6`
  - 使用箇所: 背景ベース
  - 特徴: 真っ白ではなく、和紙のような温かみのある白。ノイズテクスチャと組み合わせて使用。
- **Text Black**: `#333333` / `slate-800`
  - 使用箇所: 本文

## 2. Typography (タイポグラフィ)

### Font Family
- **Serif (明朝体)**: `Noto Serif JP`
  - 使用箇所: ヒーローキャッチコピー、セクションタイトル、"Logic & Passion"を象徴する部分
  - 印象: 知的、伝統、重厚
- **Sans-Serif (ゴシック体)**: `Noto Sans JP`
  - 使用箇所: 本文、ボタン、UI要素
  - 印象: 現代的、可読性、実務能力
- **English**: `Montserrat`
  - 使用箇所: 英語見出し (VISION, POLICY, etc.)
  - 印象: 幾何学的で強い意志

### Usage Rules
- **縦書き (Vertical Writing)**: 日本的な美意識を表現するため、名前や特定のキャッチコピーに使用。
  - CSS Class: `.writing-vertical-rl`

## 3. UI/UX Motifs

### Textures & Effects
- **金砂子 (Gold Dust)**: 高級感と和の演出として、セクション背景に散らす金色の粒子。
- **Glassmorphism**: 現代的な透明感。ナビゲーションバーやカードの背景に使用。

### Layout Patterns
- **Bento Grid**: 情報を整理して見せるグリッドレイアウト。活動報告や実績セクションで採用。
- **Parallax**: スクロールに応じた視差効果で奥行きを表現。

## 4. Components

### Buttons
- **Primary**: Action Red (`#FF1A1A`) + White Text + Shadow
- **Secondary**: Outlined Navy (`#0A1A3A`)

### Cards
- 基本的に白背景 + 影（Shadow） + ホバーエフェクト（Scale Up）

---

> [!NOTE]
> デザイン修正を行う際は、このルールを逸脱しないように心がけてください。特に「赤」の多用は避け、ここぞという場面で使用することで効果を高めます。
