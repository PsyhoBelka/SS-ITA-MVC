export class SeasonsModel {
    constructor() {
        this.url = 'http://ergast.com/api/f1/seasons.json?limit=100';
        this.seasons = {};
        this.domEl = document.querySelector('.seasons')
    }


    getSeasons() {
        fetch(this.url).then(data => data.json()).then(resp => this.render(resp.MRData.SeasonTable.Seasons));
    }

    render(seasonList) {
        // console.log(seasonList.length);
        seasonList.forEach(x => {
            // console.log(x);
            this.domEl.innerHTML +=`<li>`+
                `<div class="uk-card uk-card-body uk-card-default uk-margin-left uk-margin-top">` +
                `<h3 class="uk-card-title">${x.season}</h3>` +
                `</div>`+
                `</li>`
        });
    }
}

