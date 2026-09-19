const shopDetails = [

        {
            name_jp: "villain", name_en: "villain", name_ko: "빌런 (villain)", type: "MIX", area: "東京", xId: "@bar_villains", snsUrl: "https://x.com/bar_villains", time: "21:00〜9:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-12-16セントフォービル901", address_en: "901, St. Four Bldg, 2-12-16 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-16 센트포 빌딩 901", tags: ["カラオケ", "喫煙可", "穏やか", "初心者向け", "フード有", "盛り上がる", "持ち込み食べ物可", "ボトルキープ有","イベント多い"], icon: "https://unavatar.io/twitter/bar_villains", note: "https://note.com/412357siki/n/n38c28960b68b", medium: "#", lastCheck: "2025", checkLevel: "thorough",
            description_jp: "二丁目の中心にあるビルの9階。ダーツやカラオケが楽しめ、ソファ席でゆったり朝まで過ごせるMIXバーです。",
            description_en: "Located on the 9th floor in the heart of Ni-chome. A MIX bar with darts and karaoke where you can relax on sofas until morning.",
            description_ko: "신주쿠 2초메 중심부에 있는 빌딩 9층. 다트와 가라오케를 즐길 수 있으며, 소파 좌석에서 편안하게 아침まで 보낼 수 있는 MIX 바입니다."
        },
        {
            name_jp: "Bar LEGO", name_en: "Bar LEGO", name_ko: "Bar LEGO", type: "ビアン", area: "東日本", xId: "websiteのみ", snsUrl: "http://r.goope.jp/bar-lego/", time: "19:00〜27:00", holiday: "日曜", address_jp: "北海道札幌市中央区南5条西6丁目9番地第５桂和ビル４F", address_en: "4F, Dai-5 Keiwa Bldg, 5-6 Minami 5-jo Nishi, Chuo-ku, Sapporo, Hokkaido", address_ko: "훗카이도 삿포로시 주오구 미나미 5조 니시 6초메 9번지 제5 게이와 빌딩 4F", tags: ["穏やか", "フード有"], icon: "website", note: "#", medium: "#",
            description_jp: "未訪問、現在調査中訪問次第載せます。",
            description_en: "Coming soon! (I haven't visited yet, but planning to!).",
            description_ko: "미방문, 현재 조사 중이며 방문하는 대로 올리겠습니다."
        },
        {
            name_jp: "bar Orb", name_en: "bar Orb", name_ko: "bar Orb", type: "ビアン", area: "東日本", xId: "@kaeOrb", snsUrl: "https://x.com/kaeOrb", time: "18:00〜last", holiday: "日曜", address_jp: "北海道札幌市中央区南5条西２丁目8番 社交会館4階", address_en: "4F Shako Kaikan, 8, Minami 5-jo Nishi 2-chome, Chuo-ku, Sapporo, Hokkaido", address_ko: "훗카이도 삿포로시 주오구 미나미 5조 니시 2초메 8번 사교회관 4층", tags: ["初心者向け", "穏やか"], icon: "https://unavatar.io/twitter/kaeOrb", note: "#", medium: "#",
            description_jp: "未訪問、現在調査中訪問次第載せます。",
            description_en: "Coming soon! (I haven't visited yet, but planning to!).",
            description_ko: "미방문,現在調査中訪問次第載せます。"
        },
        {
            name_jp: "bar 飲ノンキ喜", name_en: "bar nonki", name_ko: "bar 飲ノンキ喜", type: "ビアン", area: "東日本", xId: "@karaokebarnonki", snsUrl: "https://x.com/karaokebarnonki", time: "20:00〜last", holiday: "火曜", address_jp: "北海道札幌市中央区南5条西5丁目21-3 ", address_en: "21-3, Minami 5-jo Nishi 5-chome, Chuo-ku, Sapporo, Hokkaido", address_ko: "훗카이도 삿포로시 주오구 미나미 5조 니시 5초메 21-3", tags: ["盛り上がる", "カラオケ"], icon: "https://unavatar.io/twitter/karaokebarnonki", note: "#", medium: "#",
            description_jp: "未訪問、現在調査中訪問次第載せます。",
            description_en: "Coming soon! (I haven't visited yet, but planning to!).",
            description_ko: "미방문, 현재 조사 중이며 방문하는 대로 올리겠습니다."
        },
        {
            name_jp: "コア(core)", name_en: "core", name_ko: "코어 (core)", type: "MIX", area: "東日本", xId: "Instagramのみ", snsUrl: "https://www.instagram.com/core.0904", time: "20:00〜3:00、20:00~2:00", holiday: "不定休", address_jp: "栃木県宇都宮市本町8-9クレインビル2-c", address_en: "2-C Crane Bldg, 8-9 Honcho, Utsunomiya-shi, Tochigi", address_ko: "도치기현 우쓰노미야시 혼마치 8-9 크레인 빌딩 2-C", tags: ["穏やか","フード有"], icon: "instagram", note: "#", medium: "#",
            description_jp: "未訪問、女性限定の日もあり九月からオーナーが変わり新体制になりました。",
            description_en: "I haven't visited yet, Women-only days available. New ownership and management as of September.",
            description_ko: "미방문, 여성 한정일도 있으며 9월부터 오너가 바뀌어 새 체제가 되었습니다."
        },
        {
            name_jp: "楽園", name_en: "rakuen", name_ko: "낙원 (rakuen)", type: "ビアン", area: "東日本", xId: "@rakuen1015", snsUrl: "https://x.com/rakuen1015", time: "19:00〜last", holiday: "月曜", address_jp: "宮城県仙台市青葉区国分町二丁目12番5号凱旋門ビル6F", address_en: "Gaisenmon Building 6F, 2-12-5 Kokubunchō, Aoba-ku, Sendai-shi, Miyagi", address_ko: "미야기현 센다이시 아오바구 고쿠분초 2초메 12-5 가이센몬 빌딩 6F", tags: ["盛り上がる", "カラオケ"], icon: "https://unavatar.io/twitter/rakuen1015", note: "#", medium: "#",
            description_jp: "未訪問、現在調査中訪問次第載せます。レズビアンショークラブです！",
            description_en: "Coming soon! (I haven't visited yet, but planning to!) A Show Club for Lesbians & Queer Women.",
            description_ko: "미방문, 현재 조사 중이며 방문하는 대로 올리겠습니다. 레즈비언 쇼 클럽입니다!"
        },
        {
            name_jp: "bar KARMA", name_en: "bar KARMA", name_ko: "bar KARMA", type: "MIX", area: "東日本", xId: "@MIXbar_KARMA", snsUrl: "https://x.com/MIXbar_KARMA", time: "20:00〜last", holiday: "月曜", address_jp: "宮城県仙台市青葉区国分町二丁目12番5号凱旋門ビル8F", address_en: "Gaisenmon Building 8F, 2-12-5 Kokubunchō, Aoba-ku, Sendai-shi, Miyagi", address_ko: "미야기현 센다이시 아오바구 고쿠분초 2초메 12-5 가이센몬 빌딩 8F", tags: ["盛り上がる", "カラオケ"], icon: "https://unavatar.io/twitter/MIXbar_KARMA", note: "#", medium: "#",
            description_jp: "未訪問、現在調査中訪問次第載せます。",
            description_en: "Coming soon! (I haven't visited yet, but planning to!).",
            description_ko: "미방문, 현재 조사 중이며 방문하는 대로 올리겠습니다."
        },
        // A系列 (A)
{ 
    name_jp: "agit", name_en: "agit", name_ko: "아기토 (agit)", series: "A系列", seriesMark: "A", type: "ビアン", area: "東京", xId: "@agit_tokyo", snsUrl: "https://x.com/agit_tokyo", time: "20:00〜26:00,20:00～27:00", holiday: "月曜,火曜", address_jp: "東京都新宿区新宿2-15-11-1F", address_en: "1F, 2-15-11 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2-15-11-1F", tags: ["穏やか","年齢層高め","変わったリキュール有",], icon: "https://unavatar.io/twitter/agit_tokyo", note: "#", medium: "#",lastCheck: "2026", checkLevel: "thorough",
    description_jp: "2026年に改修され入り口も一新した老舗。スナックのような落ち着いた雰囲気が魅力。ハブ酒やプロテインも楽しめます！",
    description_en: "An established bar with a renovated entrance as of 2026. Enjoy a cozy 'Snack' bar atmosphere. They even serve Habu-shu (snake liquor) and protein shakes!",
    description_ko: "2026년에 리모델링되어 입구도 새단장한 노포. 스낵 같은 차분한 분위기가 매력. 하부주(뱀 술)와 프로틴도 즐기실 수 있습니다!"
},
{ 
    name_jp: "anchor rainbow port tokyo", name_en: "anchor", name_ko: "앵커 레인보우 포트 도쿄", series: "A系列", seriesMark: "A", type: "MIX", area: "東京", xId: "@anchor_staff", snsUrl: "https://x.com/anchor_staff", time: "15:00〜18:00,18:00～23:00", holiday: "火曜,水曜", address_jp: "東京都新宿区新宿2丁目-12-15山原ハイツ2F", address_en: "2F, Yamahara Heights, 2-12-15 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-15 야마하라 하이츠 2F", tags: ["初心者向け","初心者多め","フード有","カフェ"], icon: "https://unavatar.io/twitter/anchor_staff", note: "#", medium: "#",lastCheck: "",checkLevel: "",
    description_jp: "二丁目では珍しく昼から開いているカフェバー。百合漫画を堪能するならここ一択！完全キャッシュレス決済のお店です。",
    description_en: "A rare Ni-chome cafe-bar open from the daytime. The absolute best spot to enjoy Yuri manga! Please note they are a cashless-only establishment.",
    description_ko: "신주쿠 2초메에서는 드물게 낮부터 문을 여는 카페 바. 백합 만화를 만끽하고 싶다면 이곳이 유일한 선택! 완전 현금 없는 결제(캐시리스) 매장입니다."
},
{ 
    name_jp: "ADEZAKURA", name_en: "ADEZAKURA", name_ko: "아데자쿠라 (ADEZAKURA)", series: "A系列", seriesMark: "A", type: "MIX", area: "東京", xId: "@adezakura_bar", snsUrl: "https://x.com/adezakura_bar", time: "21:00〜5:00,21:00～6:00", holiday: "月曜,火曜", address_jp: "東京都新宿区新宿2丁目 15-11-1F", address_en: "1F, 2-15-11 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 15-11-1F", tags: ["初心者向け", "初心者多め", "イベント多い", "外国人多い","ノーチャージ","英語対応","変わったリキュール有"], icon: "https://unavatar.io/twitter/adezakura_bar", note: "#", medium: "#",lastCheck: "2026",checkLevel: "thorough",
    description_jp: "DJブースもあるショットバー。ビアンバーでスミノフアイスを置いているのはここだけかも？",
    description_en: "A shot bar featuring a DJ booth. It might be the only lesbian-friendly bar in the area that serves Smirnoff Ice.",
    description_ko: "DJ 부스가 있는 숏 바. 레즈비언 바 중에서 스미노프 아이스를 파는 곳은 여기가 유일할지도?"
},

// H系列 (H)
{ 
    name_jp: "一(はじめ)", name_en: "Bar Hajime", name_ko: "하지메 (一)", series: "H系列", seriesMark: "H", type: "MIX", area: "東京", xId: "@barhajime", snsUrl: "https://x.com/barhajime", time: "19:00～26:00,20:00〜4:00", holiday: "日曜,火曜", address_jp: "東京都新宿区新宿2丁目-12-14-1A", address_en: "1A, 2-12-14 Shinjuku, Shinjuku-ku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-14-1A", tags: ["カラオケ", "喫煙可", "初心者向け", "年齢層高め", "変わったリキュール有", "穏やか", "ボトルキープ有", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/barhajime", note: "https://note.com/412357siki/n/n214e5c8e1d02", medium: "#",lastCheck: "2026-03", checkLevel: "thorough",
    description_jp: "半地下のように見えてこれが一階！迷ったらギロンセンを目指せ、ほぼレズビアンがいるMIXバー。年齢層幅広く会える所です。",
    description_en: "It looks like a semi-basement but it's actually the 1st floor! If you get lost, look for the 'Giron-sen' sign. A MIX bar where most customers are lesbians, attracting a wide range of age groups.",
    description_ko: "반지하처럼 보이지만 여기가 1층! 길을 잃으면 '기론센'을 찾아가세요. 거의 레즈비언이 모이는 MIX 바이며, 다양한 연령층을 만날 수 있는 곳입니다."
},
{ 
    name_jp: "八(はち)", name_en: "Bar Hachi", name_ko: "하지 (八)", series: "H系列", seriesMark: "H", type: "ビアン", area: "東京", xId: "@hachi_omusubi_8", snsUrl: "https://x.com/hachi_omusubi_8", time: "20:00〜25:00", holiday: "日曜,月曜", address_jp: "東京都新宿区新宿2丁目-15-13第二中江ビルB1", address_en: "B1, Dai-ni Nakae Bldg, 2-15-13 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 15-13 다이니 나카에 빌딩 B1", tags: ["喫煙可", "初心者向け", "初心者多め", "変わったリキュール有", "穏やか", "イベント多い", "フード有", "カラオケ","盛り上がる"], icon: "https://unavatar.io/twitter/hachi_omusubi_8", note: "https://note.com/412357siki/n/n1936bc1a82c9", medium: "#",lastCheck: "2025", checkLevel: "thorough",
    description_jp: "地下一階にあるおむすびがコンセプトのレズビアンバー。オーナーの知り合いならたまに男性がいることも。珍しいリキュールや炭酸サーバーがあるお店です。",
    description_en: "A lesbian bar on B1F with an 'Onigiri' (rice ball) concept. You might occasionally see male acquaintances of the owner. They feature rare liqueurs and a soda carbonator.",
    description_ko: "지하 1층에 있는 주먹밥이 컨셉인 레즈비언 바. 오너의 지인이라면 가끔 남성이 있는 경우도 있습니다. 이색적인 리큐르와 탄산 서버가 있는 가게입니다."
},
{ 
    name_jp: "はっちゃけ", name_en: "Hacchake", name_ko: "학챠케 (はっちゃけ)", series: "H系列", seriesMark: "H", type: "MIX", area: "東京", xId: "@hacchake_nicho", snsUrl: "https://x.com/hacchake_nicho", time: "18:00〜24:00", holiday: "日曜,月曜,火曜", address_jp: "東京都新宿区新宿2丁目-14-11フタミビル101-A", address_en: "101-A, Futami Bldg, 2-14-11 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 14-11 후타미 빌딩 101-A", tags: ["初心者向け", "穏やか", "お通し有", "フード有"], icon: "https://unavatar.io/twitter/hacchake_nicho", note: "https://note.com/412357siki/n/nae96d6d9d1b4", medium: "#",lastCheck: "2026-02", checkLevel: "thorough",
    description_jp: "H系列でご飯メインのお店。二丁目横丁の一番奥にあり、おつまみからしっかりした食事まで充実。一軒目にピッタリです！",
    description_en: "An H-series spot focused on food, located at the very back of Nichome Yokocho. From snacks to full meals, it's the perfect first stop for the night!",
    description_ko: "H계열에서 밥이 메인인 가게. 신주쿠 2초메 요코의 안쪽에 위치해 있으며, 간단한 안주부터 든든한 식사까지 알차게 준비되어 있습니다. 1차로 딱 좋습니다!"
},
{ 
    name_jp: "PUZZLE", name_en: "Bar PUZZLE", name_ko: "퍼즐 (PUZZLE)", series: "H系列", seriesMark: "H", type: "ビアン", area: "東京", xId: "@BarPUZZLE1", snsUrl: "https://x.com/BarPUZZLE1", time: "20:00〜26:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-13-14jビルディング1F", address_en: "1F, J-Building, 2-13-14 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 13-14 J빌딩 1F", tags: ["カラオケ", "喫煙可", "初心者向け", "初心者多め", "穏やか", "変わったリキュール有", "持ち込み食べ物可", "イベント多い"], icon: "https://unavatar.io/twitter/BarPUZZLE1", note: "https://note.com/412357siki/n/nbbdc3f99c53c", medium: "#",lastCheck: "2025",checkLevel: "thorough",
    description_jp: "曜日ごとにスタッフが決まっている珍しいシステムのレズビアンバー。変わったリキュールやイベントも多い。居酒屋『よしだ海岸』の先にあります。",
    description_en: "A lesbian bar with a unique system where the staff is fixed by the day of the week. Lots of rare liqueurs and events. Located just past the Izakaya 'Yoshida Kaigan'.",
    description_ko: "요일별로 스태프가 정해져 있는 독특한 시스템의 레즈비언 바. 이색적인 리큐르와 이벤트가 많습니다. 이자카야 '요시다 해안' 지나서 위치해 있습니다."
},
{ 
    name_jp: "パズルアソビ", name_en: "PUZZLE ASOBI", name_ko: "퍼즐 아소비", series: "H系列", seriesMark: "H", type: "ビアン", area: "東京", xId: "@puzzleasobi2", snsUrl: "https://x.com/puzzleasobi2", time: "21:00〜9:00", holiday: "不定休", address_jp: "東京都新宿区新宿1丁目36-3新宿御苑136ビル6F", address_en: "6F, Shinjuku Gyoen 136 Bldg, 1-36-3 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 1초메 36-3 신주쿠 교엔 136 빌딩 6F", tags: ["カラオケ","イベント多い",], icon: "https://unavatar.io/twitter/puzzleasobi2", note: "https://note.com/412357siki/n/n6efa3fba81cc", medium: "#",lastCheck: "2026-05",checkLevel: "thorough",
    description_jp: "住所は一丁目だけど雰囲気は二丁目！新築ビルに入ったH系列の店舗で、カラオケもダーツも楽しめるお店です。",
    description_en: "The address is in Ic-chome, but it has a total Ni-chome vibe! A new H-series branch in a modern building, featuring both karaoke and darts.",
    description_ko: "주소는 1초메이지만 분위기는 2초메! 신축 건물에 입주한 H계열 매장으로, 노래방과 다트를 모두 즐길 수 있는 곳입니다."
},
{ 
    name_jp: "LBAR T", name_en: "LBAR T", name_ko: "LBAR T", series: "H系列", seriesMark: "H", type: "ビアン", area: "東京", xId: "@lbart0314", snsUrl: "https://x.com/lbart0314", time: "18:30〜24:00", holiday: "月曜", address_jp: "東京都台東区上野2-4-3-103", address_en: "103, 2-4-3,Ueno, Taito-ku, Tokyo", address_ko: "도쿄도 다이토구 우에노 2-4-3-103", tags: ["カラオケ", "喫煙可", "初心者向け", "穏やか", "イベント多い"], icon: "https://unavatar.io/twitter/lbart0314", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "아직 방문하지 않았으며, 현재 조사 중입니다. 방문하는 대로 업데이트하겠습니다."
},
  // B系列 - Lグループ (B(L))
{ 
    name_jp: "LITTLE MONKEY", name_en: "LITTLE MONKEY", name_ko: "리틀 몽키 (LITTLE MONKEY)", series: "B系列", seriesMark: "B(L)", type: "ビアン", area: "東京", xId: "@little_monkey80", snsUrl: "https://x.com/little_monkey80", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-14-7赤川ビル1階", address_en: "1F, Akagawa Bldg, 2-14-7 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 14-7 아카가와 빌딩 1층", tags: ["カラオケ", "喫煙可", "初心者向け", "初心者多め", "盛り上がる", "イベント多い", "持ち込み食べ物可", "穏やか"], icon: "https://unavatar.io/twitter/little_monkey80", note: "https://note.com/412357siki/n/n1ebd3a93e1a6", medium: "#",lastCheck: "2026-04", checkLevel: "thorough",
    description_jp: "L系列の1号店で、お猿の看板が目印。料金体系をSNSで公開している親切なお店。若い層に人気です！",
    description_en: "The first L-series shop, marked by a monkey sign. A very welcoming bar that posts its prices on social media. Very popular with the younger crowd.",
    description_ko: "L계열의 1호점으로 원숭이 간판이 마크. 요금 체계를 SNS에 공개하는 친절한 가게. 젊은층에게 인기가 많습니다!"
},
{ 
    name_jp: "LAUGH", name_en: "LAUGH", name_ko: "래프 (LAUGH)", series: "B系列", seriesMark: "B(L)", type: "MIX", area: "東京", xId: "@BARLAUGH07", snsUrl: "https://x.com/BARLAUGH07", time: "20:00〜5:00", holiday: "月曜、火曜", address_jp: "東京都新宿区新宿2丁目-18-7ふぁーぶる店舗2F", address_en: "2F, 2-18-7 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-7 파블로 점포 2F", tags: ["カラオケ", "喫煙可", "初心者多め", "初心者向け", "イベント多い", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/BARLAUGH07", note: "https://note.com/412357siki/n/n5d840ad50af8", medium: "#",lastCheck: "2026-02", checkLevel: "thorough",
    description_jp: "グルークファーストの2階。犬の歯のロゴが目印！若い子が多く、2面の窓が開放的なお店です。階段の登りづらさも体験してみて！",
    description_en: "Located above Gluck First, featuring a dog-tooth logo. Popular with young people, the bar has two large windows. Give the uniquely steep stairs a try!",
    description_ko: "글룩 퍼스트의 2층. 개의 이빨 로고가 마크! 젊은 손님이 많고 2면의 창문이 개방적인 가게입니다. 오르기 다소 가파른 계단도 경험해 보세요!"
},
{ 
    name_jp: "Lin9", name_en: "Lin9", name_ko: "Lin9", series: "B系列", seriesMark: "B(L)", type: "MIX", area: "東京", xId: "@Lin993960", snsUrl: "https://x.com/Lin993960", time: "20:00〜5:00", holiday: "火曜、水曜", address_jp: "東京都新宿区新宿1丁目新宿御苑136ビル9F", address_en: "9F, Shinjuku Gyoen 136 Bldg, 1-36 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 1초메 신주쿠 교엔 136 빌딩 9F", tags: ["カラオケ", "喫煙可","ボトルキープ有", "初心者向け", "イベント多い", "持ち込み食べ物可", "盛り上がる", "穏やか"], icon: "https://unavatar.io/twitter/Lin993960", note: "https://note.com/412357siki/n/n2a284ca12fb5", medium: "#",lastCheck: "2026-02", checkLevel: "thorough",
    description_jp: "オオカミのイラストがクール。昼は古着屋、夜はバー。ベランダから新宿のビル群を眺めながら飲めるお店です。",
    description_en: "Features a cool wolf illustration. It's a vintage clothing store by day and a bar by night. You can enjoy a drink on the balcony while overlooking Shinjuku's skyline.",
    description_ko: "늑대 일러스트가 쿨한 곳. 낮에는 구제옷 가게, 밤에는 바. 베란다에서 신주쿠 빌딩 숲을 바라보며 한잔할 수 있는 가게입니다."
},

// B系列 - Gグループ (B(G))
{ 
    name_jp: "グルークファースト", name_en: "Gluck First", name_ko: "글룩 퍼스트 (Gluck First)", series: "B系列", seriesMark: "B(G)", type: "MIX", area: "東京", xId: "@gluck_mixbar", snsUrl: "https://x.com/gluck_mixbar", time: "20:00〜8:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-18-7ふぁーぶる店舗1階", address_en: "1F, 2-18-7 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-7 파블로 점포 1층", tags: ["カラオケ", "喫煙可", "初心者向け", "初心者多め", "イベント多い", "持ち込み食べ物可", "ボトルキープ有", "盛り上がる", "穏やか"], icon: "https://unavatar.io/twitter/gluck_mixbar", note: "https://note.com/412357siki/n/n139c68435217", medium: "#",lastCheck: "2026-04", checkLevel: "thorough",
    description_jp: "大きな駐車場前で朝（昼？）まで営業中。黒を基調とした内装で夜の雰囲気たっぷり。紙タバコは外で吸うスタイルです。",
    description_en: "Located in front of the large parking lot and open until morning (sometimes noon!). Features a sleek black interior. Cigarette smoking is allowed outside.",
    description_ko: "큰 주차장 앞에서 아침(낮?)까지 영업 중. 블랙톤의 인테리어로 밤의 분위기가 물씬 납니다. 연초는 밖에서 피우는 스타일입니다."
},
{ 
    name_jp: "グルークネクスト", name_en: "Gluck Next", name_ko: "글룩 넥스트 (Gluck Next)", series: "B系列", seriesMark: "B(G)", type: "MIX", area: "東京", xId: "@gluck_mixbar", snsUrl: "https://x.com/gluck_mixbar", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-12-11林ビル2階", address_en: "2F, Hayashi Bldg, 2-12-11 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-11 하야시 빌딩 2층", tags: ["カラオケ", "喫煙可", "初心者多め", "初心者向け", "ボトルキープ有", "イベント多い", "盛り上がる", "穏やか"], icon: "https://unavatar.io/twitter/gluck_mixbar", note: "https://note.com/412357siki/n/n694f09d93410", medium: "#",lastCheck: "2026-04", checkLevel: "thorough",
    description_jp: "二丁目のビアンバー界隈では最大級の広さ。ダーツ、カラオケ、ボードゲームと遊びが充実. 天使のインテリアが並んでいます。",
    description_en: "One of the most spacious bars in the Ni-chome lesbian scene. Fully equipped with darts, karaoke, and games. The interior is decorated with many angel figures.",
    description_ko: "신주쿠 2초메 레즈비언 바 업계에서 최대급의 넓이. 다트, 노래방, 보드게임 등 즐길 거리가 가득합니다. 천사 소품들로 꾸며져 있습니다."
},
{ 
    name_jp: "グルークゼロ", name_en: "Gluck Zero", name_ko: "글룩 제로 (Gluck Zero)", series: "B系列", seriesMark: "B(G)", type: "MIX", area: "東京", xId: "@gluck_mixbar", snsUrl: "https://x.com/gluck_mixbar", time: "20:00〜5:00,19:00~5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-12-15 山原ハイツB1", address_en: "B1, Yamahara Heights, 2-12-15 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-15 야마하라 하이츠 B1", tags: ["カラオケ", "喫煙可", "初心者向け", "初心者多め", "ボトルキープ有", "イベント多い", "穏やか", "盛り上がる", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/gluck_mixbar", note: "https://note.com/412357siki/n/n792b52e36bbc", medium: "#",lastCheck: "2026-04", checkLevel: "thorough",
    description_jp: "白基調の店内で、B系列初の仲通り沿い店舗。ボードゲームが豊富。地下なのでWi-Fiの強さをぜひ現地で試してみて！",
    description_en: "A white-themed interior and the first B-series bar along Naka-dori. Plenty of board games available. Since it's on B1F, go test the Wi-Fi strength for yourself!",
    description_ko: "화이트톤의 실내이며 B계열 최초의 나카도리 산책로 변 점포. 보드게임이 다양합니다. 지하이니 현장에서 Wi-Fi 신호 강도를 꼭 확인해 보세요!"
},
{ 
    name_jp: "GILLTY", name_en: "GILLTY", name_ko: "길티 (GILLTY)", series: "B系列", seriesMark: "B(G)", type: "MIX", area: "東京", xId: "Instagramのみ", snsUrl: "https://www.instagram.com/gillty___mixbar/", time: "20:00〜4:00,20:00～5:00", holiday: "水曜", address_jp: "東京都新宿区新宿1丁目-36-3新宿御苑136ビル1階", address_en: "1F, Shinjuku Gyoen 136 Bldg, 1-36-3 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 1초메 36-3 신주쿠 교엔 136 빌딩 1층", tags: ["喫煙可", "ボトルキープ有", "穏やか", "持ち込み食べ物可","カフェ", "イベント多い"], icon: "instagram", note: "https://note.com/412357siki/n/n1a2cd7f78ae0", medium: "#",lastCheck: "2026-04", checkLevel: "thorough",
    description_jp: "昼はカフェ、夜はバー。コンセント完備のカウンター席があり、プロジェクター映像も楽しめます。完全キャッシュレス決済です。",
    description_en: "A cafe by day and a bar by night. Features counter seats with power outlets and projected visuals. This is a cashless-only establishment.",
    description_ko: "낮에는 카페, 밤에는 바. 콘센트가 완비된 바 테이블석이 있으며 빔프로젝터 영상도 즐기실 수 있습니다. 완전 현금 없는 결제(캐시리스) 매장입니다."
},

// 特別マークグループ
{ 
    name_jp: "GOLD FINGER", name_en: "GOLD FINGER", name_ko: "골드 핑거 (GOLD FINGER)", series: "GF系", seriesMark: "☝️", type: "MIX", area: "東京", xId: "@GOLDFINGERTOKYO", snsUrl: "https://x.com/GOLDFINGERTOKYO", time: "17:00〜24:00,17:00~28:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目 12-11林ビル1階", address_en: "1F, Hayashi Bldg, 2-12-11 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-11 하야시 빌딩 1층", tags: ["初心者多め","外国人多い","ノーチャージ","英語対応", "初心者向け"], icon: "https://unavatar.io/twitter/GOLDFINGERTOKYO", note: "#", medium: "#",lastCheck: "2026-07",checkLevel: "first",
    description_jp: "世界的に有名なショットバー。外国人の客層が多く、とにかくたくさんの人と出会いたい時にピッタリな場所です。",
    description_en: "A world-famous shot bar. Very popular with international visitors. The perfect spot if you want to meet a large number of people in one night.",
    description_ko: "세계적으로 유명한 숏 바. 외국인 손님층이 많고, 아무튼 많은 사람들과 만나고 싶을 때 딱 좋은 장소입니다."
},
{ 
    name_jp: "ラブHOT", name_en: "LOVE HOT", name_ko: "러브 핫 (LOVE HOT)", series: "GF系", seriesMark: "☝️", type: "ビアン", area: "東京", xId: "@GOLDFINGERTOKYO", snsUrl: "https://x.com/GOLDFINGERTOKYO", time: "19:00~26:00", holiday: "金曜と土曜以外", address_jp: "東京都新宿区新宿2丁目 12-2-3、4、5階", address_en: "3-5F, 2-12-2 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-2 3, 4, 5층", tags: ["初心者多め","カラオケ","外国人多い","ノーチャージ",], icon: "https://unavatar.io/twitter/GOLDFINGERTOKYO", note: "#", medium: "#",
    description_jp: "GF系列のスナック風バー。週末限定で、複数フロアごとに異なる雰囲気が楽しめます。ノーチャージなのでハシゴにも最適！",
    description_en: "A snack-style bar from the GF series. Open on weekends, you can enjoy different vibes across multiple floors. No cover charge makes it perfect for bar hopping!",
    description_ko: "GF계열의 스낵풍 바. 주말 한정으로 여러 층마다 각기 다른 분위기를 즐기실 수 있습니다. 노 차지(입장료 없음)라 2차로 이동하기에도 최적!"
},
{ 
    name_jp: "どん浴", name_en: "Donyoku", name_ko: "돈요쿠 (どん浴)", series: "船系", seriesMark: "🚢", type: "MIX", area: "東京", xId: "@donyoku2018", snsUrl: "https://x.com/donyoku2018", time: "14:00〜22:00", holiday: "火曜", address_jp: "東京都新宿区新宿2丁目-7-3ヴェラハイツ新宿御苑203", address_en: "203, Vera Heights, 2-7-3 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 7-3 베라 하이츠 신주쿠 교엔 203", tags: ["初心者多め","初心者向け","カフェ","フード有",], icon: "https://unavatar.io/twitter/donyoku2018", note: "#", medium: "#",lastCheck: "2024",checkLevel: "first",
    description_jp: "足湯が楽しめるカフェ。看板ロボットに癒やされながら、お昼からご飯とリラックスタイムを過ごせます。",
    description_en: "A cafe where you can enjoy a footbath. Relax with their mascot robot while enjoying a meal and a soothing soak starting from the afternoon.",
    description_ko: "족욕을 즐길 수 있는 카페. 간판 로봇의 힐링을 받으며 낮부터 식사와 편안한 시간을 보낼 수 있습니다."
},
{ 
    name_jp: "どろぶね", name_en: "Dorobune", name_ko: "도로부네 (どろぶね)", series: "船系", seriesMark: "🚢", type: "ビアン", area: "東京", xId: "@dorobune1222", snsUrl: "https://x.com/dorobune1222", time: "19:00〜23:00", holiday: "不定休", address_jp: "東京都新宿区新宿2-7-3ヴェラハイツ新宿御苑205", address_en: "205, Vera Heights, 2-7-3 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2-7-3 베라 하이츠 신주쿠 교엔 205", tags: ["初心者多め","初心者向け","フード有",], icon: "https://unavatar.io/twitter/dorobune1222", note: "#", medium: "#",lastCheck: "2024",checkLevel: "first",
    description_jp: "「女酒場」としてリニューアル。定期的にコラボイベントやオフ会を開催しており、コミュニティを広げたい方におすすめ。",
    description_en: "Renewed as a 'Female Tavern.' They frequently host collaboration events and meetups, making it a great place to expand your social circle.",
    description_ko: "'여성 주점'으로 리뉴얼. 정기적으로 콜라보 이벤트나 오프회를 개최하고 있어 커뮤니티를 넓히고 싶은 분들에게 추천합니다."
},
// その他
{ 
    name_jp: "LAGOON", name_en: "LAGOON", name_ko: "라고운 (LAGOON)", type: "ビアン", area: "東京", xId: "@lagoon0410", snsUrl: "https://x.com/lagoon0410", time: "18:00〜24:00,18:00～25:00", holiday: "日曜,月曜,木曜", address_jp: "東京都新宿区新宿2丁目-18-10新千鳥街の中", address_en: "Shin-Chidorigai, 2-18-10 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-10 신치도리가이 내", tags: ["初心者向け", "初心者多め", "フード有", "お通し有", "変わったリキュール有", "穏やか", "年齢層高め"], icon: "https://unavatar.io/twitter/lagoon0410", note: "https://note.com/412357siki/n/nc035ee0d3935", medium: "#",lastCheck: "2026-04", checkLevel: "thorough",
    description_jp: "新千鳥街にある、海岸がコンセプトのまったりしたお店. ビールサーバー完備。葉っぱの看板が目印です。",
    description_en: "A chill, beach-themed bar in Shin-Chidorigai. Equipped with a beer server and marked by its distinctive leaf sign.",
    description_ko: "신치도리가이에 위치한 해변이 컨셉인 차분한 분위기의 가게. 맥주 서버 완비. 나뭇잎 간판이 마크입니다."
},
{ 
    name_jp: "ELLVIE", name_en: "ELLVIE", name_ko: "엘비 (ELLVIE)", type: "ビアン", area: "東京", xId: "@Ellevie_", snsUrl: "https://x.com/Ellevie_", time: "18:00〜24:00,18:00～4:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目18-10新千鳥街の中", address_en: "Shin-Chidorigai, 2-18-10 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-10 신치도리가이 내", tags: ["初心者多め", "初心者向け", "フード有", "変わったリキュール有", "穏やか", "ボトルキープ有", "年齢層高め"], icon: "https://unavatar.io/twitter/Ellevie_", note: "https://note.com/412357siki/n/n416d22497985?sub_rt=share_pb", medium: "#",lastCheck: "2026-01", checkLevel: "thorough",
    description_jp: "密集地帯にあるカウンターとテーブル席のお店。窓があり開放的で、食事メニューも充実しています。",
    description_en: "A bar with both counter and table seating in a densely packed area. It's airy with windows and offers an extensive food menu.",
    description_ko: "밀집 지역에 있는 바 테이블과 일반 테이블석이 있는 가게. 창문이 있어 개방적이며 식사 메뉴도 충실합니다."
},
{ 
    name_jp: "YES", name_en: "YES", name_ko: "예스 (YES)", type: "ビアン", area: "東京", xId: "@BAR_YES_201", snsUrl: "https://x.com/BAR_YES_201", time: "18:00〜last", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目 18-10-201", address_en: "201, 2-18-10 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-10-201", tags: ["穏やか", "年齢層高め", "変わったリキュール有", "お通し有", "ボトルキープ有", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/BAR_YES_201", note: "https://note.com/412357siki/n/ndbc113704cf0", medium: "#",lastCheck: "2025", checkLevel: "thorough",
    description_jp: "新千鳥街の階段を登った先にあるカウンターのみのお店。営業しているかは運次第なところも魅力！？",
    description_en: "A counter-only bar up the stairs in Shin-Chidorigai. Part of its charm is that whether it's open depends on your luck!",
    description_ko: "신치도리가이 계단을 올라간 곳에 위치한 바 테이블만 있는 가게. 영업 중인지는 운에 맡겨야 한다는 점도 매력!?"
},
{ 
    name_jp: "AVANTY", name_en: "AVANTY", name_ko: "아반티 (AVANTY)", type: "ビアン", area: "東京", xId: "@yumineesan", snsUrl: "https://x.com/yumineesan", time: "20:00〜last", holiday: "月曜,木曜", address_jp: "東京都新宿区新宿2丁目 18-10-1階", address_en: "1F, 2-18-10 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-10 1층", tags: ["穏やか", "お通し有", "フード有", "ボトルキープ有", "年齢層高め", "喫煙可"], icon: "https://unavatar.io/twitter/yumineesan", note: "https://note.com/412357siki/n/nb84172b17510", medium: "#",lastCheck: "2025", checkLevel: "thorough",
    description_jp: "赤いドアの小窓が目印のカウンターバー。日替わりの手作りお通しが絶品。SNSをチェックして行ってみて！",
    description_en: "A counter bar marked by a small window in a red door. Their daily handmade appetizers are excellent. Check their social media before you go!",
    description_ko: "빨간 문 위의 작은 창문이 마크인 바 테이블 바. 날마다 바뀌는 수제 오토시(기본 안주)가 일품. SNS를 확인하고 가보세요!"
},
{ 
    name_jp: "バーファイブ5", name_en: "Bar Five5", name_ko: "바 파이브5 (Bar Five5)", type: "ビアン", area: "東京", xId: "@BAR_Five5", snsUrl: "https://x.com/BAR_Five5", time: "18:00〜24:00", holiday: "月曜,火曜", address_jp: "東京都新宿区新宿2丁目-15-8-2F", address_en: "2F, 2-15-8 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 15-8-2F", tags: ["年齢層高め","穏やか",], icon: "https://unavatar.io/twitter/BAR_Five5", note: "#", medium: "#",lastCheck: "2026/06", checkLevel: "first",
    description_jp: "通称「百合の小道」にある老舗。青い看板が目印で、2階の窓から通りを見下ろせる落ち着いた空間です。",
    description_en: "An established bar on 'Yuri Alley.' Look for the blue sign. A calm space on the 2nd floor where you can look out over the street.",
    description_ko: "통칭 '백합의 오솔길'에 있는 노포. 파란 간판이 마크이며, 2층 창문에서 거리를 내려다볼 수 있는 차분한 공간입니다."
},
{ 
    name_jp: "あじゃら", name_en: "Ajara", name_ko: "아자라 (Ajara)", type: "MIX", area: "東京", xId: "@ajara_chibar", snsUrl: "https://x.com/ajara_chibar", time: "18:00〜25:00", holiday: "日曜", address_jp: "東京都新宿区新宿2丁目 15-8", address_en: "2-15-8 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 15-8", tags: ["初心者向け", "穏やか", "変わったリキュール有", "フード有", "年齢層高め", "喫煙可"], icon: "https://unavatar.io/twitter/ajara_chibar", note: "https://note.com/412357siki/n/n638a289f5213", medium: "#",lastCheck: "2025", checkLevel: "thorough",
    description_jp: "百合の小道の曇りガラスのお店。自家製サングリアや洋風おつまみが豊富。間借り営業なども行っています。",
    description_en: "A bar with frosted glass windows on Yuri Alley. Offers homemade sangria and various Western-style snacks. They also host guest kitchen events.",
    description_ko: "백합의 오솔길에 있는 불투명 유리로 된 가게. 수제 샹그리아와 서양식 안주가 풍부합니다. 숍셰프(간판 빌리기) 영업 등도 진행하고 있습니다."
},
{ 
    name_jp: "SUPERMODEL", name_en: "SUPERMODEL", name_ko: "슈퍼모델 (SUPERMODEL)", type: "MIX", area: "東京", xId: "@supermodel0412", snsUrl: "https://x.com/supermodel0412", time: "20:00〜27:00,20:00~29:00", holiday: "火曜", address_jp: "東京都新宿区新宿2丁目-15-8中村建物ビル1階", address_en: "1F, Nakamura Bldg, 2-15-8 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 15-8 나카무라 건물 빌딩 1층", tags: ["カラオケ", "初心者多め", "喫煙可", "変わったリキュール有", "盛り上がる"], icon: "https://unavatar.io/twitter/supermodel0412", note: "https://note.com/412357siki/n/n9e27506c5d26", medium: "#",lastCheck: "2026-03", checkLevel: "thorough",
    description_jp: "百合の小道にあり、外国人も多い賑やかなお店。ゲイバーのようなノリでカラオケを楽しめます！",
    description_en: "A lively spot on Yuri Alley that attracts many international guests. Enjoy karaoke with an upbeat atmosphere similar to a gay bar!",
    description_ko: "백합의 오솔길에 위치하며 외국인도 많은 활기찬 가게. 게이바 같은 분위기 속에서 노래방을 즐길 수 있습니다!"
},
{ 
    name_jp: "うーたん", name_en: "U-tan", name_ko: "우탄 (U-tan)", type: "ビアン", area: "東京", xId: "@3oKOFLjgPthoJF6", snsUrl: "https://x.com/3oKOFLjgPthoJF6", time: "20:00〜26:00", holiday: "日曜,月曜", address_jp: "東京都新宿区新宿2丁目-16-3第三宏和ビル2階", address_en: "2F, Dai-san Kowa Bldg, 2-16-3 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 16-3 다이사쿠 코와 빌딩 2층", tags: ["カラオケ", "穏やか", "盛り上がる", "喫煙可", "お通し有"], icon: "https://unavatar.io/twitter/3oKOFLjgPthoJF6", note: "#", medium: "#",lastCheck: "2025", checkLevel: "thorough",
    description_jp: "※Xアカウント凍結中のため最新情報は要確認。コインロッカーがあるビルの2階。常連さんが多めですが、アットホームで盛り上がれるレズビアンバーです。",
    description_en: "※X account currently frozen; please verify latest info.On the 2nd floor of a building with coin lockers. While it has many regulars, it's a very welcoming and fun lesbian bar.",
    description_ko: "※X 계정 동결 중이므로 최신 정보는 재확인 필요. 코인라커가 있는 빌딩의 2층. 단골 손님이 많은 편이지만, 아늑하고 흥겨운 레즈비언 바입니다."
},
{ 
    name_jp: "バー絆", name_en: "Bar Kizuna", name_ko: "바 키즈나 (Bar Kizuna)", type: "ビアン", area: "東京", xId: "@kizunamio", snsUrl: "https://x.com/kizunamio", time: "19:00〜23:00", holiday: "月曜,火曜,木曜", address_jp: "東京都新宿区新宿2丁目-16-3第三宏和ビル3階", address_en: "3F, Dai-san Kowa Bldg, 2-16-3 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 16-3 다이사쿠 코와 빌딩 3층", tags: ["年齢層高め","穏やか",], icon: "https://unavatar.io/twitter/kizunamio", note: "#", medium: "#",
    description_jp: "大きな駐車場近くのビル3階。年齢層は高めで、ゆっくりお酒を楽しみたい時に最適な老舗です。",
    description_en: "Located on the 3rd floor near the large parking lot. An established bar with an older clientele, ideal for when you want to drink peacefully.",
    description_ko: "큰 주차장 근처 빌딩 3층. 연령층이 높은 편이며, 조용히 술을 즐기고 싶을 때 최적의 노포입니다."
},
{ 
    name_jp: "バーSTELLA", name_en: "Bar STELLA", name_ko: "바 스텔라 (Bar STELLA)", type: "MIX", area: "東京", xId: "@bar_lunastella", snsUrl: "https://x.com/bar_lunastella", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-10-3ユニビル3階", address_en: "3F, Uni-Bldg, 2-10-3 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 10-3 유니 빌딩 3층", tags: ["イベント多い","カラオケ",], icon: "https://unavatar.io/twitter/bar_lunastella", note: "#", medium: "#",
    description_jp: "お寺の近く、ビルの3階にあるお店。カラオケがありXで営業見るより行ってみた方が早いです。更新されてない。",
    description_en: "Near a temple, 3F. Karaoke available. X account is outdated—better to visit in person to check if open.",
    description_ko: "사찰 근처, 건물 3층. 가라오케 있음. X(트위터) Update가 안 되어 있어 직접 방문해 확인하는 편이 빠름."
},
{ 
    name_jp: "TAMAGO", name_en: "TAMAGO", name_ko: "타마고 (TAMAGO)", type: "MIX", area: "東京", xId: "@TAMAGO_BAR", snsUrl: "https://x.com/TAMAGO_BAR", time: "21:00〜26:00", holiday: "月曜", address_jp: "東京都新宿区新宿2丁目", address_en: "2-chome, Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메", tags: ["カラオケ", "喫煙可", "穏やか", "年齢層高め", "盛り上がる"], icon: "https://unavatar.io/twitter/TAMAGO_BAR", note: "#", medium: "#",lastCheck: "2024", checkLevel: "thorough",
    description_jp: "女性向けカプセルホテル近くの、レズビアンバーからMIXバーになったお店。カラオケもあり落ち着いて楽しめます。",
    description_en: "Formerly a lesbian bar, now a MIX bar located near the women's capsule hotel. Karaoke available in a relaxed setting.",
    description_ko: "여성 전용 캡슐호텔 근처에 위치, 레즈비언 바에서 MIX바로 바뀐 가게. 노래방도 있어 차분하게 즐기실 수 있습니다."
},
{ 
    name_jp: "DIAMOND HOLIC", name_en: "DIAMOND HOLIC", name_ko: "다이아몬드 홀릭 (DIAMOND HOLIC)", type: "ビアン", area: "東京", xId: "@DIAMOND_HOLIC", snsUrl: "https://x.com/DIAMOND_HOLIC", time: "19:00〜23:30,19:00~5:00", holiday: "月曜", address_jp: "東京都新宿区新宿2丁目-18-8栗原ビル2階", address_en: "2F, Kurihara Bldg, 2-18-8 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-8 쿠리하라 빌딩 2층", tags: ["イベント多い","ノーチャージ","盛り上がる",], icon: "https://unavatar.io/twitter/DIAMOND_HOLIC", note: "#", medium: "#",lastCheck: "2026-08",checkLevel: "first",
    description_jp: "ノーチャージで楽しめるショットバースタイルのビアンバー。有名イベント「ダイヤモンドカッター」と一緒に楽しむのも最高！",
    description_en: "A shot-bar style lesbian bar with no cover charge. Perfect to visit alongside the famous 'Diamond Cutter' party events.",
    description_ko: "노 차지(입장료 없음)로 즐길 수 있는 숏바 스타일의 레즈비언 바. 유명 이벤트 '다이아몬드 커터'와 함께 즐기는 것도 최고!"
},
{ 
    name_jp: "SUNNY", name_en: "SUNNY", name_ko: "써니 (SUNNY)", type: "ビアン", area: "東京", xId: "@natsuyo32", snsUrl: "https://x.com/natsuyo32", time: "20:00〜5:00,19:00~5:00", holiday: "日曜,月曜", address_jp: "東京都新宿区新宿2丁目-15-8中村建物ビル2階", address_en: "2F, Nakamura Bldg, 2-15-8 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 15-8 나카무라 건물 빌딩 2층", tags: ["年齢層高め","カラオケ",], icon: "https://unavatar.io/twitter/natsuyo32", note: "#", medium: "#",lastCheck: "2024",checkLevel: "first",
    description_jp: "百合の小道にある老舗。落ち着いた年齢層が多く、階段を登った先で大人の社会勉強ができる場所です。",
    description_en: "An established bar in Yuri Alley with an older crowd. Located up the stairs, it's a great place for some mature 'social education'.",
    description_ko: "백합의 오솔길에 있는 노포. 차분한 연령층이 많고, 계단을 올라간 곳에서 어른들의 사회 공부를 할 수 있는 장소입니다."
},
{ 
    name_jp: "MIMOSA", name_en: "MIMOSA", name_ko: "미모사 (MIMOSA)", type: "ビアン", area: "東京", xId: "@YuikaMimosa", snsUrl: "https://x.com/YuikaMimosa", time: "20:00〜23:00", holiday: "月曜,火曜", address_jp: "東京都新宿区新宿2丁目-18-10 1階", address_en: "1F, 2-18-10 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-10 1층", tags: ["年齢層高め","穏やか","変わったリキュール有",], icon: "https://unavatar.io/twitter/YuikaMimosa", note: "#", medium: "#",
    description_jp: "密集地帯の路地裏にひっそりと佇むお店。静かにまったり飲みたい時、変わったリキュールを楽しりたい時に最適。",
    description_en: "A hidden gem tucked away in a quiet alley. Perfect for a calm night or exploring their selection of unique liqueurs.",
    description_ko: "밀집 지역의 골목길에 가만히 자리 잡은 가게. 조용하고 느긋하게 한잔하고 싶을 때, 이색적인 리큐르를 즐기고 싶을 때 최적입니다."
},
{ 
    name_jp: "HUNEY BUNNY", name_en: "HUNEY BUNNY", name_ko: "허니 바니 (HUNEY BUNNY)", type: "ビアン", area: "東京", xId: "@HUNEY_BUNNY8282", snsUrl: "https://x.com/HUNEY_BUNNY8282", time: "21:00〜4:00", holiday: "日曜,月曜", address_jp: "東京都新宿区新宿2丁目-12-11林ビルB1", address_en: "B1, Hayashi Bldg, 2-12-11 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-11 하야시 빌딩 B1", tags: ["カラオケ", "喫煙可", "穏やか", "年齢層高め", "フード有", "お通し有", "盛り上がる"], icon: "https://unavatar.io/twitter/HONEY_BUNNY8282", note: "#", medium: "#",lastCheck: "2025", checkLevel: "thorough",
    description_jp: "GFビルの地下にある老舗。広いカウンターやボックス席があり、カラオケやWi-Fi、本格的なおつまみも充実しています。",
    description_en: "An established bar on B1F of the GF building. Features a large counter and booths, plus karaoke, Wi-Fi, and a solid food menu.",
    description_ko: "GF빌딩 지하에 있는 노포. 넓은 바 테이블과 부스석이 있으며 노래방, Wi-Fi, 본격적인 안주류도 충실히 준비되어 있습니다."
},
{ 
    name_jp: "パンドラ", name_en: "Pandora", name_ko: "판도라 (Pandora)", type: "MIX", area: "東京", xId: "@_pandora_2017", snsUrl: "https://x.com/_pandora_2017", time: "22:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-12-16セントフォービル201", address_en: "201, St. Four Bldg, 2-12-16 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-16 세인트 포 빌딩 201", tags: ["カラオケ", "喫煙可", "穏やか", "盛り上がる", "ボトルキープ有", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/_pandora_2017", note: "#", medium: "#",lastCheck: "2025",checkLevel: "first",
    description_jp: "ビルの2階（階段推奨）。お通しテキーラが出てくるなど、ビアンバーとはまた違った刺激的な世界を味わえるお店です。",
    description_en: "On the 2nd floor (stairs recommended). Known for 'Otoshi Tequila,' it offers a thrilling experience different from typical lesbian bars.",
    description_ko: "빌딩 2층(계단 이용 권장). 오토시(기본 안주)로 데킬라가 나오는 등, 레즈비언 바와는 또 다른 자극적인 세계를 맛볼 수 있는 가게입니다."
},
{ 
    name_jp: "YOTTA", name_en: "YOTTA", name_ko: "요타 (YOTTA)", type: "MIX", area: "東京", xId: "@YOTTA0701", snsUrl: "https://x.com/YOTTA0701", time: "20:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-11-11近藤ビル201", address_en: "201, Kondo Bldg, 2-11-11 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 11-11 콘도 빌딩 201", tags: ["カラオケ","ボトルキープ有","盛り上がる","喫煙可",], icon: "https://unavatar.io/twitter/YOTTA0701", note: "#", medium: "#",
    description_jp: "少し隠れた場所にある、カラオケと喫煙OKなお店。1階奥の階段からどうぞ。SNSでのハッシュタグ使いも独特です。",
    description_en: "A slightly hidden spot with karaoke and smoking allowed. Use the stairs at the end of the 1st-floor hallway. They have a unique social media style.",
    description_ko: "약간 숨겨진 장소에 있는, 노래방과 흡연이 가능한 가게. 1층 안쪽 계단으로 올라가세요. SNS 해시태그 사용법도 독특합니다."
},
{ 
    name_jp: "BAR Nico", name_en: "BAR Nico", name_ko: "바 니코 (BAR Nico)", type: "MIX", area: "東京", xId: "@BarNico0627", snsUrl: "https://x.com/BarNico0627", time: "20:00〜5:00,20:00~8:00", holiday: "不定休", address_jp: "東京都新宿区新宿1丁目-36-3新宿御苑136ビル2階", address_en: "2F, Shinjuku Gyoen 136 Bldg, 1-36-3 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 1초메 36-3 신주쿠 교엔 136 빌딩 2층", tags: ["カラオケ","ボトルキープ有","喫煙可","盛り上がる",], icon: "https://unavatar.io/twitter/BarNico0627", note: "#", medium: "#",lastCheck: "2026-07",checkLevel: "first",
    description_jp: "新宿一丁目のビルにあるMIXバー。カラオケやダーツが楽しめ、朝まで賑やかに過ごせます。",
    description_en: "A MIX bar in an Ic-chome building. You can enjoy karaoke and darts in a lively atmosphere until early morning.",
    description_ko: "신주쿠 1초메 빌딩에 있는 MIX 바. 노래방과 다트를 즐기며 아침까지 활기차게 보낼 수 있습니다."
},
{ 
    name_jp: "Lily and", name_en: "Lily and", name_ko: "릴리 앤 (Lily and)", type: "MIX", area: "東京", xId: "@lilyand2mixbar", snsUrl: "https://x.com/lilyand2mixbar", time: "18:00〜23:00,20:00~26:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目 12-15山原ハイツ401", address_en: "401, Yamahara Heights, 2-12-15 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 12-15 야마하라 하이츠 401", tags: ["カラオケ","喫煙可","変わったリキュール有","フード有",], icon: "https://unavatar.io/twitter/lilyand2mixbar", note: "#", medium: "#",lastCheck: "2026-01",checkLevel: "first",
    description_jp: "レズビアンのお客さんも多いMIXバー。果実酒が豊富で、仲通りから少し入ったエレベーターから上がれます。",
    description_en: "A MIX bar popular with lesbian customers. Offers a wide variety of fruit liqueurs. The elevator entrance is just off Naka-dori.",
    description_ko: "레즈비언 손님도 많은 MIX 바. 과실주가 다양하며, 나카도리(산책로)에서 살짝 들어간 곳의 엘리베이터를 타고 올라갈 수 있습니다."
},
{ 
    name_jp: "bar belle by あじゃり", name_en: "Bar Belle", name_ko: "바 벨 (Bar Belle)", type: "ビアン", area: "東京", xId: "@barbelless", snsUrl: "https://x.com/barbelless", time: "21:00〜5:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-15-14パンチョスタワー4F", address_en: "4F, Panchos Tower, 2-15-14 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 15-14 판초스 타워 4F", tags: ["カラオケ", "喫煙可", "フード有", "イベント多い", "穏やか"], icon: "https://unavatar.io/twitter/barbelless", note: "#", medium: "#",lastCheck: "2025",checkLevel: "first",
    description_jp: "特徴的な外装のビル4階。白基調の綺麗な店内で、コの字カウンターが特徴。勇気を出して奥のエレベーターへ！",
    description_en: "On the 4th floor of a unique-looking building. Features a beautiful white-themed interior with a U-shaped counter. Be brave and head to the back elevator!",
    description_ko: "독특한 외관의 빌딩 4층. 화이트톤의 깔끔한 실내에 'ㄷ'자형 바 테이블이 특징입니다. 용기를 내어 안쪽 엘리베이터로!"
},
{ 
    name_jp: "BELLUS", name_en: "BELLUS", name_ko: "벨루스 (BELLUS)", type: "MIX", area: "東京", xId: "@BELLUS2023", snsUrl: "https://x.com/BELLUS2023", time: "21:00〜27:00", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-18-10", address_en: "2-18-10 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-10", tags: ["カラオケ", "変わったリキュール有", "穏やか", "持ち込み食べ物可"], icon: "https://unavatar.io/twitter/BELLUS2023", note: "https://note.com/preview/n8853dc3b402e?prev_access_key=d58ce14161c199e722a1d6f22c5e6c50", medium: "#",lastCheck: "2026-01", checkLevel: "thorough",
    description_jp: "駐車場前の超コンパクトなお店。カウンター数席のみの密な空間で、まったりカラオケも楽しめます。",
    description_en: "A super-compact bar in front of the parking lot. A cozy space with just a few counter seats where you can enjoy karaoke.",
    description_ko: "주차장 앞의 초아담한 가게. 바 테이블 몇 자리뿐인 아늑한 공간에서 느긋하게 노래방도 즐기실 수 있습니다."
},
{ 
    name_jp: "香まり", name_en: "Kamari", name_ko: "카마리 (Kamari)", type: "MIX", area: "東京", xId: "@sexual_mix", snsUrl: "https://x.com/sexual_mix", time: "19:30〜", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-18-10新千鳥街1F", address_en: "1F, Shin-Chidorigai, 2-18-10 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 18-10 신치도리가이 1F", tags: ["喫煙可","年齢層高め","穏やか",], icon: "https://unavatar.io/twitter/sexual_mix", note: "#", medium: "#",
    description_jp: "新千鳥街1階にある、カウンターのみのMIXバー。年齢層は高めで、落ち着いて社会勉強ができる雰囲気です。",
    description_en: "A counter-only MIX bar on the 1st floor of Shin-Chidorigai. Attracts an older crowd; a great place for some quiet 'social education'.",
    description_ko: "신치도리가이 1층에 있는, 바 테이블만 있는 MIX 바. 연령층이 높은 편이며, 차분하게 사회 공부를 할 수 있는 분위기입니다."
},
{ 
    name_jp: "QUEEN TOKYO", name_en: "QUEEN TOKYO", name_ko: "퀸 도쿄 (QUEEN TOKYO)", type: "MIX", area: "東京", xId: "Instagramのみ", snsUrl: "https://www.instagram.com/queentokyobar", time: "18:00〜26:30", holiday: "不定休", address_jp: "東京都新宿区新宿2丁目-11-7-108", address_en: "108, 2-11-7 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 11-7-108", tags: ["喫煙可", "カラオケ", "盛り上がる","外国人多い","ノーチャージ","英語対応", "持ち込み食べ物可", "初心者多い"], icon: "instagram", note: "#", medium: "#",
    description_jp: "KING系列の外国人向けバー。ノーチャージでカラオケもあり、グローバルな雰囲気が漂う週末を過ごせます。",
    description_en: "A KING-series bar designed for international guests. No cover charge and karaoke available—perfect for a global weekend vibe.",
    description_ko: "KING계열의 외국인 전용 바. 노 차지(입장료 없음)에 노래방도 있어 글로벌한 분위기가 감도는 주말을 보낼 수 있습니다."
}, 
{ 
    name_jp: "723", name_en: "723", name_ko: "723", type: "ビアン", area: "東京", xId: "@723723_____", snsUrl: "https://x.com/723723_____", time: "25:30〜6:00,25:30~8:00", holiday: "日曜,月曜,水曜,木曜", address_jp: "東京都新宿区新宿2丁目 15-8", address_en: "2-15-8 Shinjuku, Tokyo", address_ko: "도쿄도 신주쿠구 신주쿠 2초메 15-8", tags: ["間借り", "穏やか", "変わったリキュール有", "持ち込み食べ物可", "喫煙可"], icon: "https://unavatar.io/twitter/723723_____", note: "#", medium: "#",lastCheck: "2026-07",checkLevel: "first",
    description_jp: "百合の小道の曇りガラスのお店。阿舎利さんの間借り営業のレズビアンバー",
    description_en: "A lesbian bar with frosted glass windows, hidden along Yuri no Komichi (Lily Lane). Operating as a pop-up night by Ajari.",
    description_ko: "백합의 오솔길에 있는 불투명 유리로 된 가게. 아자리(阿舎利) 씨가 숍셰프(간판 빌리기)로 영업하는 레즈비언 바."
},
{ 
    name_jp: "bar空 urue", name_en: "bar urue", name_ko: "바 소라 urue (bar空 urue)", type: "ビアン", area: "東京", xId: "@urueaya", snsUrl: "https://x.com/urueaya", time: "19:00〜23:00", holiday: "水曜、木曜", address_jp: "東京都豊島区池袋2-61-15 1階", address_en: "1F, 2-61-15 Ikebukuro, Toshima-ku, Tokyo", address_ko: "도쿄도 도시마구 이케부쿠로 2-61-15 1층", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/urueaya", note: "#", medium: "#",lastCheck: "2025",checkLevel: "first",
    description_jp: "未訪問、現在調査中訪問次第載せます。料理をツイートしてる店。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다. 요리를 트윗하는 가게."
},
{ 
    name_jp: "呑み処 ゆり", name_en: "nomidokoro yuri", name_ko: "노미도코로 유리 (呑み処 ゆり)", type: "ビアン", area: "東京", xId: "@womanonly_yuri", snsUrl: "https://x.com/womanonly_yuri", time: "19:00〜25:00、19:00~29:00", holiday: "月曜", address_jp: "東京都豊島区池袋2-12-14 第８前島ビル201", address_en: "#201 Dai-8 Maejima Bldg, 2-12-14 Ikebukuro, Toshima-ku, Tokyo", address_ko: "도쿄도 도시마구 이케부쿠로 2-12-14 제8 마에지마 빌딩 201", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/womanonly_yuri", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{
    name_jp: "cafe & bar hinata.", name_en: "cafe & bar hinata.", name_ko: "카페 & 바 히나타 (cafe & bar hinata.)", type: "ビアン", area: "東京", xId: "@hinata_im", snsUrl: "https://x.com/hinata_im", time: "15:00〜23:00", holiday: "火曜、不定休", address_jp: "東京都豊島区池袋一丁目1番4号第Ⅲ絆ビル502号室", address_en: "Dai-3 Kizuna Building #502, 1-1-4 Ikebukuro, Toshima-ku, Tokyo", address_ko: "도쿄도 도시마구 이케부쿠로 1초메 1-4 제3 키즈나 빌딩 502호실", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/hinata_im", note: "#", medium: "#",
    description_jp: "未訪問、ビアンバーではないですが身体的女性のみ来店可能なお店です。",
    description_en: "Unvisited. Open to all women (Not a lesbian bar). No cross-dressing/male entry.",
    description_ko: "미방문. 레즈비언 바는 아니지만 신체적 여성만 입장 가능한 가게입니다."
},
{ 
    name_jp: "barあんたの居場所。", name_en: "bar antanoibasho", name_ko: "바 안타노 이바쇼 (barあんたの居場所。)", type: "ビアン", area: "東京", xId: "@antanoibasho", snsUrl: "https://x.com/antanoibasho", time: "20:00〜27:00", holiday: "日曜", address_jp: "東京都港区赤坂3-21-17 ASK赤坂ビル6階", address_en: "6F ASK Akasaka Bldg, 3-21-17 Akasaka, Minato-ku, Tokyo", address_ko: "도쿄도 미나토구 아카사카 3-21-17 ASK 아카사카 빌딩 6층", tags: ["初心者向け", "穏やか", "カラオケ"], icon: "https://unavatar.io/twitter/antanoibasho", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。ドラマのロケ地にも使用された店",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다. 드라마 촬영지로도 사용된 가게."
},
{ 
    name_jp: "渋谷501", name_en: "shibuya501", name_ko: "시부야 501 (渋谷501)", type: "ビアン", area: "東京", xId: "@shibuya501", snsUrl: "https://x.com/shibuya501", time: "18:00〜24:00,19:00~24:00", holiday: "不定休", address_jp: "東京都渋谷区宇田川町41-31 ユニデン渋谷ビル 5階", address_en: "5F Uniden Shibuya Bldg, 41-31 Udagawacho, Shibuya-ku, Tokyo", address_ko: "도쿄도 시부야구 우다가와초 41-31 유니덴 시부야 빌딩 5층", tags: ["初心者向け", "穏やか", "イベント多い"], icon: "https://unavatar.io/twitter/shibuya501", note: "#", medium: "#",lastCheck: "2025",checkLevel: "first",
    description_jp: "未訪問、現在調査中訪問次第載せます。オフ会が多い店",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다. 오프회(모임)가 많은 가게."
},
{ 
    name_jp: "bar belle GINZA", name_en: "Bar Belle", name_ko: "바 벨 긴자 (bar belle GINZA)", type: "MIX", area: "東京", xId: "@barbelleGINZA", snsUrl: "https://x.com/barbelleGINZA", time: "20:00〜4:00", holiday: "土曜、日曜", address_jp: "東京都中央区銀座6-8-6 木の実ビル2階", address_en: "2F, kinomiBldg, 6-8-6 Chuo-ku, Tokyo", address_ko: "도쿄도 주오구 긴자 6-8-6 키노미 빌딩 2층", tags: ["穏やか"], icon: "https://unavatar.io/twitter/barbelleGINZA", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "RANDOM", name_en: "RANDOM", name_ko: "랜덤 (RANDOM)", type: "MIX", area: "東京", xId: "@randommachida", snsUrl: "https://x.com/randommachida", time: "19:00〜23:30", holiday: "日曜", address_jp: "東京都町田市中町1-18-2 ウッドベルビル2F", address_en: "Wood Bell Building 2F, 1-18-2 Nakamachi, Machida-shi, Tokyo", address_ko: "도쿄도 마치다시 나카마치 1-18-2 우드 벨 빌딩 2F", tags: ["喫煙可", "カラオケ"], icon: "https://unavatar.io/twitter/randommachida", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
}, 
{ 
    name_jp: "BAR REHOPE", name_en: "BAR REHOPE", name_ko: "바 리호프 (BAR REHOPE)", type: "MIX", area: "東京", xId: "@rehope2025", snsUrl: "https://x.com/rehope2025", time: "17:00〜23:00", holiday: "水曜", address_jp: "神奈川県横浜市中区尾上町5-80神奈川中小企業センタービル地下1階", address_en: "Kanagawa Small and Medium Enterprises Center Building B1F, 5-80 Onoe-cho, Naka-ku, Yokohama-shi, Kanagawa", address_ko: "가나가와현 요코하마시 나카구 오노에초 5-80 가나가와 중소기업 센터 빌딩 지하 1층", tags: ["穏やか"], icon: "https://unavatar.io/twitter/rehope2025", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "NIKO POCKET", name_en: "NIKO POCKET", name_ko: "니코 포켓 (NIKO POCKET)", type: "MIX", area: "名古屋", xId: "@nikopocket", snsUrl: "https://x.com/nikopocket", time: "20:00~Last", holiday: "不定休", address_jp: "愛知県名古屋市中区栄4-13-10 名北ライオンビルB2", address_en: "Meihoku Lion Building B2, 4-13-10 Sakae, Naka-ku, Nagoya-shi, Aichi", address_ko: "아이치현 나고야시 나카구 사카에 4-13-10 메이호쿠 라이온 빌딩 B2", tags: [ "穏やか","フード有","カラオケ有" ,"盛り上がる"], icon: "https://unavatar.io/twitter/nikopocket", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "Candy Strap", name_en: "Candy Strap", name_ko: "캔디 스트랩 (Candy Strap)", type: "ビアン", area: "名古屋", xId: "@candy_strap", snsUrl: "https://x.com/candy_strap", time: "19:00~Last", holiday: "不定休", address_jp: "愛知県名古屋市中区栄5-6-4 栄能楽ビル３階", address_en: "Sakae Nōgaku Building 3F, 5-6-4 Sakae, Naka-ku, Nagoya-shi, Aichi", address_ko: "아이치현 나고야시 나카구 사카에 5-6-4 사카에 노가쿠 빌딩 3층", tags: [ "フード有" ,"穏やか"], icon: "https://unavatar.io/twitter/candy_strap", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "warm", name_en: "warm", name_ko: "웜 (warm)", type: "ビアン", area: "名古屋", xId: "@T8ceRKoGfb91542", snsUrl: "https://x.com/T8ceRKoGfb91542", time: "21:00~25:30,20:00~27:00,19:00~26:00", holiday: "月曜,火曜,水曜,木曜", address_jp: "愛知県名古屋市中区栄4-6-18 パールプラザビル402号", address_en: "Pearl Plaza Building #402, 4-6-18 Sakae, Naka-ku, Nagoya-shi, Aichi", address_ko: "아이치현 나고야시 나카구 사카에 4-6-18 펄 프라자 빌딩 402호", tags: [ "穏やか","変わったリキュールある"], icon: "https://unavatar.io/twitter/T8ceRKoGfb91542", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "W", name_en: "W", name_ko: "W", type: "MIX", area: "名古屋", xId: "@Belle2221206", snsUrl: "https://x.com/belle2221206", time: "22:00~last", holiday: "日曜,祝日", address_jp: "愛知県名古屋市中区錦3-12-5常楽ビル3階", address_en:"Jōraku Building 3F, 3-12-5 Nishiki, Naka-ku, Nagoya-shi, Aichi", address_ko: "아이치현 나고야시 나카구 니시키 3-12-5 조라쿠 빌딩 3층", tags: [ "穏やか",], icon: "https://unavatar.io/twitter/belle2221206", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "SENRI", name_en: "SENRI", name_ko: "센리 (SENRI)", type: "MIX", area: "名古屋", xId: "websiteのみ", snsUrl: "https://w-lesbian-bar.com/lesbian-bar-senri/", time: "22:00~Last", holiday: "水曜", address_jp: "名古屋市中区栄4-11-16ウォークライオンビル7F", address_en: "Walk Lion Building 7F, 4-11-16 Sakae, Naka-ku, Nagoya-shi, Aichi", address_ko: "나고야시 나카구 사카에 4-11-16 워크 라이온 빌딩 7F", tags: [ "穏やか"], icon: "website", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "SHORTBUS", name_en: "SHORTBUS", name_ko: "숏버스 (SHORTBUS)", type: "MIX", area: "名古屋", xId: "@SHORTBUS_0922", snsUrl: "https://x.com/SHORTBUS_0922", time: "19:00〜1:00", holiday: "火曜、不定休", address_jp: "愛知県名古屋市中区栄4-20-24池田パークビル5F", address_en: "Ikeda Park Building 5F, 4-20-24 Sakae, Naka-ku, Nagoya-shi, Aichi", address_ko: "아이치현 나고야시 나카구 사카에 4-20-24 이케다 파크 빌딩 5F", tags: [ "穏やか", ], icon: "https://unavatar.io/twitter/SHORTBUS_0922", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "酒と肴やぶれ", name_en: "Yabure", name_ko: "사케토 사카나 야부레 (酒と肴やぶれ)", type: "ビアン", area: "西日本", xId: "@yabure1911", snsUrl: "https://x.com/yabure1911", time: "17:00〜23:00,17:00~24:00", holiday: "不定休", address_jp: "福岡県福岡市中央区今泉1-23-4 REMIX天神2F", address_en: "2F REMIX Tenjin, 1-23-4 Imaizumi, Chuo-ku, Fukuoka-shi, Fukuoka", address_ko: "후쿠오카현 후쿠오카시 주오구 이마이즈미 1-23-4 REMIX 텐진 2F", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/yabure1911", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "cafebar YOLO", name_en: "cafebar YOLO", name_ko: "카페바 YOLO (cafebar YOLO)", type: "ビアン", area: "西日本", xId: "@cafebarYOLO", snsUrl: "https://x.com/cafebarYOLO", time: "20:00〜27:00", holiday: "火曜、水曜、木曜", address_jp: "福岡県福岡市中央区今泉1-21-5 アデッソ今泉4F", address_en: "4F Adesso Imaizumi, 1-21-5 Imaizumi, Chuo-ku, Fukuoka-shi, Fukuoka", address_ko: "후쿠오카현 후쿠오카시 주오구 이마이즈미 1-21-5 아데소 이마이즈미 4F", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/cafebarYOLO", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
}, 
{ 
    name_jp: "LOL101", name_en: "LOL101", name_ko: "LOL101", type: "ビアン", area: "西日本", xId: "@barlol101", snsUrl: "https://x.com/barlol101", time: "19:00〜26:00", holiday: "不定休", address_jp: "福岡県福岡市中央区天神2-4-20 天神プラッサ地下1F", address_en: "B1F Tenjin Plassa, 2-4-20 Tenjin, Chuo-ku, Fukuoka-shi, Fukuoka", address_ko: "후쿠오카현 후쿠오카시 주오구 텐진 2-4-20 텐진 프라사 지하 1F", tags: ["初心者向け", "穏やか", "フード有"], icon: "https://unavatar.io/twitter/barlol101", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "bar ajisai", name_en: "bar ajisai", name_ko: "바 아지사이 (bar ajisai)", type: "ビアン", area: "西日本", xId: "@bar_ajisai", snsUrl: "https://x.com/bar_ajisai", time: "17:30〜2:30", holiday: "月曜、不定休", address_jp: "香川県高松市古馬場町8-48 AKビルⅧ 2階南", address_en: "AK Bldg VIII 2F-South, 8-48 Furubaba-cho, Takamatsu-shi, Kagawa", address_ko: "가가와현 다카마쓰시 후루바바초 8-48 AK 빌딩 VIII 2층 남쪽", tags: [ "穏やか", ], icon: "https://unavatar.io/twitter/bar_ajisai", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "MIXBAR LOOP", name_en: "MIXBAR LOOP", name_ko: "믹스바 LOOP (MIXBAR LOOP)", type: "MIX", area: "西日本", xId: "@okatyama_LOOP", snsUrl: "https://x.com/okayama_LOOP", time: "20:00〜2:00", holiday: "日曜、不定休", address_jp: "岡山県岡山市北区表町3-6-15 ほろよいマンション3F", address_en: "Horoyoi Mansion 3F, 3-6-15 Omotechō, Kita-ku, Okayama-shi, Okayama", address_ko: "오카야마현 오카야마시 기타구 오모테초 3-6-15 호로요이 맨션 3F", tags: [ "穏やか","不定期オープン","間借り","フード有" ], icon: "https://unavatar.io/twitter/okayama_LOOP", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。月一でレズビアンバーデイが有る所です。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!)This is a MIX bar that hosts a monthly Lesbian-only night. Check SNS for dates!.",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다. 한 달에 한 번 레즈비언 바 데이가 있는 곳입니다."
}, 
{ 
    name_jp: "753(なごみ)", name_en: "753(nagomi)", name_ko: "753 (나고미)", type: "ビアン", area: "西日本", xId: "@nagomi_4649", snsUrl: "https://x.com/nagomi_4649", time: "19:00〜24:00", holiday: "不定期", address_jp: "広島県広島市中区本通り9-21静嘉棟ビル2階", address_en: "Seikatō Building 2F, 9-21 Hondōri, Naka-ku, Hiroshima-shi, Hiroshima", address_ko: "히로시마현 히로시마시 나카구 혼도리 9-21 세이카토 빌딩 2층", tags: [ "穏やか","不定期オープン","間借り", ], icon: "https://unavatar.io/twitter/nagomi_4649", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。月一回のレズビアンバー",
    description_en: "Coming soon! (I haven't visited yet, but planning to!)This is a MIX bar that hosts a monthly Lesbian-only night. Check SNS for dates!.",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다. 한 달에 한 번 열리는 레즈비언 바."
},
{ 
    name_jp: "BAR WHITE", name_en: "BAR WHITE", name_ko: "바 화이트 (BAR WHITE)", type: "ビアン", area: "西日本", xId: "instagramのみ", snsUrl: "https://www.instagram.com/bar_white88", time: "20:00〜last", holiday: "確認中", address_jp: "熊本県熊本市中央区南坪井町2-20歩小路ﾋﾞﾙ3F(上乃裏)⁡⁡⁡", address_en: "Arukōji Building 3F, 2-20 Minamitsuboi-machi, Chūō-ku, Kumamoto-shi, Kumamoto (Kaminoura)", address_ko: "구마모토현 구마모토시 주오구 미나미쓰보이마치 2-20 아루코지 빌딩 3F (가미노우라)", tags: [ "穏やか", ], icon: "instagram", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "RELAX", name_en: "RELAX", name_ko: "릴랙스 (RELAX)", type: "MIX", area: "西日本", xId: "@RELAX_0115", snsUrl: "https://x.com/RELAX_0115", time: "20:00〜3:00", holiday: "月曜、不定休", address_jp: "沖縄県那覇市牧志3-8-1 2F", address_en: "2F, 3-8-1 Makishi, Naha-shi, Okinawa", address_ko: "오키나와현 나하시 마키시 3-8-1 2F", tags: [ "穏やか", ], icon: "https://unavatar.io/twitter/RELAX_0115", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
{ 
    name_jp: "SOLTIS", name_en: "SOLTIS", name_ko: "솔티스 (SOLTIS)", type: "ビアン", area: "西日本", xId: "instagramのみ", snsUrl: "https://www.instagram.com/soltis_okinawa", time: "20:00〜2:00,20:00~3:00", holiday: "日曜,月曜", address_jp: "沖縄県那覇市東町4-14イーストタウンビル 7階", address_en: "East Town Building 7F, 4-14 Higashimachi, Naha-shi, Okinawa", address_ko: "오키나와현 나하시 히가시마치 4-14 이스트 타운 빌딩 7층", tags: [ "穏やか", ], icon: "instagram", note: "#", medium: "#",
    description_jp: "未訪問、現在調査中訪問次第載せます。",
    description_en: "Coming soon! (I haven't visited yet, but planning to!).",
    description_ko: "미방문, 현재 조사 중. 방문하는 대로 업데이트하겠습니다."
},
]