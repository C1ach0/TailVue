export default class Toggle {
    /**
     * @public
     */
    tog;
    
    /**
     * @param {boolean} v 
     */
    constructor(v) {
        this.tog = v;
    }
    /**
     * @returns {boolean}
     */
    get isToggled() {
        return this.tog;
    }
    /**
     * switchToggle, Conversely the state of Tog
     */
    
    switchToggle() {
        this.tog = !this.tog;
    }

    
    /**
     * @param {boolean} v
     */
    set toggle(v) {
        this.tog = v;
    }
}