export default class Toggle {
    public tog: boolean;
    
    constructor(v: boolean) {
        this.tog = v;
    }

    public get isToggled(): boolean {
        return this.tog;
    }
    /**
     * switchToggle, Conversely the state of Tog
     */
    public switchToggle() {
        this.tog = !this.tog;
    }

    
    public set toggle(v : string) {
        this.tog = v;
    }
}