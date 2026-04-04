const GameData = window.GameData || {};
GameData.FORCE_LV_CN = {
	6: "掌门",
	5: "副掌门",
	4: "长老",
	3: "亲传弟子",
	2: "正式弟子",
	1: "入门弟子",
	0: "外门弟子"
};
GameData.FORCE_MAP = {
	"-1": "无门派",
	"0": "长乐帮",
	"1": "唐门",
	"2": "药王谷",
	"3": "丐帮",
	"4": "飞龙门",
	"5": "茅山派",
	"6": "铸剑山庄",
	"7": "五毒教",
	"8": "阎罗殿",
	"9": "大隐阁",
	"10": "少林寺",
	"11": "武当派",
	"12": "霸刀门",
	"13": "蓬莱派",
	"14": "峨眉派",
	"15": "崆峒派",
	"16": "神机门",
	"17": "霹雳堂",
	"18": "金刚密宗",
	"19": "天山派",
	"20": "聚义门",
	"21": "黄河帮",
	"22": "八卦门",
	"23": "海沙帮",
	"24": "铁掌帮",
	"25": "仙霞派",
	"26": "巨鲸帮",
	"27": "金龙帮",
	"28": "青城派",
	"29": "伏牛派"
};
GameData.FORCE_COLORS = {
	"-1": {
		color: "#6b7280",
		gradient: "linear-gradient(135deg, #6b7280, #4b5563)"
	},
	"0": {
		color: "#f59e0b",
		gradient: "linear-gradient(135deg, #f59e0b, #d97706)"
	},
	"1": {
		color: "#8b5cf6",
		gradient: "linear-gradient(135deg, #8b5cf6, #7c3aed)"
	},
	"2": {
		color: "#10b981",
		gradient: "linear-gradient(135deg, #10b981, #059669)"
	},
	"3": {
		color: "#f97316",
		gradient: "linear-gradient(135deg, #f97316, #ea580c)"
	},
	"4": {
		color: "#06b6d4",
		gradient: "linear-gradient(135deg, #06b6d4, #0891b2)"
	},
	"5": {
		color: "#a855f7",
		gradient: "linear-gradient(135deg, #a855f7, #9333ea)"
	},
	"6": {
		color: "#fbbf24",
		gradient: "linear-gradient(135deg, #fbbf24, #f59e0b)"
	},
	"7": {
		color: "#22c55e",
		gradient: "linear-gradient(135deg, #22c55e, #16a34a)"
	},
	"8": {
		color: "#dc2626",
		gradient: "linear-gradient(135deg, #dc2626, #b91c1c)"
	},
	"9": {
		color: "#6366f1",
		gradient: "linear-gradient(135deg, #6366f1, #4f46e5)"
	},
	"10": {
		color: "#eab308",
		gradient: "linear-gradient(135deg, #eab308, #ca8a04)"
	},
	"11": {
		color: "#3b82f6",
		gradient: "linear-gradient(135deg, #3b82f6, #2563eb)"
	},
	"12": {
		color: "#ef4444",
		gradient: "linear-gradient(135deg, #ef4444, #dc2626)"
	},
	"13": {
		color: "#14b8a6",
		gradient: "linear-gradient(135deg, #14b8a6, #0d9488)"
	},
	"14": {
		color: "#ec4899",
		gradient: "linear-gradient(135deg, #ec4899, #db2777)"
	},
	"15": {
		color: "#78716c",
		gradient: "linear-gradient(135deg, #78716c, #57534e)"
	},
	"16": {
		color: "#0ea5e9",
		gradient: "linear-gradient(135deg, #0ea5e9, #0284c7)"
	},
	"17": {
		color: "#f43f5e",
		gradient: "linear-gradient(135deg, #f43f5e, #e11d48)"
	},
	"18": {
		color: "#c084fc",
		gradient: "linear-gradient(135deg, #c084fc, #a855f7)"
	},
	"19": {
		color: "#67e8f9",
		gradient: "linear-gradient(135deg, #67e8f9, #22d3ee)"
	},
	"20": {
		color: "#84cc16",
		gradient: "linear-gradient(135deg, #84cc16, #65a30d)"
	},
	"21": {
		color: "#d97706",
		gradient: "linear-gradient(135deg, #d97706, #b45309)"
	},
	"22": {
		color: "#7c3aed",
		gradient: "linear-gradient(135deg, #7c3aed, #6d28d9)"
	},
	"23": {
		color: "#0d9488",
		gradient: "linear-gradient(135deg, #0d9488, #0f766e)"
	},
	"24": {
		color: "#92400e",
		gradient: "linear-gradient(135deg, #92400e, #78350f)"
	},
	"25": {
		color: "#f472b6",
		gradient: "linear-gradient(135deg, #f472b6, #ec4899)"
	},
	"26": {
		color: "#0284c7",
		gradient: "linear-gradient(135deg, #0284c7, #0369a1)"
	},
	"27": {
		color: "#fcd34d",
		gradient: "linear-gradient(135deg, #fcd34d, #fbbf24)"
	},
	"28": {
		color: "#22c55e",
		gradient: "linear-gradient(135deg, #22c55e, #16a34a)"
	},
	"29": {
		color: "#a3a3a3",
		gradient: "linear-gradient(135deg, #a3a3a3, #737373)"
	}
};
GameData.FORCE_STYLE_MAP = {
	"仁义": {
		"color": "#10b981",
		"bg": "rgba(16, 185, 129, 0.1)",
		"gradient": "linear-gradient(135deg, rgba(16, 185, 129, 0.2), rgba(16, 185, 129, 0.05))"
	},
	"邪恶": {
		"color": "#ef4444",
		"bg": "rgba(239, 68, 68, 0.1)",
		"gradient": "linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.05))"
	},
	"中庸": {
		"color": "#6b7280",
		"bg": "rgba(107, 114, 128, 0.1)",
		"gradient": "linear-gradient(135deg, rgba(107, 114, 128, 0.2), rgba(107, 114, 128, 0.05))"
	},
	"中立": {
		"color": "#6b7280",
		"bg": "rgba(107, 114, 128, 0.1)",
		"gradient": "linear-gradient(135deg, rgba(107, 114, 128, 0.2), rgba(107, 114, 128, 0.05))"
	},
	"霸道": {
		"color": "#f59e0b",
		"bg": "rgba(245, 158, 11, 0.1)",
		"gradient": "linear-gradient(135deg, rgba(245, 158, 11, 0.2), rgba(245, 158, 11, 0.05))"
	}
};
GameData.FORCE_LEVEL_COLORS = {
	1: {
		color: "#6b7280",
		bg: "rgba(107, 114, 128, 0.1)"
	},
	2: {
		color: "#059669",
		bg: "rgba(5, 150, 105, 0.1)"
	},
	3: {
		color: "#3b82f6",
		bg: "rgba(59, 130, 246, 0.1)"
	},
	4: {
		color: "#7c3aed",
		bg: "rgba(124, 58, 237, 0.1)"
	},
	5: {
		color: "#d97706",
		bg: "rgba(217, 119, 6, 0.1)"
	},
	6: {
		color: "#dc2626",
		bg: "rgba(220, 38, 38, 0.1)"
	},
	7: {
		color: "#8b5cf6",
		bg: "rgba(139, 92, 246, 0.1)"
	},
	8: {
		color: "#ec4899",
		bg: "rgba(236, 72, 153, 0.1)"
	},
	9: {
		color: "#06b6d4",
		bg: "rgba(6, 182, 212, 0.1)"
	},
	10: {
		color: "#f97316",
		bg: "rgba(249, 115, 22, 0.1)"
	}
};
GameData.FORCE_LEVEL_COLORS_ENHANCED = {
	1: {
		color: "#6b7280",
		bg: "rgba(107, 114, 128, 0.1)",
		gradient: "linear-gradient(135deg, #6b7280, #9ca3af)"
	},
	2: {
		color: "#059669",
		bg: "rgba(5, 150, 105, 0.1)",
		gradient: "linear-gradient(135deg, #059669, #10b981)"
	},
	3: {
		color: "#3b82f6",
		bg: "rgba(59, 130, 246, 0.1)",
		gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)"
	},
	4: {
		color: "#7c3aed",
		bg: "rgba(124, 58, 237, 0.1)",
		gradient: "linear-gradient(135deg, #7c3aed, #a78bfa)"
	},
	5: {
		color: "#d97706",
		bg: "rgba(217, 119, 6, 0.1)",
		gradient: "linear-gradient(135deg, #d97706, #f59e0b)"
	},
	6: {
		color: "#dc2626",
		bg: "rgba(220, 38, 38, 0.1)",
		gradient: "linear-gradient(135deg, #dc2626, #ef4444)"
	},
	7: {
		color: "#8b5cf6",
		bg: "rgba(139, 92, 246, 0.1)",
		gradient: "linear-gradient(135deg, #8b5cf6, #c4b5fd)"
	},
	8: {
		color: "#ec4899",
		bg: "rgba(236, 72, 153, 0.1)",
		gradient: "linear-gradient(135deg, #ec4899, #f9a8d4)"
	},
	9: {
		color: "#06b6d4",
		bg: "rgba(6, 182, 212, 0.1)",
		gradient: "linear-gradient(135deg, #06b6d4, #22d3ee)"
	},
	10: {
		color: "#f97316",
		bg: "rgba(249, 115, 22, 0.1)",
		gradient: "linear-gradient(135deg, #f97316, #fdba74)"
	}
};
GameData.FIGHT_SKILL_NAMES_9 = ["内功", "轻功", "绝技", "拳掌", "剑法", "刀法", "长兵", "奇门", "射术"];
GameData.LIVING_SKILL_NAMES_9 = ["医术", "炼丹", "锻造", "厨艺", "读书", "口才", "杂艺", "采集", "驯养"];
GameData.SKILL_CATS = [{
	"key": "all",
	"name": "全部"
}, {
	"key": "neigong",
	"name": "内功"
}, {
	"key": "qinggong",
	"name": "轻功"
}, {
	"key": "jueji",
	"name": "绝技"
}, {
	"key": "waigong",
	"name": "外功"
}, {
	"key": "quanxue",
	"name": "拳掌"
}, {
	"key": "jianfa",
	"name": "剑法"
}, {
	"key": "daofa",
	"name": "刀法"
}, {
	"key": "changbing",
	"name": "长兵"
}, {
	"key": "qimen",
	"name": "奇门"
}, {
	"key": "sheshu",
	"name": "射术"
}, {
	"key": "other",
	"name": "其他"
}];
GameData.ITEM_CATS = [{
	"key": "all",
	"name": "全部"
}, {
	"key": "0",
	"name": "装备"
}, {
	"key": "1",
	"name": "丹药"
}, {
	"key": "2",
	"name": "饮食"
}, {
	"key": "3",
	"name": "秘籍"
}, {
	"key": "4",
	"name": "珍宝"
}, {
	"key": "5",
	"name": "材料"
}, {
	"key": "6",
	"name": "马匹"
}, {
	"key": "7",
	"name": "马鞍"
}, {
	"key": "other",
	"name": "其他"
}];
GameData.ATTR_NAMES_6 = ["体质", "灵巧", "根骨", "悟性", "魅力", "福缘"];
GameData.ATTR_NAMES_6_2 = ["力道", "灵巧", "智力", "意志", "体质", "经脉"];
GameData.LIVING_SKILL_NAMES_9_ALT = ["医术", "毒术", "学识", "口才", "采伐", "木植", "锻造", "炼药", "烹饪"];
GameData.LV_COLORS = {
	6: "red",
	5: "red",
	4: "orange",
	3: "purple",
	2: "blue",
	1: "green",
	0: "gray"
};
GameData.RANK_COLORS = {
	0: "gray",
	1: "gray",
	2: "green",
	3: "green",
	4: "blue",
	5: "blue",
	6: "purple",
	7: "purple",
	8: "gold",
	9: "gold",
	10: "red"
};
GameData.LV_COLORS_ALT = {
	6: "red",
	5: "red",
	4: "gold",
	3: "purple",
	2: "blue",
	1: "green",
	0: "gray"
};
GameData.SPECIAL_BUILDINGS = {
	42: "京城",
	43: "杭州",
	44: "福州",
	45: "大理",
	46: "幽州",
	47: "晋阳",
	48: "成都",
	49: "灵州",
	50: "江陵",
	51: "扬州",
	52: "逻娑",
	53: "长乐帮",
	54: "唐门",
	55: "药王谷",
	56: "丐帮",
	57: "飞龙门",
	58: "茅山派",
	59: "铸剑山庄",
	60: "五毒教",
	61: "阎罗殿",
	62: "大隐阁",
	63: "少林寺",
	64: "武当派",
	65: "霸刀门",
	66: "蓬莱派",
	67: "峨眉派",
	68: "崆峒派",
	69: "神机门",
	70: "霹雳堂",
	71: "金刚密宗",
	72: "天山派",
	74: "应天",
	75: "西凉"
};
GameData.SPECIAL_BUILDINGS_DETAIL = {
	42: {
		name: "皇宫",
		desc: "加官进爵",
		isCity: true
	},
	43: {
		name: "大运河",
		desc: "珍宝交易",
		isCity: true
	},
	44: {
		name: "甘棠港",
		desc: "材料交易",
		isCity: true
	},
	45: {
		name: "崇圣寺",
		desc: "治愈伤病",
		isCity: true
	},
	46: {
		name: "长城",
		desc: "兵器交易",
		isCity: true
	},
	47: {
		name: "晋祠",
		desc: "布施银两",
		isCity: true
	},
	48: {
		name: "都江堰",
		desc: "美食交易",
		isCity: true
	},
	49: {
		name: "莫高窟",
		desc: "遗忘武学",
		isCity: true
	},
	50: {
		name: "黄鹤楼",
		desc: "招贤纳士",
		isCity: true
	},
	51: {
		name: "烟花柳巷",
		desc: "奢华宴会",
		isCity: true
	},
	52: {
		name: "布达拉宫",
		desc: "丹药交易",
		isCity: true
	},
	53: {
		name: "销金窟",
		desc: "提升口才上限",
		forceId: 0,
		forceName: "长乐帮"
	},
	54: {
		name: "暗室",
		desc: "提升射术上限",
		forceId: 1,
		forceName: "唐门"
	},
	55: {
		name: "万花谷",
		desc: "提升医术上限",
		forceId: 2,
		forceName: "药王谷"
	},
	56: {
		name: "大会台",
		desc: "提升拳掌上限",
		forceId: 3,
		forceName: "丐帮"
	},
	57: {
		name: "赛马场",
		desc: "提升长兵上限",
		forceId: 4,
		forceName: "飞龙门"
	},
	58: {
		name: "华阳洞",
		desc: "提升炼丹上限",
		forceId: 5,
		forceName: "茅山派"
	},
	59: {
		name: "剑池",
		desc: "提升锻造上限",
		forceId: 6,
		forceName: "铸剑山庄"
	},
	60: {
		name: "万毒池",
		desc: "提升毒术上限",
		forceId: 7,
		forceName: "五毒教"
	},
	61: {
		name: "鬼门关",
		desc: "提升采伐上限",
		forceId: 8,
		forceName: "阎罗殿"
	},
	62: {
		name: "星辰楼",
		desc: "提升轻功上限",
		forceId: 9,
		forceName: "大隐阁"
	},
	63: {
		name: "铜人阵",
		desc: "提升生命上限",
		forceId: 10,
		forceName: "少林寺"
	},
	64: {
		name: "紫霄宫",
		desc: "提升内力上限",
		forceId: 11,
		forceName: "武当派"
	},
	65: {
		name: "试刀台",
		desc: "提升刀法上限",
		forceId: 12,
		forceName: "霸刀门"
	},
	66: {
		name: "蓬莱阁",
		desc: "提升剑法上限",
		forceId: 13,
		forceName: "蓬莱派"
	},
	67: {
		name: "金顶",
		desc: "提升木植上限",
		forceId: 14,
		forceName: "峨眉派"
	},
	68: {
		name: "七十二洞",
		desc: "提升奇门上限",
		forceId: 15,
		forceName: "崆峒派"
	},
	69: {
		name: "机关坊",
		desc: "提升学识上限",
		forceId: 16,
		forceName: "神机门"
	},
	70: {
		name: "火炼室",
		desc: "提升烹饪上限",
		forceId: 17,
		forceName: "霹雳堂"
	},
	71: {
		name: "灵塔殿",
		desc: "提升绝技上限",
		forceId: 18,
		forceName: "金刚密宗"
	},
	72: {
		name: "玄冰池",
		desc: "提升内功上限",
		forceId: 19,
		forceName: "天山派"
	},
	74: {
		name: "应天书院",
		desc: "秘籍交易",
		isCity: true
	},
	75: {
		name: "河套马场",
		desc: "马匹交易",
		isCity: true
	}
};
GameData.AREA_TYPE_COLORS = {
	city: {
		primary: '#3b82f6',
		secondary: '#1d4ed8',
		bg: 'rgba(59, 130, 246, 0.15)'
	},
	village: {
		primary: '#10b981',
		secondary: '#047857',
		bg: 'rgba(16, 185, 129, 0.15)'
	},
	sect: {
		primary: '#f59e0b',
		secondary: '#d97706',
		bg: 'rgba(245, 158, 11, 0.15)'
	},
	special: {
		primary: '#8b5cf6',
		secondary: '#7c3aed',
		bg: 'rgba(139, 92, 246, 0.15)'
	}
};
GameData.AREA_TYPE_NAMES = {
	0: "城市",
	1: "村镇",
	2: "门派正厅",
	3: "野外"
};
GameData.MENPAI_NAMES = new Set(['长乐帮', '唐门', '药王谷', '丐帮', '飞龙门', '茅山派', '铸剑山庄', '五毒教', '阎罗殿', '大隐阁', '少林', '少林寺', '武当', '武当派', '霸刀门', '蓬莱派', '峨嵋派', '峨眉派', '崆峒派', '神机门', '霹雳堂', '金刚密宗', '天山', '天山派', '聚义门', '黄河帮', '八卦门', '海沙帮', '铁掌帮', '仙霞派', '巨鲸帮', '金龙帮', '青城派', '伏牛派']);
GameData.RESOURCE_NAMES = ["银两", "粮食", "木料", "矿石", "药材", "威望"];
GameData.SKILL_EFFECT_MAP = [{
	id: 0,
	name: "力道"
}, {
	id: 1,
	name: "灵巧"
}, {
	id: 2,
	name: "智力"
}, {
	id: 3,
	name: "意志"
}, {
	id: 4,
	name: "体质"
}, {
	id: 5,
	name: "经脉"
}, {
	id: 6,
	name: "内功"
}, {
	id: 7,
	name: "轻功"
}, {
	id: 8,
	name: "绝技"
}, {
	id: 9,
	name: "掌法"
}, {
	id: 10,
	name: "剑法"
}, {
	id: 11,
	name: "刀法"
}, {
	id: 12,
	name: "长兵"
}, {
	id: 13,
	name: "奇门"
}, {
	id: 14,
	name: "射术"
}, {
	id: 15,
	name: "内功威力%"
}, {
	id: 16,
	name: "轻功威力%"
}, {
	id: 17,
	name: "绝技威力%"
}, {
	id: 18,
	name: "掌法威力%"
}, {
	id: 19,
	name: "剑法威力%"
}, {
	id: 20,
	name: "刀法威力%"
}, {
	id: 21,
	name: "长兵威力%"
}, {
	id: 22,
	name: "奇门威力%"
}, {
	id: 23,
	name: "射术威力%"
}, {
	id: 24,
	name: "医术"
}, {
	id: 25,
	name: "毒术"
}, {
	id: 26,
	name: "学识"
}, {
	id: 27,
	name: "口才"
}, {
	id: 28,
	name: "采伐"
}, {
	id: 29,
	name: "木植"
}, {
	id: 30,
	name: "锻造"
}, {
	id: 31,
	name: "炼丹"
}, {
	id: 32,
	name: "烹饪"
}, {
	id: 33,
	name: "力道潜力"
}, {
	id: 34,
	name: "灵巧潜力"
}, {
	id: 35,
	name: "智力潜力"
}, {
	id: 36,
	name: "意志潜力"
}, {
	id: 37,
	name: "体质潜力"
}, {
	id: 38,
	name: "经脉潜力"
}, {
	id: 39,
	name: "内功潜力"
}, {
	id: 40,
	name: "轻功潜力"
}, {
	id: 41,
	name: "绝技潜力"
}, {
	id: 42,
	name: "拳掌潜力"
}, {
	id: 43,
	name: "剑法潜力"
}, {
	id: 44,
	name: "刀法潜力"
}, {
	id: 45,
	name: "长兵潜力"
}, {
	id: 46,
	name: "奇门潜力"
}, {
	id: 47,
	name: "射术潜力"
}, {
	id: 48,
	name: "医术潜力"
}, {
	id: 49,
	name: "毒术潜力"
}, {
	id: 50,
	name: "学识潜力"
}, {
	id: 51,
	name: "口才潜力"
}, {
	id: 52,
	name: "采伐潜力"
}, {
	id: 53,
	name: "木植潜力"
}, {
	id: 54,
	name: "锻造潜力"
}, {
	id: 55,
	name: "炼丹潜力"
}, {
	id: 56,
	name: "烹饪潜力"
}, {
	id: 57,
	name: "生命上限"
}, {
	id: 58,
	name: "体力上限"
}, {
	id: 59,
	name: "内力上限"
}, {
	id: 60,
	name: "伤害加成"
}, {
	id: 61,
	name: "护甲"
}, {
	id: 62,
	name: "护甲率%"
}, {
	id: 63,
	name: "速度%"
}, {
	id: 64,
	name: "命中%"
}, {
	id: 65,
	name: "闪避%"
}, {
	id: 66,
	name: "暴击率%"
}, {
	id: 67,
	name: "卸力%"
}, {
	id: 68,
	name: "反击%"
}, {
	id: 69,
	name: "压制%"
}, {
	id: 70,
	name: "连击率%"
}, {
	id: 71,
	name: "断联%"
}, {
	id: 72,
	name: "经验获取%"
}, {
	id: 73,
	name: "恢复效率%"
}, {
	id: 74,
	name: "伤害抗性%"
}, {
	id: 75,
	name: "负面加成%"
}, {
	id: 76,
	name: "负面抗性%"
}, {
	id: 77,
	name: "伤势抗性%"
}, {
	id: 78,
	name: "失衡%"
}, {
	id: 79,
	name: "急速%"
}, {
	id: 80,
	name: "外伤%"
}, {
	id: 81,
	name: "内伤%"
}, {
	id: 82,
	name: "毒素%"
}, {
	id: 83,
	name: "吸血%"
}, {
	id: 84,
	name: "吸内%"
}, {
	id: 85,
	name: "削内%"
}, {
	id: 86,
	name: "恢复%"
}, {
	id: 87,
	name: "灼烧%"
}, {
	id: 88,
	name: "疗伤%"
}, {
	id: 89,
	name: "流血%"
}, {
	id: 90,
	name: "调息%"
}, {
	id: 91,
	name: "雷电%"
}, {
	id: 92,
	name: "蓄力%"
}, {
	id: 93,
	name: "疲劳%"
}, {
	id: 94,
	name: "寒冰%"
}, {
	id: 95,
	name: "无敌%"
}, {
	id: 96,
	name: "眩晕%"
}, {
	id: 97,
	name: "手臂点穴%"
}, {
	id: 98,
	name: "腿足点穴%"
}, {
	id: 99,
	name: "心胸点穴%"
}, {
	id: 100,
	name: "腰腹点穴%"
}, {
	id: 101,
	name: "头颈点穴%"
}, {
	id: 102,
	name: "虚弱%"
}, {
	id: 103,
	name: "横练%"
}, {
	id: 104,
	name: "破甲%"
}, {
	id: 105,
	name: "轻灵%"
}, {
	id: 106,
	name: "迟缓%"
}, {
	id: 107,
	name: "鹰眼%"
}, {
	id: 108,
	name: "目盲%"
}, {
	id: 109,
	name: "飘逸%"
}, {
	id: 110,
	name: "笨拙%"
}, {
	id: 111,
	name: "霸体%"
}, {
	id: 112,
	name: "弱电%"
}, {
	id: 113,
	name: "疯魔%"
}, {
	id: 114,
	name: "混乱%"
}, {
	id: 115,
	name: "死战%"
}, {
	id: 116,
	name: "穿甲%"
}, {
	id: 117,
	name: "壮骨%"
}, {
	id: 118,
	name: "断骨%"
}, {
	id: 119,
	name: "舒筋%"
}, {
	id: 120,
	name: "伤筋%"
}, {
	id: 121,
	name: "醒脑%"
}, {
	id: 122,
	name: "震脑%"
}, {
	id: 123,
	name: "定神%"
}, {
	id: 124,
	name: "乱神%"
}, {
	id: 125,
	name: "活血%"
}, {
	id: 126,
	name: "凝血%"
}, {
	id: 127,
	name: "通脉%"
}, {
	id: 128,
	name: "截脉%"
}, {
	id: 129,
	name: "复生%"
}, {
	id: 130,
	name: "反伤%"
}, {
	id: 131,
	name: "反伤吸内%"
}, {
	id: 132,
	name: "反伤削内%"
}, {
	id: 133,
	name: "击退%"
}, {
	id: 134,
	name: "拉进%"
}, {
	id: 135,
	name: "慧眼%"
}, {
	id: 136,
	name: "昏沉%"
}, {
	id: 137,
	name: "铜皮%"
}, {
	id: 138,
	name: "脆弱%"
}, {
	id: 139,
	name: "不屈%"
}, {
	id: 140,
	name: "重碾%"
}, {
	id: 141,
	name: "连绵%"
}, {
	id: 142,
	name: "断腕%"
}, {
	id: 143,
	name: "断招%"
}, {
	id: 144,
	name: "阻滞%"
}, {
	id: 145,
	name: "杀机%"
}, {
	id: 146,
	name: "康复%"
}, {
	id: 147,
	name: "不愈%"
}, {
	id: 148,
	name: "坚毅%"
}, {
	id: 149,
	name: "动摇%"
}, {
	id: 150,
	name: "内劲%"
}, {
	id: 151,
	name: "真伤%"
}, {
	id: 152,
	name: "回血%"
}, {
	id: 153,
	name: "回内%"
}, {
	id: 154,
	name: "回体"
}, {
	id: 155,
	name: "自愈"
}, {
	id: 156,
	name: "护头"
}, {
	id: 157,
	name: "护心"
}, {
	id: 158,
	name: "护胸"
}, {
	id: 159,
	name: "护腹"
}, {
	id: 160,
	name: "护手"
}, {
	id: 161,
	name: "护足"
}, {
	id: 162,
	name: "护体真气%"
}, {
	id: 163,
	name: "反弹%"
}, {
	id: 164,
	name: "减伤"
}, {
	id: 165,
	name: "定身%"
}, {
	id: 166,
	name: "移距"
}, {
	id: 167,
	name: "神行%"
}, {
	id: 168,
	name: "裂膝%"
}, {
	id: 169,
	name: "破招%"
}, {
	id: 170,
	name: "拆招%"
}, {
	id: 171,
	name: "斗转%"
}, {
	id: 172,
	name: "声望获取%"
}, {
	id: 173,
	name: "功绩获取%"
}, {
	id: 174,
	name: "旅行速度%"
}, {
	id: 175,
	name: "疗伤效率%"
}, {
	id: 176,
	name: "实战经验%"
}, {
	id: 177,
	name: "理论经验%"
}, {
	id: 178,
	name: "技艺经验%"
}, {
	id: 179,
	name: "内功经验%"
}, {
	id: 180,
	name: "轻功经验%"
}, {
	id: 181,
	name: "绝技经验%"
}, {
	id: 182,
	name: "掌法经验%"
}, {
	id: 183,
	name: "剑法经验%"
}, {
	id: 184,
	name: "刀法经验%"
}, {
	id: 185,
	name: "长兵经验%"
}, {
	id: 186,
	name: "奇门经验%"
}, {
	id: 187,
	name: "射术经验%"
}, {
	id: 188,
	name: "医术经验%"
}, {
	id: 189,
	name: "毒术经验%"
}, {
	id: 190,
	name: "学识经验%"
}, {
	id: 191,
	name: "口才经验%"
}, {
	id: 192,
	name: "采伐经验%"
}, {
	id: 193,
	name: "木植经验%"
}, {
	id: 194,
	name: "锻造经验%"
}, {
	id: 195,
	name: "炼丹经验%"
}, {
	id: 196,
	name: "烹饪经验%"
}, {
	id: 197,
	name: "买卖优势%"
}, {
	id: 198,
	name: "拳掌距离"
}, {
	id: 199,
	name: "剑法距离"
}, {
	id: 200,
	name: "刀法距离"
}, {
	id: 201,
	name: "长兵距离"
}, {
	id: 202,
	name: "奇门距离"
}, {
	id: 203,
	name: "射术距离"
}, {
	id: 204,
	name: "坐骑加成%"
}, {
	id: 205,
	name: "装备强化%"
}, {
	id: 206,
	name: "抗耐药性%"
}, {
	id: 207,
	name: "装备重量"
}, {
	id: 208,
	name: "机关伤害%"
}, {
	id: 209,
	name: "机关速度%"
}, {
	id: 210,
	name: "机关耐久%"
}, {
	id: 211,
	name: "城防耐久%"
}, {
	id: 212,
	name: "好感获取%"
}, {
	id: 213,
	name: "本门武学威力%"
}, {
	id: 214,
	name: "恶名减少%"
}];
GameData.RELATION_TYPES = {
	"Teacher": {
		"name": "师父",
		"singular": true,
		"reverse": "Students",
		"reverseName": "弟子",
		"genderFilter": false
	},
	"Students": {
		"name": "弟子",
		"singular": false,
		"reverse": "Teacher",
		"reverseName": "师父",
		"genderFilter": false
	},
	"Lover": {
		"name": "夫妻",
		"singular": true,
		"reverse": "Lover",
		"reverseName": "夫妻",
		"genderFilter": true
	},
	"PreLovers": {
		"name": "情侣",
		"singular": false,
		"reverse": "PreLovers",
		"reverseName": "情侣",
		"genderFilter": true
	},
	"Brothers": {
		"name": "结义",
		"singular": false,
		"reverse": "Brothers",
		"reverseName": "结义",
		"genderFilter": false
	},
	"Friends": {
		"name": "朋友",
		"singular": false,
		"reverse": "Friends",
		"reverseName": "朋友",
		"genderFilter": false
	},
	"Haters": {
		"name": "仇敌",
		"singular": false,
		"reverse": "Haters",
		"reverseName": "仇敌",
		"genderFilter": false
	}
};
GameData.SPE_ATTR_NAMES = GameData.SKILL_EFFECT_MAP.map(e => e.name);
GameData.NATURE_NAMES = ["纯粹", "固执", "稳重", "忠厚", "简单", "灵活", "潇洒", "轻佻", "算计", "叛逆"];
GameData.HOBBY_NAMES = ["武器", "护甲", "头盔", "足履", "饰品"];
GameData.RARE_LV = {
	equip: {
		5: {
			name: "极品",
			color: "#dc2626"
		},
		4: {
			name: "珍品",
			color: "#d97706"
		},
		3: {
			name: "上品",
			color: "#7c3aed"
		},
		2: {
			name: "中品",
			color: "#3b82f6"
		},
		1: {
			name: "下品",
			color: "#059669"
		},
		0: {
			name: "残品",
			color: "#6b7280"
		}
	},
	dan: {
		5: {
			name: "极品",
			color: "#dc2626"
		},
		4: {
			name: "珍品",
			color: "#d97706"
		},
		3: {
			name: "上品",
			color: "#7c3aed"
		},
		2: {
			name: "中品",
			color: "#3b82f6"
		},
		1: {
			name: "下品",
			color: "#059669"
		},
		0: {
			name: "残品",
			color: "#6b7280"
		}
	},
	food: {
		5: {
			name: "极品",
			color: "#dc2626"
		},
		4: {
			name: "珍品",
			color: "#d97706"
		},
		3: {
			name: "上品",
			color: "#7c3aed"
		},
		2: {
			name: "中品",
			color: "#3b82f6"
		},
		1: {
			name: "下品",
			color: "#059669"
		},
		0: {
			name: "残品",
			color: "#6b7280"
		}
	},
	book: {
		5: {
			name: "完本",
			color: "#dc2626"
		},
		4: {
			name: "珍本",
			color: "#d97706"
		},
		3: {
			name: "古本",
			color: "#7c3aed"
		},
		2: {
			name: "善本",
			color: "#3b82f6"
		},
		1: {
			name: "仿本",
			color: "#059669"
		},
		0: {
			name: "残本",
			color: "#6b7280"
		}
	},
	treasure: null,
	horse: {
		5: {
			name: "极品",
			color: "#dc2626"
		},
		4: {
			name: "珍品",
			color: "#d97706"
		},
		3: {
			name: "上品",
			color: "#7c3aed"
		},
		2: {
			name: "中品",
			color: "#3b82f6"
		},
		1: {
			name: "下品",
			color: "#059669"
		},
		0: {
			name: "残品",
			color: "#6b7280"
		}
	},
	saddle: {
		5: {
			name: "极品",
			color: "#dc2626"
		},
		4: {
			name: "珍品",
			color: "#d97706"
		},
		3: {
			name: "上品",
			color: "#7c3aed"
		},
		2: {
			name: "中品",
			color: "#3b82f6"
		},
		1: {
			name: "下品",
			color: "#059669"
		},
		0: {
			name: "残品",
			color: "#6b7280"
		}
	}
};
GameData.RARE_LV_NAMES = Object.keys(GameData.RARE_LV.equip || {}).sort((a, b) => a - b).map(k => GameData.RARE_LV.equip[k].name);
GameData.ITEM_LV = {
	6: {
		name: "绝世",
		color: "#dc2626",
		desc: "绝世物品、绝世武学、掌门、成就天赋"
	},
	5: {
		name: "绝世",
		color: "#dc2626",
		desc: "绝世物品、绝世武学、副掌门、红色天赋"
	},
	4: {
		name: "顶级/完美",
		color: "#d97706",
		desc: "完美物品、顶级武学、长老、金色天赋"
	},
	3: {
		name: "秘传/精良",
		color: "#7c3aed",
		desc: "精良物品、秘传武学、亲传弟子"
	},
	2: {
		name: "上乘/优质",
		color: "#3b82f6",
		desc: "优质物品、上乘武学、正式弟子、蓝色天赋"
	},
	1: {
		name: "进阶/普通",
		color: "#059669",
		desc: "普通物品、进阶武学、入门弟子、绿色天赋"
	},
	0: {
		name: "基础/劣质",
		color: "#6b7280",
		desc: "劣质物品、基础武学、外门弟子"
	}
};
GameData.ITEM_TYPE_NAMES = {
	0: "装备",
	1: "丹药",
	2: "饮食",
	3: "秘籍",
	4: "珍宝",
	5: "材料",
	6: "马匹",
	7: "马鞍"
};
GameData.STATIC_ITEMS = {
	weapons: [{
		id: 0,
		名字: "手甲",
		小类: 0,
		属性: 0,
		动画: "skill0_0"
	}, {
		id: 1,
		名字: "指刺",
		小类: 0,
		属性: 1,
		动画: "skill0_2"
	}, {
		id: 2,
		名字: "钩爪",
		小类: 0,
		属性: 2,
		动画: "skill0_0"
	}, {
		id: 3,
		名字: "指虎",
		小类: 0,
		属性: 3,
		动画: "skill0_2"
	}, {
		id: 4,
		名字: "拳套",
		小类: 0,
		属性: 4,
		动画: "skill0_0"
	}, {
		id: 5,
		名字: "指环",
		小类: 0,
		属性: 5,
		动画: "skill0_2"
	}, {
		id: 6,
		名字: "重剑",
		小类: 1,
		属性: 0,
		动画: "skill1_2"
	}, {
		id: 7,
		名字: "短剑",
		小类: 1,
		属性: 1,
		动画: "skill1_1"
	}, {
		id: 8,
		名字: "细剑",
		小类: 1,
		属性: 2,
		动画: "skill1_1"
	}, {
		id: 9,
		名字: "长剑",
		小类: 1,
		属性: 3,
		动画: "skill1_2"
	}, {
		id: 10,
		名字: "大剑",
		小类: 1,
		属性: 4,
		动画: "skill1_2"
	}, {
		id: 11,
		名字: "软剑",
		小类: 1,
		属性: 5,
		动画: "skill1_1"
	}, {
		id: 12,
		名字: "重刀",
		小类: 2,
		属性: 0,
		动画: "skill2_1"
	}, {
		id: 13,
		名字: "短刀",
		小类: 2,
		属性: 1,
		动画: "skill2_0"
	}, {
		id: 14,
		名字: "唐刀",
		小类: 2,
		属性: 2,
		动画: "skill2_0"
	}, {
		id: 15,
		名字: "朴刀",
		小类: 2,
		属性: 3,
		动画: "skill2_1"
	}, {
		id: 16,
		名字: "大刀",
		小类: 2,
		属性: 4,
		动画: "skill2_1"
	}, {
		id: 17,
		名字: "弯刀",
		小类: 2,
		属性: 5,
		动画: "skill2_0"
	}, {
		id: 18,
		名字: "长戟",
		小类: 3,
		属性: 0,
		动画: "skill3_1"
	}, {
		id: 19,
		名字: "长枪",
		小类: 3,
		属性: 1,
		动画: "skill3_1"
	}, {
		id: 20,
		名字: "长叉",
		小类: 3,
		属性: 2,
		动画: "skill3_1"
	}, {
		id: 21,
		名字: "长戈",
		小类: 3,
		属性: 3,
		动画: "skill3_2"
	}, {
		id: 22,
		名字: "长矛",
		小类: 3,
		属性: 4,
		动画: "skill3_2"
	}, {
		id: 23,
		名字: "长棍",
		小类: 3,
		属性: 5,
		动画: "skill3_2"
	}, {
		id: 24,
		名字: "飞轮",
		小类: 4,
		属性: 0,
		动画: "skill4_1"
	}, {
		id: 25,
		名字: "对刺",
		小类: 4,
		属性: 1,
		动画: "skill4_0"
	}, {
		id: 26,
		名字: "判笔",
		小类: 4,
		属性: 2,
		动画: "skill4_4"
	}, {
		id: 27,
		名字: "软鞭",
		小类: 4,
		属性: 3,
		动画: "skill4_3"
	}, {
		id: 28,
		名字: "铁扇",
		小类: 4,
		属性: 4,
		动画: "skill4_6"
	}, {
		id: 29,
		名字: "瑶琴",
		小类: 4,
		属性: 5,
		动画: "skill4_8"
	}, {
		id: 30,
		名字: "长弓",
		小类: 5,
		属性: 0,
		动画: "skill5_2"
	}, {
		id: 31,
		名字: "短弓",
		小类: 5,
		属性: 1,
		动画: "skill5_0"
	}, {
		id: 32,
		名字: "曲弓",
		小类: 5,
		属性: 2,
		动画: "skill5_2"
	}, {
		id: 33,
		名字: "直弓",
		小类: 5,
		属性: 3,
		动画: "skill5_0"
	}, {
		id: 34,
		名字: "硬弓",
		小类: 5,
		属性: 4,
		动画: "skill5_2"
	}, {
		id: 35,
		名字: "软弓",
		小类: 5,
		属性: 5,
		动画: "skill5_0"
	}],
	armors: [{
		id: 0,
		名字: "布甲",
		类别: 1,
		小类: 0,
		护甲: 3,
		轻功: 1
	}, {
		id: 1,
		名字: "轻甲",
		类别: 1,
		小类: 1,
		护甲: 4,
		轻功: 0
	}, {
		id: 2,
		名字: "链甲",
		类别: 1,
		小类: 2,
		护甲: 5,
		轻功: -1
	}, {
		id: 3,
		名字: "鳞甲",
		类别: 1,
		小类: 3,
		护甲: 6,
		轻功: -2
	}, {
		id: 4,
		名字: "铠甲",
		类别: 1,
		小类: 4,
		护甲: 7,
		轻功: -3
	}, {
		id: 5,
		名字: "重甲",
		类别: 1,
		小类: 5,
		护甲: 8,
		轻功: -4
	}, {
		id: 0,
		名字: "发带",
		类别: 2,
		小类: 0,
		护甲: 1,
		轻功: 2
	}, {
		id: 1,
		名字: "头冠",
		类别: 2,
		小类: 1,
		护甲: 2,
		轻功: 1
	}, {
		id: 2,
		名字: "斗笠",
		类别: 2,
		小类: 2,
		护甲: 3,
		轻功: 0
	}, {
		id: 3,
		名字: "半盔",
		类别: 2,
		小类: 3,
		护甲: 4,
		轻功: -1
	}, {
		id: 4,
		名字: "全盔",
		类别: 2,
		小类: 4,
		护甲: 5,
		轻功: -2
	}, {
		id: 5,
		名字: "重盔",
		类别: 2,
		小类: 5,
		护甲: 6,
		轻功: -3
	}, {
		id: 0,
		名字: "布鞋",
		类别: 3,
		小类: 0,
		护甲: -1,
		轻功: 4
	}, {
		id: 1,
		名字: "鞋履",
		类别: 3,
		小类: 1,
		护甲: 0,
		轻功: 3
	}, {
		id: 2,
		名字: "短靴",
		类别: 3,
		小类: 2,
		护甲: 1,
		轻功: 2
	}, {
		id: 3,
		名字: "长靴",
		类别: 3,
		小类: 3,
		护甲: 2,
		轻功: 1
	}, {
		id: 4,
		名字: "胫甲",
		类别: 3,
		小类: 4,
		护甲: 3,
		轻功: 0
	}, {
		id: 5,
		名字: "重靴",
		类别: 3,
		小类: 5,
		护甲: 4,
		轻功: -1
	}],
	accessories: [{
		id: 0,
		名字: "腰带",
		类别: 4,
		littleType: 4,
		意志: 3,
		体质: 3
	}, {
		id: 1,
		名字: "香囊",
		类别: 4,
		littleType: 0,
		智力: 3,
		体质: 3
	}, {
		id: 2,
		名字: "玉佩",
		类别: 4,
		littleType: 3,
		力道: 3,
		体质: 3
	}, {
		id: 3,
		名字: "扳指",
		类别: 4,
		littleType: 2,
		灵巧: 4,
		体质: 4
	}, {
		id: 4,
		名字: "羽扇",
		类别: 4,
		littleType: 1,
		智力: 6
	}, {
		id: 5,
		名字: "面具",
		类别: 4,
		littleType: 5,
		灵巧: 3,
		意志: 3
	}],
	accessoryTemplates: (function() {
		const baseAccessories = [{
			id: 0,
			名字: "腰带",
			类别: 4,
			littleType: 4,
			意志: 3,
			体质: 3
		}, {
			id: 1,
			名字: "香囊",
			类别: 4,
			littleType: 0,
			智力: 3,
			体质: 3
		}, {
			id: 2,
			名字: "玉佩",
			类别: 4,
			littleType: 3,
			力道: 3,
			体质: 3
		}, {
			id: 3,
			名字: "扳指",
			类别: 4,
			littleType: 2,
			灵巧: 4,
			体质: 4
		}, {
			id: 4,
			名字: "羽扇",
			类别: 4,
			littleType: 1,
			智力: 6
		}, {
			id: 5,
			名字: "面具",
			类别: 4,
			littleType: 5,
			灵巧: 3,
			意志: 3
		}];
		const qualityNames = ['劣质', '普通', '优质', '精良', '完美', '绝世'];
		const rareNames = ['', '', '', '', '', ''];
		const templates = [];
		let templateId = 0;
		for (let q = 0; q < 6; q++) {
			for (let r = 0; r < 6; r++) {
				baseAccessories.forEach(acc => {
					const multiplier = 1 + q * 0.2 + r * 0.15;
					templates.push({
						id: templateId++,
						名字: (q > 0 ? qualityNames[q] : "") + acc.名字 + (r > 0 ? "" + rareNames[r] + "" : ""),
						类别: acc.类别,
						littleType: acc.littleType,
						等级: q,
						稀有度: r,
						力道: acc.力道 ? Math.round(acc.力道 * multiplier) : undefined,
						灵巧: acc.灵巧 ? Math.round(acc.灵巧 * multiplier) : undefined,
						智力: acc.智力 ? Math.round(acc.智力 * multiplier) : undefined,
						意志: acc.意志 ? Math.round(acc.意志 * multiplier) : undefined,
						体质: acc.体质 ? Math.round(acc.体质 * multiplier) : undefined,
						经脉: acc.经脉 ? Math.round(acc.经脉 * multiplier) : undefined,
						价值: Math.round(100 * (1 + q * 0.5 + r * 0.3))
					})
				})
			}
		}
		return templates
	})(),
	saddles: [{
		id: 0,
		名字: "劣质马鞍",
		类别: 1,
		速度: 2,
		力量: 10,
		冲刺: 3,
		抗性: 3,
		负重: 18
	}, {
		id: 1,
		名字: "普通马鞍",
		类别: 1,
		速度: 4,
		力量: 20,
		冲刺: 6,
		抗性: 6,
		负重: 36
	}, {
		id: 2,
		名字: "优质马鞍",
		类别: 1,
		速度: 6,
		力量: 30,
		冲刺: 9,
		抗性: 9,
		负重: 54
	}, {
		id: 3,
		名字: "精良马鞍",
		类别: 1,
		速度: 8,
		力量: 40,
		冲刺: 12,
		抗性: 12,
		负重: 72
	}, {
		id: 4,
		名字: "完美马鞍",
		类别: 1,
		速度: 10,
		力量: 50,
		冲刺: 15,
		抗性: 15,
		负重: 90
	}, {
		id: 5,
		名字: "绝世马鞍",
		类别: 1,
		速度: 12,
		力量: 60,
		冲刺: 18,
		抗性: 18,
		负重: 999
	}],
	saddleTemplates: (function() {
		const baseSaddles = [{
			id: 0,
			名字: "劣质马鞍",
			类别: 1,
			速度: 2,
			力量: 10,
			冲刺: 3,
			抗性: 3,
			负重: 18
		}, {
			id: 1,
			名字: "普通马鞍",
			类别: 1,
			速度: 4,
			力量: 20,
			冲刺: 6,
			抗性: 6,
			负重: 36
		}, {
			id: 2,
			名字: "优质马鞍",
			类别: 1,
			速度: 6,
			力量: 30,
			冲刺: 9,
			抗性: 9,
			负重: 54
		}, {
			id: 3,
			名字: "精良马鞍",
			类别: 1,
			速度: 8,
			力量: 40,
			冲刺: 12,
			抗性: 12,
			负重: 72
		}, {
			id: 4,
			名字: "完美马鞍",
			类别: 1,
			速度: 10,
			力量: 50,
			冲刺: 15,
			抗性: 15,
			负重: 90
		}, {
			id: 5,
			名字: "绝世马鞍",
			类别: 1,
			速度: 12,
			力量: 60,
			冲刺: 18,
			抗性: 18,
			负重: 999
		}];
		const qualityNames = ['', '', '', '', '', ''];
		const rareNames = ['', '', '', '', '', ''];
		const templates = [];
		let templateId = 0;
		for (let q = 0; q < 6; q++) {
			for (let r = 0; r < 6; r++) {
				baseSaddles.forEach(saddle => {
					const multiplier = 1 + q * 0.2 + r * 0.15;
					templates.push({
						id: templateId++,
						名字: (q > 0 ? qualityNames[q] : "") + saddle.名字 + (r > 0 ? "" + rareNames[r] + "" : ""),
						类别: saddle.类别,
						等级: q,
						稀有度: r,
						速度: Math.round(saddle.速度 * multiplier),
						力量: Math.round(saddle.力量 * multiplier),
						冲刺: Math.round(saddle.冲刺 * multiplier),
						抗性: Math.round(saddle.抗性 * multiplier),
						负重: Math.round(saddle.负重 * multiplier),
						价值: Math.round(100 * (1 + q * 0.5 + r * 0.3))
					})
				})
			}
		}
		return templates
	})(),
	meds: [{
		ID: 0,
		名称: "补血丹",
		描述: "",
		等级: 0,
		生命: 20,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 25,
		小类: 0,
		审核名: "无"
	}, {
		ID: 1,
		名称: "小还丹",
		描述: "",
		等级: 1,
		生命: 40,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 50,
		小类: 0,
		审核名: "无"
	}, {
		ID: 2,
		名称: "大还丹",
		描述: "",
		等级: 2,
		生命: 80,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 100,
		小类: 0,
		审核名: "无"
	}, {
		ID: 3,
		名称: "人参养荣丸",
		描述: "",
		等级: 3,
		生命: 120,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 4,
		名称: "玉洞黑石丹",
		描述: "",
		等级: 4,
		生命: 160,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 400,
		小类: 0,
		审核名: "无"
	}, {
		ID: 5,
		名称: "万灵回生散",
		描述: "",
		等级: 5,
		生命: 200,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 800,
		小类: 0,
		审核名: "无"
	}, {
		ID: 6,
		名称: "益气散",
		描述: "",
		等级: 0,
		生命: 0,
		生命上限: 0,
		内力: 40,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 25,
		小类: 0,
		审核名: "无"
	}, {
		ID: 7,
		名称: "行气丹",
		描述: "",
		等级: 1,
		生命: 0,
		生命上限: 0,
		内力: 80,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 50,
		小类: 0,
		审核名: "无"
	}, {
		ID: 8,
		名称: "逍遥丹",
		描述: "",
		等级: 2,
		生命: 0,
		生命上限: 0,
		内力: 160,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 100,
		小类: 0,
		审核名: "无"
	}, {
		ID: 9,
		名称: "参苓白术散",
		描述: "",
		等级: 3,
		生命: 0,
		生命上限: 0,
		内力: 240,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 10,
		名称: "济生养气丸",
		描述: "",
		等级: 4,
		生命: 0,
		生命上限: 0,
		内力: 320,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 400,
		小类: 0,
		审核名: "无"
	}, {
		ID: 11,
		名称: "紫霄玄关散",
		描述: "",
		等级: 5,
		生命: 0,
		生命上限: 0,
		内力: 400,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 800,
		小类: 0,
		审核名: "无"
	}, {
		ID: 12,
		名称: "八珍散",
		描述: "",
		等级: 0,
		生命: 15,
		生命上限: 0,
		内力: 30,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 50,
		小类: 0,
		审核名: "无"
	}, {
		ID: 13,
		名称: "无常丹",
		描述: "",
		等级: 1,
		生命: 30,
		生命上限: 0,
		内力: 60,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 100,
		小类: 0,
		审核名: "无"
	}, {
		ID: 14,
		名称: "紫金丹",
		描述: "",
		等级: 2,
		生命: 60,
		生命上限: 0,
		内力: 120,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 15,
		名称: "天王补心丹",
		描述: "",
		等级: 3,
		生命: 90,
		生命上限: 0,
		内力: 180,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 400,
		小类: 0,
		审核名: "无"
	}, {
		ID: 16,
		名称: "生生造化丹",
		描述: "",
		等级: 4,
		生命: 120,
		生命上限: 0,
		内力: 240,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 800,
		小类: 0,
		审核名: "无"
	}, {
		ID: 17,
		名称: "九转还魂丹",
		描述: "",
		等级: 5,
		生命: 150,
		生命上限: 0,
		内力: 300,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 1600,
		小类: 0,
		审核名: "无"
	}, {
		ID: 18,
		名称: "止血散",
		描述: "",
		等级: 0,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: -5,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 50,
		小类: 0,
		审核名: "无"
	}, {
		ID: 19,
		名称: "金疮散",
		描述: "",
		等级: 1,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: -10,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 100,
		小类: 0,
		审核名: "无"
	}, {
		ID: 20,
		名称: "三七跌打散",
		描述: "",
		等级: 2,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: -20,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 21,
		名称: "接骨七厘散",
		描述: "",
		等级: 3,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: -30,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 400,
		小类: 0,
		审核名: "无"
	}, {
		ID: 22,
		名称: "血府逐瘀散",
		描述: "",
		等级: 4,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: -40,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 800,
		小类: 0,
		审核名: "无"
	}, {
		ID: 23,
		名称: "天香断续散",
		描述: "",
		等级: 5,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: -50,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 1600,
		小类: 0,
		审核名: "无"
	}, {
		ID: 24,
		名称: "通络丹",
		描述: "",
		等级: 0,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: -5,
		中毒: 0,
		Buff: 0,
		价值: 50,
		小类: 0,
		审核名: "无"
	}, {
		ID: 25,
		名称: "紫藤丹",
		描述: "",
		等级: 1,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: -10,
		中毒: 0,
		Buff: 0,
		价值: 100,
		小类: 0,
		审核名: "无"
	}, {
		ID: 26,
		名称: "牛黄血竭丹",
		描述: "",
		等级: 2,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: -20,
		中毒: 0,
		Buff: 0,
		价值: 200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 27,
		名称: "田七鲨胆丹",
		描述: "",
		等级: 3,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: -30,
		中毒: 0,
		Buff: 0,
		价值: 400,
		小类: 0,
		审核名: "无"
	}, {
		ID: 28,
		名称: "三黄宝腊丹",
		描述: "",
		等级: 4,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: -40,
		中毒: 0,
		Buff: 0,
		价值: 800,
		小类: 0,
		审核名: "无"
	}, {
		ID: 29,
		名称: "还阳正气丹",
		描述: "",
		等级: 5,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: -50,
		中毒: 0,
		Buff: 0,
		价值: 1600,
		小类: 0,
		审核名: "无"
	}, {
		ID: 30,
		名称: "黄连丸",
		描述: "",
		等级: 0,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: -5,
		Buff: 0,
		价值: 50,
		小类: 0,
		审核名: "无"
	}, {
		ID: 31,
		名称: "荆防丸",
		描述: "",
		等级: 1,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: -10,
		Buff: 0,
		价值: 100,
		小类: 0,
		审核名: "无"
	}, {
		ID: 32,
		名称: "六味地黄丸",
		描述: "",
		等级: 2,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: -20,
		Buff: 0,
		价值: 200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 33,
		名称: "天心解毒丸",
		描述: "",
		等级: 3,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: -30,
		Buff: 0,
		价值: 400,
		小类: 0,
		审核名: "无"
	}, {
		ID: 34,
		名称: "金花玉露丸",
		描述: "",
		等级: 4,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: -40,
		Buff: 0,
		价值: 800,
		小类: 0,
		审核名: "无"
	}, {
		ID: 35,
		名称: "龙涎净厄丸",
		描述: "",
		等级: 5,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: -50,
		Buff: 0,
		价值: 1600,
		小类: 0,
		审核名: "无"
	}],
	foods: [{
		ID: 0,
		名称: "腊八粥",
		描述: "",
		等级: 0,
		生命: 0,
		生命上限: 1,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 100,
		小类: 0,
		审核名: "无"
	}, {
		ID: 1,
		名称: "炖老母鸡",
		描述: "",
		等级: 1,
		生命: 0,
		生命上限: 2,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 2,
		名称: "天麻鱼头",
		描述: "",
		等级: 2,
		生命: 0,
		生命上限: 4,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 400,
		小类: 0,
		审核名: "无"
	}, {
		ID: 3,
		名称: "沙苑甲鱼汤",
		描述: "",
		等级: 3,
		生命: 0,
		生命上限: 6,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 800,
		小类: 0,
		审核名: "无"
	}, {
		ID: 4,
		名称: "参茸熊掌",
		描述: "",
		等级: 4,
		生命: 0,
		生命上限: 8,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 1600,
		小类: 0,
		审核名: "无"
	}, {
		ID: 5,
		名称: "十全大补汤",
		描述: "",
		等级: 5,
		生命: 0,
		生命上限: 10,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 3200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 6,
		名称: "雄黄酒",
		描述: "",
		等级: 0,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 2,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 100,
		小类: 1,
		审核名: "乌龙茶"
	}, {
		ID: 7,
		名称: "蛇酒",
		描述: "",
		等级: 1,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 4,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 200,
		小类: 1,
		审核名: "肉桂茶"
	}, {
		ID: 8,
		名称: "三鞭酒",
		描述: "",
		等级: 2,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 8,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 400,
		小类: 1,
		审核名: "铁观音茶"
	}, {
		ID: 9,
		名称: "鹿胎酒",
		描述: "",
		等级: 3,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 12,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 800,
		小类: 1,
		审核名: "白牡丹茶"
	}, {
		ID: 10,
		名称: "虎骨酒",
		描述: "",
		等级: 4,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 16,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 1600,
		小类: 1,
		审核名: "大红袍茶"
	}, {
		ID: 11,
		名称: "龙脑酒",
		描述: "",
		等级: 5,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 20,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 3200,
		小类: 1,
		审核名: "凤凰水仙茶"
	}, {
		ID: 12,
		名称: "烧饼",
		描述: "",
		等级: 0,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 20,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 25,
		小类: 0,
		审核名: "无"
	}, {
		ID: 13,
		名称: "肉包",
		描述: "",
		等级: 1,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 30,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 50,
		小类: 0,
		审核名: "无"
	}, {
		ID: 14,
		名称: "煎饺",
		描述: "",
		等级: 2,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 40,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 100,
		小类: 0,
		审核名: "无"
	}, {
		ID: 15,
		名称: "烧鸡",
		描述: "",
		等级: 3,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 60,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 16,
		名称: "红烧肉",
		描述: "",
		等级: 4,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 80,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 400,
		小类: 0,
		审核名: "无"
	}, {
		ID: 17,
		名称: "乳猪",
		描述: "",
		等级: 5,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 100,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 0,
		价值: 800,
		小类: 0,
		审核名: "无"
	}, {
		ID: 18,
		名称: "浊酒",
		描述: "",
		等级: 0,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 10,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 1,
		价值: 50,
		小类: 1,
		审核名: "绿茶"
	}, {
		ID: 19,
		名称: "烧刀子",
		描述: "",
		等级: 1,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 15,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 2,
		价值: 100,
		小类: 1,
		审核名: "龙井茶"
	}, {
		ID: 20,
		名称: "竹叶青",
		描述: "",
		等级: 2,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 20,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 3,
		价值: 200,
		小类: 1,
		审核名: "碧螺春茶"
	}, {
		ID: 21,
		名称: "葡萄酒",
		描述: "",
		等级: 3,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 30,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 4,
		价值: 400,
		小类: 1,
		审核名: "毛峰茶"
	}, {
		ID: 22,
		名称: "新丰酒",
		描述: "",
		等级: 4,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 40,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 5,
		价值: 800,
		小类: 1,
		审核名: "云雾茶"
	}, {
		ID: 23,
		名称: "杜康酒",
		描述: "",
		等级: 5,
		生命: 0,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 50,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 6,
		价值: 1600,
		小类: 1,
		审核名: "太平猴魁茶"
	}, {
		ID: 24,
		名称: "桂圆枸杞粥",
		描述: "",
		等级: 0,
		生命: 10,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 1,
		价值: 50,
		小类: 0,
		审核名: "无"
	}, {
		ID: 25,
		名称: "茯苓糕",
		描述: "",
		等级: 1,
		生命: 20,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 2,
		价值: 100,
		小类: 0,
		审核名: "无"
	}, {
		ID: 26,
		名称: "当归炖羊肉",
		描述: "",
		等级: 2,
		生命: 40,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 3,
		价值: 200,
		小类: 0,
		审核名: "无"
	}, {
		ID: 27,
		名称: "虫草老鸭煲",
		描述: "",
		等级: 3,
		生命: 60,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 4,
		价值: 400,
		小类: 0,
		审核名: "无"
	}, {
		ID: 28,
		名称: "四君子汤",
		描述: "",
		等级: 4,
		生命: 80,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 5,
		价值: 800,
		小类: 0,
		审核名: "无"
	}, {
		ID: 29,
		名称: "烩八珍",
		描述: "",
		等级: 5,
		生命: 100,
		生命上限: 0,
		内力: 0,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 6,
		价值: 1600,
		小类: 0,
		审核名: "无"
	}, {
		ID: 30,
		名称: "清酒",
		描述: "",
		等级: 0,
		生命: 0,
		生命上限: 0,
		内力: 20,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 1,
		价值: 50,
		小类: 1,
		审核名: "红茶"
	}, {
		ID: 31,
		名称: "花雕酒",
		描述: "",
		等级: 1,
		生命: 0,
		生命上限: 0,
		内力: 40,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 2,
		价值: 100,
		小类: 1,
		审核名: "工夫茶"
	}, {
		ID: 32,
		名称: "女儿红",
		描述: "",
		等级: 2,
		生命: 0,
		生命上限: 0,
		内力: 80,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 3,
		价值: 200,
		小类: 1,
		审核名: "古树茶"
	}, {
		ID: 33,
		名称: "桑落酒",
		描述: "",
		等级: 3,
		生命: 0,
		生命上限: 0,
		内力: 120,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 4,
		价值: 400,
		小类: 1,
		审核名: "九曲红梅茶"
	}, {
		ID: 34,
		名称: "猴儿酿",
		描述: "",
		等级: 4,
		生命: 0,
		生命上限: 0,
		内力: 160,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 5,
		价值: 800,
		小类: 1,
		审核名: "金骏眉茶"
	}, {
		ID: 35,
		名称: "换骨醪",
		描述: "",
		等级: 5,
		生命: 0,
		生命上限: 0,
		内力: 200,
		内力上限: 0,
		体力: 0,
		外伤: 0,
		内伤: 0,
		中毒: 0,
		Buff: 6,
		价值: 1600,
		小类: 1,
		审核名: "正山小种茶"
	}],
	horses: [{
		ID: 0,
		名称: "骡子",
		描述: "马和驴杂交而成，体质结实，肢蹄强健，多见于民间",
		等级: 0,
		速度: 10,
		耐力: 15,
		冲刺: 10,
		抗性: 15,
		价值: 200
	}, {
		ID: 1,
		名称: "驴子",
		描述: "四肢瘦弱，躯干短小的畜类，速度缓慢但刻苦耐劳",
		等级: 0,
		速度: 5,
		耐力: 20,
		冲刺: 5,
		抗性: 20,
		价值: 200
	}, {
		ID: 2,
		名称: "跛脚马",
		描述: "腿脚受过伤或是天生残疾的马匹，胜在价格便宜",
		等级: 0,
		速度: 10,
		耐力: 20,
		冲刺: 10,
		抗性: 10,
		价值: 200
	}, {
		ID: 3,
		名称: "小马",
		描述: "天生体型弱小的马匹，令人几乎不忍骑乘",
		等级: 0,
		速度: 15,
		耐力: 10,
		冲刺: 15,
		抗性: 10,
		价值: 200
	}, {
		ID: 4,
		名称: "劣马",
		描述: "品质拙劣且难以驾驭的马匹，往往是马贩子的淘汰品",
		等级: 0,
		速度: 15,
		耐力: 15,
		冲刺: 15,
		抗性: 5,
		价值: 200
	}, {
		ID: 5,
		名称: "矮马",
		描述: "天生体型低矮的马匹，骑乘后双脚几乎不离地面",
		等级: 0,
		速度: 20,
		耐力: 20,
		冲刺: 5,
		抗性: 5,
		价值: 200
	}, {
		ID: 6,
		名称: "驮马",
		描述: "专用于货运的马匹，由于常年负重，多有慢性病",
		等级: 0,
		速度: 15,
		耐力: 15,
		冲刺: 5,
		抗性: 15,
		价值: 200
	}, {
		ID: 7,
		名称: "瘦马",
		描述: "天生体型瘦削的马匹，常年营养不良导致肋骨根根分明",
		等级: 0,
		速度: 25,
		耐力: 10,
		冲刺: 10,
		抗性: 5,
		价值: 200
	}, {
		ID: 8,
		名称: "大马",
		描述: "体质强健的高头大马，武林人士常用",
		等级: 1,
		速度: 20,
		耐力: 30,
		冲刺: 20,
		抗性: 30,
		价值: 400
	}, {
		ID: 9,
		名称: "烈马",
		描述: "性格爆裂，难以驾驭的马匹，狂奔时速度极快",
		等级: 1,
		速度: 45,
		耐力: 10,
		冲刺: 35,
		抗性: 10,
		价值: 400
	}, {
		ID: 10,
		名称: "军马",
		描述: "军中所用的马匹，速度与耐久较为均衡",
		等级: 1,
		速度: 30,
		耐力: 25,
		冲刺: 25,
		抗性: 20,
		价值: 400
	}, {
		ID: 11,
		名称: "快马",
		描述: "信差和驿站常用的马匹，以快速见长",
		等级: 1,
		速度: 40,
		耐力: 15,
		冲刺: 40,
		抗性: 5,
		价值: 400
	}, {
		ID: 12,
		名称: "战马",
		描述: "骑兵所用冲锋陷阵之马匹，性能优良，坚忍不拔",
		等级: 1,
		速度: 35,
		耐力: 20,
		冲刺: 30,
		抗性: 15,
		价值: 400
	}, {
		ID: 13,
		名称: "河曲马",
		描述: "黄河盘曲上游草原上所产马种，体格健硕，农用或军用皆可",
		等级: 1,
		速度: 20,
		耐力: 35,
		冲刺: 15,
		抗性: 30,
		价值: 400
	}, {
		ID: 14,
		名称: "西南马",
		描述: "云贵川地区所产马种，体型较小，善于穿越复杂地形",
		等级: 1,
		速度: 25,
		耐力: 25,
		冲刺: 25,
		抗性: 25,
		价值: 400
	}, {
		ID: 15,
		名称: "山地马",
		描述: "山区所产，极为矮小的马种，其耐力持久，擅长翻山越岭",
		等级: 1,
		速度: 15,
		耐力: 30,
		冲刺: 20,
		抗性: 35,
		价值: 400
	}, {
		ID: 16,
		名称: "蒙古马",
		描述: "产于蒙古草原的优良马种，体格不大，但极为勇猛健壮",
		等级: 2,
		速度: 40,
		耐力: 40,
		冲刺: 35,
		抗性: 35,
		价值: 800
	}, {
		ID: 17,
		名称: "哈萨克马",
		描述: "产于新疆的草原马，体格中等，性能均衡，是许多西北优良马种的祖先",
		等级: 2,
		速度: 25,
		耐力: 55,
		冲刺: 20,
		抗性: 50,
		价值: 800
	}, {
		ID: 18,
		名称: "伊犁马",
		描述: "以哈萨克马为基础杂交而成，体格高大，身形匀称，且禀性灵敏",
		等级: 2,
		速度: 35,
		耐力: 45,
		冲刺: 30,
		抗性: 40,
		价值: 800
	}, {
		ID: 19,
		名称: "乌孙马",
		描述: "产于西域乌孙国的一种良马，汉武帝称之为天马",
		等级: 2,
		速度: 30,
		耐力: 50,
		冲刺: 40,
		抗性: 30,
		价值: 800
	}, {
		ID: 20,
		名称: "五花马",
		描述: "将鬃毛修剪成五瓣作为装饰的骏马",
		等级: 2,
		速度: 35,
		耐力: 35,
		冲刺: 40,
		抗性: 40,
		价值: 800
	}, {
		ID: 21,
		名称: "白兔马",
		描述: "静若处子，动若突兔之白马，深得少年侠士之喜爱",
		等级: 2,
		速度: 50,
		耐力: 30,
		冲刺: 45,
		抗性: 25,
		价值: 800
	}, {
		ID: 22,
		名称: "枣红马",
		描述: "遍体枣红色的马匹，性格温驯，极为吃苦耐劳",
		等级: 2,
		速度: 25,
		耐力: 60,
		冲刺: 20,
		抗性: 45,
		价值: 800
	}, {
		ID: 23,
		名称: "绿耳马",
		描述: "青黄色的骏马，传说其先祖曾为周穆王驾车驱使",
		等级: 2,
		速度: 45,
		耐力: 25,
		冲刺: 50,
		抗性: 30,
		价值: 800
	}, {
		ID: 24,
		名称: "白义马",
		描述: "带有淡淡铁灰色的俊美白马，传说其先祖曾为周穆王驾车驱使",
		等级: 3,
		速度: 50,
		耐力: 50,
		冲刺: 50,
		抗性: 50,
		价值: 1600
	}, {
		ID: 25,
		名称: "青骓马",
		描述: "苍白杂色骏马，其冲刺速度迅猛异常，先祖亦曾随唐太宗征战一时",
		等级: 3,
		速度: 40,
		耐力: 60,
		冲刺: 60,
		抗性: 40,
		价值: 1600
	}, {
		ID: 26,
		名称: "华骝马",
		描述: "黄中带红的骏马，其祖先亦是为周穆王驾车的八骏之一",
		等级: 3,
		速度: 45,
		耐力: 55,
		冲刺: 65,
		抗性: 35,
		价值: 1600
	}, {
		ID: 27,
		名称: "黄骠马",
		描述: "此马遍体黄毛中带有白点，头有白毛，状如满月，是难得一遇的宝马良驹",
		等级: 3,
		速度: 55,
		耐力: 65,
		冲刺: 35,
		抗性: 45,
		价值: 1600
	}, {
		ID: 28,
		名称: "骕骦马",
		描述: "此马色如霜纨，形如秋雁，毛发如白练，高首而脩颈，气质如霜，寒气逼人",
		等级: 3,
		速度: 65,
		耐力: 45,
		冲刺: 55,
		抗性: 35,
		价值: 1600
	}, {
		ID: 29,
		名称: "玉花骢",
		描述: "毛色青白相杂，身形优雅健美之骏马，堪称马中之美人也",
		等级: 3,
		速度: 60,
		耐力: 30,
		冲刺: 60,
		抗性: 50,
		价值: 1600
	}, {
		ID: 30,
		名称: "奔宵马",
		描述: "遍体漆黑之骏马，传说其先祖可夜行万里",
		等级: 3,
		速度: 75,
		耐力: 35,
		冲刺: 50,
		抗性: 40,
		价值: 1600
	}, {
		ID: 31,
		名称: "纤离马",
		描述: "体型纤细之骏马，其奔驰速度快若闪电，极为迅捷",
		等级: 3,
		速度: 70,
		耐力: 40,
		冲刺: 70,
		抗性: 20,
		价值: 1600
	}, {
		ID: 32,
		名称: "乌骓马",
		描述: "毛色如绸缎般柔亮，体格极为健壮的黑马，霸王项羽曾骑着这种战马征伐四方",
		等级: 4,
		速度: 45,
		耐力: 70,
		冲刺: 60,
		抗性: 75,
		价值: 3200
	}, {
		ID: 33,
		名称: "白蹄乌",
		描述: "有四只白蹄的纯黑色骏马，其先祖位列唐太宗六骏，被赞为倚天长剑，追风骏足",
		等级: 4,
		速度: 70,
		耐力: 60,
		冲刺: 50,
		抗性: 70,
		价值: 3200
	}, {
		ID: 34,
		名称: "什伐赤",
		描述: "产自波斯的赤红骏马，其先祖曾随唐太宗征战虎牢关，身中五箭而亡",
		等级: 4,
		速度: 50,
		耐力: 75,
		冲刺: 55,
		抗性: 70,
		价值: 3200
	}, {
		ID: 35,
		名称: "拳毛驹",
		描述: "黄皮黑嘴，身布连环旋毛，世人多以为丑，然而其矫健善走，蹄大快程，不可以貌取之",
		等级: 4,
		速度: 75,
		耐力: 65,
		冲刺: 45,
		抗性: 65,
		价值: 3200
	}, {
		ID: 36,
		名称: "斑豹马",
		描述: "周身斑点如豹纹的马匹，其速度与爆发力均有虎豹之威",
		等级: 4,
		速度: 80,
		耐力: 50,
		冲刺: 70,
		抗性: 50,
		价值: 3200
	}, {
		ID: 37,
		名称: "赤骥马",
		描述: "毛色赤红的骏马，传说其祖先在周穆王八骏之中最得恩宠",
		等级: 4,
		速度: 65,
		耐力: 55,
		冲刺: 65,
		抗性: 65,
		价值: 3200
	}, {
		ID: 38,
		名称: "麒麟兽",
		描述: "身形矫健，勇猛无比的骏马，其奔驰时周身鬃毛飘逸，如同麒麟降世一般",
		等级: 4,
		速度: 55,
		耐力: 80,
		冲刺: 40,
		抗性: 75,
		价值: 3200
	}, {
		ID: 39,
		名称: "照夜白",
		描述: "遍体雪白的骏马，在夜间疾驰时化作一道白练，所过之处好似被照亮一般",
		等级: 4,
		速度: 60,
		耐力: 85,
		冲刺: 75,
		抗性: 30,
		价值: 3200
	}, {
		ID: 40,
		名称: "汗血马",
		描述: "大宛百里挑一的珍贵名马，因奔跑后流汗如血而得名，爱马之人视之如至宝",
		等级: 5,
		速度: 80,
		耐力: 80,
		冲刺: 80,
		抗性: 60,
		价值: 6400
	}, {
		ID: 41,
		名称: "赤兔马",
		描述: "遍体火红，体型庞大之骏马，冲锋时势大力猛，如烈火燎原，堪称马中王者",
		等级: 5,
		速度: 90,
		耐力: 70,
		冲刺: 85,
		抗性: 55,
		价值: 6400
	}, {
		ID: 42,
		名称: "的卢马",
		描述: "速度迅捷，跳跃冲刺能力亦极为惊人的名马，传说其先祖曾背负刘备越过阔数丈的檀溪",
		等级: 5,
		速度: 75,
		耐力: 60,
		冲刺: 95,
		抗性: 70,
		价值: 6400
	}, {
		ID: 43,
		名称: "绝影马",
		描述: "风驰电掣，连影子亦追随不及之快马，传说曹操曾骑其先祖逃脱重围",
		等级: 5,
		速度: 85,
		耐力: 75,
		冲刺: 75,
		抗性: 65,
		价值: 6400
	}, {
		ID: 44,
		名称: "特勒骠",
		描述: "应策腾空，承声半汉，入险摧敌，乘危济难，其先祖乃突厥名马，作为贡品随唐太宗征战多年",
		等级: 5,
		速度: 65,
		耐力: 90,
		冲刺: 65,
		抗性: 80,
		价值: 6400
	}, {
		ID: 45,
		名称: "神凫马",
		描述: "传说祖先乃秦始皇座下名马，为求仙药随其东巡，过名川大山如飞履平地",
		等级: 5,
		速度: 95,
		耐力: 50,
		冲刺: 70,
		抗性: 85,
		价值: 6400
	}, {
		ID: 46,
		名称: "飒露紫",
		描述: "紫燕超跃，骨腾神骏，气詟三川，威凌八阵，其先祖曾为救唐太宗于重围之中而殒命，可谓忠勇过人",
		等级: 5,
		速度: 60,
		耐力: 85,
		冲刺: 80,
		抗性: 75,
		价值: 6400
	}, {
		ID: 47,
		名称: "白龙驹",
		描述: "遍体白毛，神采秀逸之骏马，其奔腾若风雷，世人皆以为是白龙所化",
		等级: 5,
		速度: 70,
		耐力: 95,
		冲刺: 60,
		抗性: 75,
		价值: 6400
	}],
	books: [],
	treasures: [],
	materials: [{
		ID: 0,
		名称: "木料",
		描述: "制作装备的基础材料",
		小类: 0
	}, {
		ID: 1,
		名称: "矿料",
		描述: "锻造装备的必备材料",
		小类: 1
	}, {
		ID: 2,
		名称: "药引",
		描述: "炼制丹药的辅助材料",
		小类: 2
	}, {
		ID: 3,
		名称: "食材",
		描述: "烹饪饮食的基础材料",
		小类: 3
	}, {
		ID: 4,
		名称: "毒物",
		描述: "炼制毒药的原料",
		小类: 4
	}]
};
GameData.STATIC_ITEMS_LOADED = true;
GameData.generateQualityItems = function() {
	const SI = GameData.STATIC_ITEMS;
	const LV_NAMES = ['劣质', '普通', '优质', '精良', '完美', '绝世'];
	const RARE_NAMES = ['', '', '', '', '', ''];
	const generateWeaponVariants = (baseItem, baseId) => {
		const variants = [];
		for (let lv = 0; lv <= 5; lv++) {
			for (let rare = 0; rare <= 5; rare++) {
				const lvName = LV_NAMES[lv];
				const rareName = RARE_NAMES[rare];
				const name = `${lvName}${rareName}${baseItem.名字}`;
				const value = Math.round(2000 * (1 + lv + rare * 1.6));
				variants.push({
					...baseItem,
					id: baseId * 100 + lv * 10 + rare,
					名字: name,
					等级: lv,
					稀有度: rare,
					价值: value,
					原始ID: baseItem.id
				})
			}
		}
		return variants
	};
	const generateArmorVariants = (baseItem, baseId, category) => {
		const variants = [];
		for (let lv = 0; lv <= 5; lv++) {
			for (let rare = 0; rare <= 5; rare++) {
				const lvName = LV_NAMES[lv];
				const rareName = RARE_NAMES[rare];
				const name = `${lvName}${rareName}${baseItem.名字}`;
				const value = Math.round((80 + lv * 40 + rare * 25) * (1 + lv * 0.2));
				const armorBonus = Math.round((baseItem.护甲 || 0) * (1 + lv * 0.1 + rare * 0.05));
				const agiBonus = Math.round((baseItem.轻功 || 0) * (1 + rare * 0.1));
				variants.push({
					...baseItem,
					id: category * 1000 + baseId * 100 + lv * 10 + rare,
					名字: name,
					等级: lv,
					稀有度: rare,
					价值: value,
					护甲: armorBonus,
					轻功: agiBonus,
					原始ID: baseItem.id,
					原始类别: category
				})
			}
		}
		return variants
	};
	const generateMedFoodVariants = (baseItem, baseId, isFood) => {
		const variants = [];
		for (let rare = 0; rare <= 5; rare++) {
			const rareName = RARE_NAMES[rare];
			const name = `${rareName}${baseItem.名称}`;
			const value = Math.round((baseItem.价值 || 100) * (1 + rare * 2.05));
			const effectMult = 1 + rare * 0.2;
			variants.push({
				...baseItem,
				ID: baseId * 10 + rare,
				名称: name,
				稀有度: rare,
				价值: value,
				生命: Math.round((baseItem.生命 || 0) * effectMult),
				生命上限: Math.round((baseItem.生命上限 || 0) * effectMult),
				内力: Math.round((baseItem.内力 || 0) * effectMult),
				内力上限: Math.round((baseItem.内力上限 || 0) * effectMult),
				体力: Math.round((baseItem.体力 || 0) * effectMult),
				外伤: baseItem.外伤 ? Math.round(baseItem.外伤 * effectMult) : 0,
				内伤: baseItem.内伤 ? Math.round(baseItem.内伤 * effectMult) : 0,
				中毒: baseItem.中毒 ? Math.round(baseItem.中毒 * effectMult) : 0,
				原始ID: baseItem.ID
			})
		}
		return variants
	};
	const generateHorseVariants = (baseItem, baseId) => {
		const variants = [];
		const originalId = baseItem.ID || baseId;
		for (let rare = 0; rare <= 5; rare++) {
			const rareName = rare === 5 ? "" : RARE_NAMES[rare];
			const name = `${rareName}${baseItem.名称}`;
			const baseValue = baseItem.价值 || 200;
			const value = Math.round(baseValue + rare * (baseValue * 0.4875));
			const statMult = 1 + rare * 0.15;
			variants.push({
				...baseItem,
				ID: originalId,
				名称: name,
				稀有度: rare,
				价值: value,
				速度: Math.round((baseItem.速度 || 10) * statMult),
				耐力: Math.round((baseItem.耐力 || 10) * statMult),
				冲刺: Math.round((baseItem.冲刺 || 10) * statMult),
				抗性: Math.round((baseItem.抗性 || 10) * statMult),
				原始ID: originalId
			})
		}
		return variants
	};
	const generateMaterialVariants = (baseItem, baseId) => {
		const variants = [];
		const typeNames = {
			0: '木料',
			1: '矿料',
			2: '药引',
			3: '食材',
			4: '毒物'
		};
		const typeName = typeNames[baseItem.小类] || baseItem.名称;
		for (let lv = 0; lv <= 5; lv++) {
			const lvName = LV_NAMES[lv];
			const name = `${lvName}${typeName}`;
			const value = Math.round(10 * (1 + lv * 0.5));
			variants.push({
				...baseItem,
				ID: baseId * 10 + lv,
				名称: name,
				等级: lv,
				稀有度: lv,
				价值: value,
				小类: baseItem.小类,
				原始ID: baseItem.ID
			})
		}
		return variants
	};
	const generateTreasureVariants = () => {
		const variants = [];
		const lvPrefixes = ['劣质', '普通', '优质', '精良', '完美', '绝世'];
		const treasureTypes = [{
			subType: 0,
			baseName: "乐器",
			desc: "世间罕见的乐器，音律天成"
		}, {
			subType: 1,
			baseName: "棋谱",
			desc: "围棋名谱，记载精妙棋局"
		}, {
			subType: 2,
			baseName: "字帖",
			desc: "小学一直练的那个"
		}, {
			subType: 3,
			baseName: "画本",
			desc: "传世名画，描绘汴京繁华"
		}, {
			subType: 4,
			baseName: "香炉",
			desc: "青铜铸造的香炉，古朴典雅"
		}, {
			subType: 5,
			baseName: "织物",
			desc: "珍贵貂皮制成的御寒裘衣"
		}, {
			subType: 6,
			baseName: "珠玉",
			desc: "上等珠玉，色泽翠绿通透"
		}, {
			subType: 7,
			baseName: "酒器",
			desc: "喝酒的杯子,开车别喝酒"
		}, {
			subType: 8,
			baseName: "史书",
			desc: "史家之绝唱"
		}, {
			subType: 9,
			baseName: "典籍",
			desc: "儒家经典，记载礼乐制度"
		}];
		treasureTypes.forEach(t => {
			for (let lv = 0; lv <= 5; lv++) {
				for (let rare = 0; rare <= 5; rare++) {
					const slotValue = Math.pow(lv, 4);
					const value = Math.pow(lv, 2) * rare * slotValue || 100;
					variants.push({
						ID: 0,
						名称: lvPrefixes[lv] + t.baseName,
						描述: t.desc,
						等级: lv,
						稀有度: rare,
						价值: value,
						子类: t.subType
					})
				}
			}
		});
		return variants
	};
	const originalWeapons = [...SI.weapons];
	const originalArmors = [...SI.armors];
	const originalMeds = [...SI.meds];
	const originalFoods = [...SI.foods];
	const originalHorses = [...SI.horses];
	const originalMaterials = [...SI.materials];
	SI.weapons = [];
	originalWeapons.forEach((w, idx) => {
		SI.weapons.push(...generateWeaponVariants(w, idx))
	});
	SI.armors = [];
	originalArmors.forEach((a, idx) => {
		const category = a.类别 || 1;
		SI.armors.push(...generateArmorVariants(a, idx, category))
	});
	SI.meds = [];
	originalMeds.forEach((m, idx) => {
		SI.meds.push(...generateMedFoodVariants(m, idx, false))
	});
	SI.foods = [];
	originalFoods.forEach((f, idx) => {
		SI.foods.push(...generateMedFoodVariants(f, idx, true))
	});
	SI.horses = [];
	originalHorses.forEach((h, idx) => {
		SI.horses.push(...generateHorseVariants(h, idx))
	});
	SI.materialTemplates = [];
	originalMaterials.forEach((m, idx) => {
		SI.materialTemplates.push(...generateMaterialVariants(m, idx))
	});
	SI.treasures = generateTreasureVariants();
	SI.baseWeapons = originalWeapons;
	SI.baseArmors = originalArmors;
	SI.baseMeds = originalMeds;
	SI.baseFoods = originalFoods;
	SI.baseHorses = originalHorses;
	SI.baseMaterials = originalMaterials;
};
GameData.generateQualityItems();
GameData.generateRandomAffixes = function(rareLv, count, isWeapon, weaponType) {
	const affixes = {};
	const usedIds = new Set();
	const lvRanges = {
		5: {
			minInt: 10,
			maxInt: 20,
			minPct: 0.08,
			maxPct: 0.16
		},
		4: {
			minInt: 8,
			maxInt: 16,
			minPct: 0.06,
			maxPct: 0.12
		},
		3: {
			minInt: 6,
			maxInt: 12,
			minPct: 0.04,
			maxPct: 0.08
		},
		2: {
			minInt: 4,
			maxInt: 8,
			minPct: 0.02,
			maxPct: 0.05
		},
		1: {
			minInt: 2,
			maxInt: 5,
			minPct: 0.01,
			maxPct: 0.03
		},
		0: {
			minInt: 1,
			maxInt: 3,
			minPct: 0.005,
			maxPct: 0.01
		}
	};
	const range = lvRanges[Math.min(rareLv, 5)] || lvRanges[0];
	const sixAttrs = [0, 1, 2, 3, 4, 5];
	const fightSkills = [6, 7, 8, 9, 10, 11, 12, 13, 14];
	const fightSkillPct = [15, 16, 17, 18, 19, 20, 21, 22, 23];
	const livingSkills = [24, 25, 26, 27, 28, 29, 30, 31, 32];
	const combatPctAttrs = [60, 62, 63, 64, 65, 66, 67, 68, 69, 70, 74, 76, 77];
	const weaponTypeToSkill = {
		0: 9,
		1: 10,
		2: 11,
		3: 12,
		4: 13,
		5: 14
	};
	const weaponTypeToSkillPct = {
		0: 18,
		1: 19,
		2: 20,
		3: 21,
		4: 22,
		5: 23
	};
	const intAttrIds = [...sixAttrs, ...fightSkills, ...livingSkills, 57, 58, 59, 61];
	const pctAttrIds = [...fightSkillPct, ...combatPctAttrs];
	for (let i = 0; i < count; i++) {
		let attrId;
		let isPct = false;
		if (isWeapon && weaponType !== undefined && i === 0) {
			const skillPctId = weaponTypeToSkillPct[weaponType];
			if (skillPctId !== undefined && !usedIds.has(skillPctId)) {
				attrId = skillPctId;
				isPct = true
			}
		}
		if (attrId === undefined) {
			const roll = Math.random();
			if (roll < 0.25) {
				const available = sixAttrs.filter(id => !usedIds.has(id));
				if (available.length > 0) {
					attrId = available[Math.floor(Math.random() * available.length)]
				}
			} else if (roll < 0.5) {
				const available = fightSkills.filter(id => !usedIds.has(id));
				if (available.length > 0) {
					attrId = available[Math.floor(Math.random() * available.length)]
				}
			} else if (roll < 0.7) {
				let availablePct = pctAttrIds.filter(id => !usedIds.has(id));
				if (isWeapon && weaponType !== undefined) {
					const preferredPct = [weaponTypeToSkillPct[weaponType], 64, 65, 66, 70].filter(id => id !== undefined);
					const preferred = availablePct.filter(id => preferredPct.includes(id));
					if (preferred.length > 0) availablePct = preferred
				} else if (!isWeapon) {
					const armorPreferredPct = [62, 63, 65, 67, 74, 76, 77];
					const preferred = availablePct.filter(id => armorPreferredPct.includes(id));
					if (preferred.length > 0) availablePct = preferred
				}
				if (availablePct.length > 0) {
					attrId = availablePct[Math.floor(Math.random() * availablePct.length)];
					isPct = true
				}
			} else {
				const available = livingSkills.filter(id => !usedIds.has(id));
				if (available.length > 0) {
					attrId = available[Math.floor(Math.random() * available.length)]
				}
			}
		}
		if (attrId === undefined) {
			const allAvailable = [...intAttrIds, ...pctAttrIds].filter(id => !usedIds.has(id));
			if (allAvailable.length === 0) continue;
			attrId = allAvailable[Math.floor(Math.random() * allAvailable.length)]
		}
		usedIds.add(attrId);
		const isPercentageAttr = pctAttrIds.includes(attrId) || isPct;
		let value;
		if (isPercentageAttr) {
			value = range.minPct + Math.random() * (range.maxPct - range.minPct);
			value = Math.round(value * 1000) / 1000
		} else {
			value = range.minInt + Math.floor(Math.random() * (range.maxInt - range.minInt + 1))
		}
		affixes[String(attrId)] = value
	}
	return affixes
};
GameData.createStaticItem = function(type, data) {
	const baseItem = {
		itemID: data.id || data.ID || 0,
		type: type,
		subType: 0,
		name: data.名字 || data.名称 || "未命名",
		checkName: null,
		describe: null,
		value: data.价值 || 100,
		itemLv: data.等级 || 0,
		rareLv: data.稀有度 || 0,
		weight: 10.0,
		isNew: true,
		poisonNum: 0.0,
		poisonNumDetected: false,
		equipmentData: null,
		medFoodData: null,
		bookData: null,
		treasureData: null,
		materialData: null,
		horseData: null
	};
	if (type === 0) {
		const isWeapon = data.小类 !== undefined && data.类别 === undefined;
		const isArmor = data.类别 !== undefined && data.类别 <= 3;
		const isAccessory = data.类别 === 4;
		const itemLv = data.等级 || 0;
		const rareLv = data.稀有度 || 0;
		if (isWeapon) {
			baseItem.subType = 0;
			const weaponId = data.id || data.ID || 0;
			const weaponLittleType = data.小类 !== undefined ? data.小类 : weaponId;
			baseItem.itemID = weaponId;
			baseItem.equipmentData = {
				enhanceLv: 0,
				littleType: weaponLittleType,
				attriType: data.属性 || 0,
				baseAddData: {
					heroSpeAddData: {}
				},
				extraAddData: {
					heroSpeAddData: {}
				},
				equiped: false,
				animName: data.动画 || "",
				equipPoisonData: {
					poisonNum: 0,
					poisonBuffData: {
						heroSpeAddData: {}
					}
				},
				speEnhanceLv: 0,
				speWeightLv: 0
			};
			const baseAtk = 5 + itemLv * 3 + rareLv * 2;
			baseItem.equipmentData.baseAddData.heroSpeAddData["2"] = baseAtk;
			const randomAffixes = GameData.generateRandomAffixes(rareLv, 3, true, weaponLittleType);
			Object.assign(baseItem.equipmentData.extraAddData.heroSpeAddData, randomAffixes)
		} else if (isArmor) {
			const armorType = data.类别 || 1;
			const armorInnerId = data.id || data.ID || 0;
			const armorLittleType = data.小类 !== undefined ? data.小类 : armorInnerId;
			baseItem.subType = armorType;
			baseItem.itemID = armorInnerId;
			const armorAnimNames = {
				1: "armor_body",
				2: "armor_helmet",
				3: "armor_boots"
			};
			baseItem.equipmentData = {
				enhanceLv: 0,
				littleType: armorLittleType,
				attriType: 0,
				baseAddData: {
					heroSpeAddData: {}
				},
				extraAddData: {
					heroSpeAddData: {}
				},
				equiped: false,
				animName: armorAnimNames[armorType] || "armor_body",
				equipPoisonData: {
					poisonNum: 0,
					poisonBuffData: {
						heroSpeAddData: {}
					}
				},
				speEnhanceLv: 0,
				speWeightLv: 0
			};
			if (data.护甲) baseItem.equipmentData.baseAddData.heroSpeAddData["61"] = data.护甲;
			if (data.轻功) baseItem.equipmentData.baseAddData.heroSpeAddData["7"] = data.轻功;
			const randomAffixes = GameData.generateRandomAffixes(rareLv, 2, false);
			Object.assign(baseItem.equipmentData.extraAddData.heroSpeAddData, randomAffixes)
		} else if (isAccessory) {
			const accessoryId = data.id || data.ID || 0;
			const accessoryLittleType = data.littleType !== undefined ? data.littleType : accessoryId;
			baseItem.subType = 4;
			baseItem.itemID = accessoryId;
			baseItem.equipmentData = {
				enhanceLv: 0,
				littleType: accessoryLittleType,
				attriType: 0,
				baseAddData: {
					heroSpeAddData: {}
				},
				extraAddData: {
					heroSpeAddData: {}
				},
				equiped: false,
				animName: "",
				equipPoisonData: {
					poisonNum: 0,
					poisonBuffData: {
						heroSpeAddData: {}
					}
				},
				speEnhanceLv: 0,
				speWeightLv: 0
			};
			if (data.力道) baseItem.equipmentData.baseAddData.heroSpeAddData["0"] = data.力道;
			if (data.灵巧) baseItem.equipmentData.baseAddData.heroSpeAddData["1"] = data.灵巧;
			if (data.智力) baseItem.equipmentData.baseAddData.heroSpeAddData["2"] = data.智力;
			if (data.意志) baseItem.equipmentData.baseAddData.heroSpeAddData["3"] = data.意志;
			if (data.体质) baseItem.equipmentData.baseAddData.heroSpeAddData["4"] = data.体质;
			if (data.经脉) baseItem.equipmentData.baseAddData.heroSpeAddData["5"] = data.经脉;
			const randomAffixes = GameData.generateRandomAffixes(rareLv, 2, false);
			Object.assign(baseItem.equipmentData.extraAddData.heroSpeAddData, randomAffixes)
		} else {
			baseItem.subType = 0;
			baseItem.equipmentData = {
				enhanceLv: 0,
				littleType: 0,
				attriType: 0,
				baseAddData: {
					heroSpeAddData: {}
				},
				extraAddData: {
					heroSpeAddData: {}
				},
				equiped: false,
				animName: "",
				equipPoisonData: {
					poisonNum: 0,
					poisonBuffData: {
						heroSpeAddData: {}
					}
				},
				speEnhanceLv: 0,
				speWeightLv: 0
			};
			const randomAffixes = GameData.generateRandomAffixes(rareLv, 2, false);
			Object.assign(baseItem.equipmentData.extraAddData.heroSpeAddData, randomAffixes)
		}
	} else if (type === 1) {
		const medId = data.id || data.ID || 0;
		const medLv = data.等级 || 0;
		const rareLv = data.稀有度 !== undefined ? data.稀有度 : medLv;
		baseItem.itemID = medId;
		baseItem.itemLv = medLv;
		baseItem.rareLv = rareLv;
		baseItem.value = Math.round((data.价值 || 100) * (1 + rareLv * 0.5));
		baseItem.subType = data.小类 || 0;
		const effectMultiplier = 1 + rareLv * 0.2;
		baseItem.medFoodData = {
			enhanceLv: 0,
			changeHeroState: {
				hp: Math.round((data.生命 || 0) * effectMultiplier),
				maxhp: Math.round((data.生命上限 || 0) * effectMultiplier),
				mana: Math.round((data.内力 || 0) * effectMultiplier),
				maxMana: Math.round((data.内力上限 || 0) * effectMultiplier),
				power: Math.round((data.体力 || 0) * effectMultiplier),
				externalInjury: Math.round((data.外伤 || 0) * effectMultiplier),
				internalInjury: Math.round((data.内伤 || 0) * effectMultiplier),
				poisonInjury: Math.round((data.中毒 || 0) * effectMultiplier)
			},
			extraAddData: {
				heroSpeAddData: {}
			}
		};
		const rarePrefixes = {
			0: "",
			1: "",
			2: "",
			3: "",
			4: "",
			5: ""
		};
		if (rareLv >= 2 && rarePrefixes[rareLv]) {
			baseItem.name = rarePrefixes[rareLv] + baseItem.name
		}
	} else if (type === 2) {
		const foodId = data.id || data.ID || 0;
		const foodLv = data.等级 || 0;
		const rareLv = data.稀有度 !== undefined ? data.稀有度 : foodLv;
		baseItem.itemID = foodId;
		baseItem.itemLv = foodLv;
		baseItem.rareLv = rareLv;
		baseItem.value = Math.round((data.价值 || 100) * (1 + rareLv * 0.5));
		baseItem.subType = data.小类 || 0;
		const effectMultiplier = 1 + rareLv * 0.2;
		baseItem.medFoodData = {
			enhanceLv: 0,
			changeHeroState: {
				hp: Math.round((data.生命 || 0) * effectMultiplier),
				maxhp: Math.round((data.生命上限 || 0) * effectMultiplier),
				mana: Math.round((data.内力 || 0) * effectMultiplier),
				maxMana: Math.round((data.内力上限 || 0) * effectMultiplier),
				power: Math.round((data.体力 || 0) * effectMultiplier),
				externalInjury: Math.round((data.外伤 || 0) * effectMultiplier),
				internalInjury: Math.round((data.内伤 || 0) * effectMultiplier),
				poisonInjury: Math.round((data.中毒 || 0) * effectMultiplier)
			},
			extraAddData: {
				heroSpeAddData: {}
			}
		};
		const rarePrefixes = {
			0: "",
			1: "",
			2: "",
			3: "",
			4: "",
			5: ""
		};
		if (rareLv >= 2 && rarePrefixes[rareLv]) {
			baseItem.name = rarePrefixes[rareLv] + baseItem.name
		}
	} else if (type === 6) {
		const horseId = data.ID || data.id || 0;
		const horseLv = data.等级 || 0;
		baseItem.itemID = horseId;
		baseItem.subType = 0;
		baseItem.itemLv = horseLv;
		baseItem.rareLv = horseLv;
		baseItem.value = data.价值 || 200;
		baseItem.horseData = {
			equiped: false,
			speed: data.速度 || 10,
			power: data.耐力 || 10,
			sprint: data.冲刺 || 10,
			resist: data.抗性 || 10,
			speedAdd: 0,
			powerAdd: 0,
			sprintAdd: 0,
			resistAdd: 0,
			maxWeightAdd: 0,
			nowPower: 100,
			favorRate: 0,
			sprintTimeLeft: 0,
			sprintTimeCd: 0
		}
	} else if (type === 7) {
		const saddleId = data.id || data.ID || 0;
		const saddleLv = data.等级 || 0;
		baseItem.type = 6;
		baseItem.itemID = 0;
		baseItem.subType = 1;
		baseItem.itemLv = saddleLv;
		baseItem.rareLv = saddleLv;
		baseItem.value = data.价值 || 200;
		baseItem.horseData = {
			equiped: false,
			speed: data.速度 || 0,
			power: data.力量 || 0,
			sprint: data.冲刺 || 0,
			resist: data.抗性 || 0,
			speedAdd: 0,
			powerAdd: 0,
			sprintAdd: 0,
			resistAdd: 0,
			maxWeightAdd: data.负重 || 0,
			nowPower: 0,
			favorRate: 0,
			sprintTimeLeft: 0,
			sprintTimeCd: 0
		}
	} else if (type === 3) {
		const bookId = data.ID || data.id || 0;
		const bookItemLv = data.等级 || 0;
		const bookRareLv = data.稀有度 || 0;
		baseItem.itemID = bookId;
		baseItem.subType = 0;
		baseItem.itemLv = bookItemLv;
		baseItem.rareLv = bookRareLv;
		baseItem.describe = data.描述 || "";
		const bookBaseValues = [1000, 2000, 4000, 8000, 16000, 32000];
		const baseValue = bookBaseValues[bookItemLv] || 1000;
		const rareMultiplier = 0.2 + bookRareLv * 0.16;
		baseItem.value = Math.round(baseValue * rareMultiplier);
		baseItem.bookData = {
			skillID: data.技能ID || bookId,
			exp: 0,
			maxExp: 100
		}
	} else if (type === 4) {
		const treasureId = data.ID || data.id || 0;
		const treasureLv = data.等级 || 0;
		baseItem.itemID = treasureId;
		baseItem.subType = data.子类 !== undefined ? data.子类 : 0;
		baseItem.itemLv = treasureLv;
		baseItem.rareLv = data.稀有度 || 0;
		baseItem.value = data.价值 || 100;
		baseItem.weight = 10.0;
		baseItem.poisonNum = 0.0;
		const topLv = Math.min(5, treasureLv);
		baseItem.treasureData = {
			fullIdentified: true,
			identifyKnowledgeNeed: 50.0 + topLv * 10.0,
			treasureLv: [topLv, topLv, topLv, topLv],
			identifyDifficulty: [50.0, 50.0, 50.0, 50.0],
			identified: [true, true, true, true],
			playerGuessTreasureLv: [[0,1,2,3,4,5], [0,1,2,3,4,5], [0,1,2,3,4,5], [0,1,2,3,4,5]]
		}
	} else if (type === 5) {
		const materialId = data.ID || data.id || 0;
		baseItem.itemID = materialId;
		baseItem.itemLv = data.等级 || 0;
		baseItem.rareLv = data.稀有度 || 0;
		baseItem.value = data.价值 || 10;
		baseItem.subType = data.小类 || 0;
		const materialAffixes = GameData.generateMaterialAffixes(baseItem.rareLv, baseItem.subType);
		baseItem.materialData = {
			quality: data.等级 || 0,
			stackable: true,
			extraAddData: {
				heroSpeAddData: materialAffixes
			}
		}
	}
	return baseItem
};
GameData.generateMaterialAffixes = function(rareLv, subType) {
	const foodHerbIds = new Set([78,79,86,87,88,89,90,91,92,93,94,95,96,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,130,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,167,168]);
	if (subType === 2 || subType === 3) {
		const foodHerbList = Array.from(foodHerbIds);
		const attrId = foodHerbList[Math.floor(Math.random() * foodHerbList.length)];
		const rawValue = Math.floor((0.25 + Math.random() * 0.15) * 100) / 100;
		const displayValue = Math.floor(rawValue * 100);
		return {
			[String(attrId)]: displayValue / 100
		}
	}
	const excludedIds = new Set();
	for (let i = 15; i <= 56; i++) excludedIds.add(i);
	excludedIds.add(61);
	excludedIds.add(62);
	excludedIds.add(72);
	excludedIds.add(97);
	excludedIds.add(98);
	excludedIds.add(99);
	excludedIds.add(100);
	excludedIds.add(101);
	foodHerbIds.forEach(id => excludedIds.add(id));
	if (subType === 0 || subType === 1 || subType === 4) {
		for (let i = 154; i <= 161; i++) excludedIds.add(i);
	}
	[166, 164, 133, 134, 154, 155, 156, 157, 158, 159, 160, 161].forEach(id => excludedIds.add(id));
	const pctAttrIds = new Set([15,16,17,18,19,20,21,22,23,60,62,63,64,65,66,67,68,69,70,71,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153,162,163,165,167,168,169,170,171]);
	const validIds = [];
	for (let i = 0; i <= 171; i++) {
		if (!excludedIds.has(i)) validIds.push(i);
	}
	const affixCount = Math.min(4, 1 + Math.floor(rareLv * 0.8) + (Math.random() < 0.2 ? 1 : 0));
	const affixes = {};
	const usedIds = new Set();
	const affixList = [];
	function calculateAffixValue(attrId, rawValue) {
		if (attrId === 57) {
			return rawValue / 2;
		} else if (attrId === 58) {
			return rawValue / 5;
		} else if (attrId === 59) {
			return rawValue / 4;
		} else if (pctAttrIds.has(attrId)) {
			return rawValue * 100;
		} else {
			return rawValue;
		}
	}
	function generateRawValue(attrId) {
		if (attrId === 57) {
			return 3 + Math.floor(Math.random() * 8);
		} else if (attrId === 58) {
			return 3 + Math.floor(Math.random() * 23);
		} else if (attrId === 59) {
			return 3 + Math.floor(Math.random() * 18);
		} else if (pctAttrIds.has(attrId)) {
			return Math.floor((0.01 + Math.random() * 0.05) * 100) / 100;
		} else {
			return 3 + Math.floor(Math.random() * 3);
		}
	}
	for (let i = 0; i < affixCount; i++) {
		const availableIds = validIds.filter(id => !usedIds.has(id));
		if (availableIds.length === 0) break;
		const attrId = availableIds[Math.floor(Math.random() * availableIds.length)];
		usedIds.add(attrId);
		const rawValue = generateRawValue(attrId);
		const affixValue = calculateAffixValue(attrId, rawValue);
		affixList.push({ attrId, rawValue, affixValue });
	}
	affixList.sort((a, b) => b.affixValue - a.affixValue);
	let totalValue = affixList.reduce((sum, a) => sum + a.affixValue, 0);
	while (affixList.length > 1 && totalValue > 25) {
		const removed = affixList.pop();
		totalValue -= removed.affixValue;
	}
	affixList.forEach(a => {
		if (pctAttrIds.has(a.attrId)) {
			affixes[String(a.attrId)] = Math.floor(a.rawValue * 100) / 100;
		} else {
			affixes[String(a.attrId)] = a.rawValue;
		}
	});
	return affixes;
};
GameData.AREA_DATA = [{
	id: 0,
	名字: "京城",
	类别: "城市",
	图标: "京城",
	初始占领门派: 4,
	相邻地点: "20,27,29,40,33,61,46",
	初始等级: 5,
	背景类型: 3,
	皮肤编号: 3,
	x翻转: 1,
	特产: "棋谱"
}, {
	id: 1,
	名字: "杭州",
	类别: "城市",
	图标: "杭州",
	初始占领门派: 0,
	相邻地点: "30,52,14,11,24",
	初始等级: 3,
	背景类型: 1,
	皮肤编号: 3,
	x翻转: -1,
	特产: "字帖"
}, {
	id: 2,
	名字: "福州",
	类别: "城市",
	图标: "福州",
	初始占领门派: 9,
	相邻地点: "32,13,39,26,62",
	初始等级: 2,
	背景类型: 1,
	皮肤编号: 0,
	x翻转: 1,
	特产: "木材 矿料"
}, {
	id: 3,
	名字: "大理",
	类别: "城市",
	图标: "大理",
	初始占领门派: 14,
	相邻地点: "12,58,10,16,44",
	初始等级: 2,
	背景类型: 4,
	皮肤编号: 3,
	x翻转: 1,
	特产: "食材 毒物"
}, {
	id: 4,
	名字: "幽州",
	类别: "城市",
	图标: "幽州",
	初始占领门派: 5,
	相邻地点: "57,27,23,65",
	初始等级: 1,
	背景类型: 2,
	皮肤编号: 3,
	x翻转: -1,
	特产: "香炉"
}, {
	id: 5,
	名字: "晋阳",
	类别: "城市",
	图标: "晋阳",
	初始占领门派: 10,
	相邻地点: "59,20,28,40",
	初始等级: 2,
	背景类型: 1,
	皮肤编号: 2,
	x翻转: -1,
	特产: "画本"
}, {
	id: 6,
	名字: "成都",
	类别: "城市",
	图标: "成都",
	初始占领门派: 1,
	相邻地点: "10,31,45,22",
	初始等级: 3,
	背景类型: 5,
	皮肤编号: 2,
	x翻转: 1,
	特产: "酒器"
}, {
	id: 7,
	名字: "西凉",
	类别: "城市",
	图标: "西凉",
	初始占领门派: 12,
	相邻地点: "18,17,19,42,51",
	初始等级: 1,
	背景类型: 2,
	皮肤编号: 3,
	x翻转: 1,
	特产: "珠玉"
}, {
	id: 8,
	名字: "江陵",
	类别: "城市",
	图标: "江陵",
	初始占领门派: 11,
	相邻地点: "55,41,29,39,13",
	初始等级: 4,
	背景类型: 3,
	皮肤编号: 2,
	x翻转: 1,
	特产: "史书"
}, {
	id: 9,
	名字: "扬州",
	类别: "城市",
	图标: "扬州",
	初始占领门派: 16,
	相邻地点: "46,30,25,65",
	初始等级: 4,
	背景类型: 1,
	皮肤编号: 1,
	x翻转: 1,
	特产: "服饰"
}, {
	id: 10,
	名字: "乐山镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 8,
	相邻地点: "3,58,6,38,55",
	初始等级: 3,
	背景类型: 5,
	皮肤编号: 0,
	x翻转: -1,
	特产: "无"
}, {
	id: 11,
	名字: "太平乡",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 6,
	相邻地点: "1,36,53,47",
	初始等级: 1,
	背景类型: 0,
	皮肤编号: 1,
	x翻转: 1,
	特产: "无"
}, {
	id: 12,
	名字: "剑川镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 14,
	相邻地点: "37,3,64",
	初始等级: 0,
	背景类型: 4,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 13,
	名字: "清远乡",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 2,
	相邻地点: "2,8,63",
	初始等级: 0,
	背景类型: 4,
	皮肤编号: 2,
	x翻转: 1,
	特产: "无"
}, {
	id: 14,
	名字: "富阳镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 6,
	相邻地点: "25,36,1,52",
	初始等级: 0,
	背景类型: 0,
	皮肤编号: 3,
	x翻转: -1,
	特产: "无"
}, {
	id: 15,
	名字: "那曲乡",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 18,
	相邻地点: "48,49,66,68",
	初始等级: 0,
	背景类型: 6,
	皮肤编号: 1,
	x翻转: -1,
	特产: "无"
}, {
	id: 16,
	名字: "玉溪村",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 8,
	相邻地点: "3,38,50,63",
	初始等级: 0,
	背景类型: 4,
	皮肤编号: 0,
	x翻转: -1,
	特产: "无"
}, {
	id: 17,
	名字: "灵台村",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 15,
	相邻地点: "7,45,31,18,66",
	初始等级: 1,
	背景类型: 6,
	皮肤编号: 2,
	x翻转: -1,
	特产: "无"
}, {
	id: 18,
	名字: "酒泉村",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 19,
	相邻地点: "7,17,49,51,66",
	初始等级: 0,
	背景类型: 6,
	皮肤编号: 0,
	x翻转: -1,
	特产: "无"
}, {
	id: 19,
	名字: "陇西县",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 15,
	相邻地点: "34,42,22,7,45,54",
	初始等级: 2,
	背景类型: 2,
	皮肤编号: 1,
	x翻转: 1,
	特产: "无"
}, {
	id: 20,
	名字: "河内乡",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 4,
	相邻地点: "40,0,34,5",
	初始等级: 1,
	背景类型: 3,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 21,
	名字: "昌都镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 7,
	相邻地点: "37,48,60,64",
	初始等级: 1,
	背景类型: 6,
	皮肤编号: 2,
	x翻转: -1,
	特产: "无"
}, {
	id: 22,
	名字: "巴陵村",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 25,
	相邻地点: "6,19,54,41,55",
	初始等级: 0,
	背景类型: 5,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 23,
	名字: "怀柔村",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 13,
	相邻地点: "4,43",
	初始等级: 1,
	背景类型: 2,
	皮肤编号: 1,
	x翻转: -1,
	特产: "无"
}, {
	id: 24,
	名字: "当涂镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 0,
	相邻地点: "1,33,30,62,67",
	初始等级: 0,
	背景类型: 1,
	皮肤编号: 2,
	x翻转: 1,
	特产: "无"
}, {
	id: 25,
	名字: "高邮镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 16,
	相邻地点: "9,14,52,56,65",
	初始等级: 0,
	背景类型: 1,
	皮肤编号: 1,
	x翻转: -1,
	特产: "无"
}, {
	id: 26,
	名字: "宁化乡",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 17,
	相邻地点: "2,47",
	初始等级: 1,
	背景类型: 0,
	皮肤编号: 0,
	x翻转: -1,
	特产: "无"
}, {
	id: 27,
	名字: "襄垣村",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 5,
	相邻地点: "0,4,35,46,40,57",
	初始等级: 0,
	背景类型: 3,
	皮肤编号: 1,
	x翻转: 1,
	特产: "无"
}, {
	id: 28,
	名字: "武邑乡",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 10,
	相邻地点: "5,57",
	初始等级: 0,
	背景类型: 2,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 29,
	名字: "云梦乡",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 3,
	相邻地点: "0,33,8,61,67",
	初始等级: 1,
	背景类型: 3,
	皮肤编号: 1,
	x翻转: 1,
	特产: "无"
}, {
	id: 30,
	名字: "长乐帮",
	类别: "门派",
	图标: "长乐帮",
	初始占领门派: 0,
	相邻地点: "1,9,24",
	初始等级: 0,
	背景类型: 1,
	皮肤编号: 3,
	x翻转: 1,
	特产: "无"
}, {
	id: 31,
	名字: "唐门",
	类别: "门派",
	图标: "唐门",
	初始占领门派: 1,
	相邻地点: "6,17,58,68",
	初始等级: 0,
	背景类型: 5,
	皮肤编号: 2,
	x翻转: 1,
	特产: "无"
}, {
	id: 32,
	名字: "药王谷",
	类别: "门派",
	图标: "药王谷",
	初始占领门派: 2,
	相邻地点: "2,63",
	初始等级: 0,
	背景类型: 4,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 33,
	名字: "丐帮",
	类别: "门派",
	图标: "丐帮",
	初始占领门派: 3,
	相邻地点: "0,24,29,67",
	初始等级: 0,
	背景类型: 3,
	皮肤编号: 1,
	x翻转: -1,
	特产: "无"
}, {
	id: 34,
	名字: "飞龙门",
	类别: "门派",
	图标: "飞龙门",
	初始占领门派: 4,
	相邻地点: "19,20,61",
	初始等级: 0,
	背景类型: 2,
	皮肤编号: 2,
	x翻转: -1,
	特产: "无"
}, {
	id: 35,
	名字: "茅山派",
	类别: "门派",
	图标: "茅山派",
	初始占领门派: 5,
	相邻地点: "27,65",
	初始等级: 0,
	背景类型: 0,
	皮肤编号: 3,
	x翻转: 1,
	特产: "无"
}, {
	id: 36,
	名字: "铸剑山庄",
	类别: "门派",
	图标: "铸剑山庄",
	初始占领门派: 6,
	相邻地点: "53,11,14",
	初始等级: 0,
	背景类型: 0,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 37,
	名字: "五毒教",
	类别: "门派",
	图标: "五毒教",
	初始占领门派: 7,
	相邻地点: "12,21",
	初始等级: 0,
	背景类型: 4,
	皮肤编号: 1,
	x翻转: -1,
	特产: "无"
}, {
	id: 38,
	名字: "阎罗殿",
	类别: "门派",
	图标: "阎罗殿",
	初始占领门派: 8,
	相邻地点: "10,16,63",
	初始等级: 0,
	背景类型: 5,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 39,
	名字: "大隐阁",
	类别: "门派",
	图标: "大隐阁",
	初始占领门派: 9,
	相邻地点: "8,2,67",
	初始等级: 0,
	背景类型: 0,
	皮肤编号: 1,
	x翻转: -1,
	特产: "无"
}, {
	id: 40,
	名字: "少林寺",
	类别: "门派",
	图标: "少林寺",
	初始占领门派: 10,
	相邻地点: "0,5,27,20",
	初始等级: 0,
	背景类型: 3,
	皮肤编号: 3,
	x翻转: 1,
	特产: "无"
}, {
	id: 41,
	名字: "武当派",
	类别: "门派",
	图标: "武当派",
	初始占领门派: 11,
	相邻地点: "8,22,61",
	初始等级: 0,
	背景类型: 0,
	皮肤编号: 2,
	x翻转: -1,
	特产: "无"
}, {
	id: 42,
	名字: "霸刀门",
	类别: "门派",
	图标: "霸刀门",
	初始占领门派: 12,
	相邻地点: "59,19,7",
	初始等级: 0,
	背景类型: 2,
	皮肤编号: 0,
	x翻转: -1,
	特产: "无"
}, {
	id: 43,
	名字: "蓬莱派",
	类别: "门派",
	图标: "蓬莱派",
	初始占领门派: 13,
	相邻地点: "23,65",
	初始等级: 0,
	背景类型: 1,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 44,
	名字: "峨眉派",
	类别: "门派",
	图标: "峨眉派",
	初始占领门派: 14,
	相邻地点: "3,64",
	初始等级: 0,
	背景类型: 5,
	皮肤编号: 3,
	x翻转: -1,
	特产: "无"
}, {
	id: 45,
	名字: "崆峒派",
	类别: "门派",
	图标: "崆峒派",
	初始占领门派: 15,
	相邻地点: "17,19,6",
	初始等级: 0,
	背景类型: 5,
	皮肤编号: 3,
	x翻转: 1,
	特产: "无"
}, {
	id: 46,
	名字: "神机门",
	类别: "门派",
	图标: "神机门",
	初始占领门派: 16,
	相邻地点: "0,9,27",
	初始等级: 0,
	背景类型: 5,
	皮肤编号: 2,
	x翻转: -1,
	特产: "无"
}, {
	id: 47,
	名字: "霹雳堂",
	类别: "门派",
	图标: "霹雳堂",
	初始占领门派: 17,
	相邻地点: "26,11,53,62",
	初始等级: 0,
	背景类型: 0,
	皮肤编号: 2,
	x翻转: 1,
	特产: "无"
}, {
	id: 48,
	名字: "金刚密宗",
	类别: "门派",
	图标: "金刚密宗",
	初始占领门派: 18,
	相邻地点: "15,21,60",
	初始等级: 0,
	背景类型: 6,
	皮肤编号: 2,
	x翻转: 1,
	特产: "无"
}, {
	id: 49,
	名字: "天山派",
	类别: "门派",
	图标: "天山派",
	初始占领门派: 19,
	相邻地点: "15,18",
	初始等级: 0,
	背景类型: 6,
	皮肤编号: 1,
	x翻转: 1,
	特产: "无"
}, {
	id: 50,
	名字: "聚义门",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 20,
	相邻地点: "16,63",
	初始等级: 0,
	背景类型: 4,
	皮肤编号: 1,
	x翻转: 1,
	特产: "无"
}, {
	id: 51,
	名字: "黄河帮",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 21,
	相邻地点: "7,18",
	初始等级: 0,
	背景类型: 2,
	皮肤编号: 3,
	x翻转: -1,
	特产: "无"
}, {
	id: 52,
	名字: "八卦门",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 22,
	相邻地点: "25,1,14",
	初始等级: 0,
	背景类型: 1,
	皮肤编号: 3,
	x翻转: -1,
	特产: "无"
}, {
	id: 53,
	名字: "海沙帮",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 23,
	相邻地点: "47,11,36",
	初始等级: 0,
	背景类型: 0,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 54,
	名字: "铁掌帮",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 24,
	相邻地点: "19,22,61",
	初始等级: 0,
	背景类型: 3,
	皮肤编号: 2,
	x翻转: -1,
	特产: "无"
}, {
	id: 55,
	名字: "仙霞派",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 25,
	相邻地点: "22,8,10",
	初始等级: 0,
	背景类型: 5,
	皮肤编号: 1,
	x翻转: -1,
	特产: "无"
}, {
	id: 56,
	名字: "巨鲸帮",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 26,
	相邻地点: "25,65",
	初始等级: 0,
	背景类型: 1,
	皮肤编号: 0,
	x翻转: 1,
	特产: "无"
}, {
	id: 57,
	名字: "金龙帮",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 27,
	相邻地点: "4,27,28",
	初始等级: 0,
	背景类型: 2,
	皮肤编号: 2,
	x翻转: 1,
	特产: "无"
}, {
	id: 58,
	名字: "青城派",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 28,
	相邻地点: "3,31,10",
	初始等级: 0,
	背景类型: 5,
	皮肤编号: 1,
	x翻转: 1,
	特产: "无"
}, {
	id: 59,
	名字: "伏牛派",
	类别: "门派",
	图标: "普通门派",
	初始占领门派: 29,
	相邻地点: "5,42",
	初始等级: 0,
	背景类型: 2,
	皮肤编号: 2,
	x翻转: 1,
	特产: "无"
}, {
	id: 60,
	名字: "逻娑",
	类别: "城市",
	图标: "逻娑",
	初始占领门派: 18,
	相邻地点: "48,21,64,68",
	初始等级: 1,
	背景类型: 6,
	皮肤编号: 3,
	x翻转: 1,
	特产: "药引"
}, {
	id: 61,
	名字: "朱仙镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 11,
	相邻地点: "0,29,34,41,54",
	初始等级: 3,
	背景类型: 3,
	皮肤编号: 3,
	x翻转: -1,
	特产: "无"
}, {
	id: 62,
	名字: "景德镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 17,
	相邻地点: "2,24,47,67",
	初始等级: 2,
	背景类型: 0,
	皮肤编号: 1,
	x翻转: 1,
	特产: "无"
}, {
	id: 63,
	名字: "佛山镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 2,
	相邻地点: "13,16,32,38,50",
	初始等级: 2,
	背景类型: 4,
	皮肤编号: 3,
	x翻转: -1,
	特产: "无"
}, {
	id: 64,
	名字: "腾冲府",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 7,
	相邻地点: "12,21,44,60",
	初始等级: 0,
	背景类型: 4,
	皮肤编号: 2,
	x翻转: -1,
	特产: "无"
}, {
	id: 65,
	名字: "板桥镇",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 13,
	相邻地点: "4,9,25,35,43,56",
	初始等级: 2,
	背景类型: 1,
	皮肤编号: 2,
	x翻转: -1,
	特产: "无"
}, {
	id: 66,
	名字: "灵州",
	类别: "城市",
	图标: "灵州",
	初始占领门派: 19,
	相邻地点: "15,17,18,68",
	初始等级: 1,
	背景类型: 6,
	皮肤编号: 0,
	x翻转: 1,
	特产: "乐器"
}, {
	id: 67,
	名字: "应天",
	类别: "城市",
	图标: "应天",
	初始占领门派: 3,
	相邻地点: "24,29,33,39,62",
	初始等级: 3,
	背景类型: 3,
	皮肤编号: 2,
	x翻转: -1,
	特产: "典籍"
}, {
	id: 68,
	名字: "墨脱县",
	类别: "村镇",
	图标: "村镇",
	初始占领门派: 1,
	相邻地点: "15,31,60,66",
	初始等级: 1,
	背景类型: 6,
	皮肤编号: 3,
	x翻转: -1,
	特产: "无"
}];
GameData.AREA_ID_TO_NAME = {};
GameData.AREA_DATA.forEach(a => {
	GameData.AREA_ID_TO_NAME[a.id] = a.名字
});
GameData.TECH_DATA = [{
	序号: 0,
	名称: "开宗立派",
	描述: "开宗立派",
	大类: 0,
	加成对象: "区域上限",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 4,
	消耗资源: "银钱"
}, {
	序号: 1,
	名称: "人力管理",
	描述: "人力管理",
	大类: 0,
	加成对象: "弟子上限",
	加成数值: 2,
	固定成长: "FALSE",
	科研难度: 2,
	消耗资源: "粮食"
}, {
	序号: 2,
	名称: "仓储管理",
	描述: "仓储管理",
	大类: 0,
	加成对象: "仓储容量",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "粮食"
}, {
	序号: 3,
	名称: "疗伤管理",
	描述: "疗伤管理",
	大类: 0,
	加成对象: "疗伤效率",
	加成数值: 0.01,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "药材"
}, {
	序号: 4,
	名称: "恢复管理",
	描述: "恢复管理",
	大类: 0,
	加成对象: "恢复效率",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "药材"
}, {
	序号: 5,
	名称: "建造管理",
	描述: "建造管理",
	大类: 0,
	加成对象: "建造速度",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 6,
	名称: "旅行管理",
	描述: "旅行管理",
	大类: 0,
	加成对象: "旅行速度",
	加成数值: 0.01,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 7,
	名称: "生产管理",
	描述: "生产管理",
	大类: 0,
	加成对象: "资源点产量",
	加成数值: 0.01,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "粮食"
}, {
	序号: 8,
	名称: "功绩管理",
	描述: "功绩管理",
	大类: 0,
	加成对象: "弟子功绩",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "威望"
}, {
	序号: 9,
	名称: "科研管理",
	描述: "科研管理",
	大类: 0,
	加成对象: "科研效率",
	加成数值: 0.04,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 10,
	名称: "基础训练",
	描述: "基础训练",
	大类: 1,
	加成对象: "实战经验",
	加成数值: 0.01,
	固定成长: "FALSE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 11,
	名称: "文书管理",
	描述: "文书管理",
	大类: 1,
	加成对象: "理论经验",
	加成数值: 0.01,
	固定成长: "FALSE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 12,
	名称: "内功纲要",
	描述: "内功纲要",
	大类: 1,
	加成对象: "内功经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 13,
	名称: "轻功纲要",
	描述: "轻功纲要",
	大类: 1,
	加成对象: "轻功经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 14,
	名称: "绝技纲要",
	描述: "绝技纲要",
	大类: 1,
	加成对象: "绝技经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 15,
	名称: "拳掌纲要",
	描述: "拳掌纲要",
	大类: 1,
	加成对象: "拳掌经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 16,
	名称: "剑法纲要",
	描述: "剑法纲要",
	大类: 1,
	加成对象: "剑法经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 17,
	名称: "刀法纲要",
	描述: "刀法纲要",
	大类: 1,
	加成对象: "刀法经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 18,
	名称: "长兵纲要",
	描述: "长兵纲要",
	大类: 1,
	加成对象: "长兵经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 19,
	名称: "奇门纲要",
	描述: "奇门纲要",
	大类: 1,
	加成对象: "奇门经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 20,
	名称: "射术纲要",
	描述: "射术纲要",
	大类: 1,
	加成对象: "射术经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 21,
	名称: "日常修习",
	描述: "日常修习",
	大类: 2,
	加成对象: "技艺经验",
	加成数值: 0.01,
	固定成长: "FALSE",
	科研难度: 3,
	消耗资源: "银钱"
}, {
	序号: 22,
	名称: "医术纲要",
	描述: "医术纲要",
	大类: 2,
	加成对象: "医术经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "药材"
}, {
	序号: 23,
	名称: "毒术纲要",
	描述: "毒术纲要",
	大类: 2,
	加成对象: "毒术经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "药材"
}, {
	序号: 24,
	名称: "学识纲要",
	描述: "学识纲要",
	大类: 2,
	加成对象: "学识经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 25,
	名称: "口才纲要",
	描述: "口才纲要",
	大类: 2,
	加成对象: "口才经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 26,
	名称: "采伐纲要",
	描述: "采伐纲要",
	大类: 2,
	加成对象: "采伐经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "粮食"
}, {
	序号: 27,
	名称: "木植纲要",
	描述: "木植纲要",
	大类: 2,
	加成对象: "木植经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "木料"
}, {
	序号: 28,
	名称: "锻造纲要",
	描述: "锻造纲要",
	大类: 2,
	加成对象: "锻造经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "矿石"
}, {
	序号: 29,
	名称: "炼药纲要",
	描述: "炼药纲要",
	大类: 2,
	加成对象: "炼药经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "药材"
}, {
	序号: 30,
	名称: "烹饪纲要",
	描述: "烹饪纲要",
	大类: 2,
	加成对象: "烹饪经验",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "粮食"
}, {
	序号: 31,
	名称: "力道训练",
	描述: "力道训练",
	大类: 3,
	加成对象: "全员力道",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 3,
	消耗资源: "银钱"
}, {
	序号: 32,
	名称: "灵巧训练",
	描述: "灵巧训练",
	大类: 3,
	加成对象: "全员灵巧",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 3,
	消耗资源: "银钱"
}, {
	序号: 33,
	名称: "智力训练",
	描述: "智力训练",
	大类: 3,
	加成对象: "全员智力",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 3,
	消耗资源: "银钱"
}, {
	序号: 34,
	名称: "意志训练",
	描述: "意志训练",
	大类: 3,
	加成对象: "全员意志",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 3,
	消耗资源: "银钱"
}, {
	序号: 35,
	名称: "体质训练",
	描述: "体质训练",
	大类: 3,
	加成对象: "全员体质",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 3,
	消耗资源: "银钱"
}, {
	序号: 36,
	名称: "经脉训练",
	描述: "经脉训练",
	大类: 3,
	加成对象: "全员经脉",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 3,
	消耗资源: "银钱"
}, {
	序号: 37,
	名称: "内功训练",
	描述: "内功训练",
	大类: 3,
	加成对象: "全员内功",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 38,
	名称: "轻功训练",
	描述: "轻功训练",
	大类: 3,
	加成对象: "全员轻功",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 39,
	名称: "绝技训练",
	描述: "绝技训练",
	大类: 3,
	加成对象: "全员绝技",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 40,
	名称: "拳掌训练",
	描述: "拳掌训练",
	大类: 3,
	加成对象: "全员拳掌",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 41,
	名称: "剑法训练",
	描述: "剑法训练",
	大类: 3,
	加成对象: "全员剑法",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 42,
	名称: "刀法训练",
	描述: "刀法训练",
	大类: 3,
	加成对象: "全员刀法",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 43,
	名称: "长兵训练",
	描述: "长兵训练",
	大类: 3,
	加成对象: "全员长兵",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 44,
	名称: "奇门训练",
	描述: "奇门训练",
	大类: 3,
	加成对象: "全员奇门",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 45,
	名称: "射术训练",
	描述: "射术训练",
	大类: 3,
	加成对象: "全员射术",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 2,
	消耗资源: "银钱"
}, {
	序号: 46,
	名称: "医术训练",
	描述: "医术训练",
	大类: 3,
	加成对象: "全员医术",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "药材"
}, {
	序号: 47,
	名称: "毒术训练",
	描述: "毒术训练",
	大类: 3,
	加成对象: "全员毒术",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "药材"
}, {
	序号: 48,
	名称: "学识训练",
	描述: "学识训练",
	大类: 3,
	加成对象: "全员学识",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 49,
	名称: "口才训练",
	描述: "口才训练",
	大类: 3,
	加成对象: "全员口才",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "银钱"
}, {
	序号: 50,
	名称: "采伐训练",
	描述: "采伐训练",
	大类: 3,
	加成对象: "全员采伐",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "粮食"
}, {
	序号: 51,
	名称: "木植训练",
	描述: "木植训练",
	大类: 3,
	加成对象: "全员木植",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "木料"
}, {
	序号: 52,
	名称: "锻造训练",
	描述: "锻造训练",
	大类: 3,
	加成对象: "全员锻造",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "矿石"
}, {
	序号: 53,
	名称: "炼药训练",
	描述: "炼药训练",
	大类: 3,
	加成对象: "全员炼药",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "药材"
}, {
	序号: 54,
	名称: "烹饪训练",
	描述: "烹饪训练",
	大类: 3,
	加成对象: "全员烹饪",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 1,
	消耗资源: "粮食"
}, {
	序号: 55,
	名称: "巡逻治安",
	描述: "巡逻治安",
	大类: 0,
	加成对象: "全域治安",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 4,
	消耗资源: "银钱"
}, {
	序号: 56,
	名称: "赈济民心",
	描述: "赈济民心",
	大类: 0,
	加成对象: "全域民心",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 4,
	消耗资源: "银钱"
}, {
	序号: 57,
	名称: "稳固防御",
	描述: "稳固防御",
	大类: 0,
	加成对象: "全域防御",
	加成数值: 1,
	固定成长: "TRUE",
	科研难度: 4,
	消耗资源: "银钱"
}, {
	序号: 58,
	名称: "户籍人口",
	描述: "户籍人口",
	大类: 0,
	加成对象: "全域人口",
	加成数值: 5,
	固定成长: "TRUE",
	科研难度: 4,
	消耗资源: "粮食"
}, {
	序号: 69,
	名称: "城防工事",
	描述: "城防工事",
	大类: 0,
	加成对象: "城防耐久",
	加成数值: 0.02,
	固定成长: "FALSE",
	科研难度: 1,
	消耗资源: "木料"
}];
GameData.TECH_ID_TO_NAME = {};
GameData.TECH_DATA.forEach(t => {
	GameData.TECH_ID_TO_NAME[t.序号] = t.名称
});
GameData.FORCE_SPE_ADD_DATA = {
	0: {
		序号: 0,
		特效: "区域上限",
		描述: "区域上限",
		显示百分比: "FALSE",
		基础数值: 1
	},
	1: {
		序号: 1,
		特效: "弟子上限",
		描述: "弟子上限",
		显示百分比: "FALSE",
		基础数值: 5
	},
	2: {
		序号: 2,
		特效: "仓储容量",
		描述: "仓储容量",
		显示百分比: "FALSE",
		基础数值: 1
	},
	3: {
		序号: 3,
		特效: "弟子功绩",
		描述: "弟子功绩",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	4: {
		序号: 4,
		特效: "科研效率",
		描述: "科研效率",
		显示百分比: "TRUE",
		基础数值: 0.04
	},
	5: {
		序号: 5,
		特效: "旅行速度",
		描述: "旅行速度",
		显示百分比: "TRUE",
		基础数值: 0.01
	},
	6: {
		序号: 6,
		特效: "实战经验",
		描述: "实战经验",
		显示百分比: "TRUE",
		基础数值: 0.01
	},
	7: {
		序号: 7,
		特效: "理论经验",
		描述: "理论经验",
		显示百分比: "TRUE",
		基础数值: 0.01
	},
	8: {
		序号: 8,
		特效: "疗伤效率",
		描述: "疗伤效率",
		显示百分比: "TRUE",
		基础数值: 0.01
	},
	9: {
		序号: 9,
		特效: "本地疗伤效率",
		描述: "本地疗伤效率",
		显示百分比: "TRUE",
		基础数值: 0.05
	},
	10: {
		序号: 10,
		特效: "恢复效率",
		描述: "恢复效率",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	11: {
		序号: 11,
		特效: "本地恢复效率",
		描述: "本地恢复效率",
		显示百分比: "TRUE",
		基础数值: 0.1
	},
	12: {
		序号: 12,
		特效: "建造速度",
		描述: "建造速度",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	13: {
		序号: 13,
		特效: "本地建造速度",
		描述: "本地建造速度",
		显示百分比: "TRUE",
		基础数值: 0.1
	},
	14: {
		序号: 14,
		特效: "资源点产量",
		描述: "资源点产量",
		显示百分比: "TRUE",
		基础数值: 0.01
	},
	15: {
		序号: 15,
		特效: "本地资源点产量",
		描述: "本地资源点产量",
		显示百分比: "TRUE",
		基础数值: 0.05
	},
	16: {
		序号: 16,
		特效: "技艺经验",
		描述: "技艺经验",
		显示百分比: "TRUE",
		基础数值: 0.01
	},
	17: {
		序号: 17,
		特效: "内功经验",
		描述: "内功经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	18: {
		序号: 18,
		特效: "轻功经验",
		描述: "轻功经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	19: {
		序号: 19,
		特效: "绝技经验",
		描述: "绝技经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	20: {
		序号: 20,
		特效: "拳掌经验",
		描述: "拳掌经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	21: {
		序号: 21,
		特效: "剑法经验",
		描述: "剑法经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	22: {
		序号: 22,
		特效: "刀法经验",
		描述: "刀法经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	23: {
		序号: 23,
		特效: "长兵经验",
		描述: "长兵经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	24: {
		序号: 24,
		特效: "奇门经验",
		描述: "奇门经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	25: {
		序号: 25,
		特效: "射术经验",
		描述: "射术经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	26: {
		序号: 26,
		特效: "医术经验",
		描述: "医术经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	27: {
		序号: 27,
		特效: "毒术经验",
		描述: "毒术经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	28: {
		序号: 28,
		特效: "学识经验",
		描述: "学识经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	29: {
		序号: 29,
		特效: "口才经验",
		描述: "口才经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	30: {
		序号: 30,
		特效: "采伐经验",
		描述: "采伐经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	31: {
		序号: 31,
		特效: "木植经验",
		描述: "木植经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	32: {
		序号: 32,
		特效: "锻造经验",
		描述: "锻造经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	33: {
		序号: 33,
		特效: "炼药经验",
		描述: "炼药经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	34: {
		序号: 34,
		特效: "烹饪经验",
		描述: "烹饪经验",
		显示百分比: "TRUE",
		基础数值: 0.02
	},
	35: {
		序号: 35,
		特效: "全员力道",
		描述: "全员力道",
		显示百分比: "FALSE",
		基础数值: 1
	},
	36: {
		序号: 36,
		特效: "全员灵巧",
		描述: "全员灵巧",
		显示百分比: "FALSE",
		基础数值: 1
	},
	37: {
		序号: 37,
		特效: "全员智力",
		描述: "全员智力",
		显示百分比: "FALSE",
		基础数值: 1
	},
	38: {
		序号: 38,
		特效: "全员意志",
		描述: "全员意志",
		显示百分比: "FALSE",
		基础数值: 1
	},
	39: {
		序号: 39,
		特效: "全员体质",
		描述: "全员体质",
		显示百分比: "FALSE",
		基础数值: 1
	},
	40: {
		序号: 40,
		特效: "全员经脉",
		描述: "全员经脉",
		显示百分比: "FALSE",
		基础数值: 1
	},
	41: {
		序号: 41,
		特效: "全员内功",
		描述: "全员内功",
		显示百分比: "FALSE",
		基础数值: 1
	},
	42: {
		序号: 42,
		特效: "全员轻功",
		描述: "全员轻功",
		显示百分比: "FALSE",
		基础数值: 1
	},
	43: {
		序号: 43,
		特效: "全员绝技",
		描述: "全员绝技",
		显示百分比: "FALSE",
		基础数值: 1
	},
	44: {
		序号: 44,
		特效: "全员拳掌",
		描述: "全员拳掌",
		显示百分比: "FALSE",
		基础数值: 1
	},
	45: {
		序号: 45,
		特效: "全员剑法",
		描述: "全员剑法",
		显示百分比: "FALSE",
		基础数值: 1
	},
	46: {
		序号: 46,
		特效: "全员刀法",
		描述: "全员刀法",
		显示百分比: "FALSE",
		基础数值: 1
	},
	47: {
		序号: 47,
		特效: "全员长兵",
		描述: "全员长兵",
		显示百分比: "FALSE",
		基础数值: 1
	},
	48: {
		序号: 48,
		特效: "全员奇门",
		描述: "全员奇门",
		显示百分比: "FALSE",
		基础数值: 1
	},
	49: {
		序号: 49,
		特效: "全员射术",
		描述: "全员射术",
		显示百分比: "FALSE",
		基础数值: 1
	},
	50: {
		序号: 50,
		特效: "全员医术",
		描述: "全员医术",
		显示百分比: "FALSE",
		基础数值: 1
	},
	51: {
		序号: 51,
		特效: "全员毒术",
		描述: "全员毒术",
		显示百分比: "FALSE",
		基础数值: 1
	},
	52: {
		序号: 52,
		特效: "全员学识",
		描述: "全员学识",
		显示百分比: "FALSE",
		基础数值: 1
	},
	53: {
		序号: 53,
		特效: "全员口才",
		描述: "全员口才",
		显示百分比: "FALSE",
		基础数值: 1
	},
	54: {
		序号: 54,
		特效: "全员采伐",
		描述: "全员采伐",
		显示百分比: "FALSE",
		基础数值: 1
	},
	55: {
		序号: 55,
		特效: "全员木植",
		描述: "全员木植",
		显示百分比: "FALSE",
		基础数值: 1
	},
	56: {
		序号: 56,
		特效: "全员锻造",
		描述: "全员锻造",
		显示百分比: "FALSE",
		基础数值: 1
	},
	57: {
		序号: 57,
		特效: "全员炼药",
		描述: "全员炼药",
		显示百分比: "FALSE",
		基础数值: 1
	},
	58: {
		序号: 58,
		特效: "全员烹饪",
		描述: "全员烹饪",
		显示百分比: "FALSE",
		基础数值: 1
	},
	59: {
		序号: 59,
		特效: "藏经容量",
		描述: "藏经容量",
		显示百分比: "FALSE",
		基础数值: 5
	},
	60: {
		序号: 60,
		特效: "全域治安",
		描述: "全域治安",
		显示百分比: "FALSE",
		基础数值: 1
	},
	61: {
		序号: 61,
		特效: "全域民心",
		描述: "全域民心",
		显示百分比: "FALSE",
		基础数值: 1
	},
	62: {
		序号: 62,
		特效: "全域防御",
		描述: "全域防御",
		显示百分比: "FALSE",
		基础数值: 1
	},
	63: {
		序号: 63,
		特效: "全域人口",
		描述: "全域人口",
		显示百分比: "FALSE",
		基础数值: 5
	},
	64: {
		序号: 64,
		特效: "城防耐久",
		描述: "城防耐久",
		显示百分比: "TRUE",
		基础数值: 0.02
	}
};
GameData.FORCE_SPE_ADD_ID_TO_NAME = {};
Object.keys(GameData.FORCE_SPE_ADD_DATA).forEach(k => {
	GameData.FORCE_SPE_ADD_ID_TO_NAME[k] = GameData.FORCE_SPE_ADD_DATA[k].特效
});
GameData.GOVERN_LV_NAMES = {
	0: "九品壮班",
	1: "八品衙役",
	2: "七品捕头",
	3: "六品县尉",
	4: "五品团练推官",
	5: "四品节察判官",
	6: "三品巡按御史",
	7: "二品监察御史",
	8: "二品侍御史",
	9: "一品御史中丞",
	10: "一品御史大夫"
};
GameData.AI_SETTING_NAMES = {
	"CureSelf": "治疗自己",
	"StudyFightSkill": "学习战斗技能",
	"StudyLivingSkill": "学习生活技能",
	"CollectResource": "收集资源",
	"AddAreaState": "增加地区状态",
	"ReduceAreaState": "减少地区状态",
	"MakeMoneyAndExplore": "赚钱和探索",
	"MakeFriendAndStudyFight": "交友和学习战斗",
	"FinishMissionAndRandomSpeEvent": "完成任务和随机事件",
	"CraftFood": "制作食物",
	"CraftMed": "制作药物",
	"CraftEquip": "制作装备"
};
GameData.TALENT_MAP = {
    "0": {name: "力道", color: "green"},
    "1": {name: "孔武有力", color: "blue"},
    "2": {name: "力能抗鼎", color: "purple"},
    "3": {name: "灵巧", color: "green"},
    "4": {name: "手疾眼快", color: "blue"},
    "5": {name: "七窍玲珑", color: "purple"},
    "6": {name: "智力", color: "green"},
    "7": {name: "足智多谋", color: "blue"},
    "8": {name: "聪慧绝伦", color: "purple"},
    "9": {name: "意志", color: "green"},
    "10": {name: "动心忍性", color: "blue"},
    "11": {name: "百折不挠", color: "purple"},
    "12": {name: "体质", color: "green"},
    "13": {name: "强身健体", color: "blue"},
    "14": {name: "钢筋铁骨", color: "purple"},
    "15": {name: "经脉", color: "green"},
    "16": {name: "运气自如", color: "blue"},
    "17": {name: "奇经八脉", color: "purple"},
    "18": {name: "内家", color: "green"},
    "19": {name: "内力精纯", color: "blue"},
    "20": {name: "炉火纯青", color: "purple"},
    "21": {name: "轻功", color: "green"},
    "22": {name: "飞檐走壁", color: "blue"},
    "23": {name: "神出鬼没", color: "purple"},
    "24": {name: "绝技", color: "green"},
    "25": {name: "身怀绝技", color: "blue"},
    "26": {name: "绝艺超群", color: "purple"},
    "27": {name: "拳掌", color: "green"},
    "28": {name: "拳不离手", color: "blue"},
    "29": {name: "铁手钢拳", color: "gold"},
    "30": {name: "御剑", color: "green"},
    "31": {name: "剑随意动", color: "blue"},
    "32": {name: "人剑合一", color: "gold"},
    "33": {name: "耍刀", color: "green"},
    "34": {name: "横刀跃马", color: "blue"},
    "35": {name: "一刀两断", color: "gold"},
    "36": {name: "长兵", color: "green"},
    "37": {name: "舞枪弄棒", color: "blue"},
    "38": {name: "枪扫六合", color: "gold"},
    "39": {name: "奇门", color: "green"},
    "40": {name: "旁门左道", color: "blue"},
    "41": {name: "奇门遁甲", color: "gold"},
    "42": {name: "射术", color: "green"},
    "43": {name: "百步穿杨", color: "blue"},
    "44": {name: "例无虚发", color: "gold"},
    "45": {name: "外门", color: "green"},
    "46": {name: "坚若磐石", color: "blue"},
    "47": {name: "刀枪不入", color: "gold"},
    "48": {name: "掌风", color: "green"},
    "49": {name: "排山倒海", color: "red"},
    "50": {name: "剑气", color: "green"},
    "51": {name: "气冲斗牛", color: "red"},
    "52": {name: "刀锋", color: "green"},
    "53": {name: "削铁无声", color: "red"},
    "54": {name: "枪芒", color: "green"},
    "55": {name: "枪出如龙", color: "red"},
    "56": {name: "奇技", color: "green"},
    "57": {name: "奇异莫名", color: "red"},
    "58": {name: "惊弓", color: "green"},
    "59": {name: "摘叶飞花", color: "red"},
    "60": {name: "脱胎换骨", color: "red", special: true},
    "61": {name: "不老长生", color: "red", special: true},
    "62": {name: "羽化登仙", color: "red", special: true},
    "63": {name: "内息灼热", color: "green"},
    "64": {name: "焚身烈焰", color: "blue"},
    "65": {name: "内息冰寒", color: "green"},
    "66": {name: "刺骨奇寒", color: "blue"},
    "67": {name: "阴阳调和", color: "green"},
    "68": {name: "先天真气", color: "blue"},
    "69": {name: "万物归墟", color: "gold"},
    "70": {name: "混元一气", color: "gold"},
    "71": {name: "至阳至刚", color: "gold"},
    "72": {name: "至阴至柔", color: "gold"},
    "73": {name: "刚柔并济", color: "gold"},
    "74": {name: "物我两忘", color: "gold"},
    "75": {name: "移形换位", color: "gold"},
    "76": {name: "陆地飞行", color: "gold"},
    "77": {name: "扭转乾坤", color: "gold"},
    "78": {name: "不动如山", color: "gold"},
    "79": {name: "神鬼莫测", color: "gold"},
    "80": {name: "以劲御气", color: "gold"},
    "81": {name: "艺成百家", color: "gold"},
    "82": {name: "武学宗师", color: "red", special: true},
    "83": {name: "登峰造极", color: "red", special: true},
    "84": {name: "返璞归真", color: "red", special: true},
    "85": {name: "起死回生", color: "red", special: true},
    "86": {name: "天人合一", color: "red", special: true},
    "87": {name: "功德圆满", color: "red", special: true},
    "88": {name: "即身成佛", color: "red", special: true},
    "89": {name: "太极圆转", color: "red", special: true},
    "90": {name: "轰天震地", color: "red", special: true},
    "91": {name: "十殿阎王", color: "red", special: true},
    "92": {name: "力降十会", color: "red", special: true},
    "93": {name: "医术", color: "green"},
    "94": {name: "术精岐黄", color: "blue"},
    "95": {name: "妙手回春", color: "purple"},
    "96": {name: "毒术", color: "green"},
    "97": {name: "五毒俱全", color: "blue"},
    "98": {name: "见血封喉", color: "purple"},
    "99": {name: "学识", color: "green"},
    "100": {name: "见多识广", color: "blue"},
    "101": {name: "学富五车", color: "purple"},
    "102": {name: "口才", color: "green"},
    "103": {name: "口齿伶俐", color: "blue"},
    "104": {name: "舌灿莲花", color: "purple"},
    "105": {name: "采伐", color: "green"},
    "106": {name: "披襟斩棘", color: "blue"},
    "107": {name: "铸山煮海", color: "purple"},
    "108": {name: "木植", color: "green"},
    "109": {name: "精耕细作", color: "blue"},
    "110": {name: "万木争荣", color: "purple"},
    "111": {name: "锻造", color: "green"},
    "112": {name: "千锤百炼", color: "blue"},
    "113": {name: "鬼斧神工", color: "purple"},
    "114": {name: "炼药", color: "green"},
    "115": {name: "对症下药", color: "blue"},
    "116": {name: "灵丹妙药", color: "purple"},
    "117": {name: "烹饪", color: "green"},
    "118": {name: "烩不厌细", color: "blue"},
    "119": {name: "炮凤烹龙", color: "purple"},
    "120": {name: "毒医", color: "green"},
    "121": {name: "以毒攻毒", color: "blue"},
    "122": {name: "毒手药王", color: "purple"},
    "123": {name: "医毒", color: "green"},
    "124": {name: "强壮", color: "green"},
    "125": {name: "魁梧奇伟", color: "blue"},
    "126": {name: "天生神力", color: "purple"},
    "127": {name: "瘦弱", color: "green"},
    "128": {name: "瘦骨嶙峋", color: "blue"},
    "129": {name: "缚鸡之力", color: "purple"},
    "130": {name: "机敏", color: "green"},
    "131": {name: "随机应变", color: "blue"},
    "132": {name: "巧捷万端", color: "purple"},
    "133": {name: "笨拙", color: "green"},
    "134": {name: "笨手笨脚", color: "blue"},
    "135": {name: "东倒西歪", color: "purple"},
    "136": {name: "聪慧", color: "green"},
    "137": {name: "天资过人", color: "blue"},
    "138": {name: "旷世奇才", color: "purple"},
    "139": {name: "愚钝", color: "green"},
    "140": {name: "傻头傻脑", color: "blue"},
    "141": {name: "痴傻蒙昧", color: "purple"},
    "142": {name: "勇敢", color: "green"},
    "143": {name: "身先士卒", color: "blue"},
    "144": {name: "临危不乱", color: "purple"},
    "145": {name: "懦弱", color: "green"},
    "146": {name: "战战兢兢", color: "blue"},
    "147": {name: "胆小如鼠", color: "purple"},
    "148": {name: "康健", color: "green"},
    "149": {name: "容光焕发", color: "blue"},
    "150": {name: "百病不侵", color: "purple"},
    "151": {name: "多病", color: "green"},
    "152": {name: "身心交病", color: "blue"},
    "153": {name: "旧病沉疴", color: "purple"},
    "154": {name: "顺脉", color: "green"},
    "155": {name: "脉络贯通", color: "blue"},
    "156": {name: "先天气海", color: "purple"},
    "157": {name: "滞脉", color: "green"},
    "158": {name: "脉络阻塞", color: "blue"},
    "159": {name: "经脉断绝", color: "purple"},
    "160": {name: "正直", color: "green"},
    "161": {name: "公正不阿", color: "blue"},
    "162": {name: "浩气凛然", color: "purple"},
    "163": {name: "阴险", color: "green"},
    "164": {name: "不择手段", color: "blue"},
    "165": {name: "笑里藏刀", color: "purple"},
    "166": {name: "仁慈", color: "green"},
    "167": {name: "宅心仁厚", color: "blue"},
    "168": {name: "慈悲为怀", color: "purple"},
    "169": {name: "残忍", color: "green"},
    "170": {name: "心狠手辣", color: "blue"},
    "171": {name: "天心绝情", color: "purple"},
    "172": {name: "冷静", color: "green"},
    "173": {name: "气定神闲", color: "blue"},
    "174": {name: "心如止水", color: "purple"},
    "175": {name: "暴躁", color: "green"},
    "176": {name: "性烈如火", color: "blue"},
    "177": {name: "怒发冲冠", color: "purple"},
    "178": {name: "幸运", color: "green"},
    "179": {name: "福星高照", color: "blue"},
    "180": {name: "吉人天相", color: "purple"},
    "181": {name: "不幸", color: "green"},
    "182": {name: "命途多舛", color: "blue"},
    "183": {name: "天煞孤星", color: "purple"},
    "184": {name: "美貌", color: "green"},
    "185": {name: "明眸皓齿", color: "blue"},
    "186": {name: "倾国倾城", color: "purple"},
    "187": {name: "丑陋", color: "green"},
    "188": {name: "面目可憎", color: "blue"},
    "189": {name: "百丑千拙", color: "purple"},
    "190": {name: "锐眼", color: "green"},
    "191": {name: "目光炯炯", color: "blue"},
    "192": {name: "明察秋毫", color: "purple"},
    "193": {name: "弱视", color: "green"},
    "194": {name: "视线模糊", color: "blue"},
    "195": {name: "雾里看花", color: "purple"},
    "196": {name: "谦逊", color: "green"},
    "197": {name: "不骄不躁", color: "blue"},
    "198": {name: "虚怀若谷", color: "purple"},
    "199": {name: "刚愎", color: "green"},
    "200": {name: "盛气凌人", color: "blue"},
    "201": {name: "唯我独尊", color: "purple"},
    "202": {name: "忠诚", color: "green"},
    "203": {name: "忠心耿耿", color: "blue"},
    "204": {name: "至死不渝", color: "purple"},
    "205": {name: "叛逆", color: "green"},
    "206": {name: "桀骜不驯", color: "blue"},
    "207": {name: "离经叛道", color: "purple"},
    "208": {name: "勤奋", color: "green"},
    "209": {name: "孜孜不倦", color: "blue"},
    "210": {name: "废寝忘食", color: "purple"},
    "211": {name: "懒惰", color: "green"},
    "212": {name: "游手好闲", color: "blue"},
    "213": {name: "无所用心", color: "purple"},
    "214": {name: "节俭", color: "green"},
    "215": {name: "精打细算", color: "blue"},
    "216": {name: "取予有节", color: "purple"},
    "217": {name: "浪费", color: "green"},
    "218": {name: "挥霍无度", color: "blue"},
    "219": {name: "穷奢极欲", color: "purple"},
    "220": {name: "练武", color: "green"},
    "221": {name: "武痴", color: "blue"},
    "222": {name: "武学天才", color: "purple"},
    "223": {name: "学医", color: "green"},
    "224": {name: "医师", color: "blue"},
    "225": {name: "济世神医", color: "purple"},
    "226": {name: "习文", color: "green"},
    "227": {name: "雅士", color: "blue"},
    "228": {name: "文采斐然", color: "purple"},
    "229": {name: "务农", color: "green"},
    "230": {name: "农家", color: "blue"},
    "231": {name: "在世神农", color: "purple"},
    "232": {name: "学徒", color: "green"},
    "233": {name: "工匠", color: "blue"},
    "234": {name: "能工巧匠", color: "purple"},
    "235": {name: "经商", color: "green"},
    "236": {name: "善贾", color: "blue"},
    "237": {name: "囤积居奇", color: "purple"},
    "238": {name: "从政", color: "green"},
    "239": {name: "仕官", color: "blue"},
    "240": {name: "位极人臣", color: "purple"},
    "241": {name: "杂学", color: "green"},
    "242": {name: "通才", color: "blue"},
    "243": {name: "博学多才", color: "purple"},
    "244": {name: "淡泊", color: "green"},
    "245": {name: "隐士", color: "blue"},
    "246": {name: "避世绝俗", color: "purple"},
    "247": {name: "儒术", color: "green"},
    "248": {name: "儒生", color: "blue"},
    "249": {name: "鸿儒大学", color: "purple"},
    "250": {name: "修道", color: "green"},
    "251": {name: "道士", color: "blue"},
    "252": {name: "仙风道骨", color: "purple"},
    "253": {name: "学佛", color: "green"},
    "254": {name: "禅师", color: "blue"},
    "255": {name: "四大皆空", color: "purple"},
    "256": {name: "行乞", color: "green"},
    "257": {name: "化缘", color: "blue"},
    "258": {name: "游戏人间", color: "purple"},
    "259": {name: "卜算", color: "green"},
    "260": {name: "相士", color: "blue"},
    "261": {name: "未卜先知", color: "purple"},
    "262": {name: "游侠", color: "green"},
    "263": {name: "侠客", color: "blue"},
    "264": {name: "侠义无双", color: "purple"},
    "265": {name: "赌徒", color: "green"},
    "266": {name: "嗜赌如命", color: "blue"},
    "267": {name: "赌运亨通", color: "purple"},
    "268": {name: "酒鬼", color: "green"},
    "269": {name: "放歌纵酒", color: "blue"},
    "270": {name: "醉生梦死", color: "purple"},
    "271": {name: "食客", color: "green"},
    "272": {name: "大快朵颐", color: "blue"},
    "273": {name: "饕餮盛宴", color: "purple"},
    "274": {name: "收藏", color: "green"},
    "275": {name: "去伪存真", color: "blue"},
    "276": {name: "慧眼独具", color: "purple"},
    "277": {name: "骑术", color: "green"},
    "278": {name: "纵马驰骋", color: "blue"},
    "279": {name: "一骑绝尘", color: "purple"},
    "280": {name: "读书", color: "green"},
    "281": {name: "博览群书", color: "blue"},
    "282": {name: "皓首穷经", color: "purple"},
    "283": {name: "瑶琴", color: "green"},
    "284": {name: "余音绕梁", color: "blue"},
    "285": {name: "鸾吟凤唱", color: "purple"},
    "286": {name: "弈棋", color: "green"},
    "287": {name: "棋高一着", color: "blue"},
    "288": {name: "神机妙算", color: "purple"},
    "289": {name: "书法", color: "green"},
    "290": {name: "笔走龙蛇", color: "blue"},
    "291": {name: "铁画银钩", color: "purple"},
    "292": {name: "绘画", color: "green"},
    "293": {name: "丹青妙手", color: "blue"},
    "294": {name: "妙至毫巅", color: "purple"},
    "295": {name: "吟诗", color: "green"},
    "296": {name: "文思泉涌", color: "blue"},
    "297": {name: "七步成诗", color: "purple"},
    "298": {name: "狩猎", color: "green"},
    "299": {name: "飞鹰走犬", color: "blue"},
    "300": {name: "苍鹰搏兔", color: "purple"},
    "301": {name: "云游", color: "green"},
    "302": {name: "游山玩水", color: "blue"},
    "303": {name: "浪迹天涯", color: "purple"},
    "304": {name: "静修", color: "green"},
    "305": {name: "深居简出", color: "blue"},
    "306": {name: "面壁功深", color: "purple"},
    "307": {name: "舞技", color: "green"},
    "308": {name: "舞态生风", color: "blue"},
    "309": {name: "羽衣蹁跹", color: "purple"},
    "310": {name: "随从", color: "green"},
    "311": {name: "唯命是从", color: "blue"},
    "312": {name: "精明强干", color: "red"},
    "313": {name: "军师", color: "green"},
    "314": {name: "排兵布阵", color: "blue"},
    "315": {name: "运筹帷幄", color: "red"},
    "316": {name: "领袖", color: "green"},
    "317": {name: "胸怀大志", color: "blue"},
    "318": {name: "雄才伟略", color: "red"},
    "319": {name: "先锋", color: "green"},
    "320": {name: "奋勇当先", color: "blue"},
    "321": {name: "背水一战", color: "red"},
    "322": {name: "守备", color: "green"},
    "323": {name: "戒备森严", color: "blue"},
    "324": {name: "严防死守", color: "red"},
    "325": {name: "游斗", color: "green"},
    "326": {name: "快步流星", color: "blue"},
    "327": {name: "千里奔袭", color: "red"},
    "328": {name: "精力充沛", color: "blue"},
    "329": {name: "腊八粥", color: "blue"},
    "330": {name: "微醺", color: "blue"},
    "331": {name: "痛饮", color: "blue"},
    "332": {name: "大醉", color: "blue"},
    "333": {name: "酩酊", color: "blue"},
    "334": {name: "宴会无趣", color: "blue"},
    "335": {name: "宴会平平", color: "blue"},
    "336": {name: "宴会满意", color: "blue"},
    "337": {name: "宴会欢喜", color: "blue"},
    "338": {name: "宴会极乐", color: "blue"},
    "339": {name: "赌运", color: "blue"},
    "340": {name: "霉运", color: "blue"},
    "341": {name: "论胜", color: "blue"},
    "342": {name: "论败", color: "blue"},
    "343": {name: "轻症", color: "blue"},
    "344": {name: "中症", color: "blue"},
    "345": {name: "重症", color: "blue"},
    "346": {name: "危症", color: "blue"},
    "347": {name: "气息不调", color: "blue"},
    "348": {name: "内息紊乱", color: "blue"},
    "349": {name: "经脉受阻", color: "blue"},
    "350": {name: "经脉断绝", color: "blue"},
    "351": {name: "断臂", color: "blue"},
    "352": {name: "跛足", color: "blue"},
    "353": {name: "目沙", color: "blue"},
    "354": {name: "理论心得", color: "blue"},
    "355": {name: "实战心得", color: "blue"},
    "356": {name: "机关木臂", color: "blue"},
    "357": {name: "机关石臂", color: "blue"},
    "358": {name: "机关铁臂", color: "blue"},
    "359": {name: "机关木轮", color: "blue"},
    "360": {name: "机关石轮", color: "blue"},
    "361": {name: "机关铁轮", color: "blue"},
    "362": {name: "机关木甲", color: "blue"},
    "363": {name: "机关石甲", color: "blue"},
    "364": {name: "机关铁甲", color: "blue"},
    "365": {name: "机关大师", color: "blue"},
    "366": {name: "鲁班在世", color: "blue"},
    "367": {name: "机关义手", color: "blue"},
    "368": {name: "手镯", color: "blue"},
    "369": {name: "脚镣", color: "blue"},
    "370": {name: "机关义手", color: "blue"},
    "371": {name: "机关义手", color: "green"},
    "372": {name: "机关义手", color: "blue"},
    "373": {name: "机关义手", color: "gold"},
    "374": {name: "登顶泰岳", color: "blue"},
    "375": {name: "负心人", color: "blue"},
    "376": {name: "修行心得", color: "blue"},
    "377": {name: "刮骨疗毒", color: "blue"},
    "378": {name: "百毒不侵", color: "blue"},
    "379": {name: "天下第一", color: "red", special: true},
    "380": {name: "归隐田园", color: "red", special: true},
    "381": {name: "豪商巨贾", color: "red", special: true},
    "382": {name: "功成名就", color: "red", special: true},
    "383": {name: "禁军统领", color: "red", special: true},
    "384": {name: "权势滔天", color: "red", special: true},
    "385": {name: "名门大派", color: "red", special: true},
    "386": {name: "武林盟主", color: "red", special: true},
    "387": {name: "终归一统", color: "red", special: true},
    "388": {name: "鸾凤和鸣", color: "red", special: true},
    "389": {name: "终生监禁", color: "gray"}
};
GameData.NEGATIVE_TALENTS = ["负心人", "机关义手", "脚铐", "手铐", "内息紊乱", "经脉受阻", "经脉断绝", "断臂", "破足", "目渺", "霉运", "论败", "轻症", "重症", "危症", "气息不调", "游手好闲", "无所用心", "浪费", "挥霍无度", "穷奢极欲", "叛逆", "桀骜不驯", "离经叛道", "懒惰", "弱视", "视线模糊", "雾里看花", "刚愎", "盛气凌人", "唯我独尊", "命运多舛", "天煞孤星", "丑陋", "面目狰狞", "百丑千拙", "暴躁", "性烈如火", "怒发冲冠", "不幸", "阴险", "不择手段", "笑里藏刀", "残忍", "心狠手辣", "天心绝情", "懦弱", "战战兢兢", "胆小如鼠", "多病", "身心交病", "旧病沉疴", "滞脉", "脉络阻塞", "瘦弱", "瘦骨嶙峋", "缚鸡之力", "笨拙", "笨手笨脚", "东倒西歪", "愚钝", "傻头傻脑", "痴傻蒙昧", "终生监禁"];
GameData.SKILL_ID_TO_NAME = {
	"0": ["内功", 0, "吐纳法"],
	"1": ["内功", 0, "脉络诀"],
	"2": ["内功", 0, "气血功"],
	"3": ["轻功", 0, "飞毛腿"],
	"4": ["轻功", 0, "轻身术"],
	"5": ["轻功", 0, "梅花桩"],
	"6": ["绝技", 0, "铁布衫"],
	"7": ["绝技", 0, "千斤坠"],
	"8": ["绝技", 0, "胸口碎大石"],
	"9": ["拳掌", 0, "太祖长拳"],
	"10": ["拳掌", 0, "十段锦长拳"],
	"11": ["拳掌", 0, "禁军拳术"],
	"12": ["剑法", 0, "御剑要术"],
	"13": ["剑法", 0, "木剑式"],
	"14": ["剑法", 0, "禁军剑术"],
	"15": ["刀法", 0, "拔刀功"],
	"16": ["刀法", 0, "劈柴刀法"],
	"17": ["刀法", 0, "禁军刀术"],
	"18": ["长兵", 0, "太祖棍法"],
	"19": ["长兵", 0, "猎户叉功"],
	"20": ["长兵", 0, "禁军枪术"],
	"21": ["奇门", 0, "三路鞭法"],
	"22": ["奇门", 0, "伐木斧功"],
	"23": ["奇门", 0, "禁军钩术"],
	"24": ["射术", 0, "飞镖要诀"],
	"25": ["射术", 0, "飞针要诀"],
	"26": ["射术", 0, "飞刀要诀"],
	"27": ["内功", 1, "开声贯气法"],
	"28": ["内功", 1, "气守丹田法"],
	"29": ["内功", 1, "舒筋通络法"],
	"30": ["内功", 1, "四段功法"],
	"31": ["内功", 1, "玉带诀"],
	"32": ["内功", 1, "五指点石功"],
	"33": ["内功", 1, "排打硬功"],
	"34": ["内功", 1, "鞭气劲"],
	"35": ["内功", 1, "实腹鼓气功"],
	"36": ["内功", 1, "热炎功"],
	"37": ["轻功", 1, "草上飞"],
	"38": ["轻功", 1, "泥潭功"],
	"39": ["轻功", 1, "走壁功"],
	"40": ["轻功", 1, "鲤鱼跃龙门"],
	"41": ["轻功", 1, "一线穿"],
	"42": ["轻功", 1, "雁回旋"],
	"43": ["轻功", 1, "跑铁索"],
	"44": ["轻功", 1, "穿帘步"],
	"45": ["轻功", 1, "缸沿功"],
	"46": ["轻功", 1, "铁球滚"],
	"47": ["绝技", 1, "开碑劲"],
	"48": ["绝技", 1, "龟甲功"],
	"49": ["绝技", 1, "石锁功"],
	"50": ["绝技", 1, "拔山功"],
	"51": ["绝技", 1, "倒踢腿"],
	"52": ["绝技", 1, "柔身术"],
	"53": ["绝技", 1, "拔钉功"],
	"54": ["绝技", 1, "闪战法"],
	"55": ["绝技", 1, "铁牛犁地"],
	"56": ["绝技", 1, "乱弹琵琶"],
	"57": ["拳掌", 1, "八卦掌法"],
	"58": ["拳掌", 1, "通臂拳"],
	"59": ["拳掌", 1, "燕青拳"],
	"60": ["拳掌", 1, "野狐拳"],
	"61": ["拳掌", 1, "螳螂拳"],
	"62": ["拳掌", 1, "八极拳"],
	"63": ["拳掌", 1, "赤尻连拳"],
	"64": ["拳掌", 1, "连环掌法"],
	"65": ["拳掌", 1, "岳家拳"],
	"66": ["拳掌", 1, "形意拳"],
	"67": ["剑法", 1, "八卦剑法"],
	"68": ["剑法", 1, "连环剑法"],
	"69": ["剑法", 1, "雷震剑法"],
	"70": ["剑法", 1, "白马剑法"],
	"71": ["剑法", 1, "云雾剑法"],
	"72": ["剑法", 1, "无量剑法"],
	"73": ["剑法", 1, "迅剑诀"],
	"74": ["剑法", 1, "闪剑"],
	"75": ["剑法", 1, "开阖剑术"],
	"76": ["剑法", 1, "迎风剑法"],
	"77": ["刀法", 1, "八卦刀法"],
	"78": ["刀法", 1, "六合刀法"],
	"79": ["刀法", 1, "螳螂刀法"],
	"80": ["刀法", 1, "劈挂刀法"],
	"81": ["刀法", 1, "铁门闩刀法"],
	"82": ["刀法", 1, "辛酉刀法"],
	"83": ["刀法", 1, "雁行刀"],
	"84": ["刀法", 1, "地堂刀法"],
	"85": ["刀法", 1, "青龙刀法"],
	"86": ["刀法", 1, "南山刀法"],
	"87": ["长兵", 1, "八卦棍法"],
	"88": ["长兵", 1, "罗家枪法"],
	"89": ["长兵", 1, "灵猿棍法"],
	"90": ["长兵", 1, "五郎棍法"],
	"91": ["长兵", 1, "形意枪"],
	"92": ["长兵", 1, "中平枪法"],
	"93": ["长兵", 1, "八母枪术"],
	"94": ["长兵", 1, "杨家枪法"],
	"95": ["长兵", 1, "千钧棍法"],
	"96": ["长兵", 1, "牛头钢叉功"],
	"97": ["奇门", 1, "八卦鞭法"],
	"98": ["奇门", 1, "开山斧"],
	"99": ["奇门", 1, "黄沙万里鞭"],
	"100": ["奇门", 1, "碎石铁鞭"],
	"101": ["奇门", 1, "九节鞭法"],
	"102": ["奇门", 1, "海叟钩法"],
	"103": ["奇门", 1, "连环对刺"],
	"104": ["奇门", 1, "铁蜈钩"],
	"105": ["奇门", 1, "清凉扇法"],
	"106": ["奇门", 1, "闪电五连鞭"],
	"107": ["射术", 1, "掷短斧"],
	"108": ["射术", 1, "梅花镖"],
	"109": ["射术", 1, "玉蜂针"],
	"110": ["射术", 1, "白翎箭"],
	"111": ["射术", 1, "枣核钉"],
	"112": ["射术", 1, "甩袖箭"],
	"113": ["射术", 1, "棉套索"],
	"114": ["射术", 1, "系绳镖"],
	"115": ["射术", 1, "铁莲花"],
	"116": ["射术", 1, "飞手戟"],
	"117": ["内功", 2, "硬气功"],
	"118": ["内功", 2, "归元吐纳功"],
	"119": ["内功", 2, "心意气混元功"],
	"120": ["内功", 2, "金刚心法"],
	"121": ["内功", 2, "轰天掣地诀"],
	"122": ["内功", 2, "普贤心经"],
	"123": ["内功", 2, "灵台清明功"],
	"124": ["内功", 2, "紫气氤氲法"],
	"125": ["内功", 2, "沸血法"],
	"126": ["内功", 2, "软玄功"],
	"127": ["轻功", 2, "燕子三抄水"],
	"128": ["轻功", 2, "上高楼"],
	"129": ["轻功", 2, "壁虎游墙"],
	"130": ["轻功", 2, "磐罡步"],
	"131": ["轻功", 2, "金雁功"],
	"132": ["轻功", 2, "白马悬蹄"],
	"133": ["轻功", 2, "天云步"],
	"134": ["轻功", 2, "翻腾术"],
	"135": ["轻功", 2, "别离步"],
	"136": ["轻功", 2, "陆地飞行术"],
	"137": ["绝技", 2, "四两拨千斤"],
	"138": ["绝技", 2, "铜头铁臂功"],
	"139": ["绝技", 2, "隔山打牛"],
	"140": ["绝技", 2, "一指金刚法"],
	"141": ["绝技", 2, "千层纸功"],
	"142": ["绝技", 2, "分水功"],
	"143": ["绝技", 2, "柔骨摆柳功"],
	"144": ["绝技", 2, "卧虎功"],
	"145": ["绝技", 2, "乱环扑"],
	"146": ["绝技", 2, "霸王肘"],
	"147": ["拳掌", 2, "摔碑手"],
	"148": ["拳掌", 2, "追风短打"],
	"149": ["拳掌", 2, "惊涛掌"],
	"150": ["拳掌", 2, "猛禽手"],
	"151": ["拳掌", 2, "铁砂掌"],
	"152": ["拳掌", 2, "合盘掌"],
	"153": ["拳掌", 2, "伏虎拳"],
	"154": ["拳掌", 2, "大擒拿手"],
	"155": ["拳掌", 2, "铁琵琶手"],
	"156": ["拳掌", 2, "二郎担山掌"],
	"157": ["剑法", 2, "飞星快剑"],
	"158": ["剑法", 2, "快慢十八路"],
	"159": ["剑法", 2, "泼墨剑法"],
	"160": ["剑法", 2, "北斗剑法"],
	"161": ["剑法", 2, "雨打飞花剑"],
	"162": ["剑法", 2, "浣花流水剑"],
	"163": ["剑法", 2, "一字电剑"],
	"164": ["剑法", 2, "周公剑法"],
	"165": ["剑法", 2, "五大夫剑"],
	"166": ["剑法", 2, "霜花剑式"],
	"167": ["刀法", 2, "八面破身刀"],
	"168": ["刀法", 2, "逐浪刀法"],
	"169": ["刀法", 2, "鸳鸯刀法"],
	"170": ["刀法", 2, "五虎断门刀"],
	"171": ["刀法", 2, "八阵盘龙刀"],
	"172": ["刀法", 2, "春秋刀术"],
	"173": ["刀法", 2, "百兽刀法"],
	"174": ["刀法", 2, "荡寇刀法"],
	"175": ["刀法", 2, "雷鸣刀法"],
	"176": ["刀法", 2, "泰山十八刀"],
	"177": ["长兵", 2, "二十四路枪势"],
	"178": ["长兵", 2, "泼水杖法"],
	"179": ["长兵", 2, "六合大枪"],
	"180": ["长兵", 2, "小夜叉棍法"],
	"181": ["长兵", 2, "醉八仙棍法"],
	"182": ["长兵", 2, "蟠龙棍法"],
	"183": ["长兵", 2, "大夜叉棍法"],
	"184": ["长兵", 2, "百变菱枪"],
	"185": ["长兵", 2, "问天枪诀"],
	"186": ["长兵", 2, "空灵杖法"],
	"187": ["奇门", 2, "狂风扫雷扇"],
	"188": ["奇门", 2, "蛇鹤八打"],
	"189": ["奇门", 2, "金龙鞭法"],
	"190": ["奇门", 2, "夺命鞭法"],
	"191": ["奇门", 2, "乱披风锤法"],
	"192": ["奇门", 2, "精钢蟹钳功"],
	"193": ["奇门", 2, "普门杖法"],
	"194": ["奇门", 2, "盘根错节斧"],
	"195": ["奇门", 2, "回打软鞭式"],
	"196": ["奇门", 2, "呼延鞭法"],
	"197": ["射术", 2, "八门飞刀术"],
	"198": ["射术", 2, "乌叶镖"],
	"199": ["射术", 2, "龙须针"],
	"200": ["射术", 2, "铁链飞爪"],
	"201": ["射术", 2, "流星锤"],
	"202": ["射术", 2, "银飞梭"],
	"203": ["射术", 2, "铁索渔网"],
	"204": ["射术", 2, "含沙射影"],
	"205": ["射术", 2, "刀叶扇"],
	"206": ["射术", 2, "乾坤飞轮"],
	"207": ["内功", 3, "潜渊心经"],
	"208": ["内功", 3, "五岳独尊功"],
	"209": ["内功", 3, "乾元功"],
	"210": ["内功", 3, "潮起月盈功"],
	"211": ["内功", 3, "太上十三经"],
	"212": ["轻功", 3, "水上漂"],
	"213": ["轻功", 3, "七步追魂"],
	"214": ["轻功", 3, "八步赶蝉"],
	"215": ["轻功", 3, "踏空行"],
	"216": ["轻功", 3, "飒沓流星步"],
	"217": ["绝技", 3, "虎鹤双形"],
	"218": ["绝技", 3, "真元护体"],
	"219": ["绝技", 3, "五方揭谛功"],
	"220": ["绝技", 3, "熊形虎相"],
	"221": ["绝技", 3, "雷霆万钧"],
	"222": ["拳掌", 3, "飞凤手"],
	"223": ["拳掌", 3, "缠丝擒拿手"],
	"224": ["拳掌", 3, "百花错拳"],
	"225": ["拳掌", 3, "劈金碎玉掌"],
	"226": ["拳掌", 3, "分筋错骨手"],
	"227": ["剑法", 3, "追魂夺命剑"],
	"228": ["剑法", 3, "子午十二剑"],
	"229": ["剑法", 3, "点苍遗剑"],
	"230": ["剑法", 3, "无影乱剑"],
	"231": ["剑法", 3, "越女剑法"],
	"232": ["刀法", 3, "两仪刀法"],
	"233": ["刀法", 3, "羽衣刀法"],
	"234": ["刀法", 3, "空空玄玄刀"],
	"235": ["刀法", 3, "东瀛刀术"],
	"236": ["刀法", 3, "升天斩"],
	"237": ["长兵", 3, "阴符枪谱"],
	"238": ["长兵", 3, "灵蛇杖法"],
	"239": ["长兵", 3, "燎原百击枪"],
	"240": ["长兵", 3, "焚天棍影"],
	"241": ["长兵", 3, "百鸟朝凤枪"],
	"242": ["奇门", 3, "毗卢鞭法"],
	"243": ["奇门", 3, "子午鸳鸯钺"],
	"244": ["奇门", 3, "判官笔法"],
	"245": ["奇门", 3, "月牙弯钩"],
	"246": ["奇门", 3, "开天辟地斧"],
	"247": ["射术", 3, "雷公钻"],
	"248": ["射术", 3, "子母如意珠"],
	"249": ["射术", 3, "腐骨针"],
	"250": ["射术", 3, "赤链蛇锥"],
	"251": ["射术", 3, "阴冥砂"],
	"252": ["内功", 4, "六言真经"],
	"253": ["内功", 4, "先天功"],
	"254": ["内功", 4, "元神出窍功"],
	"255": ["轻功", 4, "如影随形"],
	"256": ["轻功", 4, "攀云乘龙"],
	"257": ["轻功", 4, "嫦娥奔月"],
	"258": ["绝技", 4, "刀枪不入法"],
	"259": ["绝技", 4, "蛤蟆奇功"],
	"260": ["绝技", 4, "梦斩真龙"],
	"261": ["拳掌", 4, "泫然指法"],
	"262": ["拳掌", 4, "大风云手"],
	"263": ["拳掌", 4, "龙爪十缠"],
	"264": ["剑法", 4, "无名剑法"],
	"265": ["剑法", 4, "天意剑诀"],
	"266": ["剑法", 4, "太白剑意"],
	"267": ["刀法", 4, "万壑刀法"],
	"268": ["刀法", 4, "雾隐云龙刀"],
	"269": ["刀法", 4, "战八方藏刀式"],
	"270": ["长兵", 4, "披风七杀戟"],
	"271": ["长兵", 4, "傲世奇枪"],
	"272": ["长兵", 4, "当头棒喝"],
	"273": ["奇门", 4, "银索金玲"],
	"274": ["奇门", 4, "龙头铁铡功"],
	"275": ["奇门", 4, "五蟒狂鞭"],
	"276": ["射术", 4, "阎王帖"],
	"277": ["射术", 4, "追魂魔针"],
	"278": ["射术", 4, "善恶镖"],
	"279": ["内功", 5, "元始天功"],
	"280": ["轻功", 5, "飘飘欲仙"],
	"281": ["绝技", 5, "虎啸龙吟"],
	"282": ["拳掌", 5, "照影神拳"],
	"283": ["剑法", 5, "诛仙剑法"],
	"284": ["刀法", 5, "九州风雷刀"],
	"285": ["长兵", 5, "大闹天宫棍"],
	"286": ["奇门", 5, "碧海潮生曲"],
	"287": ["射术", 5, "多情飞刀"],
	"288": ["内功", 0, "哭面功"],
	"289": ["轻功", 0, "爬竿术"],
	"290": ["绝技", 0, "耍狗熊"],
	"291": ["射术", 0, "石灰散"],
	"292": ["射术", 0, "金钱镖"],
	"293": ["刀法", 0, "刑场刀法"],
	"294": ["内功", 1, "怒面功"],
	"295": ["轻功", 1, "走马灯"],
	"296": ["绝技", 1, "虎口吞枪"],
	"297": ["射术", 1, "银屑粉"],
	"298": ["射术", 1, "铜蟾蜍"],
	"299": ["刀法", 1, "两面三刀法"],
	"300": ["内功", 2, "知足常乐功"],
	"301": ["轻功", 2, "脚踏飞燕"],
	"302": ["绝技", 2, "嬉皮笑脸"],
	"303": ["射术", 2, "长乐散"],
	"304": ["刀法", 2, "长乐刀法"],
	"305": ["刀法", 2, "笑里藏刀式"],
	"306": ["内功", 3, "活弥勒心法"],
	"307": ["轻功", 3, "得意春风步"],
	"308": ["绝技", 3, "放浪形骸"],
	"309": ["射术", 3, "极乐刺"],
	"310": ["刀法", 3, "游龙戏凤刀"],
	"311": ["刀法", 3, "一刀两断法"],
	"312": ["内功", 4, "喜怒哀乐大法"],
	"313": ["轻功", 4, "日月凌空"],
	"314": ["射术", 4, "千金一掷"],
	"315": ["刀法", 4, "醉阎罗刀法"],
	"316": ["刀法", 4, "恩断义绝刀法"],
	"317": ["轻功", 5, "醉梦鱼龙舞"],
	"318": ["刀法", 5, "净乐琉璃刀"],
	"319": ["内功", 0, "阴手伤人法"],
	"320": ["轻功", 0, "走房檐"],
	"321": ["绝技", 0, "心眼功"],
	"322": ["射术", 0, "毒蒺藜"],
	"323": ["射术", 0, "绣花针"],
	"324": ["射术", 0, "三寸钉"],
	"325": ["刀法", 0, "袖里藏刀"],
	"326": ["内功", 1, "七窍玲珑功"],
	"327": ["轻功", 1, "鹞子翻身"],
	"328": ["绝技", 1, "隐匿术"],
	"329": ["射术", 1, "错骨钩"],
	"330": ["射术", 1, "牛毛针"],
	"331": ["射术", 1, "青蜂钉"],
	"332": ["刀法", 1, "机关弹刀"],
	"333": ["内功", 2, "九转飞芒功"],
	"334": ["轻功", 2, "金蝉脱壳"],
	"335": ["绝技", 2, "袖里乾坤"],
	"336": ["射术", 2, "银丝网"],
	"337": ["射术", 2, "断肠针"],
	"338": ["射术", 2, "穿心钉"],
	"339": ["刀法", 2, "飞叶斩片刀"],
	"340": ["内功", 3, "百手千指功"],
	"341": ["轻功", 3, "鬼影重重"],
	"342": ["绝技", 3, "绵里藏针"],
	"343": ["射术", 3, "孔雀翎"],
	"344": ["射术", 3, "玉髓冰魄针"],
	"345": ["射术", 3, "碎颅钉"],
	"346": ["刀法", 3, "百转千折刀"],
	"347": ["绝技", 4, "天阴柔劲"],
	"348": ["射术", 4, "观音泪"],
	"349": ["射术", 4, "暴雨梨花针"],
	"350": ["射术", 4, "七星透骨钉"],
	"351": ["刀法", 4, "万化玄机刀"],
	"352": ["绝技", 5, "漫天花雨"],
	"353": ["射术", 5, "九天罗候针"],
	"354": ["内功", 0, "千金要方"],
	"355": ["轻功", 0, "悬绳功"],
	"356": ["绝技", 0, "推拿法"],
	"357": ["拳掌", 0, "微雨指法"],
	"358": ["拳掌", 0, "化瘀掌"],
	"359": ["射术", 0, "药王针术"],
	"360": ["内功", 1, "采补养元功"],
	"361": ["轻功", 1, "采燕功"],
	"362": ["绝技", 1, "回春丹方"],
	"363": ["拳掌", 1, "指点十一式"],
	"364": ["拳掌", 1, "春蚕掌"],
	"365": ["射术", 1, "芙蓉金针"],
	"366": ["内功", 2, "金针伐脉术"],
	"367": ["轻功", 2, "灵鳌步"],
	"368": ["绝技", 2, "金钗刮膜功"],
	"369": ["拳掌", 2, "凝血指"],
	"370": ["拳掌", 2, "摧心掌"],
	"371": ["射术", 2, "天王补心针"],
	"372": ["内功", 3, "扁鹊回春功"],
	"373": ["轻功", 3, "女娲补天式"],
	"374": ["绝技", 3, "移花接木"],
	"375": ["拳掌", 3, "九幽黄泉指"],
	"376": ["拳掌", 3, "药王毒手"],
	"377": ["射术", 3, "扁鹊神针"],
	"378": ["内功", 4, "神农本草秘要"],
	"379": ["绝技", 4, "枯骨生肉法"],
	"380": ["拳掌", 4, "大慈大悲指"],
	"381": ["拳掌", 4, "化脉神掌"],
	"382": ["射术", 4, "无影神针"],
	"383": ["内功", 5, "黄帝秘经"],
	"384": ["拳掌", 5, "灵犀一指"],
	"385": ["内功", 0, "敲碗诀"],
	"386": ["轻功", 0, "野狗步"],
	"387": ["绝技", 0, "快板功"],
	"388": ["拳掌", 0, "五行六合拳"],
	"389": ["拳掌", 0, "快活十三掌"],
	"390": ["长兵", 0, "铁扫帚"],
	"391": ["长兵", 0, "花子棍"],
	"392": ["内功", 1, "内家数来宝"],
	"393": ["轻功", 1, "鸟兽散"],
	"394": ["绝技", 1, "花鼓戏"],
	"395": ["拳掌", 1, "沾衣十八跌"],
	"396": ["拳掌", 1, "醉拳"],
	"397": ["长兵", 1, "拜年棍法"],
	"398": ["长兵", 1, "双棍缠身"],
	"399": ["内功", 2, "莲花落心法"],
	"400": ["轻功", 2, "死缠烂打"],
	"401": ["绝技", 2, "布袋功"],
	"402": ["拳掌", 2, "莲花掌"],
	"403": ["拳掌", 2, "铜锤手"],
	"404": ["长兵", 2, "莲花乱棍"],
	"405": ["长兵", 2, "哭丧棍法"],
	"406": ["内功", 3, "混天功"],
	"407": ["轻功", 3, "逍遥游"],
	"408": ["绝技", 3, "妙手空空"],
	"409": ["拳掌", 3, "鲲鹏拳法"],
	"410": ["拳掌", 3, "铁蒲扇手"],
	"411": ["长兵", 3, "奇门三才棍"],
	"412": ["长兵", 3, "威武棍法"],
	"413": ["内功", 4, "混世天罡"],
	"414": ["绝技", 4, "虎落平阳"],
	"415": ["拳掌", 4, "睡梦罗汉拳"],
	"416": ["拳掌", 4, "酒仙散手"],
	"417": ["长兵", 4, "吉祥如意棍"],
	"418": ["长兵", 4, "黑白无常棍"],
	"419": ["拳掌", 5, "降龙掌法"],
	"420": ["长兵", 5, "打狗八绝棍"],
	"421": ["内功", 0, "禁军心法"],
	"422": ["轻功", 0, "从军行"],
	"423": ["绝技", 0, "举盾术"],
	"424": ["长兵", 0, "薛家戟法"],
	"425": ["长兵", 0, "岳家枪法"],
	"426": ["长兵", 0, "舂米戈术"],
	"427": ["刀法", 0, "四门刀法"],
	"428": ["内功", 1, "羽林心法"],
	"429": ["轻功", 1, "衔枚疾走"],
	"430": ["绝技", 1, "铁桶功"],
	"431": ["长兵", 1, "折戟沉沙"],
	"432": ["长兵", 1, "回马枪术"],
	"433": ["长兵", 1, "泣血戈术"],
	"434": ["刀法", 1, "斩马刀法"],
	"435": ["内功", 2, "孤烟心经"],
	"436": ["轻功", 2, "策马过五关"],
	"437": ["绝技", 2, "陷阵之志"],
	"438": ["长兵", 2, "飞龙长戟"],
	"439": ["长兵", 2, "潜龙枪诀"],
	"440": ["长兵", 2, "铁马金戈"],
	"441": ["刀法", 2, "劈天刀法"],
	"442": ["内功", 3, "潜龙心法"],
	"443": ["轻功", 3, "长车踏破"],
	"444": ["绝技", 3, "明光照铁衣"],
	"445": ["长兵", 3, "十六路青龙戟"],
	"446": ["长兵", 3, "定军枪"],
	"447": ["长兵", 3, "干戈琢玉"],
	"448": ["刀法", 3, "百战刀法"],
	"449": ["轻功", 4, "龙城飞将步"],
	"450": ["绝技", 4, "满江红神功"],
	"451": ["长兵", 4, "八荒六合戟"],
	"452": ["长兵", 4, "碧血洗银枪"],
	"453": ["长兵", 4, "退日戈术"],
	"454": ["刀法", 4, "镇魔斩妖刀"],
	"455": ["绝技", 5, "帝王封禅功"],
	"456": ["长兵", 5, "惊鸿一点枪"],
	"457": ["内功", 0, "内丹功"],
	"458": ["轻功", 0, "卷云步"],
	"459": ["绝技", 0, "布气诀"],
	"460": ["奇门", 0, "十八连环破"],
	"461": ["奇门", 0, "清心咒"],
	"462": ["奇门", 0, "安神咒"],
	"463": ["剑法", 0, "清风剑法"],
	"464": ["内功", 1, "静守谷神法"],
	"465": ["轻功", 1, "御风咒"],
	"466": ["绝技", 1, "长目飞耳功"],
	"467": ["奇门", 1, "跌打梅山咒"],
	"468": ["奇门", 1, "咽喉骨鲠法"],
	"469": ["奇门", 1, "定身咒"],
	"470": ["剑法", 1, "茅山道剑"],
	"471": ["内功", 2, "玄门胎息功"],
	"472": ["内功", 2, "服内元气诀"],
	"473": ["轻功", 2, "移形换位"],
	"474": ["绝技", 2, "关公朗真术"],
	"475": ["奇门", 2, "引雷术"],
	"476": ["奇门", 2, "勾魂咒"],
	"477": ["奇门", 2, "天罡咒"],
	"478": ["剑法", 2, "御剑秘术"],
	"479": ["内功", 3, "五气朝元功"],
	"480": ["内功", 3, "金仙秘旨功"],
	"481": ["轻功", 3, "瞬息千里"],
	"482": ["绝技", 3, "神女报梦"],
	"483": ["奇门", 3, "寒天咒"],
	"484": ["奇门", 3, "地母雷网"],
	"485": ["奇门", 3, "火炼金身符"],
	"486": ["剑法", 3, "钟馗斩妖剑"],
	"487": ["内功", 4, "龙虎金丹功"],
	"488": ["内功", 4, "冲虚神功"],
	"489": ["轻功", 4, "万里神行"],
	"490": ["绝技", 4, "三华聚顶"],
	"491": ["奇门", 4, "三昧真火"],
	"492": ["奇门", 4, "神兵天将咒"],
	"493": ["奇门", 4, "斗煞藏魂符"],
	"494": ["剑法", 4, "玄真剑气"],
	"495": ["绝技", 5, "遁甲天书"],
	"496": ["奇门", 5, "天劫九重"],
	"497": ["内功", 0, "打铁功"],
	"498": ["轻功", 0, "木屐步"],
	"499": ["绝技", 0, "木甲百重"],
	"500": ["剑法", 0, "寒泉剑法"],
	"501": ["剑法", 0, "鱼肠剑法"],
	"502": ["刀法", 0, "宰鸡牛刀"],
	"503": ["内功", 1, "百炼功"],
	"504": ["轻功", 1, "铁履功"],
	"505": ["绝技", 1, "双剑合璧"],
	"506": ["剑法", 1, "青釭剑法"],
	"507": ["剑法", 1, "胜邪剑法"],
	"508": ["刀法", 1, "乱麻刀法"],
	"509": ["内功", 2, "千锤功"],
	"510": ["轻功", 2, "名山寻路"],
	"511": ["绝技", 2, "铁甲千重"],
	"512": ["剑法", 2, "巨阙重剑"],
	"513": ["剑法", 2, "承影剑法"],
	"514": ["刀法", 2, "庖丁解牛刀"],
	"515": ["内功", 3, "炉火纯青功"],
	"516": ["轻功", 3, "踏破铁鞋功"],
	"517": ["绝技", 3, "百剑穿心"],
	"518": ["剑法", 3, "破军剑法"],
	"519": ["剑法", 3, "干将莫邪剑"],
	"520": ["刀法", 3, "分金刀术"],
	"521": ["绝技", 4, "万剑奇功"],
	"522": ["绝技", 4, "金甲万重"],
	"523": ["剑法", 4, "赤霄斩蛇剑"],
	"524": ["剑法", 4, "含光无形剑"],
	"525": ["刀法", 4, "屠龙要术"],
	"526": ["剑法", 5, "无尽剑意"],
	"527": ["内功", 0, "引蛇术"],
	"528": ["轻功", 0, "泥鳅功"],
	"529": ["绝技", 0, "迷虫香"],
	"530": ["拳掌", 0, "蓝砂手"],
	"531": ["拳掌", 0, "五毒掌"],
	"532": ["射术", 0, "朱蟾砂"],
	"533": ["射术", 0, "五毒针"],
	"534": ["奇门", 0, "泥鳅蛊"],
	"535": ["内功", 1, "腐尸功"],
	"536": ["轻功", 1, "蛇行步"],
	"537": ["绝技", 1, "炼蛊术"],
	"538": ["拳掌", 1, "金蛇缠丝手"],
	"539": ["拳掌", 1, "灵蛇拳"],
	"540": ["射术", 1, "腐尸毒"],
	"541": ["射术", 1, "碧磷针"],
	"542": ["奇门", 1, "阴蛇蛊"],
	"543": ["内功", 2, "五仙真灵诀"],
	"544": ["轻功", 2, "蛤蟆纵跳"],
	"545": ["绝技", 2, "迷魂息"],
	"546": ["拳掌", 2, "三尸蜈蚣爪"],
	"547": ["拳掌", 2, "化骨绵掌"],
	"548": ["射术", 2, "断魂砂"],
	"549": ["射术", 2, "饮血针"],
	"550": ["奇门", 2, "狂癫蛊"],
	"551": ["内功", 3, "天蚕吐丝功"],
	"552": ["轻功", 3, "蜈蚣遁地术"],
	"553": ["绝技", 3, "摄魂大法"],
	"554": ["拳掌", 3, "千蛛万毒手"],
	"555": ["拳掌", 3, "赤炼神掌"],
	"556": ["射术", 3, "孟婆散"],
	"557": ["射术", 3, "赤炼神针"],
	"558": ["奇门", 3, "情花蛊"],
	"559": ["内功", 4, "五毒魔功"],
	"560": ["轻功", 4, "天蛇诡步"],
	"561": ["拳掌", 4, "天蚕手"],
	"562": ["拳掌", 4, "五毒神掌"],
	"563": ["射术", 4, "鹤顶红"],
	"564": ["射术", 4, "黑血神针"],
	"565": ["奇门", 4, "害神蛊"],
	"566": ["轻功", 5, "蚩尤鬼降"],
	"567": ["绝技", 5, "万毒宝典"],
	"568": ["射术", 5, "金蚕王蛊"],
	"569": ["内功", 0, "黑尸诀"],
	"570": ["轻功", 0, "飞沙走石"],
	"571": ["绝技", 0, "鬼夜哭"],
	"572": ["刀法", 0, "夜行刀法"],
	"573": ["刀法", 0, "红眼刀法"],
	"574": ["拳掌", 0, "僵尸拳"],
	"575": ["拳掌", 0, "招魂掌"],
	"576": ["内功", 1, "杀意心法"],
	"577": ["轻功", 1, "邪鬼步"],
	"578": ["绝技", 1, "鬼打墙"],
	"579": ["刀法", 1, "鬼面刀法"],
	"580": ["刀法", 1, "阴风刀法"],
	"581": ["拳掌", 1, "绝户爪"],
	"582": ["拳掌", 1, "血手印"],
	"583": ["内功", 2, "阴阳磨"],
	"584": ["轻功", 2, "幽冥步"],
	"585": ["绝技", 2, "鬼见愁"],
	"586": ["刀法", 2, "夺命追魂刀"],
	"587": ["刀法", 2, "修罗刀法"],
	"588": ["拳掌", 2, "鬼哭拳"],
	"589": ["拳掌", 2, "朱砂掌"],
	"590": ["内功", 3, "混世魔功"],
	"591": ["轻功", 3, "百鬼夜行"],
	"592": ["绝技", 3, "群魔乱舞"],
	"593": ["刀法", 3, "天玄七煞刀"],
	"594": ["刀法", 3, "阴阳乱刃"],
	"595": ["拳掌", 3, "黑龙十八手"],
	"596": ["拳掌", 3, "抽髓掌"],
	"597": ["内功", 4, "苦海魔功"],
	"598": ["轻功", 4, "无法无天步"],
	"599": ["绝技", 4, "炼狱破天劲"],
	"600": ["刀法", 4, "饮血魔刀"],
	"601": ["刀法", 4, "销魂鬼刃"],
	"602": ["拳掌", 4, "神倒鬼跌拳"],
	"603": ["拳掌", 4, "九死离魂掌"],
	"604": ["内功", 5, "万恶魔功"],
	"605": ["绝技", 5, "血脉逆行"],
	"606": ["刀法", 5, "杀人刀法"],
	"607": ["内功", 0, "龟息功"],
	"608": ["轻功", 0, "灵虚步"],
	"609": ["绝技", 0, "抚琴清音"],
	"610": ["射术", 0, "胡笳十八拍"],
	"611": ["内功", 1, "琴棋书画功"],
	"612": ["轻功", 1, "笔走龙蛇"],
	"613": ["绝技", 1, "星罗棋布"],
	"614": ["射术", 1, "七弦无形音"],
	"615": ["射术", 1, "棋盘四式"],
	"616": ["奇门", 1, "永字八法"],
	"617": ["奇门", 1, "丹青破穴"],
	"618": ["剑法", 1, "天罗地网剑"],
	"619": ["内功", 2, "无欲无情功"],
	"620": ["轻功", 2, "横空挪移"],
	"621": ["绝技", 2, "丹青妙手"],
	"622": ["射术", 2, "阳春白雪"],
	"623": ["射术", 2, "手谈十九路"],
	"624": ["奇门", 2, "铁画银钩"],
	"625": ["奇门", 2, "泼墨成画功"],
	"626": ["剑法", 2, "玄音幻剑"],
	"627": ["内功", 3, "梦蝶心经"],
	"628": ["轻功", 3, "凭虚临风"],
	"629": ["绝技", 3, "文心雕龙"],
	"630": ["射术", 3, "高山流水"],
	"631": ["射术", 3, "乱点天元"],
	"632": ["奇门", 3, "裴将军功"],
	"633": ["奇门", 3, "生花妙笔"],
	"634": ["剑法", 3, "阴阳奇剑"],
	"635": ["内功", 4, "太阳太玄功"],
	"636": ["内功", 4, "太阴太玄功"],
	"637": ["轻功", 4, "螺旋九影"],
	"638": ["绝技", 4, "霓裳羽衣舞"],
	"639": ["射术", 4, "广陵散曲功"],
	"640": ["射术", 4, "呕血坐隐功"],
	"641": ["奇门", 4, "春秋笔法"],
	"642": ["奇门", 4, "画龙点睛"],
	"643": ["剑法", 4, "天来剑术"],
	"644": ["内功", 5, "归墟秘典"],
	"645": ["轻功", 5, "天人感应步"],
	"646": ["绝技", 5, "轮回不灭法"],
	"647": ["内功", 0, "静禅功"],
	"648": ["轻功", 0, "挑水桶"],
	"649": ["绝技", 0, "铁裆功"],
	"650": ["拳掌", 0, "少林长拳"],
	"651": ["长兵", 0, "少林棍法"],
	"652": ["长兵", 0, "稍子棍法"],
	"653": ["奇门", 0, "月牙铲功"],
	"654": ["内功", 1, "罗汉护体功"],
	"655": ["轻功", 1, "蜻蜓点水"],
	"656": ["绝技", 1, "遍体铜人"],
	"657": ["拳掌", 1, "罗汉拳法"],
	"658": ["拳掌", 1, "韦陀掌"],
	"659": ["拳掌", 1, "天竺佛指"],
	"660": ["长兵", 1, "齐眉棍法"],
	"661": ["长兵", 1, "梅花棍法"],
	"662": ["奇门", 1, "伏魔铲法"],
	"663": ["内功", 2, "菩提心法"],
	"664": ["轻功", 2, "九图六坐像"],
	"665": ["绝技", 2, "一指禅"],
	"666": ["拳掌", 2, "少林龙爪手"],
	"667": ["拳掌", 2, "去烦恼指"],
	"668": ["长兵", 2, "扫落叶棍法"],
	"669": ["长兵", 2, "五虎群羊棍"],
	"670": ["奇门", 2, "大韦陀杵"],
	"671": ["内功", 3, "袈裟伏魔功"],
	"672": ["内功", 3, "少林归藏功"],
	"673": ["轻功", 3, "一苇渡江"],
	"674": ["绝技", 3, "金钟罩"],
	"675": ["拳掌", 3, "般若掌"],
	"676": ["拳掌", 3, "无相劫指"],
	"677": ["长兵", 3, "疯魔棍法"],
	"678": ["长兵", 3, "大智无定棍法"],
	"679": ["奇门", 3, "菩提智慧杵"],
	"680": ["内功", 4, "阿罗汉神功"],
	"681": ["轻功", 4, "无色无相身"],
	"682": ["绝技", 4, "佛门狮吼功"],
	"683": ["拳掌", 4, "大力金刚掌"],
	"684": ["拳掌", 4, "拈花指"],
	"685": ["拳掌", 4, "如来千叶手"],
	"686": ["长兵", 4, "大文殊杖法"],
	"687": ["长兵", 4, "紧那罗王棍法"],
	"688": ["奇门", 4, "金刚伏魔圈"],
	"689": ["内功", 5, "易筋经"],
	"690": ["内功", 5, "洗髓经"],
	"691": ["绝技", 5, "金刚不坏神功"],
	"692": ["长兵", 5, "达摩神杖"],
	"693": ["内功", 0, "武当太和功"],
	"694": ["轻功", 0, "八卦步"],
	"695": ["绝技", 0, "武当软硬功"],
	"696": ["拳掌", 0, "武当长拳"],
	"697": ["拳掌", 0, "武当绵掌"],
	"698": ["剑法", 0, "武当丹剑"],
	"699": ["剑法", 0, "松溪小花剑"],
	"700": ["内功", 1, "武当混元桩"],
	"701": ["轻功", 1, "九宫十八步"],
	"702": ["绝技", 1, "子午盘功"],
	"703": ["拳掌", 1, "九宫游身掌"],
	"704": ["拳掌", 1, "金针指功"],
	"705": ["剑法", 1, "柔云剑法"],
	"706": ["剑法", 1, "玄门十三剑"],
	"707": ["内功", 2, "元始周天功"],
	"708": ["内功", 2, "武当归藏功"],
	"709": ["轻功", 2, "四象疑步"],
	"710": ["绝技", 2, "金关玉锁诀"],
	"711": ["拳掌", 2, "昊天掌"],
	"712": ["拳掌", 2, "无极玄功拳"],
	"713": ["剑法", 2, "绕指柔剑"],
	"714": ["剑法", 2, "两仪剑法"],
	"715": ["内功", 3, "纯阳无极功"],
	"716": ["轻功", 3, "天梯纵云步"],
	"717": ["绝技", 3, "柔易九转功"],
	"718": ["拳掌", 3, "伏魔证道拳"],
	"719": ["拳掌", 3, "太虚掌"],
	"720": ["剑法", 3, "丹凤朝阳剑"],
	"721": ["剑法", 3, "三清化一剑"],
	"722": ["内功", 4, "先天无上罡气"],
	"723": ["轻功", 4, "北斗仙踪"],
	"724": ["绝技", 4, "阴阳调元法"],
	"725": ["拳掌", 4, "日月明光掌"],
	"726": ["拳掌", 4, "太极拳法"],
	"727": ["剑法", 4, "太乙神剑"],
	"728": ["剑法", 4, "真武荡魔剑"],
	"729": ["内功", 5, "太极神功"],
	"730": ["绝技", 5, "道德真经"],
	"731": ["剑法", 5, "太极剑道"],
	"732": ["内功", 0, "铁脉功"],
	"733": ["轻功", 0, "铁膝功"],
	"734": ["绝技", 0, "铁头功"],
	"735": ["刀法", 0, "开山刀法"],
	"736": ["刀法", 0, "骤雨刀法"],
	"737": ["长兵", 0, "银蛇枪法"],
	"738": ["内功", 1, "十三太保横练"],
	"739": ["轻功", 1, "黄沙落雁"],
	"740": ["绝技", 1, "铜皮铁骨功"],
	"741": ["刀法", 1, "撼地刀法"],
	"742": ["刀法", 1, "狂风快刀"],
	"743": ["长兵", 1, "西凉枪法"],
	"744": ["内功", 2, "童子金身功"],
	"745": ["轻功", 2, "猛将步"],
	"746": ["绝技", 2, "黑砂刚体"],
	"747": ["刀法", 2, "霹雳雷震刀"],
	"748": ["刀法", 2, "断水流刀法"],
	"749": ["长兵", 2, "七探盘龙枪"],
	"750": ["内功", 3, "霸王举鼎功"],
	"751": ["轻功", 3, "千里横行"],
	"752": ["绝技", 3, "金刀换掌功"],
	"753": ["刀法", 3, "英雄刀法"],
	"754": ["刀法", 3, "嗔狂刀法"],
	"755": ["长兵", 3, "寻龙枪诀"],
	"756": ["绝技", 4, "霸王卸甲"],
	"757": ["刀法", 4, "天命刀法"],
	"758": ["刀法", 4, "缺月弯刀"],
	"759": ["长兵", 4, "霸王枪法"],
	"760": ["刀法", 5, "霸刀一式"],
	"761": ["内功", 0, "抱元诀"],
	"762": ["轻功", 0, "倒骑驴"],
	"763": ["绝技", 0, "通气法"],
	"764": ["剑法", 0, "八仙剑法"],
	"765": ["剑法", 0, "碧波剑法"],
	"766": ["奇门", 0, "天女散花篮"],
	"767": ["内功", 1, "灵宝毕法功"],
	"768": ["轻功", 1, "泅水术"],
	"769": ["绝技", 1, "丹砂诀"],
	"770": ["剑法", 1, "风波十三式"],
	"771": ["剑法", 1, "流云剑术"],
	"772": ["奇门", 1, "芭蕉铁扇功"],
	"773": ["内功", 2, "长生真诀"],
	"774": ["轻功", 2, "乘风归"],
	"775": ["绝技", 2, "剑气歌"],
	"776": ["剑法", 2, "花飞蝶舞剑"],
	"777": ["剑法", 2, "沧海追风剑"],
	"778": ["奇门", 2, "天花引"],
	"779": ["内功", 3, "仙人抚顶功"],
	"780": ["轻功", 3, "青烟飞絮"],
	"781": ["绝技", 3, "灵剑幻花"],
	"782": ["剑法", 3, "溟海逐月剑"],
	"783": ["剑法", 3, "朝阳一气剑"],
	"784": ["奇门", 3, "冲天渔鼓"],
	"785": ["内功", 4, "紫微星诀"],
	"786": ["轻功", 4, "凌波虚渡"],
	"787": ["绝技", 4, "大道剑诀"],
	"788": ["剑法", 4, "碧海飞仙剑"],
	"789": ["剑法", 4, "纯阳剑法"],
	"790": ["奇门", 4, "铁拐化龙"],
	"791": ["奇门", 4, "五尺混天绫"],
	"792": ["内功", 5, "敲爻歌诀"],
	"793": ["剑法", 5, "天遁剑法"],
	"794": ["内功", 0, "坐忘功"],
	"795": ["轻功", 0, "猿公跳涧"],
	"796": ["绝技", 0, "凝心诀"],
	"797": ["拳掌", 0, "鸭形拳"],
	"798": ["拳掌", 0, "三十六闭手"],
	"799": ["剑法", 0, "静心剑法"],
	"800": ["内功", 1, "临济十二庄"],
	"801": ["内功", 1, "峨眉归藏功"],
	"802": ["轻功", 1, "峨眉虎步功"],
	"803": ["绝技", 1, "清静归一法"],
	"804": ["拳掌", 1, "至云纽丝拳"],
	"805": ["拳掌", 1, "白猿通臂拳"],
	"806": ["剑法", 1, "猿公剑法"],
	"807": ["内功", 2, "灵悟自然功"],
	"808": ["轻功", 2, "步步生莲"],
	"809": ["绝技", 2, "莲花宝笈"],
	"810": ["拳掌", 2, "金顶绵掌"],
	"811": ["拳掌", 2, "峨眉鹰爪功"],
	"812": ["剑法", 2, "回风拂柳剑"],
	"813": ["内功", 3, "莲花玄功"],
	"814": ["轻功", 3, "灵狐拜月步"],
	"815": ["绝技", 3, "七星横链"],
	"816": ["拳掌", 3, "兰花拂穴手"],
	"817": ["拳掌", 3, "金刚三昧掌"],
	"818": ["剑法", 3, "玄女九式"],
	"819": ["内功", 4, "梵文贝叶经"],
	"820": ["轻功", 4, "舍身飞渡"],
	"821": ["绝技", 4, "金顶佛光"],
	"822": ["拳掌", 4, "天罡指穴功"],
	"823": ["拳掌", 4, "天罡雷轰掌"],
	"824": ["剑法", 4, "灭心绝情剑"],
	"825": ["内功", 5, "三洞灵宝经"],
	"826": ["轻功", 5, "诸天化身步"],
	"827": ["内功", 0, "易通法"],
	"828": ["轻功", 0, "麻雀跃"],
	"829": ["绝技", 0, "爬铁索"],
	"830": ["奇门", 0, "蝎尾鞭"],
	"831": ["奇门", 0, "扫拂尘"],
	"832": ["长兵", 0, "铁脊矛突"],
	"833": ["内功", 1, "子午流注功"],
	"834": ["轻功", 1, "鹰翼功"],
	"835": ["绝技", 1, "磐石劲"],
	"836": ["奇门", 1, "五鬼追魂鞭"],
	"837": ["奇门", 1, "龙凤双钩"],
	"838": ["长兵", 1, "搬山铁耙功"],
	"839": ["内功", 2, "奇门五转"],
	"840": ["轻功", 2, "大鹏展翅"],
	"841": ["绝技", 2, "花架门"],
	"842": ["奇门", 2, "金鳞巨蟒鞭"],
	"843": ["奇门", 2, "翻天印"],
	"844": ["长兵", 2, "贯甲破盾矛"],
	"845": ["内功", 3, "上清气功"],
	"846": ["轻功", 3, "倒踩三叠云"],
	"847": ["绝技", 3, "龟藏豹隐"],
	"848": ["奇门", 3, "鬼打狂鞭"],
	"849": ["奇门", 3, "太统法铃"],
	"850": ["长兵", 3, "北风百裂矛"],
	"851": ["内功", 4, "离合神功"],
	"852": ["轻功", 4, "七雁落长空"],
	"853": ["绝技", 4, "回音搜魂术"],
	"854": ["奇门", 4, "生死一线鞭"],
	"855": ["奇门", 4, "乾坤日月圈"],
	"856": ["长兵", 4, "玉石俱焚矛"],
	"857": ["绝技", 5, "斗转星移"],
	"858": ["内功", 0, "非攻法"],
	"859": ["轻功", 0, "迷踪步"],
	"860": ["绝技", 0, "口算功"],
	"861": ["奇门", 0, "木流马"],
	"862": ["奇门", 0, "机簧斧"],
	"863": ["射术", 0, "飞蝗箭"],
	"864": ["内功", 1, "明鬼诀"],
	"865": ["轻功", 1, "坐五车"],
	"866": ["绝技", 1, "相星术"],
	"867": ["奇门", 1, "青铜奔牛"],
	"868": ["奇门", 1, "机关伞"],
	"869": ["射术", 1, "连珠箭"],
	"870": ["内功", 2, "天志术"],
	"871": ["轻功", 2, "八阵图步"],
	"872": ["绝技", 2, "举手摘星式"],
	"873": ["奇门", 2, "玉石麒麟"],
	"874": ["奇门", 2, "六转孔明锁"],
	"875": ["射术", 2, "神机箭"],
	"876": ["内功", 3, "本经阴符七术"],
	"877": ["轻功", 3, "云龙九现"],
	"878": ["绝技", 3, "指算玄通"],
	"879": ["奇门", 3, "燎原朱雀"],
	"880": ["奇门", 3, "遮天假手"],
	"881": ["射术", 3, "五子追心箭"],
	"882": ["内功", 4, "河图洛书"],
	"883": ["绝技", 4, "千机万巧"],
	"884": ["奇门", 4, "地动青龙"],
	"885": ["奇门", 4, "傀儡牵丝术"],
	"886": ["射术", 4, "元戎弩箭"],
	"887": ["轻功", 5, "武库战车"],
	"888": ["奇门", 5, "公输遗匣"],
	"889": ["内功", 0, "雷火功"],
	"890": ["轻功", 0, "疾电步"],
	"891": ["绝技", 0, "铁手腕"],
	"892": ["射术", 0, "铄心弹"],
	"893": ["射术", 0, "火蒺藜"],
	"894": ["长兵", 0, "霹雳枪法"],
	"895": ["内功", 1, "烈阳心法"],
	"896": ["轻功", 1, "风火轮"],
	"897": ["绝技", 1, "硝石法"],
	"898": ["射术", 1, "震天雷"],
	"899": ["射术", 1, "突火筒"],
	"900": ["长兵", 1, "烈阳枪法"],
	"901": ["内功", 2, "江翻海沸功"],
	"902": ["轻功", 2, "雷车动地"],
	"903": ["绝技", 2, "伏硫黄法"],
	"904": ["射术", 2, "霹雳雷火弹"],
	"905": ["射术", 2, "猛火油"],
	"906": ["长兵", 2, "震天枪式"],
	"907": ["内功", 3, "祝融真火诀"],
	"908": ["轻功", 3, "电光火石"],
	"909": ["绝技", 3, "伏火矾法"],
	"910": ["射术", 3, "飞火流星"],
	"911": ["射术", 3, "铁嘴火鹞"],
	"912": ["长兵", 3, "奔雷枪诀"],
	"913": ["绝技", 4, "黑火药法"],
	"914": ["射术", 4, "连环子母弹"],
	"915": ["射术", 4, "神火飞鸦"],
	"916": ["长兵", 4, "火树银枪"],
	"917": ["射术", 5, "灭世天雷"],
	"918": ["内功", 0, "吐姆功"],
	"919": ["轻功", 0, "转山行"],
	"920": ["绝技", 0, "天耳通"],
	"921": ["绝技", 0, "灌顶法"],
	"922": ["奇门", 0, "如意宝杵"],
	"923": ["奇门", 0, "飞轮功"],
	"924": ["刀法", 0, "持戒刀法"],
	"925": ["内功", 1, "宝瓶气功"],
	"926": ["轻功", 1, "顶礼功"],
	"927": ["绝技", 1, "天眼通"],
	"928": ["绝技", 1, "密宗缩骨功"],
	"929": ["奇门", 1, "三曼荼罗杵"],
	"930": ["奇门", 1, "往生轮"],
	"931": ["刀法", 1, "往生刀法"],
	"932": ["内功", 2, "不动明王功"],
	"933": ["轻功", 2, "神足通"],
	"934": ["绝技", 2, "金刚怒目"],
	"935": ["绝技", 2, "降龙伏虎功"],
	"936": ["奇门", 2, "金刚降魔杵"],
	"937": ["奇门", 2, "五轮大法"],
	"938": ["刀法", 2, "金刚降魔刀"],
	"939": ["内功", 3, "摩揭陀瑜伽功"],
	"940": ["轻功", 3, "转轮行空"],
	"941": ["绝技", 3, "释迦掷象"],
	"942": ["绝技", 3, "瑜伽行地"],
	"943": ["奇门", 3, "大威德杵"],
	"944": ["奇门", 3, "无量转轮功"],
	"945": ["刀法", 3, "阿鼻八刀"],
	"946": ["内功", 4, "大黑天降魔功"],
	"947": ["绝技", 4, "密宗大手印"],
	"948": ["绝技", 4, "宿命通"],
	"949": ["奇门", 4, "无上大力杵"],
	"950": ["奇门", 4, "观想日月轮"],
	"951": ["刀法", 4, "无苦寂灭刀"],
	"952": ["内功", 5, "大日如来功"],
	"953": ["绝技", 5, "龙象护法功"],
	"954": ["奇门", 5, "因陀罗杵"],
	"955": ["内功", 0, "凝冰诀"],
	"956": ["轻功", 0, "踏雪行"],
	"957": ["绝技", 0, "采冰术"],
	"958": ["拳掌", 0, "碧罗掌"],
	"959": ["拳掌", 0, "朔风指"],
	"960": ["剑法", 0, "天山剑法"],
	"961": ["剑法", 0, "吹雪剑法"],
	"962": ["内功", 1, "寒梅心经"],
	"963": ["轻功", 1, "雪泥鸿爪"],
	"964": ["绝技", 1, "傲霜诀"],
	"965": ["拳掌", 1, "五罗轻烟掌"],
	"966": ["拳掌", 1, "凌云指"],
	"967": ["剑法", 1, "烟雨六式"],
	"968": ["剑法", 1, "飞瀑剑法"],
	"969": ["内功", 2, "天池心修"],
	"970": ["轻功", 2, "临渊履冰"],
	"971": ["绝技", 2, "踏雪寻梅"],
	"972": ["拳掌", 2, "寒霜掌"],
	"973": ["拳掌", 2, "寒袖拂穴"],
	"974": ["剑法", 2, "素女冰心剑"],
	"975": ["剑法", 2, "长风落雁剑"],
	"976": ["内功", 3, "天山融雪功"],
	"977": ["轻功", 3, "踏雪无痕"],
	"978": ["绝技", 3, "控鹤功"],
	"979": ["拳掌", 3, "飘雪穿云掌"],
	"980": ["拳掌", 3, "幻阴指"],
	"981": ["剑法", 3, "夺魂三仙剑"],
	"982": ["剑法", 3, "风刀霜剑"],
	"983": ["内功", 4, "玄冥真气"],
	"984": ["轻功", 4, "瑶池漫步"],
	"985": ["拳掌", 4, "玄天指"],
	"986": ["拳掌", 4, "玄冥神掌"],
	"987": ["剑法", 4, "清虚广寒剑"],
	"988": ["剑法", 4, "九霄冲天剑"],
	"989": ["内功", 5, "不老长春功"],
	"990": ["轻功", 5, "仙娥折梅"],
	"991": ["拳掌", 5, "白虹贯日掌"],
	"992": ["绝技", 5, "逆转周天大法"],
	"993": ["内功", 4, "绝义归藏功"],
	"994": ["内功", 5, "心狂归藏功"],
	"995": ["内功", 5, "龙胤归藏功"],
	"996": ["射术", 0, "弩箭"],
	"997": ["射术", 0, "野马脱缰"],
	"998": ["射术", 1, "狂奔猛突"],
	"999": ["射术", 2, "飞矢乱箭"],
	"1000": ["射术", 3, "燎原业火"],
	"1001": ["射术", 4, "地动山摇"],
	"1002": ["射术", 0, "小型弩箭"],
	"1003": ["射术", 1, "大型弩箭"],
	"1004": ["射术", 1, "振奋"],
	"1006": ["射术", 2, "齐射"]
};
GameData.SKILL_EXACT_MATCH = {};
GameData.SKILL_ID_TO_TYPE = {};
GameData.getForceName = function(forceId) {
	return GameData.FORCE_MAP[forceId.toString()] || `未知门派${forceId}`
};
GameData.getSkillDisplayName = function(skillId) {
	const data = GameData.SKILL_ID_TO_NAME[skillId.toString()];
	if (!data) return `未知武学${skillId}`;
	return data[2] || `未知武学${skillId}`
};
GameData.getSkillType = function(skillId) {
	const data = GameData.SKILL_ID_TO_NAME[skillId.toString()];
	return data ? data[0] : "其他"
};
GameData.getSkillCat = function(skillId) {
	const type = GameData.getSkillType(skillId);
	const catMap = {
		"内功": "neigong",
		"轻功": "qinggong",
		"绝技": "jueji",
		"拳掌": "quanxue",
		"剑法": "jianfa",
		"刀法": "daofa",
		"长兵": "changbing",
		"奇门": "qimen",
		"射术": "sheshu"
	};
	return catMap[type] || "other"
};
GameData.getTalentName = function(talentId) {
	const talent = GameData.TALENT_MAP[talentId.toString()];
	return talent ? talent.name : `未知天赋${talentId}`
};
GameData.getTalentColor = function(talentId) {
	const talent = GameData.TALENT_MAP[talentId.toString()];
	return talent ? talent.color : "gray"
};
GameData.getForceLvName = function(lv) {
	return GameData.FORCE_LV_CN[lv] || "无职位"
};
GameData.getItemTypeName = function(type) {
	return GameData.ITEM_TYPE_NAMES[type] || "未知"
};
GameData.getRareLvName = function(rareLv) {
	return GameData.RARE_LV_NAMES[rareLv] || `稀有度${rareLv}`
};
GameData.getRareLvInfo = function(type, rareLv) {
	const typeMap = {
		0: "equip",
		1: "dan",
		2: "food",
		3: "book",
		6: "horse",
		7: "saddle"
	};
	const cat = typeMap[type] || "equip";
	return GameData.RARE_LV[cat] ? GameData.RARE_LV[cat][rareLv] : {
		name: "未知",
		color: "#6b7280"
	}
};
GameData.getItemLvInfo = function(itemLv) {
	return GameData.ITEM_LV[itemLv] || {
		name: "未知",
		color: "#6b7280"
	}
};
GameData.getGovernLvName = function(lv) {
	return GameData.GOVERN_LV_NAMES[lv] || "无官职"
};
GameData.getNatureName = function(nature) {
	return GameData.NATURE_NAMES[nature] || "未知性格"
};
GameData.getHobbyName = function(hobby) {
	return GameData.HOBBY_NAMES[hobby] || "未知爱好"
};
GameData.getRelationName = function(relationType) {
	const rel = GameData.RELATION_TYPES[relationType];
	return rel ? rel.name : "未知"
};
GameData.getAISettingName = function(key) {
	return GameData.AI_SETTING_NAMES[key] || key
};
// 門派地圖佈局數據
// tileType: -3=外部, -2=牆/門, -1=邊界, 0=空地(可建), 1=道路, 2=大門
// 標準13x13十字形佈局，正廳固定在中心(6,6)，道路從正廳向四方延伸
GameData.SECT_MAP_TILE_TYPES = {
	// 標準13x13十字形 (大部分門派使用)
	"standard_13x13": [
		[-3,-3,-3,-3,-1,-1,-2,-1,-1,-3,-3,-3,-3],
		[-3,-1,-1,-1,-1, 0, 1, 0,-1,-1,-1,-1,-3],
		[-3,-1, 0, 0, 0, 0, 1, 0, 0, 0, 0,-1,-3],
		[-3,-1, 0, 0, 0, 0, 1, 0, 0, 0, 0,-1,-3],
		[-1,-1, 0, 0, 0, 0, 1, 0, 0, 0, 0,-1,-1],
		[-1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,-1],
		[-2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1,-2],
		[-1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0,-1],
		[-1,-1, 0, 0, 0, 0, 1, 0, 0, 0, 0,-1,-1],
		[-3,-1, 0, 0, 0, 0, 1, 0, 0, 0, 0,-1,-3],
		[-3,-1, 0, 0, 0, 0, 1, 0, 0, 0, 0,-1,-3],
		[-3,-1,-1,-1,-1, 0, 1, 0,-1,-1,-1,-1,-3],
		[-3,-3,-3,-3,-1,-1,-2,-1,-1,-3,-3,-3,-3]
	]
};

// 門派建築分類
GameData.SECT_BUILDING_CATEGORIES = {
	core:     [0],                          // 正厅
	martial:  [1, 2, 3],                    // 藏经阁, 练武场, 闭关室
	craft:    [5, 6, 7],                    // 工匠坊, 炼丹炉, 疗伤室
	resource: [11, 12, 13, 14],             // 农田, 森林, 矿场, 药园
	economy:  [9, 10],                      // 仓库, 钱庄
	living:   [4, 8],                       // 祠堂, 宿舍
	special:  [53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72] // 門派特殊建築
};

// 門派特殊建築對應表 (門派ID -> 特殊建築ID)
GameData.SECT_SPECIAL_BUILDING = {
	0: 53,  // 长乐帮 -> 销金窟
	1: 54,  // 唐门 -> 暗室
	2: 55,  // 药王谷 -> 万花谷
	3: 56,  // 丐帮 -> 大会台
	4: 57,  // 飞龙门 -> 赛马场
	5: 58,  // 茅山派 -> 华阳洞
	6: 59,  // 铸剑山庄 -> 剑池
	7: 60,  // 五毒教 -> 万毒池
	8: 61,  // 阎罗殿 -> 鬼门关
	9: 62,  // 大隐阁 -> 星辰楼
	10: 63, // 少林寺 -> 铜人阵
	11: 64, // 武当派 -> 紫霄宫
	12: 65, // 霸刀门 -> 试刀台
	13: 66, // 蓬莱派 -> 蓬莱阁
	14: 67, // 峨眉派 -> 金顶
	15: 68, // 崆峒派 -> 七十二洞
	16: 69, // 神机门 -> 机关坊
	17: 70, // 霹雳堂 -> 火炼室
	18: 71, // 金刚密宗 -> 灵塔殿
	19: 72  // 天山派 -> 玄冰池
};

// 建築圖標 (用於地圖渲染)
GameData.BUILDING_ICONS = {
	0:  "🏛️", // 正厅
	1:  "📚", // 藏经阁
	2:  "⚔️", // 练武场
	3:  "🧘", // 闭关室
	4:  "🏮", // 祠堂
	5:  "🔨", // 工匠坊
	6:  "🔥", // 炼丹炉
	7:  "💊", // 疗伤室
	8:  "🏠", // 宿舍
	9:  "📦", // 仓库
	10: "💰", // 钱庄
	11: "🌾", // 农田
	12: "🌲", // 森林
	13: "⛏️", // 矿场
	14: "🌿", // 药园
	30: "🏪", // 摊贩
	31: "🏭", // 磨坊
	32: "🪵", // 木匠
	33: "🪨", // 石坊
	34: "💉", // 药房
	35: "🛏️", // 客房
	36: "🏚️", // 仓房
	37: "🏟️", // 校场
	38: "🧎", // 静室
	40: "📖", // 私塾
	53: "💎", // 销金窟
	54: "🗡️", // 暗室
	55: "🌸", // 万花谷
	56: "🏆", // 大会台
	57: "🐎", // 赛马场
	58: "🕳️", // 华阳洞
	59: "🗡️", // 剑池
	60: "🐍", // 万毒池
	61: "👻", // 鬼门关
	62: "⭐", // 星辰楼
	63: "🤖", // 铜人阵
	64: "☯️", // 紫霄宫
	65: "🔪", // 试刀台
	66: "🏝️", // 蓬莱阁
	67: "⛰️", // 金顶
	68: "🕳️", // 七十二洞
	69: "⚙️", // 机关坊
	70: "💥", // 火炼室
	71: "🗼", // 灵塔殿
	72: "❄️"  // 玄冰池
};

// 建築可升級最大等級
GameData.BUILDING_MAX_LEVEL = {
	0: 10,  // 正厅
	1: 10,  // 藏经阁
	2: 10,  // 练武场
	3: 10,  // 闭关室
	4: 10,  // 祠堂
	5: 10,  // 工匠坊
	6: 10,  // 炼丹炉
	7: 10,  // 疗伤室
	8: 10,  // 宿舍
	9: 10,  // 仓库
	10: 10, // 钱庄
	11: 10, // 农田
	12: 10, // 森林
	13: 10, // 矿场
	14: 10, // 药园
};

GameData.BUILDING_ID_TO_NAME = {
	0: "正厅",
	1: "藏经阁",
	2: "练武场",
	3: "闭关室",
	4: "祠堂",
	5: "工匠坊",
	6: "炼丹炉",
	7: "疗伤室",
	8: "宿舍",
	9: "仓库",
	10: "钱庄",
	11: "农田",
	12: "森林",
	13: "矿场",
	14: "药园",
	15: "官府",
	16: "集市",
	17: "客栈",
	18: "告示",
	19: "岗哨",
	20: "分舵",
	21: "驿站",
	22: "武馆",
	23: "医馆",
	24: "珍宝阁",
	25: "兵器铺",
	26: "材料铺",
	27: "民宅",
	28: "驻所",
	29: "园林",
	30: "摊贩",
	31: "磨坊",
	32: "木匠",
	33: "石坊",
	34: "药房",
	35: "客房",
	36: "仓房",
	37: "校场",
	38: "静室",
	39: "酒馆",
	40: "私塾",
	41: "工棚",
	42: "皇宫",
	43: "大运河",
	44: "甘棠港",
	45: "崇圣寺",
	46: "长城",
	47: "晋祠",
	48: "都江堰",
	49: "莫高窟",
	50: "黄鹤楼",
	51: "烟花柳巷",
	52: "布达拉宫",
	53: "销金窟",
	54: "暗室",
	55: "万花谷",
	56: "大会台",
	57: "赛马场",
	58: "华阳洞",
	59: "剑池",
	60: "万毒池",
	61: "鬼门关",
	62: "星辰楼",
	63: "铜人阵",
	64: "紫霄宫",
	65: "试刀台",
	66: "蓬莱阁",
	67: "金顶",
	68: "七十二洞",
	69: "机关坊",
	70: "火炼室",
	71: "灵塔殿",
	72: "玄冰池",
	73: "私宅",
	74: "应天书院",
	75: "河套马场"
};
GameData.getBuildingName = function(buildingId) {
	if (buildingId === null || buildingId === undefined || buildingId < 0) return "未知建筑";
	return GameData.BUILDING_ID_TO_NAME[buildingId.toString()] || `建筑${buildingId}`
};

// 從存檔的 Area 數據解析門派地圖
GameData.parseSectMap = function(areaData) {
	if (!areaData || !areaData.areaTiles) return null;
	const w = areaData.mapWidth || 13;
	const h = areaData.mapHeight || 13;
	const grid = [];
	for (let r = 0; r < h; r++) {
		const row = [];
		for (let c = 0; c < w; c++) {
			const tile = areaData.areaTiles[r * w + c];
			if (!tile) { row.push({ type: -3, building: null }); continue; }
			const cell = { type: tile.tileType, building: null };
			if (tile.building && tile.building.buildingID >= 0) {
				cell.building = {
					id: tile.building.buildingID,
					lv: tile.building.lv || 0,
					name: GameData.getBuildingName(tile.building.buildingID),
					icon: GameData.BUILDING_ICONS[tile.building.buildingID] || "🏗️"
				};
			}
			row.push(cell);
		}
		grid.push(row);
	}
	return {
		areaId: areaData.areaID,
		name: areaData.areaName,
		width: w,
		height: h,
		forceId: areaData.belongForceID,
		grid: grid
	};
};

// 取得門派地圖中心座標 (正廳位置)
GameData.getSectCenter = function(width, height) {
	return { row: Math.floor(height / 2), col: Math.floor(width / 2) };
};

// 取得指定門派的所有建築列表
GameData.getSectBuildings = function(areaData) {
	if (!areaData || !areaData.areaTiles) return [];
	const w = areaData.mapWidth || 13;
	const buildings = [];
	areaData.areaTiles.forEach((tile, idx) => {
		if (tile.building && tile.building.buildingID >= 0) {
			buildings.push({
				row: Math.floor(idx / w),
				col: idx % w,
				id: tile.building.buildingID,
				lv: tile.building.lv || 0,
				name: GameData.getBuildingName(tile.building.buildingID),
				icon: GameData.BUILDING_ICONS[tile.building.buildingID] || "🏗️"
			});
		}
	});
	return buildings;
};

// 判斷格子類型的中文名
GameData.TILE_TYPE_NAMES = {
	"-3": "外部",
	"-2": "牆門",
	"-1": "邊界",
	"0": "空地",
	"1": "道路",
	"2": "大門"
};
GameData.getTileTypeName = function(tileType) {
	return GameData.TILE_TYPE_NAMES[tileType.toString()] || "未知";
};

GameData.THEME_COLORS = [{
	id: "minimal",
	name: "极简",
	color: "#6b7280",
	bg: "rgba(107, 114, 128, 0.08)"
}, {
	id: "rose",
	name: "玫瑰",
	color: "#e4b4b4",
	bg: "rgba(228, 180, 180, 0.12)"
}, {
	id: "pink",
	name: "桃粉",
	color: "#e2b6cf",
	bg: "rgba(226, 182, 207, 0.12)"
}, {
	id: "amber",
	name: "浅琥珀",
	color: "#d9b48b",
	bg: "rgba(217, 180, 139, 0.12)"
}, {
	id: "orange",
	name: "杏黄",
	color: "#dcb885",
	bg: "rgba(220, 184, 133, 0.12)"
}, {
	id: "green",
	name: "薄荷",
	color: "#9bc2a4",
	bg: "rgba(155, 194, 164, 0.12)"
}, {
	id: "emerald",
	name: "翡翠",
	color: "#5f9e8c",
	bg: "rgba(95, 158, 140, 0.12)"
}, {
	id: "cyan",
	name: "青瓷",
	color: "#79b3b0",
	bg: "rgba(121, 179, 176, 0.12)"
}, {
	id: "blue",
	name: "天蓝",
	color: "#7d9ec1",
	bg: "rgba(125, 158, 193, 0.12)"
}, {
	id: "indigo",
	name: "浅靛",
	color: "#8f9bb5",
	bg: "rgba(143, 155, 181, 0.12)"
}, {
	id: "purple",
	name: "紫罗兰",
	color: "#b99bc7",
	bg: "rgba(185, 155, 199, 0.12)"
}, {
	id: "violet",
	name: "紫藤",
	color: "#b1a0c7",
	bg: "rgba(177, 160, 199, 0.12)"
}, {
	id: "slate",
	name: "青灰",
	color: "#8d9aa8",
	bg: "rgba(141, 154, 168, 0.12)"
}, {
	id: "teal",
	name: "深碧",
	color: "#619b95",
	bg: "rgba(97, 155, 149, 0.12)"
}, {
	id: "red",
	name: "朱红",
	color: "#c6877a",
	bg: "rgba(198, 135, 122, 0.12)"
}];
GameData.RED_TALENT_IDS = [49, 51, 53, 55, 57, 59, 60, 61, 62, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 312, 315, 318, 321, 324, 327, 379, 380, 381, 382, 383, 384, 385, 386, 387, 388];
GameData.NEGATIVE_TALENT_IDS = [127, 128, 129, 133, 134, 135, 139, 140, 141, 145, 146, 147, 151, 152, 153, 157, 158, 159, 163, 164, 165, 169, 170, 171, 175, 176, 177, 181, 182, 183, 187, 188, 189, 193, 194, 195, 199, 200, 201, 205, 206, 207, 211, 212, 213, 217, 218, 219, 389];

GameData.MISSION_SCHEMA = {
	mission: {
		required: ['name', 'speMissionID', 'leftTime', 'difficulty', 'rewardRate'],
		optional: ['stageMinLeftTime', 'difficultyRate', 'treasureLv', 'bountyTypes', 'minForceLv', 'missionSourceType', 'missionBountyType', 'sourceHeroID', 'sourceForceID', 'missionHeroID', 'missionDisableQuickTravel', 'missionHideTargetPlace', 'missionHideTargetPlaceString', 'missionRandomSeed', 'missionTargetDatas', 'noAutoFinish', 'missionFunds', 'missionFameReward', 'missionContributionRewardBase', 'missionContributionReward', 'missionMoneyReward', 'missionJoinTeamHero', 'missionJoinTeamHeroID'],
		types: {
			name: 'string',
			speMissionID: 'number',
			leftTime: 'number',
			stageMinLeftTime: 'number',
			difficulty: 'number',
			difficultyRate: 'number',
			rewardRate: 'number',
			treasureLv: 'number',
			bountyTypes: 'array',
			minForceLv: 'number',
			missionSourceType: 'number',
			missionBountyType: 'number',
			sourceHeroID: 'number',
			sourceForceID: 'number',
			missionHeroID: 'number',
			missionDisableQuickTravel: 'boolean',
			missionHideTargetPlace: 'boolean',
			missionHideTargetPlaceString: 'string',
			missionRandomSeed: 'number',
			missionTargetDatas: 'array',
			noAutoFinish: 'boolean',
			missionFunds: 'number',
			missionFameReward: 'number',
			missionContributionRewardBase: 'number',
			missionContributionReward: 'number',
			missionMoneyReward: 'number',
			missionJoinTeamHero: 'string',
			missionJoinTeamHeroID: 'array'
		}
	},
	missionTarget: {
		required: ['missionTriggerType', 'tirggerTargetID', 'describe'],
		optional: ['missionEventDataSaveRecord', 'missionEventData', 'missionTargetAreaTypeLimit', 'missionNeedDatas', 'missionRequirementTypeList', 'missionRequirementType', 'missionRequirementNum', 'missionTargetFinishCallPlotID'],
		types: {
			missionTriggerType: 'number',
			tirggerTargetID: 'string',
			describe: 'string',
			missionEventDataSaveRecord: 'number',
			missionEventData: 'object',
			missionTargetAreaTypeLimit: 'number',
			missionNeedDatas: 'array',
			missionRequirementTypeList: 'array',
			missionRequirementType: 'number',
			missionRequirementNum: 'number',
			missionTargetFinishCallPlotID: 'number'
		}
	},
	missionEventData: {
		required: ['eventName'],
		optional: ['eventDescribe', 'eventAvailableAreaType', 'spriteName', 'isAreaEvent', 'resourcePointID', 'areaID', 'areaMapTileID', 'bigMapPos', 'nearAreaID', 'nearAreaDirection', 'seen', 'happened', 'noticed', 'hovered', 'plotTargetEvent', 'missionTargetEvent', 'autoDestroy', 'leftTime', 'difficulty', 'difficultyRate', 'speTargetID', 'plotData', 'eventItemList', 'leaderLimit', 'eventOutTimeCallFuc', 'seeRange', 'randomSeed', 'inaccuracyPosText', 'notImportant'],
		types: {
			eventName: 'string',
			eventDescribe: 'string',
			eventAvailableAreaType: 'array',
			spriteName: 'string',
			isAreaEvent: 'boolean',
			resourcePointID: 'number',
			areaID: 'array',
			areaMapTileID: 'array',
			bigMapPos: 'object',
			nearAreaID: 'number',
			nearAreaDirection: 'number',
			seen: 'boolean',
			happened: 'boolean',
			noticed: 'boolean',
			hovered: 'boolean',
			plotTargetEvent: 'boolean',
			missionTargetEvent: 'boolean',
			autoDestroy: 'boolean',
			leftTime: 'number',
			difficulty: 'number',
			difficultyRate: 'number',
			speTargetID: 'number',
			plotData: 'object',
			eventItemList: 'object',
			leaderLimit: 'number',
			eventOutTimeCallFuc: 'string',
			seeRange: 'number',
			randomSeed: 'number',
			inaccuracyPosText: 'boolean',
			notImportant: 'boolean'
		}
	},
	plotData: {
		required: ['plotDatas'],
		optional: ['plotName', 'spePlot', 'plotID', 'plotRandomHero', 'differentForce', 'targetHeroID', 'plotCallFuc', 'randomStartPlot'],
		types: {
			plotName: 'string',
			spePlot: 'boolean',
			plotID: 'number',
			plotRandomHero: 'array',
			differentForce: 'boolean',
			targetHeroID: 'number',
			plotCallFuc: 'string',
			randomStartPlot: 'boolean',
			plotDatas: 'array'
		}
	},
	plotDialog: {
		required: ['plotText'],
		optional: ['heroFaceHightLightType', 'plotSource', 'sourceName', 'plotTarget', 'targetName', 'choices', 'clickCallFuc', 'noAutoJump', 'backPic', 'backBgm', 'soundEffect', 'plotShock'],
		types: {
			plotText: 'string',
			heroFaceHightLightType: 'number',
			plotSource: 'number',
			sourceName: 'string',
			plotTarget: 'number',
			targetName: 'string',
			choices: 'array',
			clickCallFuc: 'string',
			noAutoJump: 'boolean',
			backPic: 'string',
			backBgm: 'string',
			soundEffect: 'string',
			plotShock: 'boolean'
		}
	},
	plotChoice: {
		required: ['choiceText'],
		optional: ['callFuc', 'callParam', 'inited', 'inheritMissionRequirement', 'requirements', 'relations', 'autoChangeCostByDifficulty', 'costResource', 'describe', 'destroyEvent', 'playerInteractionTimeNeed'],
		types: {
			choiceText: 'string',
			callFuc: 'string',
			callParam: 'string',
			inited: 'boolean',
			inheritMissionRequirement: 'boolean',
			requirements: 'array',
			relations: 'array',
			autoChangeCostByDifficulty: 'boolean',
			costResource: 'array',
			describe: 'string',
			destroyEvent: 'boolean',
			playerInteractionTimeNeed: 'number'
		}
	},
	eventItemList: {
		required: [],
		optional: ['heroID', 'forceID', 'money', 'weight', 'maxWeight', 'allItem'],
		types: {
			heroID: 'number',
			forceID: 'number',
			money: 'number',
			weight: 'number',
			maxWeight: 'number',
			allItem: 'array'
		}
	}
};

GameData.VALID_CALL_FUNCTIONS = [
	'FightInteractHero',
	'GiveUpEventMission',
	'StopEventMission',
	'AddItem',
	'AddFavor',
	'FinishMission',
	'',
	null,
	undefined
];

GameData.MISSION_TRIGGER_TYPES = {
	1: '探索',
	2: '到达',
	4: '工作',
	5: '对话',
	6: '战斗',
	7: '收集',
	8: '护送'
};

GameData.MISSION_SOURCE_TYPES = {
	0: '系统',
	1: '地区',
	2: '门派',
	3: '悬赏',
	4: '剧情'
};

GameData.MISSION_BOUNTY_TYPES = {
	0: '战斗',
	1: '探索',
	2: '护送',
	3: '收集',
	4: '对话'
};

GameData.PLOT_SOURCE_TYPES = {
	0: '系统消息',
	1: '玩家自己',
	2: 'NPC角色',
	3: '旁白/事件'
};

window.GameData = GameData;
(function() {
	const GD = GameData;
	const PanelConfig = {
		defaults: {
			width: '90%',
			maxWidth: '800px',
			minWidth: '400px',
			height: 'auto',
			maxHeight: '90vh',
			padding: '16px',
			borderRadius: '8px',
			backdropOpacity: 0.5,
			animationDuration: 200,
			panelZIndex: 1000,
			showHeader: true,
			showFooter: true,
			collapsible: true,
			draggable: false,
			closeOnEscape: true,
			closeOnBackdrop: true
		},
		presets: {
			small: {
				width: '400px',
				maxWidth: '400px'
			},
			medium: {
				width: '600px',
				maxWidth: '600px'
			},
			large: {
				width: '90%',
				maxWidth: '900px'
			},
			full: {
				width: '98%',
				maxWidth: '98%'
			},
			side: {
				width: '350px',
				maxWidth: '350px',
				position: 'right'
			}
		},
		themes: {
			light: {
				bg: '#ffffff',
				text: '#333333',
				border: '#e0e0e0'
			},
			dark: {
				bg: '#1a1a1a',
				text: '#e0e0e0',
				border: '#333333'
			},
			game: {
				bg: 'rgba(30, 30, 30, 0.95)',
				text: '#e8e8e8',
				border: '#4a4a4a'
			}
		},
		getPreset(name) {
			return {
				...this.defaults,
				...this.presets[name]
			}
		},
		getTheme(name) {
			return this.themes[name] || this.themes.light
		},
		merge(options) {
			const preset = options.preset ? this.getPreset(options.preset) : {};
			const theme = options.theme ? this.getTheme(options.theme) : {};
			return {
				...this.defaults,
				...preset,
				...theme,
				...options
			}
		}
	};
	const PanelManager = {
		_instances: new Map(),
		_currentId: 0,
		_defaultConfig: {},
		init(config = {}) {
			this._defaultConfig = PanelConfig.merge(config);
			return this
		},
		setDefault(config) {
			this._defaultConfig = {
				...this._defaultConfig,
				...PanelConfig.merge(config)
			};
			return this
		},
		open(options) {
			const id = options.id || `panel_${++this._currentId}`;
			const config = {
				...this._defaultConfig,
				...PanelConfig.merge(options)
			};
			this._instances.set(id, {
				config,
				open: true
			});
			return {
				id,
				config,
				update: (newOptions) => this.update(id, newOptions),
				close: () => this.close(id),
				setContent: (content) => this.setContent(id, content),
				setTitle: (title) => this.setTitle(id, title)
			}
		},
		update(id, options) {
			const instance = this._instances.get(id);
			if (instance) {
				instance.config = {
					...instance.config,
					...PanelConfig.merge(options)
				}
			}
			return this
		},
		close(id) {
			const instance = this._instances.get(id);
			if (instance) {
				instance.open = false;
				this._instances.delete(id)
			}
			return this
		},
		setContent(id, content) {
			const instance = this._instances.get(id);
			if (instance) {
				instance.config.content = content
			}
			return this
		},
		setTitle(id, title) {
			const instance = this._instances.get(id);
			if (instance) {
				instance.config.title = title
			}
			return this
		},
		getConfig(id) {
			const instance = this._instances.get(id);
			return instance ? instance.config : null
		},
		isOpen(id) {
			const instance = this._instances.get(id);
			return instance ? instance.open : false
		},
		closeAll() {
			this._instances.clear();
			return this
		}
	};
	const PanelFactory = {
		create(options) {
			const config = PanelConfig.merge(options);
			const panel = document.createElement('div');
			panel.className = `panel panel-${config.theme||'light'}`;
			panel.style.cssText = this._buildStyles(config);
			if (config.showHeader) {
				panel.innerHTML += `<div class="panel-header"><span class="panel-title">${config.title||''}</span>${config.collapsible?'<span class="panel-toggle">▼</span>':''}</div>`
			}
			panel.innerHTML += `<div class="panel-body">${config.content||''}</div>`;
			if (config.showFooter && config.actions?.length) {
				const footer = document.createElement('div');
				footer.className = 'panel-footer';
				config.actions.forEach(action => {
					const btn = document.createElement('button');
					btn.className = `btn ${action.kind||''}`;
					btn.textContent = action.text;
					btn.onclick = action.onClick;
					footer.appendChild(btn)
				});
				panel.appendChild(footer)
			}
			return panel
		},
		_buildStyles(config) {
			const styles = [];
			if (config.width) styles.push(`width:${config.width}`);
			if (config.maxWidth) styles.push(`max-width:${config.maxWidth}`);
			if (config.minWidth) styles.push(`min-width:${config.minWidth}`);
			if (config.height && config.height !== 'auto') styles.push(`height:${config.height}`);
			if (config.maxHeight) styles.push(`max-height:${config.maxHeight}`);
			if (config.padding) styles.push(`padding:${config.padding}`);
			if (config.borderRadius) styles.push(`border-radius:${config.borderRadius}`);
			return styles.join('; ')
		}
	};
	GD.PanelConfig = PanelConfig;
	GD.PanelManager = PanelManager;
	GD.PanelFactory = PanelFactory;
	GD.createPanelEx = function(title, content, options = {}) {
		return PanelFactory.create({
			title,
			content,
			...options
		})
	};
	GD.openPanel = function(options) {
		return PanelManager.open(options)
	};
	GD.setPanelDefault = function(config) {
		PanelManager.setDefault(config)
	};
	GD.getPanelConfig = function(id) {
		return PanelManager.getConfig(id)
	};
	GD.DATA_BASE = 'https://ce.mizu7.top';
	GD.DATA_ENABLED = false;
	GD._apiLoaded = true;
	GD._apiLoading = false;
	GD.loadFromServerFiles = async function() {
		if (GD._apiLoaded || GD._apiLoading) return;
		GD._apiLoading = true;
		try {
			const isLocalFile = window.location.protocol === 'file:';
			if (isLocalFile || !GD.DATA_ENABLED) {
				console.log('本地文件模式或服务器数据已禁用，跳过数据加载');
				GD._apiLoaded = true;
				return
			}
			const dataFiles = ['data/TextAsset/ForceData', 'data/TextAsset/KungFuData', 'data/TextAsset/ItemData', 'data/TextAsset/WeaponData', 'data/TextAsset/TalentData', 'data/TextAsset/TechData'];
			const loadPromises = dataFiles.map(async (filePath) => {
				try {
					const response = await fetch(`${GD.DATA_BASE}/${filePath}`, {
						signal: AbortSignal.timeout(5000)
					});
					if (!response.ok) return null;
					return await response.text()
				} catch (error) {
					return null
				}
			});
			const fileContents = await Promise.all(loadPromises);
			const result = {};
			for (let i = 0; i < dataFiles.length; i++) {
				const fileName = dataFiles[i].split('/').pop();
				const content = fileContents[i];
				if (content) {
					result[fileName] = this.parseDataFile(content)
				}
			}
			const getData = (key) => {
				const item = result[key];
				if (!item) return null;
				if (Array.isArray(item)) return item;
				if (item.data && Array.isArray(item.data)) return item.data;
				return null
			};
			const forceData = getData('force');
			if (forceData) {
				forceData.forEach(f => {
					const id = f.id || f['id'];
					const name = f['名字'] || f.name;
					if (id !== undefined && name) {
						GD.FORCE_MAP[id.toString()] = name
					}
				})
			}
			const heroTagData = getData('heroTag');
			if (heroTagData) {
				heroTagData.forEach(t => {
					const id = t.id || t['id'];
					const name = t['名字'] || t.name;
					const color = t['颜色'] || t.color || 'gray';
					const effect = t['效果'] || t.effect || '';
					if (id !== undefined && name) {
						GD.TALENT_MAP[id.toString()] = {
							name,
							color,
							effect
						}
					}
				})
			}
			const kungfuData = getData('kungfu');
			if (kungfuData) {
				kungfuData.forEach(k => {
					const id = k.id || k['id'];
					const name = k['名字'] || k.name;
					const type = k['类型'] || k.type || 0;
					const lv = k['等级'] || k.lv || 0;
					const forceId = k['所属势力'] !== undefined ? k['所属势力'] : (k.forceId !== undefined ? k.forceId : -1);
					if (id !== undefined && name) {
						GD.SKILL_ID_TO_NAME[id.toString()] = [GD.getSkillTypeName(type), lv, name, forceId]
					}
				})
			}
			const buildingData = getData('building');
			if (buildingData) {
				buildingData.forEach(b => {
					const id = b.id || b['id'];
					const name = b['名字'] || b.name;
					if (id !== undefined && name) {
						GD.BUILDING_ID_TO_NAME[id.toString()] = name
					}
				})
			}
			const areaData = getData('area');
			if (areaData) {
				GD.AREA_DATA = areaData;
				areaData.forEach(a => {
					const id = a.id || a['id'];
					const name = a['名字'] || a.name;
					if (id !== undefined && name) {
						GD.AREA_ID_TO_NAME[id.toString()] = name
					}
				})
			}
			const weaponData = getData('weapon');
			if (weaponData) {
				GD.STATIC_ITEMS.weapons = weaponData.map(w => ({
					id: w.id || w['id'],
					名字: w['名字'] || w.name,
					小类: w['小类'] || w.subType || 0,
					属性: w['属性'] || w.attr || 0,
					动画: w['动画'] || w.anim || ''
				}))
			}
			const armorData = getData('armor');
			if (armorData) {
				GD.STATIC_ITEMS.armors = armorData.map(a => ({
					id: a.id || a['id'],
					名字: a['名字'] || a.name,
					类别: a['类别'] || a.category || 1,
					护甲: a['护甲'] || a.armor || 0,
					轻功: a['轻功'] || a.qinggong || 0
				}))
			}
			const medicineData = getData('medicine');
			if (medicineData) {
				GD.STATIC_ITEMS.meds = medicineData.map(m => ({
					ID: m.id || m['id'] || m['ID'],
					名称: m['名字'] || m.name || m['名称'],
					描述: m['描述'] || m.desc || '',
					等级: m['等级'] || m.lv || 0,
					生命: m['生命'] || m.hp || 0,
					生命上限: m['生命上限'] || m.maxHp || 0,
					内力: m['内力'] || m.mana || 0,
					内力上限: m['内力上限'] || m.maxMana || 0,
					体力: m['体力'] || m.stamina || 0,
					外伤: m['外伤'] || m.extInjury || 0,
					内伤: m['内伤'] || m.intInjury || 0,
					中毒: m['中毒'] || m.poison || 0,
					Buff: m['Buff'] || 0,
					价值: m['价值'] || m.value || 0,
					小类: m['小类'] || m.subType || 0
				}))
			}
			const foodData = getData('food');
			if (foodData) {
				GD.STATIC_ITEMS.foods = foodData.map(f => ({
					ID: f.id || f['id'] || f['ID'],
					名称: f['名字'] || f.name || f['名称'],
					描述: f['描述'] || f.desc || '',
					等级: f['等级'] || f.lv || 0,
					生命: f['生命'] || f.hp || 0,
					生命上限: f['生命上限'] || f.maxHp || 0,
					内力: f['内力'] || f.mana || 0,
					内力上限: f['内力上限'] || f.maxMana || 0,
					体力: f['体力'] || f.stamina || 0,
					外伤: f['外伤'] || f.extInjury || 0,
					内伤: f['内伤'] || f.intInjury || 0,
					中毒: f['中毒'] || f.poison || 0,
					Buff: f['Buff'] || 0,
					价值: f['价值'] || f.value || 0,
					小类: f['小类'] || f.subType || 0
				}))
			}
			const skinData = getData('skin');
			if (skinData) {
				GD.SKIN_DATA = skinData
			}
			const speAddData = getData('speAdd');
			if (speAddData) {
				GD.SPE_ADD_DATA = speAddData
			}
			const techData = getData('tech');
			if (techData) {
				GD.TECH_DATA = techData;
				techData.forEach(t => {
					const id = t.id || t['id'] || t['序号'];
					const name = t['名字'] || t.name || t['名称'];
					if (id !== undefined && name) {
						GD.TECH_ID_TO_NAME[id.toString()] = name
					}
				})
			}
			GD._apiLoaded = true
		} catch (error) {
			console.warn('Failed to load data from API, using static data:', error.message)
		} finally {
			GD._apiLoading = false
		}
	};
	GD.refreshFromAPI = async function() {
		GD._apiLoaded = false;
		await GD.loadFromAPI()
	};
	GD.isAPILoaded = function() {
		return GD._apiLoaded
	};
	GD.getSkillTypeName = function(type) {
		const names = ['内功', '轻功', '绝技', '拳掌', '剑法', '刀法', '长兵', '奇门', '射术'];
		return names[type] || '其他'
	};
	GD.parseDataFile = function(content) {
		try {
			if (content.trim().startsWith('{') || content.trim().startsWith('[')) {
				return JSON.parse(content)
			}
			const lines = content.trim().split('\n');
			if (lines.length > 1) {
				const headers = lines[0].split('\t');
				const data = [];
				for (let i = 1; i < lines.length; i++) {
					const values = lines[i].split('\t');
					if (values.length === headers.length) {
						const row = {};
						headers.forEach((header, index) => {
							row[header.trim()] = values[index] ? values[index].trim() : ''
						});
						data.push(row)
					}
				}
				return data
			}
			return null
		} catch (error) {
			console.warn('解析数据文件失败:', error);
			return null
		}
	};
	window.GD = GD
})();
document.addEventListener('DOMContentLoaded', function() {
	if (window.GameData && window.GameData.loadFromServerFiles) {
		window.GameData.loadFromServerFiles()
	}
});