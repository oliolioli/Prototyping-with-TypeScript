export class Room{
    id: number;
    building: number;
    capacity: number;
    isAvailable: boolean;


    constructor(id: number, building: number, capacity: number, isAvailable: boolean = true) {
        this.id = id;
        this.building = building;
        this.capacity = capacity;
        this.isAvailable = isAvailable;
    }

    book_room(){
        if (this.isAvailable){
            this.isAvailable = false;
            return true;
        }
        else{
            return false
        }
    }
        
    
}