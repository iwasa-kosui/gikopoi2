const JanusClient = require('janus-videoroom-client').Janus;

export type Direction = 'up' | 'down' | 'left' | 'right'
export type Area = 'for' | 'gen'

export interface Coordinates
{
    x: number;
    y: number;
}

export interface StreamSlot
{
    isActive: boolean,
    isReady: boolean,
    withSound: boolean | null,
    withVideo: boolean | null,
    userId: string | null,
    publisherId: number | null,
}

export interface Door
{
    x: number;
    y: number;
    direction: Direction | null;
    target: {
        roomId: string
        doorId: string
    } | string | null;
}

export interface Room
{
    id: string;
    scale: number;
    size: Coordinates;
    originCoordinates: Coordinates;
    backgroundImageUrl: string;
    backgroundColor?: string;
    backgroundOffset?: Coordinates;
    spawnPoint: string;
    needsFixedCamera?: boolean;
    isBackgroundImageOffsetEdge?: boolean;
    objects: {
        x: number;
        y: number;
        url: string;
        scale?: number;
        offset?: {
            x: number;
            y: number;
        }
        xOffset?: number;
        yOffset?: number;
    }[];
    sit: Coordinates[];
    blocked: Coordinates[];
    forbiddenMovements: { xFrom: number, yFrom: number, xTo: number, yTo: number }[],
    doors: { [doorId: string]: Door };
    streamSlotCount: number;
    secret: boolean;
    forcedAnonymous?: boolean;
    blockWidth?: number;
    blockHeight?: number;
}

export interface JanusServer {
    id: string;
    client: typeof JanusClient;
}

export interface RoomState {
    streams: StreamSlot[],
    janusRoomServer: JanusServer | null,
    janusRoomIntName: number | null,
    janusRoomName: string | null,
}

export interface RoomStateDto
{
    currentRoom: Room,
    connectedUsers: PlayerDto[],
    streams: StreamSlotDto[],
}

export interface LoginResponseDto
{
    appVersion: number,
    isLoginSuccessful: boolean,
    error?: "invalid_username" | "ip_restricted",
    userId?: string,
    privateUserId?: string,
}

export interface PlayerDto
{
    id: string,
    name: string,
    position: { x: number, y: number },
    direction: Direction,
    lastDirection: Direction | null,
    directionChangedAt: number | null,
    isGhost: boolean,
    roomId: string,
    lastAction: number,
    connectionTime: number,
    disconnectionTime: number | null,
    characterId: string,
    areaId: Area,
    isInactive: boolean,
    isStreaming: boolean,
    bubblePosition: Direction,
    voicePitch: number,
}

export interface StreamSlotDto
{
    isActive: boolean,
    isReady: boolean,
    withSound: boolean | null,
    withVideo: boolean | null,
    userId: string | null,
}