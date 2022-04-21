# Web Speed Hackathon 2021 mini solo

- [CyberAgentHack/web-speed-hackathon-2021](https://github.com/CyberAgentHack/web-speed-hackathon-2021)
- [CyberAgentHack/web-speed-hackathon-2021-leaderboard](https://github.com/CyberAgentHack/web-speed-hackathon-2021-leaderboard)

をベースに 1 リポジトリで練習できるようにしたものです。

## 準備方法

1. Heroku にアクセスして、アプリケーションを作成する
2. GitHub Actions secrets に以下を設定する

- `HEROKU_API_KEY`: Heroku の API キー
- `HEROKU_APP_NAME`: Heroku で作成したアプリケーションの名前
- `HEROKU_EMAIL`: Heroku アカウントのメールアドレス

3. Actions の`Deploy to Heroku` workflow を手動で実行する（workflow_dispatch）
4. デプロイができているかを Heroku のアプリケーションにアクセスして確認する
5. `solo登録`のテンプレートをもとに Issue を作成し、Heroku アプリケーションの URL を入力
6. しばらくして、スコアが出れば準備完了
7. 高いスコアを目指してアプリケーションを改善しましょう

その他

- [レギュレーション](./docs/REGULATION.md)
- [注意事項](#注意事項)

## 開発方法

開発に必要なドキュメントは、[./docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md) を参照してください。

## API 仕様書

API 仕様書は、[./docs/API.md](./docs/API.md) (API Blueprint 形式) を参照してください。

## ライセンス

- Codes: MPL-2.0 by (c) CyberAgent
- Audio data: CC0 1.0 by https://freepd.com/
- Image data: Unsplash License by https://unsplash.com/
- Movie data: CC BY 3.0 by Blender Foundation https://peach.blender.org/
- Fonts
  - 源暎エムゴ: OFL 1.1 by おたもん http://okoneya.jp/font/

---

(c) CyberAgent
