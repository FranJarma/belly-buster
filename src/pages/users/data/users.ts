import {RoleEnum} from "@types/Role";
import {UserStatusEnum} from "@types/Status";
import {Rider, ShiftEnum} from "@types/User";

export const riders: Rider[] = [
    {
        id: 1,
        fullName: "Juan Pérez",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.ACTIVE,
        createdAt: new Date("2023-01-10"),
        phone: "123-456-7890",
        shift: [ShiftEnum.MORNING, ShiftEnum.AFTERNOON],
        updatedAt: new Date("2024-09-10"),
    },
    {
        id: 2,
        fullName: "Ana García",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.INACTIVE,
        createdAt: new Date("2023-03-15"),
        phone: "321-654-9870",
        shift: [ShiftEnum.AFTERNOON],
        updatedAt: new Date("2024-08-20"),
    },
    {
        id: 3,
        fullName: "Luis Ramírez",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.ACTIVE,
        createdAt: new Date("2022-12-05"),
        phone: "456-789-0123",
        shift: [ShiftEnum.NIGHT],
        updatedAt: new Date("2024-07-30"),
    },
    {
        id: 4,
        fullName: "Carla Fernández",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.ACTIVE,
        createdAt: new Date("2023-07-01"),
        phone: "789-012-3456",
        shift: [ShiftEnum.MORNING, ShiftEnum.NIGHT],
        updatedAt: new Date("2024-09-05"),
    },
    {
        id: 5,
        fullName: "Mario López",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.ACTIVE,
        createdAt: new Date("2023-02-20"),
        phone: "987-654-3210",
        shift: [ShiftEnum.MORNING],
        updatedAt: new Date("2024-08-15"),
    },
    {
        id: 6,
        fullName: "Lucía Mendoza",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.INACTIVE,
        createdAt: new Date("2022-11-30"),
        phone: "654-321-9870",
        shift: [ShiftEnum.AFTERNOON],
        updatedAt: new Date("2024-07-20"),
    },
    {
        id: 7,
        fullName: "Miguel Torres",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.ACTIVE,
        createdAt: new Date("2023-04-18"),
        phone: "789-456-1230",
        shift: [ShiftEnum.NIGHT],
        updatedAt: new Date("2024-06-25"),
    },
    {
        id: 8,
        fullName: "Sofía Álvarez",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.ACTIVE,
        createdAt: new Date("2023-05-12"),
        phone: "123-789-4560",
        shift: [ShiftEnum.AFTERNOON, ShiftEnum.NIGHT],
        updatedAt: new Date("2024-09-01"),
    },
    {
        id: 9,
        fullName: "David Morales",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.INACTIVE,
        createdAt: new Date("2023-06-07"),
        phone: "654-789-1230",
        shift: [ShiftEnum.MORNING],
        updatedAt: new Date("2024-05-14"),
    },
    {
        id: 10,
        fullName: "María Castillo",
        roles: [RoleEnum.RIDER],
        status: UserStatusEnum.ACTIVE,
        createdAt: new Date("2022-10-25"),
        phone: "321-654-1230",
        shift: [ShiftEnum.AFTERNOON],
        updatedAt: new Date("2024-07-10"),
    },
];
