---
tags: 
- template
- bug
---

# バグ分析テンプレート

## 事象

ユーザにどう見えてしまったかなど実際に起こった事象について記述する。なぜ発生したのかなどに言及する必要はない。  

例）  
ECサイトにて特別会員でないユーザに対して訴求表示する価格が会員価格ではなく割引価格となっていた。

## 根本原因

事象が発生してしまった要因について記述する。具体的にソースコードのどこでというのを示しても良い。  
ただ、そのアプリケーションの実装内容を知らない人にも伝わる粒度で記載すること。  

例）  
訴求表示価格の要素を生成する際、ユーザが特別会員でない場合の分岐で、会員価格の値に割引価格を代入していた。  
上記バグについては、詳細設計として記載したフローチャートをそのまま実装した形となっている。　　   

## 対処

事象の発生を確認した後に取った対応について、時系列順に記述する。　　

例）　　　
 - 事象確認の後、ユーザに対してお知らせ枠を使って不具合を告知
 - 根本原因となっているバグを改修・動作確認の後に緊急リリースを実施　　

## 混入工程

根本原因が発生した工程を記す。  
内容としては工程を書くだけだが、バグ分析する上ではここがかなり重要で、ここを間違えると再発防止策も方向がずれてしまうので注意。  
だいたい以下のような方針で工程を導き出す。  

 - 要件定義：仕様通り実装したがそもそも仕様が間違っていた場合など。負荷面など非機能要件による障害もだいたいここに入る。
 - 基本/詳細設計：実装の方針を決定する際に、考慮が漏れていたり、誤った方針となっていた場合など。
 - 製造：仕様も設計も問題なかったのだが、実装時に符号を逆にしてしまったなどのバグを作り込んだ場合。自動テスト不足もここに入る。

## 混入原因

実際にそのバグを作ってしまった原因。  
当事者がいればヒアリングすることでわかることが多いが、古いバグなどで当事者がいない場合は、当時の状況を整理して記述する必要がある。  

## 摘出された工程

実際にバグが見つかった工程。  
再発防止が必要とされる商用バグの場合は「リリース後」。  

## 摘出すべき工程

混入工程に対応し、以下のような関係で導き出す。  
ウォーターフォールでは以下のような相関関係がある。  

 - 要件定義 → 総合試験
 - 基本/詳細設計 → 内部/外部結合試験
 - 製造 → 単体テスト

## 摘出遅延理由

なぜ摘出すべき工程でバグを発見できなかったのかを記述する。  
摘出された工程と摘出すべき工程がイコールの場合は遅延なし。  

## 水平展開

「混入原因」「摘出遅延理由」が当てはまる箇所が他にある場合、同様のバグが潜んでいないか確認する必要があるため、その範囲を記述する。  
ただ、愚直にやろうとすると範囲が膨大になることが多いため、「同じコンポーネントに限る」や「同じ設計箇所に限る」など現実的に対応可能な範囲に落とし込む必要がある。  
慣れないうちは範囲の大きさについては気にせず記述し、上司等と相談して現実的なラインに落とし込む方針でも良い。  

## 再発防止

「混入原因」「摘出遅延理由」からそれぞれの再発防止策を記述する。  
そのため、「混入原因」「摘出遅延理由」の分析が正しくないと方向性を間違えてしまう。  
また、再発防止策にかかる工数も、水平展開同様大きくなりがちになるので、自動化やツール化等を駆使して現実的な範囲に落とし込む工夫が必要となることが多い。  

