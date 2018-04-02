class stack{

    constructor(data){
        const i = 0;
        this.dataList = new Array(i);
        this.dataList[i] = data;
    }

    set(data){
        this.data = data;
    }

    get(){
        return this.data;
    }

    push(data){
        let newDataLength1 = this.dataList.length ++;
        const newDataListPush = new Array(newDataLength1);
        for(let i = 0; i < this.dataList.length; i++){
            newDataListPush[i] = this.dataList[i];
        }
        newDataListPush[newDataLength1] = data;
        this.dataList = [];
        this.dataList = newDataListPush;
    }

    pop(){
        //console.log(this.dataList);
        try{
            let newDataLength2 = this.dataList.length - 1;
            const newDataListPop = new Array(newDataLength2);
            for(let i = 0; i < newDataListPop.length; i++){
                newDataListPop[i] = this.dataList[i];
            }
            this.dataList = [];
            this.dataList = newDataListPop;
        }catch (e){
            console.log(e);
        }

    }

    size(){

    }
}

let data = new stack({
    id: 1,
    name: 'name1'
});

data.push({
    id: 2,
    name: 'name2'
});
data.push({
    id: 3,
    name: 'name3'
});
data.push({
    id: 4,
    name: 'name4'
});


console.log(data);

data.pop();
data.pop();
data.pop();
data.pop();
data.pop();

console.log(data);