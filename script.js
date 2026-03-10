const data = {
    math1: ["数と式", "集合と論理", "２次関数", "図形と計量", "データの分析"],
    math2: ["式と証明", "複素数と方程式", "図形と方程式", "三角関数", "指数関数と対数関数", "微分法と積分法"],
    math3: ["関数", "極限", "微分法", "微分法の応用", "積分法", "積分法の応用"],
    mathA: ["場合の数と確率", "図形の性質", "数学と人間の活動"],
    mathB: ["数列", "統計的な推測"],
    mathC: ["平面上のベクトル", "空間のベクトル", "複素数平面", "式と曲線"],
    // 共通テスト解説の「章（カード）」
    common: ["2025年度"]
};

// リンク管理（例：common_01_d1 = 共通テスト2025年度の大問1）
const links = {
    "common_01_d1": "#",
    "common_01_d2": "#",
    "common_01_d3": "#",
    "common_01_d4": "#",
    "common_01_d5": "#"
};

function renderUnits(subjectKey) {
    const container = document.getElementById('unit-container');
    const title = document.getElementById('subject-title');
    
    const subjectNames = {
        math1: "数学Ⅰ", math2: "数学Ⅱ", math3: "数学Ⅲ", 
        mathA: "数学A", mathB: "数学B", mathC: "数学C",
        common: "共通テスト解説"
    };
    title.innerText = subjectNames[subjectKey] || "カテゴリー";

    const unitList = data[subjectKey] || [];
    container.innerHTML = unitList.map((unitName, i) => {
        const unitId = `${subjectKey}_${String(i + 1).padStart(2, '0')}`;
        
        // 共通テスト解説（common）の場合だけ、大問1〜5のボタンを表示する
        if (subjectKey === 'common') {
            return `
                <div class="unit-card">
                    <div>
                        <div class="section-num">CHAPTER ${String(i + 1).padStart(2, '0')}</div>
                        <h3 class="unit-title">${unitName}</h3>
                    </div>
                    <div class="btn-grid">
                        <a href="${links[unitId+'_d1'] || '#'}" target="_blank" class="btn-daimon">大問１</a>
                        <a href="${links[unitId+'_d2'] || '#'}" target="_blank" class="btn-daimon">大問２</a>
                        <a href="${links[unitId+'_d3'] || '#'}" target="_blank" class="btn-daimon">大問３</a>
                        <a href="${links[unitId+'_d4'] || '#'}" target="_blank" class="btn-daimon">大問４</a>
                        <a href="${links[unitId+'_d5'] || '#'}" target="_blank" class="btn-daimon">大問５</a>
                    </div>
                </div>
            `;
        }

        // それ以外の通常科目（動画・プリントボタン）
        return `
            <div class="unit-card">
                <div>
                    <div class="section-num">SECTION ${String(i + 1).padStart(2, '0')}</div>
                    <h3 class="unit-title">${unitName}</h3>
                </div>
                <div class="btn-group" style="display:flex; gap:10px;">
                    <a href="#" class="btn-daimon" style="flex:1; text-align:center;">▶ 解説動画</a>
                    <a href="#" class="btn-daimon" style="flex:1; text-align:center; background:var(--main-blue); color:white;">📄 プリント</a>
                </div>
            </div>
        `;
    }).join('');
}

document.addEventListener('DOMContentLoaded', () => {
    const keyword = "Teikyokani";
    const userInput = prompt("合言葉を入力してください");
    if (userInput === keyword) {
        renderUnits('math1');
    }
});
