export type SupportItem = {
    title: string;
    url: string;
    description: string;
    comment: string;
    tags?: string[]; // 'parent', 'senior', 'business', 'student', 'emergency'
    story?: { // The "Field Story" (Before/After)
        before: string;
        after: string;
    };
};

export type SupportCategory = {
    id: string;
    title: string;
    icon: string;
    description: string;
    items: SupportItem[];
};

export const supportData: SupportCategory[] = [
    {
        id: "safety",
        title: "【守る】安全・安心とセーフティネット",
        icon: "🛡",
        description: "防犯、虐待防止、人権擁護など、生命といのちを守るための相談窓口。",
        items: [
            {
                title: "警察本部・防犯アプリ「ナポリス」",
                url: "https://www.police.pref.nara.jp/",
                description: "最新の犯罪発生状況、地域安全マップ、防犯アプリ「ナポリス」の案内。",
                comment: "現場で培った知見を治安維持の最前線へ。不審者・詐欺情報はここで即時チェックを。",
                tags: ['senior', 'emergency', 'parent'],
                story: {
                    before: "深夜、無施錠の家から現金が盗まれる事件を何度も見てきました。被害者の「まさか自分が」という悲痛な声は忘れられません。",
                    after: "だからこそ、今すぐこの『防犯ポータル』で施錠の習慣化と最新情報を届けたい。犯罪は「知る」だけで防げるものが沢山あります。"
                }
            },
            {
                title: "子供・家庭の緊急相談（189・中央こども家庭相談センター）",
                url: "https://www.pref.nara.jp/1727.htm",
                description: "児童虐待通報(189)、子育ての不安、DV相談の総合窓口。",
                comment: "児相・警察連携システムは私の最重要政策です。SOSが出せない子供たちを、大人が守りましょう。",
                tags: ['parent', 'emergency', 'student'],
                story: {
                    before: "「泣き声がするけど、通報していいのかな...」近所の躊躇が、救えるはずの命を危険に晒すケースがありました。",
                    after: "迷わず「189」へ。あなたのその一本の電話が、警察と児相を動かし、確実に子供の命を守る「砦」となります。"
                }
            },
            {
                title: "ひとり親家庭支援（奈良県スマイルセンター）",
                url: "https://www.pref.nara.jp/item/140692.htm",
                description: "自立支援、貸付相談、就労サポートを一括提供。",
                comment: "一人で抱え込ませない。経済的・精神的な「親御さんの自立」を徹底して支えます。",
                tags: ['parent', 'business']
            },
            {
                title: "ひきこもり相談窓口（奈良モデル）",
                url: "https://www.pref.nara.jp/44860.htm",
                description: "臨床心理士による電話・来所相談、家族会情報。",
                comment: "居場所「あらんの家」や就労体験など、社会とつながる「最初の一歩」を制度で裏付けます。",
                tags: ['student', 'parent']
            },
            {
                title: "女性相談・DV相談プラス",
                url: "https://www.pref.nara.jp/45664.htm",
                description: "女性センター相談窓口、DV相談プラス(SNS/チャット対応)。",
                comment: "逃げることは恥ではありません。生活再建まで含めた「リスタート」を全力で守ります。",
                tags: ['emergency', 'parent']
            },
        ],
    },
    {
        id: "disaster",
        title: "【備える】防災・医療・インフラ",
        icon: "⛑",
        description: "災害への備え、救急医療、道路・河川などのインフラ情報。",
        items: [
            {
                title: "奈良県防災情報サイト（公式リンク集）",
                url: "https://www.pref.nara.jp/68322.htm",
                description: "気象、交通、河川、ライフラインなど、災害時に必要な全情報の公式リンク集。",
                comment: "災害時はまずここへ。必要な全ての情報への入り口がまとまっています。",
                tags: ['emergency', 'senior', 'parent', 'business']
            },
            {
                title: "奈良県防災ポータル（リアルタイム情報）",
                url: "https://www.bosai.pref.nara.jp/dis_portal/",
                description: "警報発令状況、避難所開設、ライブカメラなど、刻々と変わる状況をリアルタイムで確認。",
                comment: "「今、どこが危険か」が地図で分かります。避難判断の決定打となるサイトです。",
                tags: ['emergency', 'senior', 'parent']
            },
            {
                title: "奈良県河川情報システム",
                url: "http://www.kasen.pref.nara.jp/gispub/info/top/menu",
                description: "県内河川の水位、雨量情報、監視カメラ映像。",
                comment: "川の様子を見に行かないで。スマホで水位とカメラ映像を確認し、早めの避難判断を。",
                tags: ['emergency', 'business']
            },
            {
                title: "道路情報なら（県道規制情報）",
                url: "https://pref.nara.geocloud.jp/mp/10",
                description: "県管理道路の通行止め、規制情報のマップ表示。",
                comment: "災害時の避難ルート・物流確保に。通れる道、通れない道を地図上で一目で確認できます。",
                tags: ['emergency', 'business']
            },
            {
                title: "Yahoo!防災速報アプリ",
                url: "https://emg.yahoo.co.jp/",
                description: "自治体からの緊急情報をプッシュ通知で受信。マイ・タイムライン作成も。",
                comment: "情報は「待つ」のではなく「届く」時代へ。命を守る通知をオンにしてください。",
                tags: ['emergency', 'parent', 'student', 'senior']
            },
            {
                title: "医療（救急安心センター #7119）",
                url: "https://www.pref.nara.jp/53886.htm",
                description: "看護師・相談員による24時間救急相談（0744-20-0119）。",
                comment: "「救急車を呼ぶべきか？」迷った時のプロの判断。医療リソースを守るためにも適正利用を。",
                tags: ['emergency', 'senior', 'parent'],
                story: {
                    before: "軽症の利用で救急車が出払い、一刻を争う心停止の患者さんの元へ到着が遅れる。そんな悔しい現場を変えたい。",
                    after: "「#7119」への相談が、本当に救急車が必要な人の命を救います。迷ったらまずプロに相談してください。"
                }
            },
            {
                title: "こども救急電話相談（#8000）",
                url: "https://www.pref.nara.jp/44823.htm",
                description: "小児特有の急病対応。夜間・休日の相談窓口（0742-20-8119）。",
                comment: "夜中のお子さんの発熱、不安ですよね。専門家につながる安心を、全ての親御さんへ。",
                tags: ['emergency', 'parent']
            },
            {
                title: "道路緊急ダイヤル・県土マネジメント",
                url: "https://www.pref.nara.jp/12016.htm",
                description: "道路の異状通報、河川改修、インフラ老朽化対策。",
                comment: "踏切解消や道路環境改善の進捗を可視化します。安全な移動は、豊かな暮らしの土台です。",
                tags: ['business', 'senior']
            },
        ],
    },
    {
        id: "education",
        title: "【育む】子育て・教育・未来",
        icon: "🌱",
        description: "教育委員会、学校案内、青少年育成など、次世代の可能性を広げる情報。",
        items: [
            {
                title: "奈良県教育委員会（教職員採用・改革）",
                url: "https://www.pref.nara.jp/kyoiku/",
                description: "いじめ対策、ICT教育、教職員の働き方改革（育休取得促進）。",
                comment: "先生が疲弊していては良い教育はできません。男性職員の育休取得率向上など、働く環境から変えます。",
                tags: ['parent', 'student', 'business']
            },
            {
                title: "県立学校・高校入試情報",
                url: "https://www.pref.nara.jp/70181.htm",
                description: "入試日程、各県立高校の特色・部活動紹介。",
                comment: "「行きたい」と思える魅力ある学校づくり。専門高校のブランド化で選択肢を広げます。",
                tags: ['student', 'parent']
            },
            {
                title: "青少年野外活動・居場所づくり",
                url: "https://www.pref.nara.jp/37901.htm",
                description: "野外活動センター利用案内、青少年の居場所登録制度。",
                comment: "スマホの中だけでなく、リアルな体験と交流を。次世代リーダーは現場から生まれます。",
                tags: ['student', 'parent']
            },
        ],
    },
    {
        id: "economy",
        title: "【稼ぐ・楽しむ】経済・観光・暮らし",
        icon: "💰",
        description: "事業者支援、観光情報、ふるさと納税、雇用労働相談。",
        items: [
            {
                title: "産業振興・企業支援（地域産業振興センター）",
                url: "https://www.pref.nara.jp/1285.htm",
                description: "補助金、制度融資、下請取引適正化「かけこみ寺」。",
                comment: "地元企業の「稼ぐ力」を最大化します。補助金プラスアルファの実務支援をセットで。",
                tags: ['business']
            },
            {
                title: "雇用・労働（ならジョブカフェ・労働委員会）",
                url: "https://www.pref.nara.jp/1286.htm",
                description: "若者就職支援、労働紛争の「あっせん」・解決サポート。",
                comment: "不当な解雇や賃金トラブルは一人で戦わせません。公的な解決手段をフル活用してください。",
                tags: ['student', 'business']
            },
            {
                title: "農林水産業（大和野菜・ブランド認証）",
                url: "https://www.pref.nara.jp/1287.htm",
                description: "大和野菜、奈良の木、ブランド認証制度。",
                comment: "「大和当帰」や「奈良の木」など、奈良ブランドを世界へ。「食のハブ拠点」で農家を支えます。",
                tags: ['business']
            },
            {
                title: "景観資産・観光モデルコース",
                url: "https://www.pref.nara.jp/keikan_shisan/",
                description: "奈良県の景観資産登録地、周遊ルート案内。",
                comment: "奈良の風景は「資産」です。見て終わりではなく、滞在・周遊させる仕掛けで経済を回します。",
                tags: ['business', 'student']
            },
        ],
    },
    {
        id: "digital",
        title: "【変える】デジタル行政・利便性",
        icon: "📱",
        description: "電子申請、パスポート、免許更新、施設案内。",
        items: [
            {
                title: "奈良スーパーアプリ",
                url: "https://nsa.pref.nara.jp/ctztop/",
                description: "各種申請・届出のオンライン窓口。24時間受付。",
                comment: "デジタルランク全国上位の実力。役所に行かない、待たない、書かない行政を実現します。",
                tags: ['parent', 'business', 'senior']
            },
            {
                title: "パスポート申請のご案内",
                url: "https://www.pref.nara.jp/49261.htm",
                description: "申請手続き、窓口混雑状況、手数料。",
                comment: "需要の高い手続きこそデジタルで完結を。国際交流の架け橋となる皆様を応援します。",
                tags: ['student', 'business']
            },
            {
                title: "県立美術館・文化施設（駐車場情報）",
                url: "https://www.pref.nara.jp/63263.htm",
                description: "展示スケジュール、周辺駐車場（※料金改定情報あり）。",
                comment: "文化を楽しむには「足」の確保が不可欠。公共交通の利便性と、駐車場情報の透明化を進めます。",
                tags: ['senior', 'student', 'parent']
            },
            {
                title: "奈良県立図書情報館",
                url: "https://www.library.pref.nara.jp/",
                description: "蔵書検索、イベント情報、開館カレンダー。",
                comment: "知の拠点としての図書館。デジタルアーカイブとの連携で、いつでもどこでも「奈良」を学べる場へ。",
                tags: ['student', 'senior', 'parent']
            },
        ],
    },
];
