interface CodeSampleProps {
    roomCount?: number;
    minRoomArea?: number;
    maxRoomArea?: number;
    minPathLength?: number;
    maxPathLength?: number;
    pathWidth?: number;
}

export default function Dungeonator({roomCount = 15, minRoomArea = 9, maxRoomArea = 25}: CodeSampleProps) {

    // const [generatedRooms,setGeneratedRooms]:GeneratedRoom[] = useState(undefined);
    // const rooms:GeneratedRoom[] = [new GeneratedRoom(minRoomArea, maxRoomArea)];
    const rooms:GeneratedRoom[] = [];
    const canvasWidth:number = 24;
    const canvasHeight:number = 18;
    const cells:Cell[][] = Array.from(Array(canvasHeight).keys()).map(()=>[]);

    cells.forEach((row, index) => {
        cells[index] = Array.from(Array(canvasWidth).keys()).map(()=>new Cell);
    });

    for (let index = 0; index < roomCount; index++) {
        let newRoom = new GeneratedRoom(minRoomArea,maxRoomArea);
        newRoom.blocks[0][0] = Math.floor( Math.random() * (canvasHeight - newRoom.blocks[0][2]) );
        newRoom.blocks[0][1] = Math.floor( Math.random() * (canvasWidth - newRoom.blocks[0][3]) );
        rooms.push(newRoom);
    }

    console.log(rooms);

    rooms.forEach( room => {
        room.blocks.map( (block, index) => {
            for (let x = block[0]; x < block[2]+block[0]; x++) {
                for (let y = block[1]; y < block[3]+block[1]; y++) {
                    cells[x][y].type = 'room';
                }
            }
        });
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
                                return <span className={`${cell.type || 'empty'} tile`}>{(index*canvasWidth)+i+1}</span>;
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

    minWidth:number = 3;
    minHeight:number = 3;
    minArea:number = 0;
    maxArea:number = 0;
    targetArea:number = 0;
    actualArea:number = 0;
    blocks:number[][] = [[0,0,this.minWidth, this.minHeight]];

    constructor(minArea:number, maxArea:number){
        this.minArea = minArea;
        this.maxArea = maxArea;
        let targetArea:number = minArea+Math.round(Math.random()*(maxArea - minArea));
        this.targetArea = targetArea;
        let healthyHalf:number = this.minWidth+Math.floor(Math.random()*((targetArea/2)-this.minWidth));
        let width:number = this.minWidth+Math.floor(Math.random()*(healthyHalf - this.minWidth));
        let height:number = Math.round(targetArea / width);
        this.actualArea = width * height;
        this.blocks[0] = [0,0,width,height];
    }
}

class Corridor{

}

class Cell{
    type:string = '';
}