interface CodeSampleProps {
    roomCount?: number;
    minRoomArea?: number;
    maxRoomArea?: number;
    minPathLength?: number;
    maxPathLength?: number;
    pathWidth?: number;
}

export default function Dungeonator({roomCount = 10, minRoomArea = 16, maxRoomArea = 36}: CodeSampleProps) {

    // const [generatedRooms,setGeneratedRooms]:GeneratedRoom[] = useState(undefined);
    // const rooms:GeneratedRoom[] = [new GeneratedRoom(minRoomArea, maxRoomArea)];
    const rooms:GeneratedRoom[] = [];
    const canvasWidth:number = 24;
    const canvasHeight:number = 18;
    const preventRoomTouching:boolean = true;
    const roomRerolls:number = 50; // The number of times a room might reroll its coords if for some reason can't be placed.
    const cells:Cell[][] = Array.from(Array(canvasHeight).keys()).map(()=>[]);

    cells.forEach((row, index) => {
        cells[index] = Array.from(Array(canvasWidth).keys()).map(()=>new Cell);
    });

    for (let index = 0; index < roomCount; index++) {
        let newRoom = new GeneratedRoom(minRoomArea,maxRoomArea, canvasHeight, canvasWidth);
        // newRoom.blocks[0][0] = Math.floor( Math.random() * (canvasHeight - newRoom.blocks[0][2]) );
        // newRoom.blocks[0][1] = Math.floor( Math.random() * (canvasWidth - newRoom.blocks[0][3]) );
        rooms.push(newRoom);
    }

    console.log(rooms);

    rooms.forEach( (room, roomIndex) => {
        let canPlace:boolean = true;
        if(preventRoomTouching){
            let attempts:number = 0;
            do{
                room.blocks.forEach( (block,index) => {
                    if(block[0] > 0){
                        for (let x = block[1]; x < block[3]+block[1]; x++) {
                            let y = block[0]-1;
                            if(cells[y][x].type == 'room'){
                                canPlace = false;
                            }
                        }
                    }
                    if(block[1] > 0){
                        for (let y = block[0]; y < block[0]+block[2]; y++) {
                            let x = block[1]-1;
                            if(cells[y][x].type == 'room'){
                                canPlace = false;
                            }
                        }
                    }
                    if(block[0]+block[2] < canvasHeight){
                        for (let x = block[1]; x < block[3]+block[1]; x++) {
                            let y = block[0]+block[2];
                            if(cells[y][x].type == 'room'){
                                canPlace = false;
                            }
                        }
                    }
                    if(block[1]+block[3] < canvasWidth){
                        for (let y = block[0]; y < block[0]+block[2]; y++) {
                            let x = block[1]+block[3];
                            if(cells[y][x].type == 'room'){
                                canPlace = false;
                            }
                        }
                    }
                    for (let x = block[0]; x < block[2]+block[0]; x++) {
                        for (let y = block[1]; y < block[3]+block[1]; y++) {
                            if(cells[x][y].type == 'room'){
                                canPlace = false;
                            }
                        }
                    }
                });
                attempts ++;
                if(attempts < roomRerolls && !canPlace){
                    rooms[roomIndex] = new GeneratedRoom(minRoomArea,maxRoomArea, canvasHeight, canvasWidth);
                    // rooms[roomIndex].blocks[0][0] = Math.floor( Math.random() * (canvasHeight - rooms[roomIndex].blocks[0][2]) );
                    // rooms[roomIndex].blocks[0][1] = Math.floor( Math.random() * (canvasWidth - rooms[roomIndex].blocks[0][3]) );
                    rooms[roomIndex].rerolls = attempts;
                    room = rooms[roomIndex];
                    canPlace = true;
                }
            } while(attempts < roomRerolls)
        }
        if(canPlace){
            room.placingSuccess = true;
        }
        // canPlace = true;
        if(canPlace){
            room.roomName = roomIndex+'';
            room.blocks.map( (block, index) => {
                for (let x = block[0]; x < block[2]+block[0]; x++) {
                    for (let y = block[1]; y < block[3]+block[1]; y++) {
                        if(room.placingSuccess){
                            cells[x][y].type = 'room';
                        } else {
                            cells[x][y].type = 'failed-room';
                        }
                        cells[x][y].room = room;
                    }
                }
            });
        }
    })

    // firstRoom.blocks.map((block, index)=>{
    //     for (let x = block[0]; x < block[2]; x++) {
    //         for (let y = block[1]; y < block[3]; y++) {
    //             cells[x][y].type = 'room';
    //         }
    //     }
    // })

    // console.log(firstRoom);

    return (
        <div className="dungeonator">
            {
                cells.map( (row, index) => {
                    return <div className="dungeon-row">
                        {
                            row.map((cell, i)=>{
                                return <span className={`${cell.type || 'empty'} ${cell.room?.placingSuccess ? '' : 'failed-placing'} tile`}>{cell.room? <>{cell.room.roomName}<br/></> : ''}{(index)+' · '+(i)}</span>;
                            })
                        }
                    </div>
                })
            }
            {/* {
                Array.from(Array(canvasHeight).keys()).map( (col, index) => {
                    return <div className="dungeon-row">
                        {
                            Array.from(Array(canvasWidth).keys()).map((cell, i)=>{
                                return <span className="empty tile">{(index*canvasWidth)+i+1}</span>;
                            })
                        }
                    </div>
                })
            } */}
            {/* {
                Array.from(Array(firstRoom.blocks[0][3]).keys()).map( (col, index) => {
                    return <div className="dungeon-row">
                        {
                            Array.from(Array(firstRoom.blocks[0][2]).keys()).map((cell, i)=>{
                                return <span className="room tile"></span>;
                            })
                        }
                    </div>
                })
            } */}
        </div>
    );
}

