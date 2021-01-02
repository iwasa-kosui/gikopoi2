import { Room } from "./types";

export const rooms: { [roomId: string]: Room } = {
    bar: {
        id: "bar",
        scale: 1,
        size: { x: 9, y: 9 },
        originCoordinates: { x: 0, y: 660 },
        spawnPoint: { x: 8, y: 4, direction: "left" },
        backgroundImageUrl: "rooms/bar/background.png",
        backgroundColor: "#c0c0c0",
        objects: [
            { x: 2, y: 1, url: "table.png" },
            { x: 2, y: 2, url: "table.png" },
            { x: 6, y: 1, url: "table.png" },
            { x: 6, y: 2, url: "table.png" },
            { x: 2, y: 7, url: "counter_left.png" },
            { x: 2, y: 6, url: "counter_left.png" },
            { x: 2, y: 5, url: "counter_bottom_left.png" },
            { x: 3, y: 5, url: "counter_bottom.png" },
            { x: 4, y: 5, url: "counter_bottom.png" },
            { x: 5, y: 5, url: "counter_bottom.png" },
            { x: 6, y: 7, url: "counter_right.png" },
            { x: 6, y: 6, url: "counter_right.png" },
            { x: 6, y: 5, url: "counter_bottom_right.png" },
        ],
        sit: [
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 5, y: 1 },
            { x: 5, y: 2 },
            { x: 7, y: 1 },
            { x: 7, y: 2 },
            { x: 1, y: 5 },
            { x: 1, y: 6 },
            { x: 1, y: 7 },
            { x: 2, y: 4 },
            { x: 3, y: 4 },
            { x: 4, y: 4 },
            { x: 5, y: 4 },
            { x: 6, y: 4 },
            { x: 7, y: 5 },
            { x: 7, y: 6 },
            { x: 7, y: 7 }
        ],
        blocked: [
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 6, y: 1 },
            { x: 6, y: 2 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 5 },
            { x: 6, y: 5 },
            { x: 2, y: 6 },
            { x: 2, y: 7 },
            { x: 6, y: 6 },
            { x: 6, y: 7 },
            { x: 1, y: 8 },
            { x: 2, y: 8 },
            { x: 3, y: 8 },
            { x: 4, y: 8 },
            { x: 5, y: 8 },
            { x: 6, y: 8 },
            { x: 7, y: 8 },
        ],
        doors: [
            // [[0, 0], "bar_street", [1, 7], 1],
            // [[3, 7], "underground", [0, 2], 1],
            // [[8, 4], "bar_street", [3, 5], 1]
            { x: 8, y: 4, targetRoomId: "admin_st", targetX: 0, targetY: 2 }
        ],
        streams: [
            { isActive: false, withSound: null, withVideo: null, userId: null },
            { isActive: false, withSound: null, withVideo: null, userId: null },
        ],
    },
    admin_st: {
        id: "admin_st",
        scale: 160 / 200,
        size: { x: 10, y: 9 },
        originCoordinates: { x: 18, y: 614 },
        spawnPoint: { x: 5, y: 2, direction: "right" },
        backgroundImageUrl: "rooms/admin_st/background.png",
        backgroundColor: "#c0c0c0",
        objects: [],
        sit: [],
        blocked: [
            { x: 0, y: 5 },
            { x: 1, y: 5 },
            { x: 2, y: 5 },
            { x: 3, y: 5 },
            { x: 4, y: 5 },
            { x: 5, y: 5 },
            { x: 5, y: 4 },
            { x: 6, y: 5 },
            { x: 7, y: 5 },
            { x: 8, y: 5 },
            { x: 9, y: 5 },
            { x: 9, y: 4 },
        ],
        doors: [
            { x: 0, y: 2, targetRoomId: "bar", targetX: 8, targetY: 4 },
            { x: 2, y: 4, targetRoomId: "admin", targetX: 10, targetY: 0 },
            { x: 7, y: 4, targetRoomId: "radio_backstage", targetX: 2, targetY: 4 },
            { x: 7, y: 0, targetRoomId: "bar_st", targetX: 9, targetY: 2 },
            { x: 9, y: 2, targetRoomId: "NOT_READY_YET", targetX: 10, targetY: 0 },
        ],
        streams: [],
    },
    admin: {
        id: "admin",
        scale: 160 / 200,
        size: { x: 12, y: 6 },
        originCoordinates: { x: 90, y: 530 },
        spawnPoint: { x: 10, y: 0, direction: "up" },
        backgroundImageUrl: "rooms/admin/background.png",
        backgroundColor: "#c0c0c0",
        objects: [],
        sit: [
            { x: 10, y: 2 },
            { x: 10, y: 3 },
            { x: 7, y: 2 },
            { x: 7, y: 3 },
            { x: 9, y: 1 },
            { x: 9, y: 4 },
            { x: 8, y: 1 },
            { x: 8, y: 4 },
            { x: 4, y: 1 },
            { x: 4, y: 2 },
            { x: 4, y: 3 },
            { x: 4, y: 4 },
            { x: 1, y: 1 },
            { x: 1, y: 2 },
            { x: 1, y: 3 },
            { x: 1, y: 4 },
        ],
        blocked: [
            { x: 0, y: 5 }, // shobon
            { x: 2, y: 1 },
            { x: 2, y: 2 },
            { x: 2, y: 3 },
            { x: 2, y: 4 },
            { x: 3, y: 1 },
            { x: 3, y: 2 },
            { x: 3, y: 3 },
            { x: 3, y: 4 },
            { x: 8, y: 2 },
            { x: 8, y: 3 },
            { x: 9, y: 2 },
            { x: 9, y: 3 },
            { x: 6, y: 5 },
        ],
        doors: [
            { x: 10, y: 0, targetRoomId: "admin_st", targetX: 2, targetY: 4 }
        ],
        streams: [],
    },
    radio_backstage: {
        id: "radio_backstage",
        scale: 160 / 200,
        size: { x: 3, y: 9 },
        originCoordinates: { x: 37, y: 900 },
        spawnPoint: { x: 2, y: 4, direction: "left" },
        //spawnPoint: { x: 0, y: 0, direction: "up" },
        backgroundImageUrl: "rooms/radio_backstage/radio_backstage.png",
        backgroundColor: "#333333",
        objects: [],
        sit: [],
        blocked: [
            { x: 0, y: 0 },
            { x: 0, y: 1 },
            { x: 0, y: 7 },
            { x: 0, y: 8 },
        ],
        doors: [
            { x: 2, y: 1, targetRoomId: "bar", targetX: 8, targetY: 4 },
            { x: 2, y: 4, targetRoomId: "admin", targetX: 10, targetY: 0 },
            { x: 2, y: 7, targetRoomId: "admin_st", targetX: 2, targetY: 4 }
        ],
        streams: []
    },
    school_st: {
        id: "school_st",
        scale: 160 / 200,
        size: { x: 6, y: 8 },
        originCoordinates: { x: 52, y: 780 },
        spawnPoint: { x: 0, y: 0, direction: "left" },
        backgroundImageUrl: "rooms/school_st/school_st.png",
        backgroundColor: "#c0c0c0",
        objects: [],
        sit: [],
        blocked: [
            { x: 0, y: 3 },
            { x: 0, y: 4 },
            { x: 0, y: 4 },
            { x: 0, y: 6 },
            { x: 0, y: 7 },
        ],
        doors: [
            { x: 0, y: 2, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 },
            { x: 0, y: 5, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 }, // school entrance
            { x: 3, y: 7, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 }, // to bar street
            { x: 5, y: 2, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 }, // to kanrinin street
            { x: 4, y: 1, targetRoomId: "NOT_READY_YET", targetX: 8, targetY: 4 }, // manhole
        ],
        streams: []
    },
    bar_st: {
        id: "bar_st",
        scale: 160 / 200,
        size: { x: 10, y: 9 },
        originCoordinates: { x: 20, y: 580 },
        spawnPoint: { x: 4, y: 3, direction: "right" },
        backgroundImageUrl: "rooms/bar_st/bar_st.png",
        backgroundColor: "#c0c0c0",
        objects: [],
        sit: [
            { x: 1, y: 0 },
            { x: 2, y: 0 },
            { x: 3, y: 0 },

            { x: 1, y: 2 },
            { x: 2, y: 2 },
            { x: 3, y: 2 },

            { x: 4, y: 7 },
            { x: 4, y: 8 },
        ],
        blocked: [
            // cola vending machines:
            { x: 0, y: 1 },
            { x: 0, y: 2 },
            { x: 0, y: 3 },
            { x: 1, y: 3 },
            { x: 2, y: 3 },
            { x: 3, y: 3 },
            // building:
            { x: 3, y: 4 },
            { x: 3, y: 5 },
            { x: 3, y: 6 },
            { x: 3, y: 7 },
            { x: 3, y: 8 },
        ],
        doors: [
            { x: 4, y: 5, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 }, // to bar
            { x: 7, y: 0, targetRoomId: "school_st", targetX: 0, targetY: 2 },
            { x: 7, y: 8, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 },
            { x: 9, y: 8, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 },
            { x: 9, y: 2, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 },
            { x: 8, y: 4, targetRoomId: "NOT_READY_YET", targetX: 0, targetY: 0 }, // manhole
        ],
        streams: []
    },

}

// admin_st
export const defaultRoom = rooms.admin_st