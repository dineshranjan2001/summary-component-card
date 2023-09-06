import data from '../../data.json' assert{type : "json"};
console.log(data);
data.forEach((result)=>{
    let summaryOpts=`<div class="summary-opts">
                    <div class="opts-content">
                        <img src=${result.icon} alt="">
                        <div>${result.category}</div>
                    </div>
                    <div class="score-content">
                        <span class="scored-category">${result.score}</span>
                        <span class="total-score">&nbsp;/ 100</span>
                    </div>
                </div>`;
    document.querySelector('.opts').innerHTML+=summaryOpts;

});
