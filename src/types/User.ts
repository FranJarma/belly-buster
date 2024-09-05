import {RoleEnum} from "./Role";
import {UserStatusEnum} from "./Status";

export type User = {
    id: number;
    fullName: string;
    roles: RoleEnum[];
    status: UserStatusEnum;
    createdAt: Date;
    email?: string;
    phone?: string;
    updatedAt?: Date;
    userName?: string;
};

export enum ShiftEnum {
    MORNING = "Morning",
    AFTERNOON = "Afternoon",
    NIGHT = "Night",
}

export type Rider = User & {
    roles: [RoleEnum.RIDER];
    shift: ShiftEnum[];
};
