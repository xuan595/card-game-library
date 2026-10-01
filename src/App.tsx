import { useMemo, useState } from 'react';
import { cards, factionMeta, typeMeta } from './data/cards';

const allFactions = ['全部', ...Object.keys(factionMeta)];
const allTypes = ['全部', ...Object.keys(typeMeta)];
const costOptions = ['全部', '0', '1', '2', '3', '4', '5', '6+'];

function App() {
  const [search, setSearch] = useState('');
  const [selectedFaction, setSelectedFaction] = useState('全部');
  const [selectedType, setSelectedType] = useState('全部');
  const [selectedCost, setSelectedCost] = useState('全部');
  const [selectedCardId, setSelectedCardId] = useState(cards[0]?.id ?? '');

  const filteredCards = useMemo(() => {
    const query = search.trim().toLowerCase();

    return cards.filter((card) => {
      const matchesFaction = selectedFaction === '全部' || card.faction === selectedFaction;
      const matchesType = selectedType === '全部' || card.type === selectedType;

      let matchesCost = true;
      if (selectedCost !== '全部') {
        if (selectedCost === '6+') {
          matchesCost = card.cost >= 6;
        } else {
          matchesCost = card.cost === Number(selectedCost);
        }
      }

      const matchesSearch =
        !query ||
        card.name.toLowerCase().includes(query) ||
        card.effect.toLowerCase().includes(query) ||
        card.keywords.some((keyword) => keyword.toLowerCase().includes(query)) ||
        card.faction.toLowerCase().includes(query);

      return matchesFaction && matchesType && matchesCost && matchesSearch;
    });
  }, [search, selectedFaction, selectedType, selectedCost]);

  const selectedCard = filteredCards.find((card) => card.id === selectedCardId) ?? filteredCards[0] ?? cards[0];

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">卡牌游戏设计</p>
          <h1>卡牌库</h1>
        </div>
        <div className="stats">
          <div className="stat-box">
            <span>总卡牌</span>
            <strong>{cards.length}</strong>
          </div>
          <div className="stat-box">
            <span>当前筛选</span>
            <strong>{filteredCards.length}</strong>
          </div>
        </div>
      </header>

      <section className="toolbar">
        <div className="search-box">
          <input
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="搜索卡牌名、效果、关键词或阵营"
            aria-label="搜索卡牌"
          />
        </div>

        <div className="filter-row">
          <label>
            阵营
            <select value={selectedFaction} onChange={(event) => setSelectedFaction(event.target.value)}>
              {allFactions.map((faction) => (
                <option key={faction} value={faction}>
                  {faction}
                </option>
              ))}
            </select>
          </label>

          <label>
            类型
            <select value={selectedType} onChange={(event) => setSelectedType(event.target.value)}>
              {allTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </label>

          <label>
            费用
            <select value={selectedCost} onChange={(event) => setSelectedCost(event.target.value)}>
              {costOptions.map((cost) => (
                <option key={cost} value={cost}>
                  {cost === '全部' ? '全部' : `${cost}费`}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <main className="layout">
        <section className="library-panel">
          <div className="panel-header">
            <h2>卡牌列表</h2>
            <span>{filteredCards.length} 张</span>
          </div>

          <div className="card-grid">
            {filteredCards.length === 0 ? (
              <div className="empty-state">没有符合条件的卡牌</div>
            ) : (
              filteredCards.map((card) => (
                <button
                  key={card.id}
                  className={`card-item ${selectedCard?.id === card.id ? 'selected' : ''}`}
                  style={{ ['--faction-color' as string]: factionMeta[card.faction].color }}
                  onClick={() => setSelectedCardId(card.id)}
                  type="button"
                >
                  <div className="card-topline">
                    <span className="cost">{card.cost}</span>
                    <span className="faction-tag">{card.faction}</span>
                  </div>
                  <h3>{card.name}</h3>
                  <div className="mini-meta">
                    <span>{card.type}</span>
                    <span>{card.rarity}</span>
                  </div>
                  {card.attack !== undefined && card.health !== undefined && (
                    <div className="power-line">
                      <span>{card.attack}</span>
                      <span>{card.health}</span>
                    </div>
                  )}
                  <p>{card.effect}</p>
                </button>
              ))
            )}
          </div>
        </section>

        <aside className="detail-panel">
          {selectedCard ? (
            <>
              <div className="detail-header">
                <div className="detail-badge" style={{ background: factionMeta[selectedCard.faction].color }}>
                  {selectedCard.faction}
                </div>
                <span className="detail-type">{selectedCard.type}</span>
              </div>

              <div className="detail-card" style={{ borderColor: factionMeta[selectedCard.faction].color }}>
                <div className="detail-title-row">
                  <h2>{selectedCard.name}</h2>
                  <span className="detail-cost">{selectedCard.cost}</span>
                </div>

                <div className="detail-stats">
                  <span>{selectedCard.rarity}</span>
                  {selectedCard.attack !== undefined && selectedCard.health !== undefined && (
                    <>
                      <span>攻 {selectedCard.attack}</span>
                      <span>耐 {selectedCard.health}</span>
                    </>
                  )}
                </div>

                <p className="detail-copy">{selectedCard.effect}</p>

                <div className="detail-keywords">
                  {selectedCard.keywords.map((keyword) => (
                    <span key={keyword}>{keyword}</span>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="empty-state detail-empty">请选择卡牌查看详情</div>
          )}
        </aside>
      </main>
    </div>
  );
}

export default App;
