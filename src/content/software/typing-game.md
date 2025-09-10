---
title: "ことばの魔王とえいごの勇者"
date: "2025-09-10"
excerpt: "ADHDとディスレクシアのある学生のための英語学習アプリをもとにした、英語学習タイピングゲームです。"
image: "/software/typing-game.webp"
---
## 概要
- 英語の単語やフレーズを素早く正確にタイピングする練習ができるゲームです。
- 日本語訳のヒント付きで、初心者から上級者まで対応しています。
- 学習モードでは、問題提示時に日本語と英語の両方のヒントが表示されます。
- 問題文は自動で読み上げられるため、リスニング練習にも活用できます。

## 主な機能
- ランダム出題：登録リストから問題をランダムに選択します。
- 学習モード：最初から日本語訳と英語単語を同時に表示。
- 音声合成：Web Speech APIを利用した自動音声合成。
- スコア管理：正解数・誤答数・所要時間を計測。
- レスポンシブデザイン：PC・タブレットで快適にプレイ可能。
- 小学校高学年から利用可能：小学校3年生までに習う漢字のみを使用。

## 動作環境
- ブラウザ：Google Chrome 最新版推奨（音声合成API対応ブラウザ）
- Node.js：v18以上（ローカル開発用）
- OS：Windows / macOS / Linux / Chromebook

## 動作サイト
- [https://drthomas246.github.io/typing-game/](https://drthomas246.github.io/typing-game/)

## インストール方法
```sh
# Clone the repository
git clone https://github.com/drthomas246/typing-game.git
cd typing-game
# Install dependencies
npm install
# Start the development server
npm run dev
```

## 使用方法
- 画面の「Start」ボタンをクリック。
- キーボードで提示された単語を入力。
- 正解すると次の問題に進みます。
- 学習モードを有効にすると、最初から日本語訳と英語が表示されます。
- 提示された単語は自動的に音声読み上げされます（対応ブラウザのみ）

## 設定
- src/lib/texts/qa_test.ts を基に、質問と翻訳のファイルを作成してください。
- 上記で作成したファイルを App.tsx にインポートし、ボタンを配置してください。
- useSpeech フックを使用して音声設定（言語コード、速度、音質）を変更できます。
- UI のテーマや色は src/styles で変更可能です。

## 開発者向け
- React + TypeScript で実装。
- 状態管理は React Hooks を使用。
- 音声再生には SpeechSynthesisUtterance を使用。

## ライセンス
Copyright (c) 2025 Yamahara Yoshihiro 本ソフトウェアは個人・非営利目的でのみ提供されます。許可なく再配布・改変することを禁じます。

本アプリ内の画像は [いらすとや](https://www.irasutoya.com/) より提供されています。

本アプリ内で使用されているモンスターと背景画像は[Gemini](https://gemini.google.com/app)を使用して作成されています。

本アプリ内の効果音は[効果音ラボ](https://soundeffect-lab.info/)と[OtoLogic](https://otologic.jp/)からお借りしています。

## 概要
- 機能：ランダム問題、学習モード、音声合成、スコア計算
- 技術：React + TypeScript + Web Speech API
- 推奨環境：Chrome最新版 / Node.js v18+
- カスタマイズ：問題リスト、音声設定、テーマカラーを変更可能
