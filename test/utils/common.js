class Common {
    getUsername() {
        this.id = '_' + Math.random().toString(36).substr(2, 9);
        return this.id;
    }
}
export default new Common();