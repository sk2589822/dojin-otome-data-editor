<template>
  <div class="instruction mt-2 w-100 text-left">
    <h1>這是什麼？</h1>
    <hr>
    <p>
      如果你看得懂日文，而且有買下面這兩款遊戲
      <br>
      <a
        href="https://store.steampowered.com/app/1278390/"
        target="_blank"
      >
        Succumate -サキュメイト- (與魅魔莉莉姆的同居生活)
      </a>
      <br>
      <a
        href="https://store.steampowered.com/app/1227890/"
        target="_blank"
      >
        あまえんぼ (夏日狂想曲：鄉間的難忘回憶)
      </a>
      <br>
      那就可以用這個工具把遊戲的圖片換成無碼的。
    </p>
    <h1 class="mt-4">
      事先準備
    </h1>
    <hr>
    <p>
      總共需要3個資料夾：
      <ol>
        <li><b>日文版的www/data</b></li>
        <li><b>英文版的www/data</b><span class="text-secondary"> (簡體版的照理來說也可以，但我沒試過)</span></li>
        <li><b>日文版&英文版合併後的www/images/pictures</b></li>
      </ol>
    </p>
    <p>
      1和2很簡單，只要先安裝好遊戲和對應的patch，再<b>把data資料夾備份</b>下來就好了。
      <br>
      (建議先裝英文版再裝日文版，不然最後還是要裝回日文版)
      <br>
      pictures資料夾則需要先將英文版的www/images/pictures<b>複製貼上</b>到日文版的www/images/pictures
      <br>
      再來需要用到
      <a
        href="https://petschko.org/tools/mv_decrypter/#restore-images"
        target="_blank"
      >
        Petschko's RPG-Maker-MV File-Decrypter
      </a>
      <a
        href="https://github.com/Petschko/Java-RPG-Maker-MV-Decrypter"
        target="_blank"
      >
        (Java 版本)
      </a>
      將.rpgmvp檔解包成.png檔，解包完就完成準備工作了。
      <br>
    </p>
    <h1 class="mt-4">
      操作教學
    </h1>
    <hr>
    <p>
      將剛剛準備好的資料夾分別上傳之後：
      <ol>
        <li>
          <b>選擇對應的遊戲</b>
          <br>
          以產生對應的正規表示式(也可以選擇自己輸入，主要是為了
          <a
            href="https://ci-en.dlsite.com/creator/2024/article/355700"
            target="_blank"
          >
            あまえんぼ冬
          </a>
          預留的)。
        </li>
        <li>
          調整<b>圖片大小</b><span class="text-secondary"> (可以解析完再視情況調整)</span>
        </li>
      </ol>
    </p>
    <p>
      都設定好之後按下「解析」按鈕，下方會出現表格，
      <br>
      左邊的圖是日版的，右邊的則是之後會將其取代的圖。
      <br>
      點擊表格右上方的「計算差異度」可以計算兩張圖的差異度<span class="text-secondary"> (資料量大的話可能要花上幾分鐘的時間去讓他跑)</span>
      <br>
      可設定閾值，差異度超過閾值的項目背景會變成紅色，也可以只顯示超過閥值的項目
      <br>
      調整完之後按「產生檔案」，確定遊戲<b>目前是日文版且有安裝好patch</b>後，再把下載下來的檔案覆蓋到www/data即可。
    </p>
    <router-link to="/">
      回主頁
    </router-link>
  </div>
</template>

<style lang="scss">
.instruction {
  padding: 2% 20% 5%;
  line-height: 2.5rem;

  ol {
    padding-left: 1rem;
  }

  li {
    list-style-type: decimal;
    list-style-position: outside;
  }
}
</style>
