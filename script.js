const data = {
    math1: ["数と式", "集合と論理", "２次関数", "図形と計量", "データの分析"],
    math2: ["式と証明", "複素数と方程式", "図形と方程式", "三角関数", "指数関数と対数関数", "微分法と積分法"],
    math3: ["関数", "極限", "微分法", "微分法の応用", "積分法", "積分法の応用"],
    mathA: ["場合の数と確率", "図形の性質", "数学と人間の活動"],
    mathB: ["数列", "統計的な推測"],
    mathC: ["平面上のベクトル", "空間のベクトル", "複素数平面", "式と曲線"]
};

/**
 * リンク管理オブジェクト
 * pdfのところにファイルパスを書くとダウンロードされます。
 */
const links = {
    // 数学Ⅰ
    "math1_01": { video: "#", pdf: "print/m1_01.pdf" },
    "math1_02": { video: "#", pdf: "print/m1_02.pdf" },
    // 数学Ⅱ
    "math2_01": { video: "#", pdf: "print/m2_01.pdf" },
    // 必要に応じて他の節も追加してください
};

function renderUnits(subjectKey) {
    const container = document.getElementById('unit-container');
    const title = document.getElementById('subject-title');
    if (!container || !title) return;

    const subjectNames = {
        math1: "数学Ⅰ", math2: "数学Ⅱ", math3: "数学Ⅲ", 
        mathA: "数学A", mathB: "数学B", mathC: "数学C"
    };
    title.innerText = subjectNames[subjectKey];

    container.innerHTML = data[subjectKey].map((unitName, i) => {
        const unitId = `${subjectKey}_${String(i + 1).padStart(2, '0')}`;
        const unitLinks = links[unitId] || { video: "#", pdf: "#" };
        return `
            <div class="unit-card">
                <div>
                    <div class="section-num">SECTION ${String(i + 1).padStart(2, '0')}</div>
                    <h3 class="unit-title">${unitName}</h3>
                </div>
                <div class="btn-group">
                    <a href="${unitLinks.video}" target="_blank" class="btn btn-video">▶ 解説動画</a>
                    <a href="${unitLinks.pdf}" download class="btn btn-pdf">📄 プリント</a>
                </div>
            </div>
        `;
    }).join('');
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', () => {
    const keyword = "Teikyokani";
    const userInput = prompt("合言葉を入力してください");
    if (userInput === keyword) {
        renderUnits('math1');
    } else {
        alert("合言葉が正しくありません。");
        document.body.innerHTML = "<div style='text-align:center; padding-top:100px;'><h1>認証が必要です</h1></div>";
    }
});
