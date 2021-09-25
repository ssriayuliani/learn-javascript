class Media {
    constructor(title, ratings) {
        this._title = title;
        this._ratings = ratings;
        this._isChekedOut = false;
    }
    get title() {
        return this._title;
    }
    get ratings() {
        return this._ratings;
    }
    getAverageRating() {
       const total = this._ratings.reduce((sum, value)=>{
           return sum + value
       }, 0)
       return total / this._ratings.length
    }
    toggleCheckOutStatus() {
        return !this._isChekedOut
    }
    addRating(){

    }
}

const mediaX = new Media('ddlc', [9, 7, 8])
console.log(mediaX.getAverageRating())
console.log(toggleCheckOutStatus)