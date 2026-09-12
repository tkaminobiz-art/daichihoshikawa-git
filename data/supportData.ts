export type SupportItem = {
    title: string;
    url: string;
    description: string;
    tags?: string[];
};

export type SupportCategory = {
    id: string;
    title: string;
    description: string;
    items: SupportItem[];
};

export const supportData: SupportCategory[] = [
    {
        id: "safety",
        title: "防犯・相談窓口",
        description: "犯罪被害、児童虐待、DV、ひきこもり、生活上の困りごとに関する公的な相談先です。",
        items: [
            {
                title: "奈良県警察本部",
                url: "https://www.police.pref.nara.jp/",
                description: "犯罪発生情報、防犯対策、警察への相談窓口、防犯アプリ「ナポリス」の情報を確認できます。",
                tags: ["senior", "emergency", "parent"],
            },
            {
                title: "児童相談所虐待対応ダイヤル 189",
                url: "https://www.pref.nara.lg.jp/n058/1727.html",
                description: "児童虐待に関する通告や相談を受け付ける窓口です。緊急の場合は110番へ連絡してください。",
                tags: ["parent", "emergency", "student"],
            },
            {
                title: "奈良県スマイルセンター",
                url: "https://www.pref.nara.lg.jp/n051/62561.html",
                description: "ひとり親家庭などを対象に、手当、給付金、子育て、養育費、親子交流に関する相談を受け付けています。",
                tags: ["parent"],
            },
            {
                title: "奈良県ひきこもり相談窓口",
                url: "https://www.pref.nara.lg.jp/n056/44860.html",
                description: "ひきこもりに関する本人や家族からの電話相談、来所相談を受け付けています。",
                tags: ["student", "parent"],
            },
            {
                title: "女性相談・DV相談",
                url: "https://www.pref.nara.lg.jp/n053/45664.html",
                description: "配偶者や交際相手からの暴力、家庭や生活に関する悩みの相談窓口を案内しています。",
                tags: ["emergency", "parent"],
            },
            {
                title: "心身障害者扶養共済制度",
                url: "https://www.pref.nara.lg.jp/n064/29362.html",
                description: "障害のある方を扶養する保護者が加入し、保護者に万一のことがあった場合に年金を支給する制度です。",
                tags: ["parent", "senior"],
            },
            {
                title: "生活福祉資金貸付制度",
                url: "https://www.pref.nara.lg.jp/n063/43453.html",
                description: "低所得世帯、高齢者世帯、障害者世帯などを対象とする貸付制度です。相談と申請は市町村社会福祉協議会で受け付けています。",
                tags: ["senior", "parent"],
            },
        ],
    },
    {
        id: "disaster",
        title: "防災・医療・道路",
        description: "災害、河川、道路、救急医療、医療費助成に関する公式情報です。",
        items: [
            {
                title: "奈良県防災情報サイト",
                url: "https://www.pref.nara.lg.jp/n010/68322.html",
                description: "気象、避難、交通、河川、ライフラインに関する奈良県の防災情報を案内しています。",
                tags: ["emergency", "senior", "parent", "business"],
            },
            {
                title: "奈良県防災ポータル",
                url: "https://www.bosai.pref.nara.jp/dis_portal/",
                description: "警報、避難情報、避難所の開設状況など、災害時の情報を確認できます。",
                tags: ["emergency", "senior", "parent"],
            },
            {
                title: "奈良県河川情報システム",
                url: "http://www.kasen.pref.nara.jp/gispub/info/top/menu",
                description: "県内河川の水位、雨量、河川カメラの情報を確認できます。",
                tags: ["emergency", "business"],
            },
            {
                title: "奈良県の道路交通情報",
                url: "https://www.pref.nara.lg.jp/n136/p133000.html",
                description: "県管理道路の規制情報や、道路交通情報を確認するための公式サービスを案内しています。",
                tags: ["emergency", "business"],
            },
            {
                title: "がんネットなら",
                url: "https://www.pref.nara.lg.jp/site/gannet/index.html",
                description: "がん検診、県内の医療機関、相談窓口、患者サロンなどを案内しています。",
                tags: ["senior", "parent"],
            },
            {
                title: "指定難病医療費助成制度",
                url: "https://www.pref.nara.lg.jp/n084/5264.html",
                description: "指定難病の患者で、認定基準などを満たす方を対象とする医療費助成制度です。",
                tags: ["senior", "parent"],
            },
            {
                title: "小児慢性特定疾病医療費助成制度",
                url: "https://www.pref.nara.lg.jp/n084/38190.html",
                description: "対象となる疾病や認定基準などを満たす児童を対象とする医療費助成制度です。",
                tags: ["parent"],
            },
            {
                title: "奈良県ナースセンター",
                url: "https://www.nara-kango.or.jp/nurse_center.php",
                description: "看護職の無料職業紹介、復職支援、進路相談などを行っています。",
                tags: ["business", "student"],
            },
            {
                title: "奈良県救急安心センター #7119",
                url: "https://www.pref.nara.lg.jp/n081/53886.html",
                description: "救急車を呼ぶか、医療機関を受診するか迷ったときに、看護師や相談員へ電話で相談できます。緊急時は119番へ連絡してください。",
                tags: ["emergency", "senior", "parent"],
            },
            {
                title: "こども救急電話相談 #8000",
                url: "https://www.pref.nara.lg.jp/n081/44823.html",
                description: "夜間や休日に子どもの急病で受診を迷ったときに、看護師へ電話で相談できます。緊急時は119番へ連絡してください。",
                tags: ["emergency", "parent"],
            },
        ],
    },
    {
        id: "education",
        title: "子育て・教育",
        description: "結婚、ひとり親家庭、教育、学校に関する制度と情報です。",
        items: [
            {
                title: "なら結婚応援団",
                url: "https://www.naradeai.pref.nara.jp/",
                description: "奈良県内の結婚支援イベントや、結婚支援に取り組む団体の情報を案内しています。",
                tags: ["student", "parent"],
            },
            {
                title: "児童扶養手当",
                url: "https://www.pref.nara.lg.jp/n054/p086000.html",
                description: "ひとり親家庭などを対象とする手当の支給要件、申請窓口、必要な手続きを案内しています。",
                tags: ["parent"],
            },
            {
                title: "ひとり親家庭の就業・資格取得支援",
                url: "https://www.pref.nara.lg.jp/n055/50522.html",
                description: "ひとり親家庭を対象とする就業相談、職業訓練、資格取得に関する支援制度を案内しています。",
                tags: ["parent", "business"],
            },
            {
                title: "奈良県教育委員会",
                url: "https://www.pref.nara.lg.jp/n162/1691.html",
                description: "奈良県の教育施策、学校教育、教職員採用などの情報を案内しています。",
                tags: ["parent", "student", "business"],
            },
            {
                title: "県立学校・高校入試情報",
                url: "https://www.pref.nara.lg.jp/n002/70181.html",
                description: "奈良県立高校の入試日程、募集要項、出願手続きなどを確認できます。",
                tags: ["student", "parent"],
            },
        ],
    },
    {
        id: "economy",
        title: "仕事・住まい・観光",
        description: "就職、事業経営、住宅、移住、観光に関する公的な情報です。",
        items: [
            {
                title: "住宅の耐震診断・耐震改修支援",
                url: "https://www.pref.nara.lg.jp/n155/68107.html",
                description: "住宅の耐震診断や耐震改修に関する市町村の補助制度を案内しています。対象や受付状況は市町村ごとに異なります。",
                tags: ["senior", "parent", "business"],
            },
            {
                title: "奈良の木を使用した住宅への助成",
                url: "https://www.pref.nara.lg.jp/n096/27797.html",
                description: "奈良県産材を使用した住宅に関する助成内容と受付状況を案内しています。申請前に最新情報をご確認ください。",
                tags: ["business", "parent"],
            },
            {
                title: "求職者支援制度",
                url: "https://www.mhlw.go.jp/stf/seisakunitsuite/bunya/koyou_roudou/koyou/kyushokusha_shien/index.html",
                description: "再就職、転職、技能習得を目指す方を対象とする職業訓練と給付金の要件を案内しています。",
                tags: ["business", "student"],
            },
            {
                title: "ミドルシニア世代の就職支援",
                url: "https://www.pref.nara.lg.jp/n102/52474.html",
                description: "奈良労働局と奈良県が連携して行う就職相談や就職支援の窓口を案内しています。",
                tags: ["business"],
            },
            {
                title: "奥大和移住定住交流センター engawa",
                url: "https://okuyamato-engawa.jp/",
                description: "奈良県南部・東部地域への移住、仕事、住まいに関する相談を受け付けています。",
                tags: ["business", "parent", "senior"],
            },
            {
                title: "奈良県の産業振興・企業支援",
                url: "https://www.pref.nara.lg.jp/shigoto/sangyoushinkou/index.html",
                description: "中小企業支援、創業、金融支援、企業立地などに関する県の情報を案内しています。",
                tags: ["business"],
            },
            {
                title: "奈良県の雇用・労働情報",
                url: "https://www.pref.nara.lg.jp/shigoto/roudou/index.html",
                description: "就職支援、職業訓練、労働相談、労働委員会などに関する情報を案内しています。",
                tags: ["student", "business"],
            },
            {
                title: "奈良県の農林水産業情報",
                url: "https://www.pref.nara.lg.jp/shigoto/nourinsuisangyou/index.html",
                description: "農業、林業、水産業への就業、事業者向け支援、県産品に関する情報を案内しています。",
                tags: ["business"],
            },
            {
                title: "奈良県の景観づくり",
                url: "https://www.pref.nara.lg.jp/n094/12764.html",
                description: "奈良県景観資産、景観計画、条例、届出制度などを案内しています。",
                tags: ["business", "student"],
            },
            {
                title: "奈良県イベントポータル",
                url: "https://event.nsa.pref.nara.jp/",
                description: "奈良県内の祭り、展示、講座などのイベント情報を検索できます。",
                tags: ["student", "parent", "senior"],
            },
        ],
    },
    {
        id: "digital",
        title: "行政手続き・文化施設",
        description: "オンライン申請、旅券、県立施設、図書館に関する情報です。",
        items: [
            {
                title: "奈良スーパーアプリ",
                url: "https://nsa.pref.nara.jp/ctztop/",
                description: "奈良県のオンライン行政サービスを案内する入口です。利用できる手続きはサービスごとに異なります。",
                tags: ["parent", "business", "senior"],
            },
            {
                title: "旅券（パスポート）の申請",
                url: "https://www.pref.nara.lg.jp/n013/18396.html",
                description: "パスポートの新規申請に必要な書類、申請方法、窓口を案内しています。",
                tags: ["student", "business"],
            },
            {
                title: "奈良県の施設案内",
                url: "https://www.pref.nara.lg.jp/n002/37223.html",
                description: "美術館、博物館、文化会館、図書館、公園など、県立施設の情報を案内しています。",
                tags: ["senior", "student", "parent"],
            },
            {
                title: "奈良県立図書情報館",
                url: "https://www.library.pref.nara.jp/",
                description: "蔵書検索、利用案内、開館日、講座や展示などの情報を確認できます。",
                tags: ["student", "senior", "parent"],
            },
        ],
    },
];
