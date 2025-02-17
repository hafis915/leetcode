class BrowserHistory {
    backHistory : string[];
    frontHistory: string[]
    constructor(homepage: string) {
        this.backHistory = [homepage]
        this.frontHistory = []
    }

    visit(url: string): void {
        this.backHistory.push(url)
        this.frontHistory = []
    }

    back(steps: number): string {
    const currentBackHistoryLength = this.backHistory.length;
    let i = steps;
    let j = currentBackHistoryLength -1
    while (i > 0) {
      if (j >= 1) {
        const itemToPop = this.backHistory[j]
        this.frontHistory.push(itemToPop)
        this.backHistory.pop()
      }
      j--
      i--
    }

    const finalItem = this.backHistory[this.backHistory.length -1 ]
    console.log("final item on back:", finalItem)
    return finalItem
    }

    forward(steps: number): string {
            const currentFrontHistoryLength = this.frontHistory.length;
    let i = steps;
    let j = currentFrontHistoryLength -1; 
    while (i > 0 && j >= 0) {
      const itemToPop = this.frontHistory[j]
      this.backHistory.push(itemToPop);
      this.frontHistory.pop()
      i--
      j--
    }
    const finalItem = this.backHistory[this.backHistory.length -1 ]
    console.log("final item on front:", finalItem)
    return finalItem
    }
}

/**
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */