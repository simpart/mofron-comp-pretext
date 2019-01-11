/**
 * @file   mofron-comp-{@comp-name}/index.js
 * @author simpart
 */
const mf = require('mofron');
const Text = require('mofron-comp-text');

mf.comp.PreText = class extends Text {
    
    /**
     * initialize component
     * 
     * @param po paramter or option
     */
    constructor (po) {
        try {
            super();
            this.name('PreText');
            this.prmOpt(po);
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
    
    /**
     * initialize dom contents
     * 
     * @npte private method
     */
    initDomConts () {
        try {
            super.initDomConts();
            this.target().tag('pre');
        } catch (e) {
            console.error(e.stack);
            throw e;
        }
    }
}
module.exports = mf.comp.PreText;
/* end of file */
