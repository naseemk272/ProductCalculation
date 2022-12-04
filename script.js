const schemeForm = document.querySelector('.scheme-for'),
    marginForm = document.querySelector('.marginForm'),
    schemeBtn = document.querySelector('.scheme-calc'),
    marginBtn = document.querySelector('.margin-calc'),
    schemeContainer = document.querySelector('.scheme-container'),
    marginContainer = document.querySelector('.margin-container'),
    schemeCancel = document.querySelector('.scheme-cancel'),
    marginCancel = document.querySelector('.margin-cancel'),
    schemeSubmit = document.querySelector('.scheme-submit'),
    marginSubmit = document.querySelector('.margin-submit'),
    schemeReset = document.querySelector('.scheme-reset'),
    marginReset = document.querySelector('.margin-reset'),
    schemeCalculation = document.querySelector('.scheme-calculation'),
    schemetext = document.querySelector('.scheme-text'),
    marginCalculation = document.querySelector('.margin-calculation'),
    marginText = marginCalculation.querySelector('.margin-text'),
    costText = marginCalculation.querySelector('.cost-text');

schemeBtn.onclick = ()=>{
    schemeContainer.classList.add('active');
}
schemeCancel.onclick = ()=>{
    schemeContainer.classList.remove('active');
    schemeCalculation.classList.remove('active');
}
marginBtn.onclick = ()=>{
    marginContainer.classList.add('active');
}
marginCancel.onclick = ()=>{
    marginContainer.classList.remove('active');
    marginCalculation.classList.remove('active');
}
schemeSubmit.onclick = ()=>{
    let quantity = Number.parseInt(document.querySelector('.quantity input').value);
    let free = Number.parseInt(document.querySelector('.free input').value);
    let div = quantity+free;
    let res = Number.parseFloat(free/div);
    //schemetext.innerHTML = ` quantity : ${quantity} + Free: ${free} + div : ${div} + res: ${res}`;
    schemetext.innerHTML = (res *100).toFixed(2)+"%";
    schemeCalculation.classList.add('active');
}
schemeReset.onclick = ()=>{
    schemeCalculation.classList.remove('active');
}
marginSubmit.onclick = ()=>{
    let pRate = Number.parseFloat(document.querySelector('.p-rate input').value);
    let SchemeRate = Number.parseFloat(document.querySelector('.scheme-rate input').value);
    let cd = Number.parseFloat(document.querySelector('.cd input').value);
    let td = Number.parseFloat(document.querySelector('.td input').value);
    let gst = Number.parseFloat(document.querySelector('.gst input').value);
    let MRP = Number.parseFloat(document.querySelector('.p-mrp input').value);
    if(cd.length == 0 || Number.isNaN(cd)){
        cd = 0;
    }
    if(SchemeRate.length == 0 || Number.isNaN(SchemeRate)){
        SchemeRate = 0;
    }
    if(td.length == 0 || Number.isNaN(td)){
        td = 0;
    }
    if(gst.length == 0 || Number.isNaN(gst)){
        gst = 0;
    }
    let rate = Number.parseFloat(pRate - (pRate * (SchemeRate/100)));
    let rate2 = Number.parseFloat(rate - (rate * (cd/100)));
    let rate3 = Number.parseFloat(rate2 - (rate2 * (td/100)));
    let cost = Number.parseFloat(rate3 + (rate3 * (gst/100)));
    let margin = Number.parseFloat(((MRP - cost)/MRP) * 100);
    costText.innerHTML = Number.parseFloat(cost).toFixed(6);
    marginText.innerHTML = Number.parseFloat(margin).toFixed(2) + "%";
    marginCalculation.classList.add('active');
}
marginReset.onclick = ()=>{
    marginCalculation.classList.remove('active');
}