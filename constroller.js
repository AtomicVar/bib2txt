const Cite = require('citation-js');

const trans = async (ctx) => {
    ctx.response.type = 'application/json';
    let bibtex = ctx.request.body.bibtex;
    let bibData = new Cite(Cite.parse.bibtex.text(bibtex));
    ctx.response.body = {
        str: bibData.get({format: 'string', type: 'string', style: 'citation-apa'})
    };
};

module.exports = {
    trans: trans
}