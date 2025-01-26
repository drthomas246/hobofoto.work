---
title: "Novel Editor"
date: "2019-07-18"
excerpt: "Python で作った、「小説家になろう」の投稿用エディターです。「キャラクター」、「職種」、「場所」、「イベント」、「イメージ」、「小説」をわけて管理することで小説を少しでも楽にかけるようにしてあります。"
image: "/software/novel-editor.webp"
---

[![ビルドステータス](https://scrutinizer-ci.com/g/drthomas246/novel_editor/badges/build.png?b=master)](https://scrutinizer-ci.com/g/drthomas246/novel_editor/build-status/master)
[![scrutinizerコード品質](https://scrutinizer-ci.com/g/drthomas246/novel_editor/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/drthomas246/novel_editor/?branch=master)
[![カバレッジ](https://scrutinizer-ci.com/g/drthomas246/novel_editor/badges/coverage.png?b=master)](https://drthomas246.github.io/novel_editor/htmlcov/index.html)
[![Pythonバージョン](https://img.shields.io/badge/python-3.7.4-orange)](https://www.python.org/)
[![ソースコードサイズ](https://img.shields.io/github/languages/code-size/drthomas246/novel_editor)](https://github.com/drthomas246/novel_editor/blob/master/source/novel_editor.py)
[![ライセンス](https://img.shields.io/github/license/drthomas246/novel_editor)](https://github.com/drthomas246/novel_editor/blob/master/LICENSE.md)
[![PEP8](https://img.shields.io/badge/PEP8-Correspondence-green)](https://pep8-ja.readthedocs.io/ja/latest/)
[![リリース](https://img.shields.io/github/v/release/drthomas246/novel_editor?include_prereleases)](https://github.com/drthomas246/novel_editor/releases)  
![ドキュメント](https://img.shields.io/badge/document-ja-green)
![コミットメッセージ](https://img.shields.io/badge/Commit_message-ja-green)
![コードコメント](https://img.shields.io/badge/code_comment-ja-green)

- Python で作った、「[小説家になろう](https://syosetu.com/)」の投稿用エディターです。
- 「キャラクター」、「職種」、「場所」、「イベント」、「イメージ」、「小説」をわけて管理することで小説を少しでも楽にかけるようにしてあります。
- TAB キーでキャラクターに登録した、一覧を簡単に入力できます。
- Ctrl+R で選択文字列の漢字部分にルビを振ることができます。
- Ctrl+Shift+R で文章を読み上げることができます。
- Ctrl+U で小説家になろうのユーザーページを開くことができます。
- 登場人物がシンタックスハイライトされます。

## 使用方法

- Windows 用にコンパイルした物（novel_editor.exe）があります。ダブルクリックすれば起動します。  
  また、削除は、novel_editor フォルダーを削除してください。レジストリは汚していません。

- **ver0.2.0b 以降からセーブファイルの保存形式が変更になっています。今までのファイルを開くと最悪セーブファイル自身が破壊されてしまいます。  
  ver0.2.0b 以降をはじめて使う場合は、申し訳ありませんが、Releases にある change.exe でファイルの保存形式を変換してからご使用ください。  
  一度変更するとその後は、change.exe を使用せずに保存できるようになります。**

## コマンド一覧

### 通常時 (文字入力画面)

|   コマンド   |               処理内容               |
| :----------: | :----------------------------------: |
|    Ctrl+N    |               新規作成               |
|    Ctrl+E    |            ファイルを開く            |
|    Ctrl+W    |           名前をつけて保存           |
|    Ctrl+S    |              上書き保存              |
| Ctrl+Shift+C |  文字数、行数カウントダイアログ表示  |
| Ctrl+Shift+F |         フォントサイズの変更         |
| Ctrl+Shift+R |            文章の読み上げ            |
|    Ctrl+R    |        選択文字列にルビを振る        |
|    Ctrl+U    | 小説家になろうのユーザーページを開く |
|    Ctrl+Y    |            文章校正を行う            |
|    Ctrl+X    |               切り取り               |
|    Ctrl+C    |                コピー                |
|    Ctrl+V    |               ペースト               |
|    Ctrl+A    |              すべて選択              |
|    Ctrl+F    |                 検索                 |
|    Ctrl+L    |                 置換                 |
|    Ctrl+Z    |                 UNDO                 |
| Ctrl+Shift+Z |                 REDO                 |
|     Tab      |            名前の一覧表示            |
|    Ctrl+H    |           ヘルプを表示する           |
| Ctrl+Shift+V |            バージョン情報            |

### Tab キー押下時 (文字入力画面)

| コマンド |     処理内容     |
| :------: | :--------------: |
|   Esc    | 一覧表示をやめる |
|   Tab    | 一覧表示をやめる |
| ↑↓ キー  |    一覧を選択    |
|  Enter   |    一覧を決定    |

### 通常時 (リスト画面)

|                               コマンド                               |          処理内容          |
| :------------------------------------------------------------------: | :------------------------: |
| キャラクター、職種、場所、イベント、小説の大項目を選択して右クリック | 小項目作成ダイアログを表示 |
|                      小項目を選択して右クリック                      | 小項目削除ダイアログを表示 |
|                                Ctrl+G                                |      ファイル名の変更      |

### 通常時 (イメージ画面)

|    コマンド     |    処理内容    |
| :-------------: | :------------: |
|   スクロール    | 画像の上下移動 |
| Ctrl+スクロール | 画像の拡大縮小 |

## その他

### Yahoo! 校正支援

- Yahoo! 校正支援を使って校正をしています。  
  そのためには、[https://support.yahoo-net.jp/PccDeveloper/s/article/H000006122](https://support.yahoo-net.jp/PccDeveloper/s/article/H000006122)を参考にアプリケーション ID を作成し、Release フォルダーにある appid.txt のデータに、Client ID を記入してください。

## 開発者向け

### Documentation について

- 開発者用に[Documentation](https://drthomas246.github.io/novel_editor/html/)を置いてあります。
- 作成は sphinx を使っています。sphinx をインストールしてフォルダーとプロジェクトを作成します。

```shell
$ python -m pip install sphinx
$ python -m pip install sphinx-rtd-theme
$ python -m pip install recommonmark
$ mkdir sphinx
$ sphinx-quickstart
```

- ./sphinx/source/conf.py を変更します。

```python
import os
import sys
sys.path.insert(0, os.path.abspath('../../source'))
# ～～～～～～～～～～～～～～～～～～～～～～～～～～
extensions = [
    'recmmonmark',
    'sphinx.ext.autodoc',
    'sphinx.ext.napoleon',
    'sphinx.ext.viewcode'
]
# ～～～～～～～～～～～～～～～～～～～～～～～～～～
html_theme = 'sphinx_rtd_theme'
```

- ドキュメントを生成します。ルートフォルダーで以下のコマンドを実行します。

```shell
$ sphinx-apidoc -o ./sphinx/source ./source
```

- html ファイルを生成します。

```shell
$ ./sphinx/make.bat html
```

## 改変履歴

- Version 0.9.0b  
  読み上げ処理の改善
- Version 0.8.0b  
  起動時間の改善
- Version 0.7.0b  
  多言語化する
- Version 0.6.0b  
  置換をできるようにする
- Version 0.5.0b  
  昇順検索をできるようにする
- Version 0.4.3b2  
  image の拡大縮小を保存できるようにする
- Version 0.4.3b  
  image を拡大縮小できるようにする
- Version 0.4.2b  
  image に横スクロールをつける
- Version 0.4.1b  
  バージョン情報の描画方法を変える
- Version 0.4.0b2  
  image をマウスで縦スクロールできるようにする
- Version 0.4.0b  
  GIF ファイルを取り込めるようにする
- Version 0.3.0b2  
  ハイライトのための形態素解析を見直す
- Version 0.3.0b1  
  Yahoo！デベロッパーネットワークへの接続方法を変更
- Version 0.3.0b  
  文章校正ができるようになる（要:Yahoo デベロッパーネットワーク Client ID）
- Version 0.2.4bAM2  
  似顔絵の画像処理を変更
- Version 0.2.4b1  
  言葉の意味検索を goo から wikipedia へ変更
- Version 0.2.4b  
  文章の読み上げ処理を改善
- Version 0.2.3b2  
  軽微な変更
- Version 0.2.3b1  
  言葉の意味検索を向上
- Version 0.2.3b  
  似顔絵の機能を追加する
- Version 0.2.2b  
  文章の読み上げ機能を追加
- Version 0.2.1b  
  各 OS に対応
- Version 0.2.0b1  
  軽微な変更、PEP8 に対応
- Version 0.2.0b  
  ファイル形式を変更。キャラクター欄を充実  
  今までのファイルと互換性がありません。
- Version 0.1.2b2  
  バージョン情報の表示
- Version 0.1.2b1  
  原稿用紙で何枚かか数えられるようになる
- Version 0.1.2b  
  タイトルを挿入
- Version 0.1.1b1  
  ソースを見直し
- Version 0.1.1b  
  ファイル名の変更を追加
- Version 0.1.0b1  
  メニューの充実
- Version 0.1.0b  
  メニューを追加
- Version 0.0.7b2  
  保存に関する重大な欠陥を修復
- Version 0.0.7b1  
  新規作成時に変更があれば聞くようにする
- Version 0.0.7b  
  新規作成を追加
- Version 0.0.6b1  
  画像ファイルを取り込み
- Version 0.0.6b  
  フォントサイズの変更を追加
- Version 0.0.5b1  
  行番号の処理を変更
- Version 0.0.5b  
  終了処理を追加
- Version 0.0.4b1  
  名前のシンタックスハイライトを追加
- Version 0.0.3b  
  検索を追加
- Version 0.0.2b  
  小説家になろうのユーザーページを開けるようにする
- Version 0.0.1b  
  初版発行

## Copyright

- ファイル名：novel_editor.py,novel_editor.exe,change.py,change.exe
- Version：0.9.0b
- 作者：山原　喜寛 (Yamahara Yoshihiro)
- 著作年：2019-2021
- HP：https://www.hobofoto.work/
- E-mail：yoshihiro@yamahara.email
- ライセンス：[GNU GPL3 License](https://github.com/drthomas246/novel_editor/blob/master/LICENSE.md)

## Special thanks

- jaconv（文字変換）ライブラリ  
  Copyright (C) 2014, Yukino Ikegami.  
  Released under the MIT license  
  [https://raw.githubusercontent.com/ikegami-yukino/jaconv/master/LICENSE](https://raw.githubusercontent.com/ikegami-yukino/jaconv/master/LICENSE)

- janome（形態素解析エンジン）ライブラリ  
  Copyright(C) 2015, Tomoko Uchida. All Rights Reserved.  
  This software includes the work that is distributed in the [Apache License 2.0](https://raw.githubusercontent.com/mocobeta/janome/master/LICENSE.txt).

- pyttsx4（音声合成）ライブラリ  
  Copyright (C) 2023, Natesh M Bhat.  
  Released under the [Mozilla Public License Version 2.0](https://raw.githubusercontent.com/Jiangshan00001/pyttsx4/master/LICENSE)

- Wikipedia-API（wikipedia 検索）ライブラリ  
  Copyright (c) 2017, Martin Majlis  
  Released under the MIT license  
  [https://raw.githubusercontent.com/martin-majlis/Wikipedia-API/master/LICENSE](https://raw.githubusercontent.com/martin-majlis/Wikipedia-API/master/LICENSE)

- Pillow（画像処理）ライブラリ  
  The Python Imaging Library (PIL) is  
  　　 Copyright © 1997-2011 by Secret Labs AB  
  　　 Copyright © 1995-2011 by Fredrik Lundh  
  Pillow is the friendly PIL fork. It is  
  　　 Copyright © 2010, by Alex Clark and contributors  
  Released under the PIL license  
  [https://raw.githubusercontent.com/python-pillow/Pillow/master/LICENSE](https://raw.githubusercontent.com/python-pillow/Pillow/master/LICENSE)

- Yahoo! 校正支援  
  Web Services by Yahoo! JAPAN（[https://developer.yahoo.co.jp/sitemap/](https://developer.yahoo.co.jp/sitemap/)）

- Coveragepy  
  Copyright(C) 2009, Ned Batchelder.  
  This software includes the work that is distributed in the [Apache License 2.0](https://raw.githubusercontent.com/nedbat/coveragepy/v4.5.x/LICENSE.txt).

- Sphinx  
  Copyright(C) 2007, by the Sphinx team (see AUTHORS file).  
  Released under the Sphinx license  
  [https://raw.githubusercontent.com/sphinx-doc/sphinx/refs/heads/master/LICENSE.rst](https://raw.githubusercontent.com/sphinx-doc/sphinx/refs/heads/master/LICENSE.rst)

- sphinx-tsegsearch  
  Author: Yasushi Masuda  
  MIT License (MIT)

### 使用フォント

- 数式フォント　 ver1.3  
  Copyright(C) 2016, [キユマヤ園](https://kiyumaya.booth.pm/items/3723139)

- あいでぃーぽっぷまる  
  Copyright(C) 2017, [idfont / 井上デザイン](https://idfont.jp/infos_mb.html) All Rights Reserved.

### 使用アイコン

- accessories text editor  
  Copyright(C) BlueMalboro  
  Creative Commons ([Attribution-Noncommercial-No Derivative Works 3.0 Unported](https://creativecommons.org/licenses/by-nc-nd/3.0/))
