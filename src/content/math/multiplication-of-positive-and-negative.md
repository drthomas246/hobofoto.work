---
title: "正負の乗法"
date: "2016-5-19"
excerpt: "正の数と負の数のかけ算を考えていきたいと思います。"
image: "/math/multiplication-of-positive-and-negative.webp"
grad: 1
field: "数と式"
---

### 乗法

かけ算のことを:rubyString[乗法（じょうほう）]といいます。この乗法の答えを:rubyString[積（せき）]といいます。今回はまず、正の数同士のかけ算を考えましょう。

$$
(+3)\times (+4)=+12
$$

これは小学校で習ったものと同じなのでわかりやすいですね。

### 正の数 × 負の数

ではこのかける数を 1 ずつ小さくしていくとどうなるでしょう。

$$
\begin{align*}
(+3)\times (+4)&=+12\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow -3 \\
(+3)\times (+3)&=+9\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow -3 \\
(+3)\times (+2)&=+6\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow -3 \\
(+3)\times (+1)&=+3\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow -3 \\
(+3)\times \ \ 0\ \ \ &=\ \ 0
\end{align*}
$$

3 ずつ小さくなっているのが分かります。さらにこれを続けるとどうなるでしょうか、かける数が 1 小さくなると答えが 3 小さくなるので、

$$
\begin{align*}
(+3)\times \ \ 0\ \ \ &=\ \ 0\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow -3 \\
(+3)\times (-1)&=-3\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow -3 \\
(+3)\times (-2)&=-6\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow -3 \\
(+3)\times (-3)&=-9
\end{align*}
$$

というふうになります。ここからわかることは、「正の数と負の数をかけると答えは負の数になる」ということです。これで符号を決めることができます。

符号が分かれば後は絶対値です。よく見てみると、絶対値同士のかけ合わせた積が答えの数字になっています。

### 負の数 × 負の数

では、負の数同士の乗法を考えてみましょう。まず正の数と負の数の積は負の数で絶対値の部分はそれぞれの絶対値をかけ合わせたものなので、

$$
\begin{align*}
(-3)\times (+2)&=-6\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow +3\\
(-3)\times (+1)&=-3
\end{align*}
$$

となります。上と同じように考えると、かける数が 1 減ると答えは 3 増えるので、

$$
\begin{align*}
(-3)\times (+2)&=-6\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow +3\\
(-3)\times (+1)&=-3\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow +3\\
(+3)\times \ \ 0\ \ \ &=\ \ 0\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow +3 \\
(-3)\times (-1)&=+3\\
-1\downarrow\phantom{+} &\phantom{=+} \downarrow +3 \\
(-3)\times (-2)&=+6
\end{align*}
$$

となっていくことが分かります。つまりここからわかることは、「負の数同士をかけると答えは正の数になる」ということです。これで符号を決めることができます。

符号が分かれば後は絶対値です。よく見てみると、絶対値同士のかけ合わせた積が答えの数字になっています。

### 正負の乗法

まとめてみると、「乗法は、正の数同士や負の数同士の場合、符号は＋に、正の数と負の数の場合は符号は－になる。絶対値は 2 つの数の絶対値をかけあわせた積になる。」ことが分かりました。
