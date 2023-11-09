class AppState {
    setUserId(userId) {
        this.userId = userId;
    }
    setAllExp(allExp) {
        this.allExp = allExp;
    }
    setAllInc(allInc) {
        this.allInc = allInc;
    }
    setTotal(total) {
        this.total = total;
    }
}
export const appState = new AppState();
