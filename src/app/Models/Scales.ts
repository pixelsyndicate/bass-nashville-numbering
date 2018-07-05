import { Scale } from './Scale';

export class MajorScale extends Scale {

    constructor() {
        super("Major");
        this.root = [1, 2];
        
        this.blocks.push(
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: true, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }],
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: true, isRoot: false, finger: 2 }, { isScale: false, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }],
            [{ isScale: false, isRoot: false, finger: 1 }, { isScale: true, isRoot: true, finger: 2 }, { isScale: false, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }]
        );
       
        this.tagOctiveRoot();
    }
}

export class MajorPentatonicScale extends Scale {
    constructor() {
        super("Major Pentatonic");
        this.root = [1, 2];
        this.blocks = [
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: false, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }],
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: false, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }],
            [{ isScale: false, isRoot: false, finger: 1 }, { isScale: true, isRoot: true, finger: 2 }, { isScale: false, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }]
        ];
        this.tagOctiveRoot();
    }
}

export class MinorScale extends Scale {
    constructor() {
        super("Minor");
        this.root = [1, 1];
        this.blocks = [
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: true, isRoot: false, finger: 3 }, { isScale: false, isRoot: false, finger: 4 }],
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: true, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }],
            [{ isScale: true, isRoot: true, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: true, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }]
        ];
        this.tagOctiveRoot();
    }
}

export class MinorPentatonicScale extends Scale {
    constructor() {
        super("Minor Pentatonic");
        this.root = [1, 1];
        this.blocks = [
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: true, isRoot: false, finger: 3 }, { isScale: false, isRoot: false, finger: 4 }],
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: true, isRoot: false, finger: 3 }, { isScale: false, isRoot: false, finger: 4 }],
            [{ isScale: true, isRoot: true, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: false, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }]
        ];this.tagOctiveRoot();
    }
}

export class BluesScale extends Scale {
    constructor() {
        super("Blues");
        this.root = [1, 1];
        this.blocks = [
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: true, isRoot: false, finger: 3 }, { isScale: false, isRoot: false, finger: 4 }],
            [{ isScale: true, isRoot: false, finger: 1 }, { isScale: true, isRoot: false, finger: 2 }, { isScale: true, isRoot: false, finger: 3 }, { isScale: false, isRoot: false, finger: 4 }],
            [{ isScale: true, isRoot: true, finger: 1 }, { isScale: false, isRoot: false, finger: 2 }, { isScale: false, isRoot: false, finger: 3 }, { isScale: true, isRoot: false, finger: 4 }]
        ];this.tagOctiveRoot();
    }
}
