// 英语题库 - 全部题目转换为四选一选择题
// 共 ~156 道题，涵盖中国文化、哲学、文学等领域

const ALL_QUESTIONS = [

  // ==================== Chapter 1: Confucius ====================
  {
    id: 1,
    chapter: "Chapter 1 — Confucius",
    type: "comprehension",
    question: "As a great thinker, statesman, educator and the ______ of Confucianism, Confucius is an ancient sage to the Chinese people.",
    options: ["founder", "follower", "reformer", "translator"],
    answer: 0,
    translation: "创始人"
  },
  {
    id: 2,
    chapter: "Chapter 1 — Confucius",
    type: "comprehension",
    question: "Humanity is the ______ moral principle or the supreme virtue.",
    options: ["basic", "supreme", "secondary", "ordinary"],
    answer: 1,
    translation: "最高的，至上的"
  },
  {
    id: 3,
    chapter: "Chapter 1 — Confucius",
    type: "comprehension",
    question: "Harmony is a core ______ Confucian principle for dealing with interpersonal relationships and guiding social and political activities.",
    options: ["economic", "military", "ethical", "scientific"],
    answer: 2,
    translation: "伦理的，道德的"
  },
  {
    id: 4,
    chapter: "Chapter 1 — Confucius",
    type: "comprehension",
    question: "As to the way to govern a state, on the one hand, Confucius emphasized the rule by ______ and humane government.",
    options: ["force", "virtue", "wealth", "fear"],
    answer: 1,
    translation: "美德，德行"
  },
  {
    id: 5,
    chapter: "Chapter 1 — Confucius",
    type: "comprehension",
    question: "The ______ method invented by Confucius was nearly one hundred years earlier than the Socratic dialogue.",
    options: ["elicitation", "memorization", "punishment", "deduction"],
    answer: 0,
    translation: "启发，诱导"
  },

  // Ch1 Term Translations
  {
    id: 6,
    chapter: "Chapter 1 — Confucius",
    type: "translation",
    question: `请选出"当仁不让"的正确英文翻译：`,
    options: [
      "When Facing an Opportunity to Exercise Benevolence, Do Not Yield",
      "Benevolence Should Be Avoided at All Costs",
      "Never Show Kindness to Strangers",
      "Always Yield When Facing Benevolence"
    ],
    answer: 0,
    translation: "当仁不让 — 面对行仁的机会，不要退让"
  },
  {
    id: 7,
    chapter: "Chapter 1 — Confucius",
    type: "translation",
    question: `请选出"见利思义"的正确英文翻译：`,
    options: [
      "Think of Profit Before Everything",
      "Think of Righteousness in the Face of Gain",
      "Ignore Righteousness When There Is Profit",
      "Gain Is More Important Than Justice"
    ],
    answer: 1,
    translation: "见利思义 — 面对利益时要想到道义"
  },
  {
    id: 8,
    chapter: "Chapter 1 — Confucius",
    type: "translation",
    question: `请选出"见贤思齐"的正确英文翻译：`,
    options: [
      "When Seeing a Person of High Caliber, Strive to Be His Equal",
      "When Seeing a Wise Person, Stay Away",
      "Jealousy Is Natural When Meeting Talented People",
      "Ignore Those Better Than Yourself"
    ],
    answer: 0,
    translation: "见贤思齐 — 看到贤德之人，努力向他看齐"
  },
  {
    id: 9,
    chapter: "Chapter 1 — Confucius",
    type: "translation",
    question: `请选出"克己复礼"的正确英文翻译：`,
    options: [
      "Restrain Yourself and Follow Social Norms",
      "Express Yourself Freely in Public",
      "Abandon All Social Conventions",
      "Force Others to Follow Your Rules"
    ],
    answer: 0,
    translation: "克己复礼 — 约束自己，遵循礼法"
  },
  {
    id: 10,
    chapter: "Chapter 1 — Confucius",
    type: "translation",
    question: `请选出"和为贵"的正确英文翻译：`,
    options: [
      "Harmony Is the Most Precious",
      "Conflict Is Always Necessary",
      "Peace Is Overrated",
      "Harmony Should Be Avoided"
    ],
    answer: 0,
    translation: "和为贵 — 和谐最为珍贵"
  },

  // ==================== Chapter 2: Lao Zi ====================
  {
    id: 11,
    chapter: "Chapter 2 — Lao Zi",
    type: "comprehension",
    question: "The book of Lao Zi consists of just about ______ Chinese characters.",
    options: ["5,000", "10,000", "2,000", "8,000"],
    answer: 0,
    translation: "五千（字）"
  },
  {
    id: 12,
    chapter: "Chapter 2 — Lao Zi",
    type: "comprehension",
    question: "The keynote of Lao Zi's philosophical system is Dao, or the Way, which is the ______, the principle, the substance, and the standard of all things.",
    options: ["byproduct", "origin", "enemy", "shadow"],
    answer: 1,
    translation: "起源，本源"
  },
  {
    id: 13,
    chapter: "Chapter 2 — Lao Zi",
    type: "comprehension",
    question: "Lao Zi unveiled the unity of opposites in the world and realized the ______ in things and the transformation of the opposites.",
    options: ["similarities", "harmonies", "contradictions", "identities"],
    answer: 2,
    translation: "矛盾"
  },
  {
    id: 14,
    chapter: "Chapter 2 — Lao Zi",
    type: "comprehension",
    question: "In Lao Zi's eyes, Dao takes ______ as its law.",
    options: ["artificiality", "force", "naturalness", "complexity"],
    answer: 2,
    translation: "自然"
  },
  {
    id: 15,
    chapter: "Chapter 2 — Lao Zi",
    type: "comprehension",
    question: "As far as government and social order, Lao Zi advocated rule through ______.",
    options: ["strict laws", "military force", "non-action", "absolute monarchy"],
    answer: 2,
    translation: "无为（而治）"
  },

  // Ch2 Term Translations
  {
    id: 16,
    chapter: "Chapter 2 — Lao Zi",
    type: "translation",
    question: `请选出"道法自然"的正确英文翻译：`,
    options: [
      "Dao Imitates Artificial Rules",
      "Dao Operates Naturally",
      "Dao Is Above Nature",
      "Dao Rejects Natural Law"
    ],
    answer: 1,
    translation: "道法自然 — 道效法自然"
  },
  {
    id: 17,
    chapter: "Chapter 2 — Lao Zi",
    type: "translation",
    question: `请选出"行不言之教（或不言之教）"的正确英文翻译：`,
    options: [
      "Influence Others without Preaching",
      "Teach Through Strict Lectures",
      "Never Educate Anyone",
      "Use Words to Control Others"
    ],
    answer: 0,
    translation: "行不言之教 — 不言说地教化他人"
  },
  {
    id: 18,
    chapter: "Chapter 2 — Lao Zi",
    type: "translation",
    question: `请选出"祸福相依"的正确英文翻译：`,
    options: [
      "Fortune Always Follows Misfortune",
      "Fortune and Misfortune Are Intertwined",
      "Misfortune Never Comes with Fortune",
      "Good Luck Replaces Bad Luck Immediately"
    ],
    answer: 1,
    translation: "祸福相依 — 祸与福相互依存"
  },
  {
    id: 19,
    chapter: "Chapter 2 — Lao Zi",
    type: "translation",
    question: `请选出"见素抱朴"的正确英文翻译：`,
    options: [
      "Seek Luxury and Complexity",
      "Pursue Fame and Wealth",
      "Maintain Originality and Embrace Simplicity",
      "Abandon All Forms of Living"
    ],
    answer: 2,
    translation: "见素抱朴 — 保持本真，拥抱朴素"
  },
  {
    id: 20,
    chapter: "Chapter 2 — Lao Zi",
    type: "translation",
    question: `请选出"上善若水"的正确英文翻译：`,
    options: [
      "Water Is Dangerous Above All",
      "Great Virtue Is Like Water",
      "Water Should Be Feared",
      "The Best People Avoid Water"
    ],
    answer: 1,
    translation: "上善若水 — 最高的善像水一样"
  },

  // ==================== Chapter 3: Various Schools ====================
  {
    id: 21,
    chapter: "Chapter 3 — Various Schools",
    type: "comprehension",
    question: "For self-cultivation, Mencius advocated the method of nourishing the great ______ or the vast moving force, which is produced by the accumulation of righteous deeds.",
    options: ["morale", "wealth", "army", "appetite"],
    answer: 0,
    translation: "浩然之气，士气"
  },
  {
    id: 22,
    chapter: "Chapter 3 — Various Schools",
    type: "comprehension",
    question: "Zhuang Zi held that man should live a life that suited his ______ nature.",
    options: ["artificial", "social", "original", "modified"],
    answer: 2,
    translation: "本来的，原始的"
  },
  {
    id: 23,
    chapter: "Chapter 3 — Various Schools",
    type: "comprehension",
    question: "Universal love, according to him, means to love all the people ______ regardless of their nationality, social status, or relationships.",
    options: ["selectively", "conditionally", "equally", "reluctantly"],
    answer: 2,
    translation: "平等地"
  },
  {
    id: 24,
    chapter: "Chapter 3 — Various Schools",
    type: "comprehension",
    question: "Another distinctive feature of Mo Zi's thought was his stress on ______.",
    options: ["mythology", "astrology", "methodology", "theology"],
    answer: 2,
    translation: "方法论"
  },
  {
    id: 25,
    chapter: "Chapter 3 — Various Schools",
    type: "comprehension",
    question: "In fact, the highest ideal of the Legalist School is that the ruler and the ministers, the superior and the inferior, the noble and the humble, all of them obey the ______.",
    options: ["emperor", "laws", "military", "rituals"],
    answer: 1,
    translation: "法律"
  },
  {
    id: 26,
    chapter: "Chapter 3 — Various Schools",
    type: "comprehension",
    question: "______ philosophy inspired by Dong Zhongshu claims that Heaven affects human affairs and human behavior finds response in Heaven.",
    options: ["Orthodox", "Rebellious", "Atheistic", "Materialistic"],
    answer: 0,
    translation: "正统的"
  },
  {
    id: 27,
    chapter: "Chapter 3 — Various Schools",
    type: "comprehension",
    question: "Philosophers during the Wei and Jin Dynasties went beyond phenomena to find ______ behind space and time.",
    options: ["illusion", "reality", "emptiness", "darkness"],
    answer: 1,
    translation: "真实，实在"
  },
  {
    id: 28,
    chapter: "Chapter 3 — Various Schools",
    type: "comprehension",
    question: "During the Song and Ming Dynasties, the rationalistic Confucian philosophy or Neo-Confucianism, which combined Taoism with ______, became influential.",
    options: ["Buddhism", "Islam", "Christianity", "Shinto"],
    answer: 0,
    translation: "佛教"
  },

  // Ch3 Term Translations
  {
    id: 29,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"仁民爱物"的正确英文翻译：`,
    options: [
      "Love Only the Powerful and Wealthy",
      "Have Love for the People, and Cherish All Things",
      "Ignore the People and Destroy All Things",
      "Love Yourself Before Others"
    ],
    answer: 1,
    translation: "仁民爱物 — 爱护人民，珍惜万物"
  },
  {
    id: 30,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"保民而王"的正确英文翻译：`,
    options: [
      "Protect the People and Then Rule as a King",
      "Rule the People Through Fear",
      "Abandon the People to Gain Power",
      "Protect Only the King's Interests"
    ],
    answer: 0,
    translation: "保民而王 — 保护百姓然后称王"
  },
  {
    id: 31,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"舍生取义"的正确英文翻译：`,
    options: [
      "Give One's Life to Uphold Righteousness",
      "Sacrifice Others for Personal Gain",
      "Abandon Righteousness to Save One's Life",
      "Value Life Above All Else"
    ],
    answer: 0,
    translation: "舍生取义 — 舍弃生命以维护正义"
  },
  {
    id: 32,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"得道多助，失道寡助"的正确英文翻译：`,
    options: [
      "An Unjust Cause Always Wins",
      "A Just Cause Enjoys Abundant Support While an Unjust Cause Finds Little Support",
      "Power Is More Important Than Justice",
      "Justice Has Nothing to Do with Support"
    ],
    answer: 1,
    translation: "得道多助，失道寡助 — 正义的事业得到多方帮助"
  },
  {
    id: 33,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"明分使群"的正确英文翻译：`,
    options: [
      "Chaos and Disorder Lead to Success",
      "Everyone Should Be Equal in All Ways",
      "Proper Ranking Leads to Collaboration",
      "Ignore Social Hierarchy Completely"
    ],
    answer: 2,
    translation: "明分使群 — 明确名分，促进协作"
  },
  {
    id: 34,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"载舟覆舟"的正确英文翻译：`,
    options: [
      "Build Boats and Destroy Them",
      "Carry or Overturn the Boat / Make or Break",
      "Boats Are Useless in Politics",
      "Always Sail with the Wind"
    ],
    answer: 1,
    translation: "载舟覆舟 — 水能载舟亦能覆舟"
  },
  {
    id: 35,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"言必信，行必果"的正确英文翻译：`,
    options: [
      "Promises Must Be Kept; Actions Must Be Resolute",
      "Words Are Unimportant; Actions Don't Matter",
      "Make Promises Freely Without Keeping Them",
      "Actions Speak Louder Than Promises"
    ],
    answer: 0,
    translation: "言必信，行必果 — 说话要守信，做事要果断"
  },
  {
    id: 36,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"忘适之适"的正确英文翻译：`,
    options: [
      "Never Adapt to Your Environment",
      "Comfort Comes from Constant Struggle",
      "Always Feel Uncomfortable in Life",
      "Effortless Ease"
    ],
    answer: 3,
    translation: "忘适之适 — 忘记舒适的舒适，真正的自在"
  },
  {
    id: 37,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"兴利除害"的正确英文翻译：`,
    options: [
      "Promote the Beneficial; Eliminate the Harmful",
      "Focus Only on Profits",
      "Ignore All Harms in Society",
      "Create More Problems Than Solutions"
    ],
    answer: 0,
    translation: "兴利除害 — 兴办有利的事，除去有害的事"
  },
  {
    id: 38,
    chapter: "Chapter 3 — Various Schools",
    type: "translation",
    question: `请选出"法不阿贵"的正确英文翻译：`,
    options: [
      "The Law Only Protects the Rich",
      "The Law Does Not Favor the Rich and Powerful",
      "Rich People Are Above the Law",
      "Laws Only Apply to Common People"
    ],
    answer: 1,
    translation: "法不阿贵 — 法律不偏袒权贵"
  },

  // ==================== Chapter 6: Chinese Literature (25 comprehension + 20 translation) ====================
  {
    id: 39,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Chinese literature refers to literary works from the days before the Qin Dynasty to the year of 1919, and is virtually an unbroken strand undergoing ______ dynastic changes.",
    options: ["classical", "modern", "western", "contemporary"],
    answer: 0,
    translation: "古典的"
  },
  {
    id: 40,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Chinese ______ contributed much to the forming of Chinese religion, especially Religious Taoism and Buddhism.",
    options: ["mythology", "technology", "geography", "astronomy"],
    answer: 0,
    translation: "神话"
  },
  {
    id: 41,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Of Chinese hero myths, that of ______ is among the most elaborated.",
    options: ["Pangu", "Hou Yi", "Nvwa", "Yu the Great"],
    answer: 1,
    translation: "后羿"
  },
  {
    id: 42,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Among Chinese animal myths, ______ lore is the earliest and most famous of the symbolic animals.",
    options: ["dragon", "phoenix", "tiger", "tortoise"],
    answer: 0,
    translation: "龙"
  },
  {
    id: 43,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Poetry, one of the earliest artistic forms, originated from ______ before the existence of written Chinese.",
    options: ["court music", "folk songs", "religious chants", "epic tales"],
    answer: 1,
    translation: "民歌"
  },
  {
    id: 44,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "The Book of Songs, as the fountainhead of ______, occupies an important place in the history of Chinese literature.",
    options: ["romanticism", "naturalism", "realism", "surrealism"],
    answer: 2,
    translation: "现实主义"
  },
  {
    id: 45,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Qu Yuan created a new literary genre. His new form and his adoption of positive ______ have exerted a lasting influence on Chinese literature.",
    options: ["pessimism", "romanticism", "cynicism", "stoicism"],
    answer: 1,
    translation: "浪漫主义"
  },
  {
    id: 46,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Tao's poems featured his vivid and sensitive descriptions of natural scenery, which established him as the creator of the ______ or idyllic poetry in Chinese literature.",
    options: ["urban", "pastoral", "martial", "epic"],
    answer: 1,
    translation: "田园的"
  },
  {
    id: 47,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "The Complete Anthology of Tang Poetry, edited in the early Qin Dynasty, is the ______ collection of Chinese poetry, which collects nearly 50,000 poems by 2,200 poets.",
    options: ["smallest", "newest", "biggest-ever", "most recent"],
    answer: 2,
    translation: "有史以来最大的"
  },
  {
    id: 48,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Li Bai, the 'Immortal of Poems', has long been considered the greatest ______ poet in the history of Chinese literature.",
    options: ["realistic", "romantic", "pastoral", "satirical"],
    answer: 1,
    translation: "浪漫的"
  },
  {
    id: 49,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Du Fu, the 'Sage of Poems', has been regarded as the greatest ______ poet in the history of Chinese literature.",
    options: ["romantic", "lyrical", "realistic", "epic"],
    answer: 2,
    translation: "现实主义的"
  },
  {
    id: 50,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "A ______ writer, Bai Juyi wrote nearly 3,000 poems, about 2,000 of which were regulated poems and around 170 were satirical and allegorical.",
    options: ["prolific", "lazy", "unknown", "mediocre"],
    answer: 0,
    translation: "多产的"
  },
  {
    id: 51,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Instead of regulated poetry, Song ci poetry could convey more refined and delicate feelings with ______ meter.",
    options: ["regular", "irregular", "fixed", "uniform"],
    answer: 1,
    translation: "不规则的"
  },
  {
    id: 52,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Liu Yong (1004-1054) made a great contribution to the ci poetry and has been universally acknowledged to be the ______ master of the 'Graceful and Restrained School'.",
    options: ["first", "last", "worst", "only"],
    answer: 0,
    translation: "第一个"
  },
  {
    id: 53,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Li Qingzhao, as the China's greatest ______ with erudition and versatile talents, also rose to prominence in this period.",
    options: ["novelist", "poetess", "painter", "sculptor"],
    answer: 1,
    translation: "女诗人"
  },
  {
    id: 54,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "With his extraordinary ______ style of poetry, Su Shi brought innovations to ci and helped broaden its scope, elevate its status and set up the 'Powerful and Free School'.",
    options: ["gentle", "weak", "vigorous", "passive"],
    answer: 2,
    translation: "豪放的，有力的"
  },
  {
    id: 55,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "The Book of History is the most ancient collection of Chinese prose writings with fragments of disconnected and diverse individual ______ papers.",
    options: ["official", "personal", "fictional", "poetic"],
    answer: 0,
    translation: "官方的"
  },
  {
    id: 56,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Records of the Grand Historian is a first monumental work ______ of history that records Chinese history from the time of the legendary figure Emperor Huang up to Emperor Wu of the Han Dynasty, over a period of about 3,000 years.",
    options: ["general", "regional", "limited", "biased"],
    answer: 0,
    translation: "通史的，总体的"
  },
  {
    id: 57,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "The Literary Mind and the Carving of Dragons written by Liu Xie in parallel prose is the first work of literary ______ in the history of Chinese literature.",
    options: ["criticism", "fiction", "translation", "imitation"],
    answer: 0,
    translation: "批评"
  },
  {
    id: 58,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "The basic expressive technique of Romance of the Three Kingdoms is realism, but the ______ arrangement and the portrayal of historical figures are full of romantic color.",
    options: ["plot", "language", "rhyme", "meter"],
    answer: 0,
    translation: "情节"
  },
  {
    id: 59,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Water Margin tells the story of the rebellion of the 108 heroes at the end of the Northern Song Dynasty. It is the first novel to deal with the subject matter of ______ uprisings in China.",
    options: ["noble", "peasant", "military", "merchant"],
    answer: 1,
    translation: "农民"
  },
  {
    id: 60,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Journey to the West, by Wu Cheng'en, is an outstanding romantic work replete with ______ tales.",
    options: ["historical", "fantastic", "realistic", "biographical"],
    answer: 1,
    translation: "奇幻的"
  },
  {
    id: 61,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "Written by Cao Xueqin and Gao E, A Dream of the Red Mansions reached the pinnacle of ______.",
    options: ["failure", "greatest", "mediocrity", "obscurity"],
    answer: 1,
    translation: "最伟大的（巅峰）"
  },
  {
    id: 62,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "The Injustice Suffered by Dou E praises Dou E's fighting spirit and exposes and condemns the dark society and ______ legal system.",
    options: ["just", "fair", "unjust", "perfect"],
    answer: 2,
    translation: "不公正的"
  },
  {
    id: 63,
    chapter: "Chapter 6 — Chinese Literature",
    type: "comprehension",
    question: "In the early period of the Qing Dynasty, the most notable ______ were Hong Sheng and Kong Shangren who respectively wrote excellent plays.",
    options: ["novelists", "poets", "playwrights", "painters"],
    answer: 2,
    translation: "剧作家"
  },

  // Ch6 Term Translations (20)
  {
    id: 64,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"它山之石，可以攻玉"的正确英文翻译：`,
    options: [
      "Use Stones from Another Mountain to Polish One's Jade",
      "Stones Are Useless for Making Jade",
      "Jade from Other Mountains Is Worthless",
      "Break Jade with Foreign Stones"
    ],
    answer: 0,
    translation: "它山之石，可以攻玉 — 借他人的石头来打磨自己的玉"
  },
  {
    id: 65,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"协和万邦"的正确英文翻译：`,
    options: [
      "Conquer All Nations by Force",
      "Coexistence of All in Harmony",
      "Divide and Rule All States",
      "Isolate from Other Nations"
    ],
    answer: 1,
    translation: "协和万邦 — 万国和谐共存"
  },
  {
    id: 66,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"满招损，谦受益"的正确英文翻译：`,
    options: [
      "Pride Leads to Success, Humility to Failure",
      "Complacency Leads to Failure; Modesty to Success",
      "Being Full Brings Happiness; Being Humble Causes Loss",
      "Arrogance and Humility Have the Same Result"
    ],
    answer: 1,
    translation: "满招损，谦受益 — 自满招致损失，谦虚获得益处"
  },
  {
    id: 67,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"大同"的正确英文翻译：`,
    options: [
      "Great Chaos",
      "Universal Harmony",
      "Total Isolation",
      "Complete Darkness"
    ],
    answer: 1,
    translation: "大同 — 天下大同，普遍和谐"
  },
  {
    id: 68,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"礼尚往来"的正确英文翻译：`,
    options: [
      "Ignore All Social Courtesies",
      "Reciprocity as a Social Norm",
      "Gifts Should Never Be Exchanged",
      "Rites Are Outdated Traditions"
    ],
    answer: 1,
    translation: "礼尚往来 — 礼节上崇尚有来有往"
  },
  {
    id: 69,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"不诚无物"的正确英文翻译：`,
    options: [
      "Honesty Is Meaningless",
      "Without Sincerity, Nothing Is Possible",
      "Sincerity Is Overrated",
      "Everything Exists Without Honesty"
    ],
    answer: 1,
    translation: "不诚无物 — 没有真诚，什么都做不成"
  },
  {
    id: 70,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"修齐治平"的正确英文翻译：`,
    options: [
      "Self-Cultivation, Family Regulation, State Governance, Bringing Peace to All under Heaven",
      "Building, Repairing, Managing, and Leveling Houses",
      "Personal Wealth, Family Status, National Power, and Global Domination",
      "Study Hard, Work Hard, Fight Hard, and Win Big"
    ],
    answer: 0,
    translation: "修齐治平 — 修身、齐家、治国、平天下"
  },
  {
    id: 71,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"教学相长"的正确英文翻译：`,
    options: [
      "Teachers Are Always Smarter Than Students",
      "Teaching and Learning Promote Each Other",
      "Teaching Is More Important Than Learning",
      "Learning Should Be Done Alone"
    ],
    answer: 1,
    translation: "教学相长 — 教与学相互促进"
  },
  {
    id: 72,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"敬业乐群"的正确英文翻译：`,
    options: [
      "Work Diligently and Keep Good Company with Others",
      "Work Alone and Avoid Social Contact",
      "Focus Only on Money and Power",
      "Ignore Work and Enjoy Life"
    ],
    answer: 0,
    translation: "敬业乐群 — 专心学业，与朋友和睦相处"
  },
  {
    id: 73,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"苟利国家，不求富贵"的正确英文翻译：`,
    options: [
      "Pursue Wealth at the Country's Expense",
      "Seek to Benefit the Country Rather than Personal Wealth and Position",
      "Ignore the Country and Focus on Yourself",
      "Wealth and Status Are the Most Important"
    ],
    answer: 1,
    translation: "苟利国家，不求富贵 — 只要对国家有利，不追求个人富贵"
  },
  {
    id: 74,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"唇亡齿寒"的正确英文翻译：`,
    options: [
      "Lips and Teeth Are Unrelated",
      "Once the Lips Are Gone, the Teeth Will Feel Cold",
      "Cold Lips Make Strong Teeth",
      "Teeth Protect Lips from the Cold"
    ],
    answer: 1,
    translation: "唇亡齿寒 — 嘴唇没了，牙齿会感到寒冷（唇齿相依）"
  },
  {
    id: 75,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"韦编三绝"的正确英文翻译：`,
    options: [
      "Leather Thongs Binding Wooden Strips Break Three Times",
      "Read a Book Once and Forget It",
      "Books Should Never Be Re-Read",
      "Leather Bindings Last Forever"
    ],
    answer: 0,
    translation: "韦编三绝 — 穿竹简的皮绳断了三次（形容读书勤奋）"
  },
  {
    id: 76,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"仓廪实而知礼节"的正确英文翻译：`,
    options: [
      "When Granaries Are Full, People Forget Etiquette",
      "When the Granaries Are Full, People Follow Appropriate Rules of Conduct",
      "Empty Granaries Lead to Good Manners",
      "Food Has Nothing to Do with Morality"
    ],
    answer: 1,
    translation: "仓廪实而知礼节 — 粮仓充实，人民才知道礼节"
  },
  {
    id: 77,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"道不同，不相为谋"的正确英文翻译：`,
    options: [
      "Always Follow the Same Path as Others",
      "Part Ways and Part Company",
      "Different Paths Lead to the Same Goal",
      "Never Disagree with Your Friends"
    ],
    answer: 1,
    translation: "道不同，不相为谋 — 志向不同，不要一起共事"
  },
  {
    id: 78,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"量出制入"的正确英文翻译：`,
    options: [
      "Spend First, Count Later",
      "Spend-and-Tax / Expenditure Should Be Carefully Calculated before Making a Plan to Gather Revenue",
      "Spend Without Any Limits",
      "Never Calculate Your Expenses"
    ],
    answer: 1,
    translation: "量出制入 — 根据支出制定收入计划"
  },
  {
    id: 79,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"水至清则无鱼"的正确英文翻译：`,
    options: [
      "Clear Water Has the Most Fish",
      "No Fish Can Survive If Water Is Too Clear",
      "Dirty Water Is Best for Fishing",
      "Fish Prefer Crystal Clear Water"
    ],
    answer: 1,
    translation: "水至清则无鱼 — 水太清了鱼就无法生存"
  },
  {
    id: 80,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"安居乐业"的正确英文翻译：`,
    options: [
      "Move Constantly and Change Jobs Often",
      "Living in Peace and Working in Contentment",
      "Stay at Home and Avoid Work",
      "Travel the World Without Working"
    ],
    answer: 1,
    translation: "安居乐业 — 安定地生活，愉快地工作"
  },
  {
    id: 81,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"悬壶济世"的正确英文翻译：`,
    options: [
      "Selling Gourds for Profit",
      "Hanging a Gourd (Practicing Medicine) to Help the World",
      "Using Gourds to Store Water",
      "Hanging Decorations for Good Luck"
    ],
    answer: 1,
    translation: "悬壶济世 — 行医济世"
  },
  {
    id: 82,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"前事不忘，后事之师"的正确英文翻译：`,
    options: [
      "Forget the Past and Focus on the Future",
      "Past Experience, If Not Forgotten, Is a Guide for the Future",
      "The Past Has No Lessons to Teach",
      "Future Events Are Unrelated to History"
    ],
    answer: 1,
    translation: "前事不忘，后事之师 — 不忘过去的经验，作为未来的借鉴"
  },
  {
    id: 83,
    chapter: "Chapter 6 — Term Translations",
    type: "translation",
    question: `请选出"言与志反，文岂足征"的正确英文翻译：`,
    options: [
      "Writing That Matches the Author's Intentions Is Always Great",
      "Writing That Runs Counter to Its Author's Aspirations Is Worthless",
      "Every Writer Should Express Opposite Ideas",
      "Words and Intentions Are Always the Same"
    ],
    answer: 1,
    translation: "言与志反，文岂足征 — 言语与志向相反，文字如何可信"
  },

  // ==================== Chapter 7: Chinese Arts ====================
  {
    id: 84,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "The development of bronze casting made it possible for bronze ______ to emerge in the late Shang Dynasty.",
    options: ["inscriptions", "paintings", "sculptures", "pottery"],
    answer: 0,
    translation: "铭文"
  },
  {
    id: 85,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "Chinese scripts are generally divided into five styles: the seal script, the official script or the clerical script, the cursive script, the ______ script, and the running script.",
    options: ["regular", "italic", "bold", "decorative"],
    answer: 0,
    translation: "楷书，正规的"
  },
  {
    id: 86,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "Wang Xizhi from the Eastern Jin Dynasty has been always honored and worshiped as the 'Sage of Chinese ______' in history.",
    options: ["painting", "calligraphy", "music", "poetry"],
    answer: 1,
    translation: "书法"
  },
  {
    id: 87,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "Among the numerous ancient Chinese painters, Wu Daozi in the Tang Dynasty was regarded as the 'Sage of Traditional Chinese Painting' and the ______ master of Tang figure painting.",
    options: ["greatest", "youngest", "worst", "oldest"],
    answer: 0,
    translation: "最伟大的"
  },
  {
    id: 88,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "Bada Shanren's paintings look ______ to the public and even to many artists.",
    options: ["beautiful", "strange", "ordinary", "realistic"],
    answer: 1,
    translation: "奇怪的，奇特的"
  },
  {
    id: 89,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "Singing, acting, ______, and acrobatic fighting are the four artistic means and the four basic skills of Beijing Opera.",
    options: ["dancing", "recitation", "painting", "writing"],
    answer: 1,
    translation: "念白，朗诵"
  },
  {
    id: 90,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "Kunqu Opera is one of the oldest opera in China and is considered the ______ of many other types of traditional operas.",
    options: ["enemy", "mother", "rival", "copy"],
    answer: 1,
    translation: "母亲（起源）"
  },
  {
    id: 91,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "The technique of '______' is usually performed in Sichuan Opera.",
    options: ["face changing", "singing", "dancing", "acrobatics"],
    answer: 0,
    translation: "变脸"
  },
  {
    id: 92,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "A skilled crosstalk performer must have clear enunciation, and be able to ______ various kinds of people and situations with sound effect.",
    options: ["imitate", "ignore", "criticize", "avoid"],
    answer: 0,
    translation: "模仿"
  },
  {
    id: 93,
    chapter: "Chapter 7 — Chinese Arts",
    type: "comprehension",
    question: "Erhu, sometimes known in the West as the 'Chinese ______', is a two-string bowed musical instrument.",
    options: ["violin", "piano", "guitar", "flute"],
    answer: 0,
    translation: "小提琴"
  },

  // ==================== Chapter 9: Chinese Festivals ====================
  {
    id: 94,
    chapter: "Chapter 9 — Chinese Festivals",
    type: "comprehension",
    question: "The Spring Festival, also called the Chinese New Year or guonian (keeping the monster nian away), is China's ______ festival which falls on the first day of the first lunar month each year.",
    options: ["least important", "newest", "most important", "most recent"],
    answer: 2,
    translation: "最重要的"
  },
  {
    id: 95,
    chapter: "Chapter 9 — Chinese Festivals",
    type: "comprehension",
    question: "The Lantern Festival, celebrated on the 15th day of the first ______ month, is closely related to the Spring Festival.",
    options: ["solar", "lunar", "calendar", "spring"],
    answer: 1,
    translation: "农历的"
  },
  {
    id: 96,
    chapter: "Chapter 9 — Chinese Festivals",
    type: "comprehension",
    question: "The Qingming Festival is also known as an occasion for ______ and playing on the swing in China.",
    options: ["kite flying", "swimming", "skiing", "shopping"],
    answer: 0,
    translation: "放风筝"
  },
  {
    id: 97,
    chapter: "Chapter 9 — Chinese Festivals",
    type: "comprehension",
    question: "It has become a popular tradition to eat zongzi and drink ______ wine on the 5th day of the 5th lunar month.",
    options: ["grape", "Realgar", "beer", "rice"],
    answer: 1,
    translation: "雄黄（酒）"
  },
  {
    id: 98,
    chapter: "Chapter 9 — Chinese Festivals",
    type: "comprehension",
    question: "And the 7th day of the 7th lunar month has also been known as China's ______'s Day.",
    options: ["Valentine", "Mother", "Father", "Children"],
    answer: 0,
    translation: "情人节"
  },
  {
    id: 99,
    chapter: "Chapter 9 — Chinese Festivals",
    type: "comprehension",
    question: "The Mid-Autumn Festival falls on the 15th day of the 8th lunar month. It has been believed that the moon is at its fullest and roundest on this day, so the festival is also regarded as an occasion for family ______.",
    options: ["separations", "reunions", "conflicts", "competitions"],
    answer: 1,
    translation: "团聚"
  },
  {
    id: 100,
    chapter: "Chapter 9 — Chinese Festivals",
    type: "comprehension",
    question: "In ______, the Chinese government designated the Double Ninth Festival as 'Senior Citizen's Day'.",
    options: ["1989", "1999", "2000", "1978"],
    answer: 0,
    translation: "1989年"
  },

  // ==================== Chapter 10: Food & Drink ====================
  {
    id: 101,
    chapter: "Chapter 10 — Food & Drink",
    type: "comprehension",
    question: "Generally speaking, there are three essential standards by which Chinese cooking is judged, namely, color, aroma, and taste, with ______ being the most important.",
    options: ["color", "aroma", "taste", "presentation"],
    answer: 2,
    translation: "味道"
  },
  {
    id: 102,
    chapter: "Chapter 10 — Food & Drink",
    type: "comprehension",
    question: "Shandong Cuisine, also known as Lucai, is representative of northern China's cooking and its techniques are widely ______ in China.",
    options: ["northeast", "southwest", "overseas", "unknown"],
    answer: 0,
    translation: "东北的"
  },
  {
    id: 103,
    chapter: "Chapter 10 — Food & Drink",
    type: "comprehension",
    question: "Sichuan Cuisine, also known as Chuancai, is generally regarded as the most famous of Chinese cuisines, especially for its being spicy and ______.",
    options: ["flavorful", "bland", "sweet", "sour"],
    answer: 0,
    translation: "香的，有风味的"
  },
  {
    id: 104,
    chapter: "Chapter 10 — Food & Drink",
    type: "comprehension",
    question: "Chinese people are taught from childhood to 'stand properly, sit properly, and eat properly', and receive training about ______ manners.",
    options: ["table", "dance", "writing", "driving"],
    answer: 0,
    translation: "餐桌（礼仪）"
  },
  {
    id: 105,
    chapter: "Chapter 10 — Food & Drink",
    type: "comprehension",
    question: "It is commonly recognized that China is the ______ country to grow, produce, and drink tea.",
    options: ["first", "last", "second", "only"],
    answer: 0,
    translation: "第一个"
  },
  {
    id: 106,
    chapter: "Chapter 10 — Food & Drink",
    type: "comprehension",
    question: "Drinkers' ______ game is a special method in China to help create more joyous atmosphere while drinking.",
    options: ["wager", "card", "video", "board"],
    answer: 0,
    translation: "赌酒，酒令"
  },

  // ==================== 英语.docx — Confucianism & Philosophy (Set 1) ====================
  {
    id: 107,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "In ancient China a gentleman was required to study 'six arts (六艺)' which were ritual, music, archery, (carriage) driving, calligraphy and ______.",
    options: ["mathematics", "geography", "history", "philosophy"],
    answer: 0,
    translation: "数学"
  },
  {
    id: 108,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "Confucianism is a school of thought represented by Confucius and ______.",
    options: ["Lao Zi", "Mencius", "Zhuang Zi", "Mo Zi"],
    answer: 1,
    translation: "孟子"
  },
  {
    id: 109,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "'The Analects of Confucius' is a collection of about ______ sayings of Confucius and his major disciples, and their comments and answers to questions.",
    options: ["200", "300", "500", "1000"],
    answer: 2,
    translation: "500条"
  },
  {
    id: 110,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "In connection with humanity, Confucius mentioned many other virtues, such as justice, propriety, wisdom, trustworthiness, allegiance, ______, filial piety, fraternal duty and incorruptness.",
    options: ["courage", "forbearance", "ambition", "pride"],
    answer: 1,
    translation: "宽容，忍耐"
  },
  {
    id: 111,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "Zhongyong (golden mean) was considered to be the highest level of virtue by Confucius. Zhong (中) doesn't mean '______' but a 'moderate' and 'just right' way in one's words and deeds.",
    options: ["compromise", "center", "extreme", "balance"],
    answer: 0,
    translation: "妥协，折中"
  },
  {
    id: 112,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "As to the way to govern a state, on the one hand, Confucius emphasized rule by virtue and ______ government.",
    options: ["human", "strict", "military", "foreign"],
    answer: 0,
    translation: "仁政（人道的）"
  },
  {
    id: 113,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "With regard to the way to govern a state, on the other hand, Confucius asserted that the people should be made rich first and then ______.",
    options: ["taxed", "educated", "punished", "ignored"],
    answer: 1,
    translation: "教育"
  },
  {
    id: 114,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "Before Confucius, only the nobility had the right to receive education. He was the first figure in Chinese history to initiate ______ education.",
    options: ["public", "private", "military", "religious"],
    answer: 1,
    translation: "私人的（私学）"
  },
  {
    id: 115,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "'I teach everyone without making ______ (有教无类),' Confucius said.",
    options: ["money", "distinction", "effort", "mistakes"],
    answer: 1,
    translation: "区别"
  },
  {
    id: 116,
    chapter: "Confucianism — Set 1",
    type: "comprehension",
    question: "Confucius regarded lofty ______, great virtue, love for people, and the 'six arts' as the general principles of education.",
    options: ["ideals", "buildings", "salaries", "mountains"],
    answer: 0,
    translation: "理想"
  },

  // ==================== 英语.docx — Lao Zi & Taoism (Set 2) ====================
  {
    id: 117,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "The thought of Lao Zi formed the foundation of ______ religion, the most influential indigenous school of religion in China.",
    options: ["Buddhist", "the Taoist", "Confucian", "Islamic"],
    answer: 1,
    translation: "道教的"
  },
  {
    id: 118,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "From the relativity of things and concepts Lao Zi continued to draw an important conclusion: '______ is the movement of Dao,' or turning back is how the Way moves.",
    options: ["Progress", "Reversion", "Innovation", "Expansion"],
    answer: 1,
    translation: "反转，复归"
  },
  {
    id: 119,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "'Naturalness', as an important concept of Lao Zi's philosophy, refers to a natural state of being, an ______ of following the way of nature.",
    options: ["attitude", "rejection", "ignorance", "theory"],
    answer: 0,
    translation: "态度"
  },
  {
    id: 120,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "Lao Zi said, 'Dao acts through non-action and it always makes all things possible through ______ with them.'",
    options: ["interference", "non-interference", "opposition", "control"],
    answer: 1,
    translation: "不干涉"
  },
  {
    id: 121,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "Lao Zi said, 'The greatest virtue is just like water.' He compared his philosophy of '______' to water.",
    options: ["competition", "non-contention", "domination", "accumulation"],
    answer: 1,
    translation: "不争"
  },
  {
    id: 122,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "The Chinese idiom of 富在知足 can be translated into English like 'Wealth lies in ______.'",
    options: ["greed", "contentment", "expansion", "competition"],
    answer: 1,
    translation: "知足"
  },
  {
    id: 123,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "The Chinese idiom of 物极必反 can be translated into English like 'A state or quality, when reaching the extreme, will eventually turn back to its ______ state or quality.'",
    options: ["same", "opposite", "original", "enhanced"],
    answer: 1,
    translation: "相反的"
  },
  {
    id: 124,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "The Chinese idiom of 慎终如始 can be translated into English like 'being ______ at the first and in the end.'",
    options: ["careless", "brave", "careful", "lazy"],
    answer: 2,
    translation: "谨慎的"
  },
  {
    id: 125,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "The Chinese idiom of 福祸相依 can be translated into English like 'Misfortune and ______ follow one after another.'",
    options: ["blessing", "sadness", "anger", "wealth"],
    answer: 0,
    translation: "福气，好运"
  },
  {
    id: 126,
    chapter: "Lao Zi & Taoism",
    type: "comprehension",
    question: "The Chinese idiom of 千里之行始于足下 can be translated into English like 'The highest eminence is to be gained ______.'",
    options: ["quickly", "step by step", "by luck", "through others"],
    answer: 1,
    translation: "一步一步地"
  },

  // ==================== 英语.docx — Various Schools (Set 3) ====================
  {
    id: 127,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "Primarily a code of ethics and a system of philosophy, Confucianism has left its ______ on Chinese politics and government, family and society, and art and literature.",
    options: ["mark", "stain", "problem", "question"],
    answer: 0,
    translation: "印记，影响"
  },
  {
    id: 128,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "There is no special word in Chinese meaning 'Confucian' or 'Confucianist,' members of the Confucian School having always been called ru (儒), a word may be translated as '______.'",
    options: ["warrior", "literati", "farmer", "merchant"],
    answer: 1,
    translation: "文人，学者"
  },
  {
    id: 129,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "It was said that his mother moved house ______ times so that her son could live in a good neighborhood.",
    options: ["two", "three", "five", "ten"],
    answer: 1,
    translation: "三次（孟母三迁）"
  },
  {
    id: 130,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "It is the ______ longings that have obscured these moral qualities.",
    options: ["moderate", "natural", "excessive", "minimal"],
    answer: 2,
    translation: "过度的"
  },
  {
    id: 131,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "All distinctions and oppositions are merely relative. This is Zhuang Zi's famous doctrine of the ______ of all things (齐物论).",
    options: ["hierarchy", "equality", "superiority", "inferiority"],
    answer: 1,
    translation: "平等"
  },
  {
    id: 132,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "His total denial and condemnation of human civilization reflected deeper ______ of the Taoists facing greater chaos during the Warring States Period.",
    options: ["optimism", "pessimism", "enthusiasm", "confidence"],
    answer: 1,
    translation: "悲观主义"
  },
  {
    id: 133,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "It is said that Mo Zi at first a follower of Confucianism but later ______ it to found a system of thought of his own.",
    options: ["embraced", "rejected", "modified", "ignored"],
    answer: 1,
    translation: "拒绝，抛弃"
  },
  {
    id: 134,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "The ______ School triumphed over the other schools in the 3rd century B. C., and its philosophy was put into strict practice during the brief period of the Qin Dynasty.",
    options: ["Confucian", "Taoist", "Legalist", "Mohist"],
    answer: 2,
    translation: "法家"
  },
  {
    id: 135,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "Dong Zhongshu (董仲舒) also propounded his doctrine of 'Three Cardinal ______ (三纲)', that is, a sovereign is the guide of his subjects, a father is the guide of his son, and the husband is the guide of his wife.",
    options: ["Laws", "Guides", "Rules", "Virtues"],
    answer: 1,
    translation: "纲，指导原则"
  },
  {
    id: 136,
    chapter: "Various Schools — Set 3",
    type: "comprehension",
    question: "Neo-Confucianism was divided into two schools, the School of Principle (理学), and the School of ______ (心学).",
    options: ["Body", "Mind", "Soul", "Nature"],
    answer: 1,
    translation: "心"
  },

  // ==================== 英语.docx — Literature & Arts (Set 4) ====================
  {
    id: 137,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "Each year on the 15th day of the 8th lunar month, the Chinese celebrate the memory of Chang E's flight to the moon with the _______ Festival.",
    options: ["Spring", "Mid-Autumn", "Dragon Boat", "Lantern"],
    answer: 1,
    translation: "中秋节"
  },
  {
    id: 138,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "The Yellow Emperor, who is also called Xuan Yuan (轩辕), is the legendary founder of the Chinese Empire after his victory over _______ and all other tribes.",
    options: ["Shen Nong", "Chi You", "Nvwa", "Fuxi"],
    answer: 1,
    translation: "蚩尤"
  },
  {
    id: 139,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "Basing on folk songs in the state of Chu, the towering genius Qu Yuan, China's _______ known poet, developed these folk songs into a genre of poetry.",
    options: ["first", "second", "last", "only"],
    answer: 0,
    translation: "第一个（最早的）"
  },
  {
    id: 140,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "The first prolific ci poet in China is _______. About 70 of his ci poems have survived.",
    options: ["Li Bai", "Du Fu", "Wen Tingyun", "Su Shi"],
    answer: 2,
    translation: "温庭筠"
  },
  {
    id: 141,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "_______ best works are gracefully fluent, musical, and slightly colloquial, not burdened by allusions or intensity like Wen Tingyun's.",
    options: ["Li Qingzhao's", "Yan Shu's", "Liu Yong's", "Su Shi's"],
    answer: 1,
    translation: "晏殊的"
  },
  {
    id: 142,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "Jiang Kui modeled himself at first upon Huang Tingjian (黄庭坚), the founder of the _______ School.",
    options: ["Jiangxi", "Zhejiang", "Anhui", "Sichuan"],
    answer: 0,
    translation: "江西（诗派）"
  },
  {
    id: 143,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "The first distinguished follower of Sima Qian was Ban Gu (班固), author of the first _______ history in China, The History of the Han Dynasty (《汉书》).",
    options: ["universal", "dynastic", "world", "regional"],
    answer: 1,
    translation: "断代的（朝代史）"
  },
  {
    id: 144,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "Generally regarded as China's best _______ novel, The Scholars, a book of 55 chapters, was written by Wu Jingzi (吴敬梓).",
    options: ["romantic", "satirical", "historical", "martial"],
    answer: 1,
    translation: "讽刺的"
  },
  {
    id: 145,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "One more point worthy of mention is that the so-called _______________ include Romance of the Three Kingdoms, Water Margin, Journey to the West, and A Dream of the Red Mansions.",
    options: ["Four Great Classical Novels", "Three Great Poems", "Five Classics", "Six Arts"],
    answer: 0,
    translation: "四大名著"
  },
  {
    id: 146,
    chapter: "Literature & Arts",
    type: "comprehension",
    question: "Unlike Shen Jing, _______ and his followers valued literary quality over strict musical form. He left behind him four Romance plays.",
    options: ["Guan Hanqing", "Tang Xianzu", "Wang Shifu", "Ma Zhiyuan"],
    answer: 1,
    translation: "汤显祖"
  },

  // ==================== 英语.docx — Mixed Topics (Set 5) ====================
  {
    id: 147,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "The Chinese written language is one of the various world languages with the longest history. Tradition has it that legendary kings or heroes, such as Shen Nong (神农), Huang Di (黄帝), Shao Hao (少昊), Yao (尧) and ______ all created different kinds of writing.",
    options: ["Cang Jie", "Sun Wukong", "Lao Zi", "Mencius"],
    answer: 0,
    translation: "仓颉"
  },
  {
    id: 148,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "The Marquis Yi chime bells consist of ______ bells arranged in three vows.",
    options: ["36", "50", "65", "99"],
    answer: 2,
    translation: "65（件）"
  },
  {
    id: 149,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "Of many legends about the Mid-Autumn Festival, the story concerning Hou Yi and ______ is perhaps the most popular.",
    options: ["Chang E", "Nvwa", "Xi Wangmu", "Guanyin"],
    answer: 0,
    translation: "嫦娥"
  },
  {
    id: 150,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "A famous painter of the Jin Dynasty ______ was the first to put forward the theory of 'making the form show the spirit.'",
    options: ["Wu Daozi", "Gu Kaizhi", "Wang Wei", "Zhang Zeduan"],
    answer: 1,
    translation: "顾恺之"
  },
  {
    id: 151,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "______ was the first person to introduce erhu (二胡), a two-stringed musical instrument, into the Beijing Opera orchestra.",
    options: ["Mei Lanfang", "Cheng Yanqiu", "Shang Xiaoyun", "Xun Huisheng"],
    answer: 0,
    translation: "梅兰芳"
  },
  {
    id: 152,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "The Double Seventh Festival falling on the 7th day of the 7th lunar month is a traditional Chinese festival replete with ______.",
    options: ["romance", "fear", "anger", "sadness"],
    answer: 0,
    translation: "浪漫（爱情）"
  },
  {
    id: 153,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "Legend says that when the news of Qu Yuan's drowning spread, the people from the State of Chu gathered along the banks of the ______ River to pay their respect.",
    options: ["Yangtze", "Yellow", "Miluo", "Pearl"],
    answer: 2,
    translation: "汨罗江"
  },
  {
    id: 154,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "Tradition has it that ______ was the first known master of the regular script on which his enormous reputation was built.",
    options: ["Wang Xizhi", "Zhong Yao", "Yan Zhenqing", "Ouyang Xun"],
    answer: 1,
    translation: "钟繇"
  },
  {
    id: 155,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "The custom of hanging lanterns dates back to the early ______ Dynasty.",
    options: ["Tang", "Han", "Song", "Ming"],
    answer: 1,
    translation: "汉朝"
  },
  {
    id: 156,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "The ______ color, bright flames, and exploding were what nian feared the most.",
    options: ["blue", "yellow", "red", "green"],
    answer: 2,
    translation: "红色"
  },
  {
    id: 157,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "In China, people hold the belief that a food ______ is much better than a medicine in fortifying one's health.",
    options: ["tonic", "poison", "waste", "snack"],
    answer: 0,
    translation: "补品，滋补的"
  },
  {
    id: 158,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "Some of the best dishes of Jiangsu Cuisine are ______ Salted Dried Duck, Clear Crab and Pork Meatballs, Triple Combo Duck, Crystal Pork, etc.",
    options: ["Beijing", "Jinling", "Shanghai", "Guangzhou"],
    answer: 1,
    translation: "金陵（南京）"
  },
  {
    id: 159,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "Don't stick your chopsticks ______ in the rice bowl because, in most part of China, it indicates the food for the dead.",
    options: ["upright", "sideways", "flat", "broken"],
    answer: 0,
    translation: "竖直地"
  },
  {
    id: 160,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "______ tea sits half way between green tea and black tea because it is semi-fermented.",
    options: ["Jasmine", "Oolong", "Chrysanthemum", "Chamomile"],
    answer: 1,
    translation: "乌龙茶"
  },
  {
    id: 161,
    chapter: "Mixed Topics",
    type: "comprehension",
    question: "At a wedding banquet, the new couple must propose toasts to their parents and the guests present. They must also drink ______-crossed wine (交杯酒), which will bless them with a hundred years of happy marriage.",
    options: ["arm", "leg", "hand", "head"],
    answer: 0,
    translation: "手臂（交杯酒）"
  }
];
