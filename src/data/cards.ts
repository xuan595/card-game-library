export type CardType = '随从' | '法术' | '谜语' | '英雄';
export type CardFaction = '王国' | '原始' | '死亡墓地' | '黑暗教会' | '妖人' | '光明教会';

export interface Card {
  id: string;
  name: string;
  faction: CardFaction;
  type: CardType;
  cost: number;
  rarity: string;
  attack?: number;
  health?: number;
  effect: string;
  keywords: string[];
}

export const factionMeta: Record<CardFaction, { color: string }> = {
  王国: { color: '#6aa9ff' },
  原始: { color: '#6ccf7b' },
  死亡墓地: { color: '#a47ef2' },
  黑暗教会: { color: '#eb5b74' },
  妖人: { color: '#ffb14a' },
  光明教会: { color: '#f6e27d' }
};

export const typeMeta: Record<CardType, string> = {
  随从: '随从',
  法术: '法术',
  谜语: '谜语',
  英雄: '英雄'
};

export const cards: Card[] = [
  {
    id: 'kingdom-01',
    name: '王国新兵',
    faction: '王国',
    type: '随从',
    cost: 1,
    rarity: '普通',
    attack: 1,
    health: 1,
    effect: '抉择：获得闪击，或 +1生命与嘲讽。',
    keywords: ['抉择', '闪击', '嘲讽']
  },
  {
    id: 'kingdom-02',
    name: '皇家骑士',
    faction: '王国',
    type: '随从',
    cost: 4,
    rarity: '精英',
    attack: 3,
    health: 4,
    effect: '闪击，护甲1。',
    keywords: ['闪击', '护甲']
  },
  {
    id: 'kingdom-03',
    name: '玫瑰王后 埃莉诺',
    faction: '王国',
    type: '随从',
    cost: 5,
    rarity: '传说',
    attack: 6,
    health: 4,
    effect: '隐蔽；回合结束补皇室随从。',
    keywords: ['隐蔽', '部署']
  },
  {
    id: 'kingdom-04',
    name: '王国智慧',
    faction: '王国',
    type: '法术',
    cost: 3,
    rarity: '精英',
    effect: '抽两张牌。',
    keywords: ['抽牌']
  },
  {
    id: 'primitive-01',
    name: '原始幼崽',
    faction: '原始',
    type: '随从',
    cost: 1,
    rarity: '普通',
    attack: 2,
    health: 2,
    effect: '无。',
    keywords: ['野兽']
  },
  {
    id: 'primitive-02',
    name: '原始迅猛龙',
    faction: '原始',
    type: '随从',
    cost: 2,
    rarity: '普通',
    attack: 1,
    health: 1,
    effect: '其他友方闪击单位 +1攻击光环。',
    keywords: ['闪击', '光环']
  },
  {
    id: 'primitive-03',
    name: '原始兽王',
    faction: '原始',
    type: '随从',
    cost: 16,
    rarity: '传说',
    attack: 10,
    health: 10,
    effect: '闪击，复生；在手牌中时每抽一张牌费用永久 -1。',
    keywords: ['闪击', '复生']
  },
  {
    id: 'primitive-04',
    name: '野兽扑袭',
    faction: '原始',
    type: '法术',
    cost: 2,
    rarity: '普通',
    effect: '对所有敌方随从造成 1 点伤害。',
    keywords: ['群体伤害']
  },
  {
    id: 'grave-01',
    name: '弃骨者',
    faction: '死亡墓地',
    type: '随从',
    cost: 1,
    rarity: '普通',
    attack: 2,
    health: 3,
    effect: '亡语：随机弃一张手牌。',
    keywords: ['亡语', '弃置']
  },
  {
    id: 'grave-02',
    name: '骷髅骑士',
    faction: '死亡墓地',
    type: '随从',
    cost: 2,
    rarity: '普通',
    attack: 3,
    health: 1,
    effect: '护甲1。',
    keywords: ['护甲']
  },
  {
    id: 'grave-03',
    name: '骨祭者',
    faction: '死亡墓地',
    type: '随从',
    cost: 3,
    rarity: '史诗',
    attack: 0,
    health: 3,
    effect: '部署：消灭另一个友方随从，获得其基础费用等量攻击力；亡语：随机使一个友方骷髅获得等同本单位攻击力的攻击力。',
    keywords: ['部署', '亡语', '牺牲']
  },
  {
    id: 'grave-04',
    name: '亡·骨刺',
    faction: '死亡墓地',
    type: '法术',
    cost: 0,
    rarity: '普通',
    effect: '对敌方随从造成 1 点伤害，若击杀则召唤 1/1 小骷髅。',
    keywords: ['伤害', '召唤']
  },
  {
    id: 'dark-01',
    name: '地狱小鬼',
    faction: '黑暗教会',
    type: '随从',
    cost: 2,
    rarity: '普通',
    attack: 2,
    health: 2,
    effect: '闪击。',
    keywords: ['闪击']
  },
  {
    id: 'dark-02',
    name: '衰弱祭司',
    faction: '黑暗教会',
    type: '随从',
    cost: 3,
    rarity: '精英',
    attack: 1,
    health: 2,
    effect: '部署：虚弱一个攻击 ≤ 6 的敌方随从，抽 1 张牌。',
    keywords: ['部署', '虚弱', '抽牌']
  },
  {
    id: 'dark-03',
    name: '堕天使 萨麦尔',
    faction: '黑暗教会',
    type: '随从',
    cost: 7,
    rarity: '传说',
    attack: 6,
    health: 5,
    effect: '部署：沉默所有其他随从。',
    keywords: ['部署', '沉默']
  },
  {
    id: 'dark-04',
    name: '黑礼·小咒',
    faction: '黑暗教会',
    type: '法术',
    cost: 1,
    rarity: '精英',
    effect: '对敌方随从和己方英雄各造成 2 点伤害。',
    keywords: ['伤害', '自伤']
  },
  {
    id: 'fey-01',
    name: '狐火仆从',
    faction: '妖人',
    type: '随从',
    cost: 1,
    rarity: '普通',
    attack: 2,
    health: 1,
    effect: '亡语：随机对敌方随从造成 1 点伤害。',
    keywords: ['亡语']
  },
  {
    id: 'fey-02',
    name: '妖人斥候',
    faction: '妖人',
    type: '随从',
    cost: 3,
    rarity: '普通',
    attack: 3,
    health: 3,
    effect: '化形：场上有其他友方妖人时变为 4/3 闪击；没有时变为 3/3。',
    keywords: ['化形', '闪击']
  },
  {
    id: 'fey-03',
    name: '酒吞童子',
    faction: '妖人',
    type: '随从',
    cost: 6,
    rarity: '传说',
    attack: 4,
    health: 5,
    effect: '友方回合结束将一张虎熊童子加入战场。',
    keywords: ['部署', '召唤']
  },
  {
    id: 'fey-04',
    name: '妖术·万华镜',
    faction: '妖人',
    type: '法术',
    cost: 2,
    rarity: '精英',
    effect: '抽 1 张牌；若本回合有友方妖人化形，则抽 2 张。',
    keywords: ['抽牌', '化形']
  },
  {
    id: 'light-01',
    name: '光明教会待设计',
    faction: '光明教会',
    type: '英雄',
    cost: 0,
    rarity: '待定',
    effect: '尚未设计，本阶段仅用于阵营占位。',
    keywords: ['待设计']
  }
];
