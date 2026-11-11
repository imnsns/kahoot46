// ---------------------------------------------------------------------
// 題庫設定檔。要改題目、加題目、刪題目，都只要改這個檔案就好。
// 每一關由一個 {type:"announcement", ...} 預告卡片開頭，
// 後面接著若干個 {type:"question", ...} 題目。
// ---------------------------------------------------------------------
window.QUIZ = {
  "title": "宜蘭員旅大挑戰",
  "questions": [
    {"subtitle":"回顧這次宜蘭員旅的點點滴滴，看誰記得最清楚","title":"第一關：旅程花絮","type":"announcement"},
    {"correctIndex":3,"duration":10,"explanation":"這次旅遊主題是「一起蔥宜蘭，慢活 FUN 肆玩」，呼應宜蘭三星蔥的特產，諧音「衝宜蘭」。","options":["衝","聰","匆","蔥"],"text":"這次旅遊主題「一起＿宜蘭，慢活 FUN 肆玩」，空格是哪個字？","type":"question"},
    {"correctIndex":3,"duration":10,"explanation":"我們這次住的包棟民宿是「米蘭穀堡」。","options":["米蘭莊園","米蘭城堡","米蘭古堡","米蘭穀堡"],"text":"我們住的包棟民宿叫什麼？","type":"question"},
    {"correctIndex":1,"duration":10,"explanation":"第一天午餐的招牌菜是甕缸雞。","options":["鹽水雞","甕缸雞","燒酒雞","三杯雞"],"text":"第一天午餐的招牌菜是？","type":"question"},
    {"correctIndex":3,"duration":10,"explanation":"星夢森林劇場裡有水豚、羊駝、袋鼠，但沒有企鵝。","options":["水豚","羊駝","袋鼠","企鵝"],"text":"下午要去的星夢森林劇場裡，沒有下列哪種動物？","type":"question"},
    {"correctIndex":1,"duration":10,"explanation":"在蔥寶寶農場，大家 DIY 做的是蔥餅。","options":["蔥油麵","蔥餅","蔥爆牛肉","蔥花麵包"],"text":"蔥寶寶農場要 DIY 做什麼？","type":"question"},
    {"subtitle":"這次員旅到底有多少人參加，大家猜得準嗎","title":"第二關：旅遊小統計","type":"announcement"},
    {"correctIndex":2,"duration":10,"explanation":"這次出遊總共有 46 人參加（含家人）。","options":["38","42","46","50"],"text":"這次出遊總共幾個人（含家人）？","type":"question"},
    {"correctIndex":2,"duration":10,"explanation":"這次出遊女生大約佔了 7 成。","options":["5 成","6 成","7 成","8 成"],"text":"這次出遊女生大約佔幾成？","type":"question"},
    {"correctIndex":0,"duration":10,"explanation":"統計這次一起出遊的全體夥伴星座人數，處女座人數最多。","options":["處女座","獅子座","天蠍座","雙子座"],"text":"加入這次一起出遊的全體夥伴，最多人是哪個星座？","type":"question"},
    {"subtitle":"考考大家對宜蘭的認識，從地名到小吃通通有","title":"第三關：宜蘭冷知識","type":"announcement"},
    {"correctIndex":3,"duration":10,"explanation":"宜蘭舊稱「噶瑪蘭」，源自當地平埔族噶瑪蘭族（Kavalan）的族名，清代漢人文獻也曾音譯寫作「蛤仔難」。西元1875年（清光緒元年）正式設治，才改用「宜蘭」這個名稱沿用至今。現在知名的「噶瑪蘭威士忌」也是以這個舊名命名的。","options":["打狗","竹塹","艋舺","噶瑪蘭"],"text":"宜蘭的舊名是什麼？","type":"question"},
    {"correctIndex":2,"duration":10,"explanation":"雪山隧道全長約 12.9 公里，2006年通車，是台灣目前最長的公路隧道。通車後大幅縮短了台北到宜蘭的車程，從原本翻越北宜公路（九彎十八拐）動輒2小時以上，縮短到約半小時左右。","options":["6.5","9.8","12.9","15.2"],"text":"雪山隧道全長大約幾公里？","type":"question"},
    {"correctIndex":3,"duration":10,"explanation":"糕渣、卜肉、西魯肉都是宜蘭在地流傳已久的經典宴客菜，米粉湯則是全台各地都常見的小吃攤品項，不是宜蘭特有的。","options":["糕渣","卜肉","西魯肉","米粉湯"],"text":"下列哪一個「不是」宜蘭當地特色小吃？","type":"question"},
    {"correctIndex":0,"duration":10,"explanation":"三星蔥的「三星」指的是宜蘭縣三星鄉，當地位於蘭陽溪沖積扇，土壤肥沃、日夜溫差大，種出來的蔥特別香甜，因此以鄉名打響名號，成了宜蘭最具代表性的農特產之一。","options":["鄉鎮名","品牌名","星級評等","農夫名字"],"text":"三星蔥的「三星」是宜蘭的哪裡？","type":"question"},
    {"correctIndex":3,"duration":10,"explanation":"50嵐目前在宜蘭縣內沒有展店，玉圓堂、一藍茶坊、叮哥茶飲則都在宜蘭看得到。","options":["玉圓堂","一藍茶坊","叮哥茶飲","50嵐"],"text":"宜蘭縣內沒有下列哪間連鎖手搖飲品牌？","type":"question"},
    {"correctIndex":2,"duration":10,"explanation":"喜互惠是宜蘭在地經營超過30年的本土連鎖超市，只有在宜蘭看得到，是許多宜蘭人從小逛到大的超市品牌。","options":["超優惠","超互惠","喜互惠","大互惠"],"text":"請問只有在宜蘭，且在地深耕超過30年的本土連鎖超市是哪一間？","type":"question"},
    {"correctIndex":1,"duration":10,"explanation":"在日治時期的台灣地圖上，龜山島的西南方海面上原本有一座名為「龜卵島」的小島群。因為有「龜卵」象徵，所以將龜山島視為正在產卵或產下後代的大母龜。","options":["公","母"],"text":"請問龜山島是公的還母的？","type":"question"},
    {"correctIndex":0,"duration":10,"explanation":"宜蘭縣位於台灣東北部，西邊、南邊分別鄰接雪山山脈、中央山脈，東面直接臨太平洋，並不與台灣海峽相鄰——台灣海峽在台灣西側，隔開台灣與中國大陸，離宜蘭很遠。","options":["臺灣海峽","雪山山脈","中央山脈","太平洋"],"text":"請問下列哪一個不與宜蘭相鄰？","type":"question"}
  ]
};
