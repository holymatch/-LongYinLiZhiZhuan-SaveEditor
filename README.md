# 龍胤立志傳 存檔編輯器

基於網頁的龍胤立志傳（Long Yin Li Zhi Zhuan）存檔編輯器，可直接在瀏覽器中讀取、修改並保存遊戲存檔。

## 使用方式

### 載入存檔

1. 用瀏覽器開啟 `save-editor-standalone.html`（單檔版，無需其他檔案）
2. 點擊左上角「📂 加載存檔」按鈕
3. 選擇遊戲存檔資料夾（如 `SaveSlot1`）
4. 編輯器會自動讀取資料夾內的 `Save`、`Hero`、`TempHero`、`Info` 等檔案

> 存檔預設路徑：`%USERPROFILE%\AppData\LocalLow\LYStudio\龙胤立志传\`

### 編輯功能

- 門派弟子 / 江湖人物：基本屬性、武功、物品、關係等
- 天下地圖：地區資訊、門派建築地圖（格子地圖）、懸賞任務
- 建築地圖支援：查看/編輯建築等級、道路等級、地基屬性，批量升級

### 保存存檔

1. 修改完成後點擊右上角「💾 保存存檔」
2. 編輯器會自動在存檔資料夾內建立 `backup/<時間戳>/` 子資料夾（如 `backup/2026-04-05T14-30-00/`），將當前的 `Hero`、`TempHero`、`Save`、`Info` 以原始檔名備份進去，然後才寫入修改後的資料
3. 若需還原，只要將 `backup/<時間戳>/` 內的檔案全部複製回上層存檔資料夾覆蓋即可

> 建議定期清理 `backup/` 資料夾以節省空間。

## 資料來源

本專案使用的遊戲資料檔案來自以下網路資源：

### `skills_data.json` / `Data/*.csv`

來源：[龍胤立志傳數據資料 Google 試算表](https://docs.google.com/spreadsheets/d/1uVr51UtvsUsC0sxHzZuYQZls6Up2Z4z2/edit?gid=1102417556#gid=1102417556)

包含全部武功、門派、地點、特殊角色、初始生成值等遊戲數據。

### `data.js`

部分資料參考自：[龍胤立志傳存檔編輯器 (ce.mizu7.top)](https://ce.mizu7.top/)

包含門派對照表、建築名稱、物品資料、詞綴系統等遊戲常數。

### 授權聲明

上述資料檔案均來自網路社群整理的遊戲資源，本專案僅供個人學習與存檔管理用途。若資料原作者或版權持有者認為有授權疑慮，請提出，我們會立即移除相關檔案。

## 檔案結構

```
├── save-editor-standalone.html   # 單檔版編輯器（已內嵌所有資料）
├── save-editor.html              # 開發版編輯器
├── data.js                       # 遊戲常數與資料定義
├── skills_data.json              # 全部武功資料（JSON 格式）
└── README.md
```

只需 `save-editor-standalone.html` 一個檔案即可使用，其餘為開發用原始檔。
