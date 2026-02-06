export type SupportItem = {
    title: string;
    url: string;
    description: string; // The bullet points or "Specifics"
    comment: string; // Hoshikawa's perspective
};

export type SupportCategory = {
    id: string; // e.g., 'safety', 'education'
    title: string; // e.g., '【守る】安全・安心とセーフティネット'
    icon: string; // simple text icon or identifier
    description: string; // Short description for the section header
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
                title: "警察（県警本部・交番）",
                url: "https://www.pref.nara.jp/1297.htm",
                description: "防犯情報、警察署連絡先一覧。",
                comment: "現場で培った知見を治安維持の最前線へ反映します。困ったらまずは相談を。",
            },
            {
                title: "結婚・子育て・児童虐待（189）",
                url: "https://www.pref.nara.jp/dd.aspx?moduleid=17140&_PickUp_para=15",
                description: "児童相談所全国共通ダイヤル「189」案内など。",
                comment: "児相・警察連携システムの構築は私の最重要政策です。ためらわず通報・相談を。",
            },
            {
                title: "奈良県ひきこもり相談窓口",
                url: "https://www.pref.nara.jp/44860.htm",
                description: "臨床心理士による専門相談。",
                comment: "居場所づくり「あらんの家」の活動を制度で裏付けます。孤立を防ぐ仕組みを推進。",
            },
            {
                title: "人権・男女共同参画（DV相談）",
                url: "https://www.pref.nara.jp/45664.htm",
                description: "DV相談、NARAハート、女性のための相談窓口。",
                comment: "SOSを出せない人を守る、リスタートの拠点を作ります。",
            },
            {
                title: "消費・食生活（消費者センター）",
                url: "https://www.pref.nara.jp/28980.htm",
                description: "特殊詐欺防止、食の安全、契約トラブル相談。",
                comment: "防犯の観点から高齢者を守る情報を提供します。詐欺被害ゼロへ。",
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
                title: "教育委員会",
                url: "https://www.pref.nara.jp/kyoiku/",
                description: "いじめ対策、ICT教育推進、教員採用情報。",
                comment: "教職員の働き方改革と採用強化を公式データで監視し、教育の質を高めます。",
            },
            {
                title: "県立学校（入試・学校案内）",
                url: "https://www.pref.nara.jp/70181.htm",
                description: "高校入試情報、県立学校の特色紹介。",
                comment: "専門高校のブランド化を進め、子供の選択肢を広げます。",
            },
            {
                title: "生涯学習・スポーツ・文化",
                url: "https://www.pref.nara.jp/4023.htm",
                description: "ジュニアスポーツ、2031年国体関連。",
                comment: "部活動の地域移行と競技力向上を両立させ、スポーツ立県ナラを目指します。",
            },
            {
                title: "教育・青少年（野外活動）",
                url: "https://www.pref.nara.jp/37901.htm",
                description: "青少年野外活動センター、居場所登録制度。",
                comment: "机上だけでなく、次世代を担う若者の「リアルな体験」を重視します。",
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
                title: "防災・防犯（ハザードマップ）",
                url: "https://www.pref.nara.jp/6448.htm",
                description: "県内ハザードマップ、防災ポータル。",
                comment: "五條広域防災拠点を「命の砦」として機能させます。事前の確認が命を救います。",
            },
            {
                title: "医療（救急・#7119）",
                url: "https://www.pref.nara.jp/53885.htm",
                description: "救急安心センター(#7119)、こども救急(#8000)。",
                comment: "命を守るアクセスを最短にし、適切な受診を促します。迷ったらまずは電話を。",
            },
            {
                title: "県土づくり（道路・河川）",
                url: "https://www.pref.nara.jp/12016.htm",
                description: "道路整備状況、河川改修プロジェクト。",
                comment: "踏切解消や道路環境改善の進捗を県民へ可視化します。便利で安全な移動を。",
            },
            {
                title: "公共工事発注見通し",
                url: "https://www.pref.nara.jp/1289.htm",
                description: "工事予定、入札結果の公表。",
                comment: "税金の透明性を確保し、安全対策の納期を約束します。",
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
                title: "観光情報（イベント・宿泊）",
                url: "https://www.pref.nara.jp/1257.htm",
                description: "県内イベント情報、宿泊キャンペーン。",
                comment: "酒蔵ツーリズムなど「稼ぐ観光」を推進します。奈良の魅力を世界へ。",
            },
            {
                title: "しごと・産業（事業者支援）",
                url: "https://www.pref.nara.jp/1284.htm",
                description: "企業支援助成金、制度融資。",
                comment: "地元企業の活性化と、宿泊施設の立地を強力に支援します。",
            },
            {
                title: "農林水産業（地産地消）",
                url: "https://www.pref.nara.jp/1287.htm",
                description: "奈良の食、直売所情報、アグリビジネス。",
                comment: "「食のハブ拠点」構想で農家の所得向上を実現します。",
            },
            {
                title: "税金・ふるさと納税",
                url: "https://www.pref.nara.jp/1293.htm",
                description: "県税の案内、ふるさと納税申し込み。",
                comment: "寄付額の大幅増を実現した実績があります。奈良を応援してください。",
            },
            {
                title: "雇用・労働（就業支援）",
                url: "https://www.pref.nara.jp/1286.htm",
                description: "就業相談、職業訓練、労働相談。",
                comment: "現場で働く人を守り、再就職やスキルアップの機会を広げます。",
            },
        ],
    },
    {
        id: "digital",
        title: "【変える】デジタル行政・利便性",
        icon: "📱",
        description: "電子申請、パスポート、免許更新など、役所に行かない手続き。",
        items: [
            {
                title: "e古都なら（電子申請）",
                url: "https://s-kantan.jp/pref-nara-u/",
                description: "各種行政手続きのオンライン申請入口。",
                comment: "デジタルランク全国2位を活かし、役所に行かない奈良へ。最もスマートな窓口。",
            },
            {
                title: "パスポート申請",
                url: "https://www.pref.nara.jp/1531.htm",
                description: "オンライン申請方法、手数料、窓口案内。",
                comment: "需要の高い手続きのデジタル化を徹底します。スマホ一つで完結できる社会へ。",
            },
            {
                title: "各種免許・資格",
                url: "https://www.pref.nara.jp/1293.htm",
                description: "免許申請、更新手続き、資格試験情報。",
                comment: "働く人が必要とする行政手続きへの最短ルートを作ります。",
            },
            {
                title: "施設を探す（公園・駐車場）",
                url: "https://www.pref.nara.jp/1257.htm",
                description: "県営公園一覧、駐車場空き情報（主要施設）。",
                comment: "休日の時間を豊かにする施設情報をコンシェルジュ風に提供します。",
            },
        ],
    },
];
