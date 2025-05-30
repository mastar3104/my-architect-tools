---
tags:
- adr
---

# ADR (アーキテクチャ意思決定記録)

## 概要
アーキテクチャ意思決定記録 (ADR) は、ソフトウェアプロジェクトにおける重要な意思決定を文書化するための手法です。  
これにより、プロダクトに対して行われた意思決定の背景や理由を明確にし、将来の開発者がその意図を理解できるようにします。  
「決定」というと最初に執筆してそれっきりとなりがちですが、一度決めた「決定」を変更することも一つの「決定」であるため、ADRを見直すタイミングは少なくありません。  

## テンプレート
[ADRテンプレート](../templates/adr-template)

## 使うタイミング
- リポジトリ内のアーキテクチャを決定・変更する際
- インフラ移行を決定・変更する際
- 新しい技術を導入・廃止する際
- アーキテクチャに限らず、重要な意思決定を行う際
など

## 進め方
### 背景となり得る課題の前提条件を明確にする
 - 意思決定のタイミングも重要である
 - 現段階で無理に決定することが「早すぎた最適化」に繋がることもあるため、必然性がある決定であるのかを考慮する
   - ただし、「現段階では方針の決定をしない」という一つの「意思決定」でもあるので、「タイミングが早すぎた」という記録を残しておくことも重要
 - [５つの質問と７つの原則]を参照
### 評価基準を決定する
  - 特にアーキテクチャ特性・品質特性トレードオフスライダーで定義したものを参考にする
### 選択肢を検討する
  - 執筆者が課題に対してすでに「決定」となり得る解決策を思いついていることも多い
    - しかしバイアスに囚われている可能性も高く、改めて公平な評価基準を適用・考慮する必要がある
    - 昨今では生成AIを活用して選択肢を考えることもできる
  - 各選択肢に対して評価基準を適用し、スコアを付ける
    - スコアリングについては[ADRテンプレート](../templates/adr-template)を参照
### 決定を行う
  - スコアリングの結果を元に、最も適切な選択肢を選ぶ
  - 選択肢の中から選ぶ場合は、スコアが高いものを選ぶことが多いが、必ずしもそうする必要はない
    - スコアが低いものを選ぶ場合は、その理由を明確にする必要がある
    - 品質特性トレードオフスライダーと照らし合わせて、スコアの中にも影響度の大小があることを考慮する
    - 計算が複雑になるのでおすすめしないが、選択肢とした事項の優先度においての重みづけをスコアに掛けることで、より明確なスコアリングになる場合もある
### 影響を考慮する
  - 選択肢を選ぶことで、どのような影響があるのかを考慮する
  - ポジティブな影響とネガティブな影響を分けて考える
      - ネガティブな影響が可視化されることで、今後の開発において危険な匂いを事前に察知しやすくなる
  - 影響を考慮することで、選択肢の選定理由がより明確になる
### 協議を行う
  - 他者から意見や質問を取り入れる場合は、ここに記録する
  - 同期で行う場合は議事録代わりに利用し、非同期（PRレビュー）で行う場合はPRのリンクを記載しておく

## 管理方法
- ADRはリポジトリ内に保存することが望ましい
- リポジトリが各マイクロサービスに分かれており、プロダクトとして全体のADRを記載する際は専用リポジトリを作成することもある
  - NotionやConfluenceなどのドキュメント管理ツールを使用することもあるが、ドキュメントが発見しにくくなるため、個人的には開発者が一貫して目にしやすいGitリポジトリ管理を推奨している
  - 対外的な閲覧が必要かつステークホルダ全員がGitを参照できるわけではない場合、ドキュメントサイト構築ツールなどを利用して対外的に公開するなどが望ましい

## 参考図書
- [Design It!](../books/design-it)
- [ソフトウェアアーキテクチャの基礎](../books/fundamentals-of-software-architecture)
- [ソフトウェアアーキテクチャ・ハードパーツ](../books/software-architecture-the-hard-parts)
- [開発者とアーキテクトのためのコミュニケーションガイド](../books/communication-patterns)

