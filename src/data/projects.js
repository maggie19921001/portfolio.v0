export const imagePath = (fileName) => `${import.meta.env.BASE_URL}img/${fileName}`;

export const projects = [
  {
    slug: 'travel',
    heroLead: 'TDX API',
    heroStrong: '台灣觀光搜尋頁',
    subtitle: '台灣走走',
    cardImage: 'profolio-img_work-02.png',
    heroImage: 'profolio-img_work-02.png',
    video: 'https://www.youtube.com/embed/ZCGeKgv8HZw?si=Vir-SpcJ2xqJ8ZSP',
    liveUrl: 'https://maggie19921001.github.io/travel-taiwan/index.html',
    blocks: [
      {
        type: 'text',
        content: '連接台灣運輸資料流通服務平台(TDX)的多支API，建立結合台灣景點、活動、美食的搜尋引擎',
      },
      {
        type: 'image',
        src: 'TravelTaiwan_pic2.png',
      },
      {
        type: 'text',
        content:
          '▲在首頁下方顯示最新活動及熱門景點、各地美食。也可於最上方搜尋列依照不同類別做搜尋。取得遠端資料後，再使用innerHTML或append的方法，將資料整合並呈現於畫面上。',
      },
      {
        type: 'text',
        content:
          '使用The F2E競賽中的UI設計稿，製作整個網頁，包含切版、RWD，並使用AJAX連接TDX API作為即時資料顯示，這份專案在學習網頁框架前製作，因此並未套用框架。',
      },
      {
        type: 'image',
        src: 'TravelTaiwan_pic3.png',
      },
      {
        type: 'text',
        content: '▲製作時需要將資料存於localStorage，跳轉至結果頁顯示。並在資料詳細頁中再依照不同的ID編號讀取資料庫資料。',
      },
      {
        type: 'text',
        content:
          '本次專案除了學習使用連接API與使用接收的資料外，也學習到如何處理資料移轉至不同頁面。此外，也發現需要部署的話個人的API Key會暴露在程式碼中，研究後發現沒有使用框架的網頁無法使用環境變數來隱藏資訊，需要將金鑰放到網路代理後端的服務，或是自己使用Node.js套件，由於此網頁主要是用來練習，此API key原先就有限制調用次數，所以在往後使用框架的專案才有建立環境變數。',
      },
      {
        type: 'image',
        src: 'TravelTaiwan_pic4.png',
      },
      {
        type: 'text',
        content: '▲僅顯示資料庫中有填寫的資料，連接google map API同樣設定次數限制。',
      },
    ],
  },
  {
    slug: 'blog',
    heroLead: 'Hexo',
    heroStrong: '個人部落格',
    subtitle: 'personal blog',
    cardImage: 'profolio-img_work-01.png',
    heroImage: 'profolio-img_work-01.png',
    video: 'https://www.youtube.com/embed/0qdlTpOpBok?si=gcdM0FC6CPCCE9tX',
    liveUrl: 'https://maggie19921001.github.io/hexo-web/',
    blocks: [
      {
        type: 'text',
        content:
          '這是使用使用Node.js與npm安裝Hexo套件與模板建立的靜態部落格，並練習使用Markdown語法撰寫文章，記錄自己的前端學習歷程，對許多觀念與技術能更瞭解的更透徹。',
      },
      {
        type: 'image',
        src: 'YuBlog_pic2.png',
      },
      {
        type: 'text',
        content: '個人部落格的優點是可以設置個人化的設定，不過也因為每次更新都需要重新部署，因此目前多使用HackMD撰寫，完成後再轉貼至此更新。',
      },
    ],
  },
  {
    slug: 'knit',
    heroLead: '網頁設計',
    heroStrong: '編織購物網站',
    subtitle: 'Knit & Soul',
    cardImage: 'profolio-img_work-03.png',
    heroImage: 'profolio-img_work-03.png',
    video: 'https://www.youtube.com/embed/CfVAc1nKEcE?si=rafc5l-DWZOZ49Yx',
    liveUrl: 'https://maggie19921001.github.io/knit-web/#/',
    blocks: [
      {
        type: 'heading',
        content: '概念概述',
      },
      {
        type: 'text',
        content:
          '源自自身對於編織很有興趣，但一直找不到一個有系統的學習資源網站，網路上的教學資源也缺乏系統性，大部分資料來自日本或美國，遇到問題時也常常不知道該向誰請教。編織看似是一個相對小眾的興趣，其實很多人都有興趣。翻開教學書籍裡精美的作品，開始想像自己完成的喜悅，但織圖看起來卻像一堆複雜的科學符號。想要理解編織記號時，卻總是搞不清楚那些交錯的線條究竟代表什麼。因此，我們希望能夠整合資源，建立一個社群網絡，讓有興趣的編織者都能夠輕鬆地找到起點，開始他們的編織之旅。',
      },
      {
        type: 'image',
        src: 'KnitSoul_pic.png',
        caption: '▲網頁地圖（原先設計名稱為Knit&Share）',
        alt: 'SiteMap',
      },
      {
        type: 'image',
        src: 'KnitSoul_pic2.png',
        caption: '▲架構設計',
        alt: 'WireFrame',
      },
      {
        type: 'image',
        src: 'KnitSoul_pic3.png',
        caption: '▲風格設計',
        alt: 'ArtDesign',
      },
      {
        type: 'text',
        content:
          '從構思設計方向、網頁地圖、Wireframe、版面設計，過去曾經學習過網頁設計與UIUX，但仍需花費一段時間製作，在準備作品時需要很大的耐心與毅力，目前僅完成購物車功能，未來將持續更新至上線，希望對於和我一樣需求的用者可以有所幫助。',
      },
      {
        type: 'image',
        src: 'KnitSoul_pic8.png',
        alt: 'DemoPage',
      },
      {
        type: 'text',
        content:
          '因為製作時使用Vite以及較新的 Vue3 composition API製作時遇到許多問題，網路上的解法大多都是Option API的作法，部分套件使用也需要另外調整。此外，原先撰寫的架構，有部分資訊需要在組件之間同步（如購物車商品數量，除了在購物車顯示外，也希望在nav bar上的購物圖示顯示），用prop和emit互相傳送資料有些混亂，後來決定採用Pinia管理數據同步，將每個頁面的功能移至Store，變得精簡許多。未來在製作專案時這部分也需要事先規劃，才不會重複製作。',
      },
    ],
  },
  {
    slug: 'todo-list',
    heroLead: 'ToDo API',
    heroStrong: '登入待辦',
    subtitle: '個人待辦清單',
    cardImage: 'profolio-img_work-04.png',
    heroImage: 'profolio-img_work-04.png',
    video: 'https://www.youtube.com/embed/NX2bwRA5AHI?si=q4zN_jRNRUnW0afU',
    liveUrl: 'https://maggie19921001.github.io/vite-toDoList/#/',
    blocks: [
      {
        type: 'text',
        content: '運用Vue Router製作不同分頁，連結API，實作註冊與登入以及元件區分',
      },
      {
        type: 'image',
        src: 'ToDoList_pic.png',
      },
      {
        type: 'text',
        content:
          '使用Vite建立Vue3的專案，簡單的頁面包含了註冊、登入、建立與修改、刪除待辦等功能，在這個專案中使用瀏覽器cookie紀錄token，登入後讀取該使用者的資料庫資料（暱稱及已建立清單）',
      },
    ],
  },
];