class GeneratedRoom{

    minWidth:number = 4;
    minHeight:number = 4;
    minArea:number = 0;
    maxArea:number = 0;
    targetArea:number = 0;
    actualArea:number = 0;
    blocks:number[][] = [[0,0,this.minHeight, this.minWidth]]; // Each block uses this format -> y origin, x origin, y size, x size
    width:number = 0;
    height: number = 0;
    roomName:string = '?';
    corridors:Corridor[] = [];
    rerolls:number = 0;
    canvasHeight:number = 0;
    canvasWidth:number = 0;
    placingSuccess:boolean = false;

    constructor(minArea:number, maxArea:number, canvasHeight:number, canvasWidth:number){
        this.minArea = minArea;
        this.maxArea = maxArea;
        let targetArea:number = minArea+Math.round(Math.random()*(maxArea - minArea));
        this.targetArea = targetArea;
        let healthyHalf:number = this.minHeight+Math.floor(Math.random()*((targetArea/3.236)-this.minHeight)); // We use the gold number here!
        let height:number = this.minHeight+Math.floor(Math.random()*(healthyHalf - this.minHeight));
        let width:number = Math.round(targetArea / height);
        this.actualArea = width * height;
        let yOrigin = Math.floor( Math.random() * (canvasHeight+1 - height) );
        let xOrigin = Math.floor( Math.random() * (canvasWidth+1 - width) );
        this.blocks[0] = [yOrigin,xOrigin,height,width];
        this.width = width;
        this.height = height;
    }

    reroll():void{

    }

    generateCorridors():void{
        let borders:number[][] = [];
        this.blocks.forEach(block => {
            borders.push([block[0],block[1],block[2],block[2]]);
            borders.push([block[0],block[1],block[3],block[3]]);
            borders.push([block[2],block[1],block[2],block[3]]);
            borders.push([block[0],block[3],block[2],block[3]]);
        });
    }
}

class Corridor{
    points:number[][] = [];
}

class OtherRoomLocation{
    room:GeneratedRoom;
    xToClosestPoint:number = 0;
    yToClosestPoint:number = 0;

    constructor(room:GeneratedRoom){
        this.room = room;
    }
}

class Cell{
    type:string = '';
    room?:GeneratedRoom;
}