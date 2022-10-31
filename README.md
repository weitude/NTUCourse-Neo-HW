# NTUCourse Neo HW

此為林佳緯的面試作業

## p1

如題目所述，直接使用：

```
node Clockwise.js $n
```

即可完成

## p2

直接使用：

```
node parse.js
```

即可將同個目錄下的 `raw_data.json`，轉換成 `clean_data.csv`

## p3

### frontend

frontend 我使用 `create-react-app` 生成

首先先用 axios 向 server 請求，得到 `course_list.json` 後，再用 map 函式以及 CourseBox.js 生成左邊的 "Course Information"

至於右邊的 "Course I Plan to Take"，我則主要是使用 [React DnD](https://react-dnd.github.io/react-dnd/about)
來實作 Drag and Drop

github branch 則分成 `main` & `gh-pages`

前者用來存原始代碼，後者則是用來部署 react render 後的網頁

網址：https://weitude.github.io/NTUCourse-Neo-HW

### backend

我使用 express.js 來實作，`server.js` 作為啟動 server 的核心檔案

先 import `course_list.json`，然後再處理 RESTful API

然後撰寫 heroku 需要的 `Procfile`，並將 server 部署到上面

網址：https://weitude-ntucourse-neo-hw.herokuapp.com

