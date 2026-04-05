# 龍胤立志傳 存檔編輯器 v1.0.0

基於網頁的龍胤立志傳（Long Yin Li Zhi Zhuan）存檔編輯器，可直接在瀏覽器中讀取、修改並保存遊戲存檔。

## 使用方式

### 載入存檔

1. 雙擊 `start-editor.bat` 啟動本地伺服器（或執行 `powershell -File start-editor.ps1`），瀏覽器會自動開啟編輯器
2. 也可直接開啟 `save-editor-standalone.html`，會自動使用資料夾選擇器或檔案選擇器載入
3. 點擊左上角「📂 加載存檔」按鈕，選擇遊戲存檔資料夾（如 `SaveSlot1`）

> 存檔預設路徑：`%USERPROFILE%\AppData\LocalLow\LYStudio\龙胤立志传\`

### 編輯功能

#### 門派弟子 / 江湖人物
- 基本資訊：姓名、年齡、性格、門派、職位等
- 裝束：選擇服裝並查看加成效果
- 屬性：六維屬性（力道/靈巧/智力/意志/體質/經脈）、戰鬥技能、生活技能
- 天賦：按分類（武學/高級/技藝/天生/志向/喜好/戰法）瀏覽並一鍵添加，顯示效果說明
- 武學：按類型（內功/輕功/絕技等）、品級、門派篩選添加，修改等級時自動計算運功效果（`rawValue × (1 + lv × 0.1)`）和使用特效
- 最高修煉/讀書經驗：每個武學可編輯修煉經驗上限及各品級秘籍（殘本→完本）的讀書經驗上限
- 物品：按類型（武器/防具/飾品/丹藥/飲食/秘籍/珍寶/材料/馬匹）、品質、子類篩選添加，自動填充基礎屬性
- 關係：師傅/夫妻/徒弟/結義/情侶/朋友/仇敵/親屬，修改時雙向同步

#### 天下地圖
- 地區資訊：人口、治安、民心、防御、特產
- 資源產出：銀兩、糧食、木料、礦石、藥材、威望的產出值與產出率
- 門派資源：儲量/上限/月變化，門派等級、總人口、總薪俸
- 門派科研：60項科研的等級與進度編輯，支援批量滿級
- 建築地圖：十字形格子地圖，顯示建築圖標與等級，支援：
  - 點擊查看建築詳情（產出/維護/加成說明）
  - 修改建築等級（自動更新存儲率）
  - 更換建築類型、放置新建築、移除建築
  - 道路等級編輯
  - 批量升級（全部建築/全部道路/全部滿級）
- 懸賞任務

### 保存存檔

1. 修改完成後點擊右上角「💾 保存存檔」
2. 編輯器會自動在存檔資料夾內建立 `backup/<時間戳>/` 子資料夾，將當前的 `Hero`、`TempHero`、`Save`、`Info` 以原始檔名備份進去，然後才寫入修改後的資料
3. 若透過 `file://` 開啟，保存時會下載 4 個檔案，手動複製回存檔資料夾即可
4. 若需還原，只要將 `backup/<時間戳>/` 內的檔案全部複製回上層存檔資料夾覆蓋即可

> 建議定期清理 `backup/` 資料夾以節省空間。

## 資料來源

本專案使用的遊戲資料檔案來自以下網路資源：

### `skills_data.json` / `Data/*.csv`

來源：[龍胤立志傳數據資料 Google 試算表](https://docs.google.com/spreadsheets/d/1uVr51UtvsUsC0sxHzZuYQZls6Up2Z4z2/edit?gid=1102417556#gid=1102417556)

包含全部武功、門派、地點、特殊角色、初始生成值等遊戲數據。

### `data.js`

部分資料參考自：[龍胤立志傳存檔編輯器 (ce.mizu7.top)](https://ce.mizu7.top/)

包含門派對照表、建築名稱、物品資料、詞綴系統等遊戲常數。

### `GameAssets/`

透過 [UnityPy](https://github.com/K0lb3/UnityPy) 從遊戲 `resources.assets` 提取的原始資料（Unity 2020.3.48f1），包含：
- `KungFuData` — 全部武學定義
- `BuildingData` — 建築產出/維護/加成/描述
- `ForceData` — 門派定義
- `HeroTagData` — 天賦系統（391 個天賦/狀態）
- `TechDataBase` — 科研系統（60 項科研）
- `SkinDataBase` — 裝束加成
- `SpeAddDataBase` — 特效屬性 ID 對照表（215 個屬性）
- 其他：AreaData、ResourcePointData、HorseData、WeaponData、ArmorData、MedData、FoodData 等

### 授權聲明

上述資料檔案均來自網路社群整理的遊戲資源，本專案僅供個人學習與存檔管理用途。若資料原作者或版權持有者認為有授權疑慮，請提出，我們會立即移除相關檔案。

## 檔案結構

```
├── save-editor-standalone.html   # 單檔版編輯器（已內嵌所有資料）
├── save-editor.html              # 開發版編輯器
├── data.js                       # 遊戲常數與資料定義
├── skills_data.json              # 全部武功資料（JSON 格式）
├── start-editor.bat              # 一鍵啟動（需要 Python）
├── start-editor.ps1              # PowerShell 啟動（無需 Python）
├── build-standalone.ps1          # 建置單檔版腳本
├── GameAssets/                    # 從遊戲提取的原始資料
└── README.md
```

只需 `save-editor-standalone.html` 一個檔案即可使用，其餘為開發用原始檔。
