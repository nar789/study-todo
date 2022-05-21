


class Item  {
    public id : number;
    public todo : string;
    public checked : boolean; 

    constructor(id:number, todo:string, checked:boolean)  {
        this.id = id;
        this.todo = todo; 
        this.checked = checked;
    }
}

export default Item;